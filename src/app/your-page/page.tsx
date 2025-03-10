import type { Metadata } from 'next';
import Page from '@/components/Layout/Page';
import Header from '@/components/Sections/Header';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';

export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
};

export default function YourPage() {
  return (
    <Page>
      <Header />
      <Hero />
      <About />
    </Page>
  );
}
