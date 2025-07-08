import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 bg-gradient-to-br from-rhiz-teal via-rhiz-purple to-rhiz-gold text-white text-center">
      <h1 className="text-4xl md:text-6xl font-mont-semibold mb-4 drop-shadow-lg">Transform Your Network Into a Living Graph</h1>
      <p className="text-lg md:text-2xl font-mont-regular mb-8 max-w-2xl mx-auto">Rhiz helps you turn scattered contacts into a purpose-driven relationship graph—unlocking trust, opportunity, and growth.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/auth" className="px-8 py-3 rounded-lg bg-white text-rhiz-teal font-mont-semibold shadow-lg hover:bg-rhiz-gold hover:text-rhiz-dark transition">Get Started Free</a>
        <a href="#features" className="px-8 py-3 rounded-lg bg-rhiz-dark text-white font-mont-semibold shadow-lg hover:bg-rhiz-purple transition">See Features</a>
      </div>
    </section>
  );
} 