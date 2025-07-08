"use client";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with relationship management.',
    features: [
      'Up to 50 contacts',
      'Basic goal tracking',
      'Network visualization',
      'Email support'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For professionals serious about building meaningful relationships.',
    features: [
      'Unlimited contacts',
      'Advanced goal tracking',
      'AI-powered insights',
      'Priority support',
      'Export data',
      'Custom tags'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per month',
    description: 'For teams and organizations with advanced needs.',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Advanced analytics',
      'API access',
      'Dedicated support',
      'Custom integrations'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-white" aria-label="Pricing">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-rhiz-dark">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-rhiz-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your relationship-building goals. Start free, upgrade when you&apos;re ready.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border-2 transition-all ${
                plan.popular 
                  ? 'border-rhiz-teal bg-gradient-to-br from-rhiz-teal/5 to-rhiz-purple/5 shadow-xl scale-105' 
                  : 'border-rhiz-gray-200 hover:border-rhiz-teal/50 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-rhiz-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-rhiz-dark mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-semibold text-rhiz-teal">{plan.price}</span>
                  {plan.period !== 'forever' && (
                    <span className="text-rhiz-gray-500 ml-1">/{plan.period}</span>
                  )}
                </div>
                <p className="text-rhiz-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-rhiz-teal mr-3 flex-shrink-0" />
                    <span className="text-rhiz-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-rhiz-teal text-white hover:bg-rhiz-gold hover:text-rhiz-dark'
                    : 'bg-rhiz-gray-100 text-rhiz-dark hover:bg-rhiz-teal hover:text-white'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 