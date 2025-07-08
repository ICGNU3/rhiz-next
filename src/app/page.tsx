import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import Footer from '../components/Footer';
import Head from 'next/head';
import ProductDemo from '../components/ProductDemo';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';

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
    <>
      <Head>
        <title>Rhiz – Relationship Intelligence Platform</title>
        <meta name="description" content="Transform scattered contacts into a living graph of purpose and trust. Goal-driven relationship management for modern networks." />
        <link rel="canonical" href="https://rhiz.app" />
        <meta property="og:title" content="Rhiz – Relationship Intelligence Platform" />
        <meta property="og:description" content="Transform scattered contacts into a living graph of purpose and trust. Goal-driven relationship management for modern networks." />
        <meta property="og:url" content="https://rhiz.app" />
        <meta property="og:site_name" content="Rhiz" />
        <meta property="og:image" content="/public/globe.svg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rhiz – Relationship Intelligence Platform" />
        <meta name="twitter:description" content="Transform scattered contacts into a living graph of purpose and trust. Goal-driven relationship management for modern networks." />
        <meta name="twitter:image" content="/public/globe.svg" />
      </Head>
      <main>
        <HeroSection />
        <FeatureGrid />
        <ProductDemo />
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
} 