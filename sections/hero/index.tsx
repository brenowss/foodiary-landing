import { heroSectionFlag } from '@/lib/flags';
import HeroSectionControl from "./control";
import HeroSectionVariation from "./variation";

export default async function HeroSection() {
  const enabled = await heroSectionFlag();

  if (enabled) {
    return (
      <HeroSectionVariation />
    )
  } else {
    return (
      <HeroSectionControl />
    )
  }
}