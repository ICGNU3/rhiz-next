"use client";
import { motion } from 'framer-motion';

export default function ProductDemo() {
  return (
    <section className="py-20 bg-rhiz-gray-50 flex flex-col items-center" aria-label="Product demo">
      <h2 className="text-3xl md:text-4xl font-mont-semibold text-center mb-6 text-rhiz-dark">See Your Network as a Living Graph</h2>
      <p className="text-lg text-rhiz-gray-600 text-center mb-10 max-w-2xl">Visualize your relationships, discover hidden connections, and unlock new opportunities with Rhiz’s interactive network graph.</p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center"
      >
        {/* Placeholder for interactive graph */}
        <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-rhiz-teal/10 to-rhiz-purple/10 rounded-xl mb-6">
          <span className="text-rhiz-teal font-mont-semibold text-xl">[Graph Preview Coming Soon]</span>
        </div>
        <a href="/dashboard/network" className="px-8 py-3 rounded-lg bg-rhiz-teal text-white font-mont-semibold shadow-lg hover:bg-rhiz-gold hover:text-rhiz-dark transition">Try the Network Graph</a>
      </motion.div>
    </section>
  );
} 