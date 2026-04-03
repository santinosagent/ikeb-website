import Hero from '@/components/sections/Hero';
import ChiSiamoPreview from '@/components/sections/ChiSiamoPreview';
import MenuHighlight from '@/components/sections/MenuHighlight';
import CTACollaboratori from '@/components/sections/CTACollaboratori';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChiSiamoPreview />
      <MenuHighlight />
      <CTACollaboratori />
    </>
  );
}