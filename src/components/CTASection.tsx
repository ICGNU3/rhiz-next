"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rhiz-teal to-rhiz-purple text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-rhiz-gold" />
            <span className="text-rhiz-gold font-semibold">Ready to transform your network?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Building Meaningful Relationships Today
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using Rhiz to build stronger, 
            more purposeful connections. Your network is your net worth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rhiz-gold text-rhiz-dark px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-white transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
          
          <p className="text-sm text-white/70 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
} 