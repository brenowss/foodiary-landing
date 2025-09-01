import { growthbookAdapter } from '@flags-sdk/growthbook';
import { flag } from 'flags/next';
import { after } from 'next/server';
import { identify } from '@/lib/identify';

growthbookAdapter.setTrackingCallback((experiment, result) => {
  // Safely fire and forget async calls (Next.js)
  after(async () => {
    console.log('Viewed Experiment', {
      experimentId: experiment.key,
      variationId: result.key,
    });
  });
});

export const heroSectionFlag = flag<boolean>({
  key: 'hero-section',
  adapter: growthbookAdapter.feature<boolean>(),
  defaultValue: false,
  identify,
});
