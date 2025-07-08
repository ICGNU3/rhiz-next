"use client";
import React from 'react';
import { Users, Target, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users className="w-8 h-8 text-rhiz-teal" aria-hidden="true" />, 
    title: 'Contact Management',
    desc: 'Organize, enrich, and search your relationships in real time.'
  },
  {
    icon: <Target className="w-8 h-8 text-rhiz-gold" aria-hidden="true" />,
    title: 'Goal Tracking',
    desc: 'Set, track, and achieve goals with AI-powered contact matching.'
  },
  {
    icon: <Share2 className="w-8 h-8 text-rhiz-purple" aria-hidden="true" />,
    title: 'Network Visualization',
    desc: 'See your network as a living graph and discover new opportunities.'
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 bg-white" aria-label="Feature grid">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              tabIndex={0}
              aria-label={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
              className="flex flex-col items-center p-8 rounded-xl shadow-md bg-rhiz-gray-50 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-rhiz-teal"
            >
              {f.icon}
              <h3 className="mt-4 text-xl font-semibold text-rhiz-dark">{f.title}</h3>
              <p className="mt-2 text-rhiz-gray-600 text-center">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 