"use client";
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 bg-gradient-to-br from-rhiz-teal via-rhiz-purple to-rhiz-gold text-white text-center" aria-label="Hero section">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl md:text-6xl font-mont-semibold mb-4 drop-shadow-lg"
      >
        Transform Your Network Into a Living Graph
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="text-lg md:text-2xl font-mont-regular mb-8 max-w-2xl mx-auto"
      >
        Rhiz helps you turn scattered contacts into a purpose-driven relationship graph—unlocking trust, opportunity, and growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="/auth" aria-label="Get Started Free" className="px-8 py-3 rounded-lg bg-white text-rhiz-teal font-mont-semibold shadow-lg hover:bg-rhiz-gold hover:text-rhiz-dark transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rhiz-teal">
          Get Started Free
        </a>
        <a href="#features" aria-label="See Features" className="px-8 py-3 rounded-lg bg-rhiz-dark text-white font-mont-semibold shadow-lg hover:bg-rhiz-purple transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rhiz-dark">
          See Features
        </a>
      </motion.div>
    </section>
  );
} 