import type { Attributes } from '@flags-sdk/growthbook';
import type { Identify } from 'flags';
import { dedupe } from 'flags/next';
import { headers, cookies } from 'next/headers';

// Função para gerar um ID único do visitante para tracking de A/B test
function generateVisitorId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Função para obter informações do visitante da landing page
async function getVisitorInfo(
  headersInstance: Awaited<ReturnType<typeof headers>>,
  cookiesInstance: Awaited<ReturnType<typeof cookies>>
) {
  // Obter ou criar ID único do visitante para A/B testing
  let visitorId = cookiesInstance.get('visitor_id')?.value;
  if (!visitorId) {
    visitorId = generateVisitorId();
    // Note: Em uma implementação real, você salvaria este cookie via Set-Cookie header
  }

  // Obter informações do cabeçalho para segmentação
  const userAgent = headersInstance.get('user-agent') || '';
  const host = headersInstance.get('host') || '';
  const referer = headersInstance.get('referer') || '';
  const acceptLanguage = headersInstance.get('accept-language') || '';

  // Detectar tipo de dispositivo para segmentação do A/B test
  const deviceType = /mobile|android|iphone|ipad|tablet/i.test(userAgent)
    ? 'mobile'
    : 'desktop';

  // Detectar navegador para análise de compatibilidade
  let browser = 'unknown';
  if (userAgent.includes('Chrome')) browser = 'chrome';
  else if (userAgent.includes('Firefox')) browser = 'firefox';
  else if (userAgent.includes('Safari') && !userAgent.includes('Chrome'))
    browser = 'safari';
  else if (userAgent.includes('Edge')) browser = 'edge';

  // Detectar idioma preferido do usuário
  const primaryLanguage = acceptLanguage.split(',')[0]?.split('-')[0] || 'en';

  // Detectar se é primeira visita (useful para A/B testing)
  const isReturningVisitor = !!cookiesInstance.get('returning_visitor')?.value;

  return {
    visitorId,
    userAgent,
    host,
    referer,
    deviceType,
    browser,
    primaryLanguage,
    isReturningVisitor,
    timestamp: Date.now(),
  };
}

export const identify = dedupe(async () => {
  // Obter instâncias do headers e cookies
  const headersInstance = await headers();
  const cookiesInstance = await cookies();

  // Obter informações do visitante da landing page
  const visitor = await getVisitorInfo(headersInstance, cookiesInstance);

  // Construir URL atual para extrair parâmetros
  const currentUrl = visitor.referer || `https://${visitor.host}`;
  let url: URL;

  try {
    url = new URL(currentUrl);
  } catch {
    // Fallback se a URL for inválida
    url = new URL(`https://${visitor.host}`);
  }

  // Extrair parâmetros UTM cruciais para análise de campanhas de A/B test
  const utmSource = url.searchParams.get('utm_source') || 'direct';
  const utmMedium = url.searchParams.get('utm_medium') || 'organic';
  const utmCampaign = url.searchParams.get('utm_campaign') || 'none';
  const utmTerm = url.searchParams.get('utm_term') || '';
  const utmContent = url.searchParams.get('utm_content') || '';

  // Determinar segmento do usuário para A/B testing
  const userSegment = visitor.isReturningVisitor ? 'returning' : 'new';

  // Dados essenciais para Growthbook A/B testing de landing page
  return {
    id: visitor.visitorId,
    url: currentUrl,
    path: url.pathname || '/',
    host: visitor.host,
    query: url.search || '',
    deviceType: visitor.deviceType,
    browser: visitor.browser,
    language: visitor.primaryLanguage,
    userSegment: userSegment,
    isReturningVisitor: visitor.isReturningVisitor,
    utmSource: utmSource,
    utmMedium: utmMedium,
    utmCampaign: utmCampaign,
    utmTerm: utmTerm,
    utmContent: utmContent,
    timestamp: visitor.timestamp,
  };
}) satisfies Identify<Attributes>;
