import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Benefits } from '@/components/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { CTABanner } from '@/components/CTABanner';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
