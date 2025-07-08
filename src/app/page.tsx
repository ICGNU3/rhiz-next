import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Rhiz – Relationship Intelligence Platform',
  description: 'Transform scattered contacts into a living graph of purpose and trust. Goal-driven relationship management for modern networks.',
  openGraph: {
    title: 'Rhiz – Relationship Intelligence Platform',
    description: 'Transform scattered contacts into a living graph of purpose and trust. Goal-driven relationship management for modern networks.',
    url: 'https://rhiz.app',
    siteName: 'Rhiz',
    images: [
      {
        url: '/public/globe.svg',
        width: 1200,
        height: 630,
        alt: 'Rhiz Network Graph',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureGrid />
      <Footer />
    </main>
  );
} 