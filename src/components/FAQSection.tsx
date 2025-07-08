"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What makes Rhiz different from other contact managers?",
    answer: "Rhiz goes beyond simple contact storage. We focus on goal-driven relationship management, helping you build meaningful connections that align with your personal and professional objectives. Our AI-powered insights help you understand your network's potential and take actionable steps to strengthen relationships."
  },
  {
    question: "How does the AI relationship intelligence work?",
    answer: "Our AI analyzes your contact interactions, goals, and network patterns to provide personalized insights. It suggests optimal times to reach out, identifies relationship gaps, and recommends actions to strengthen your most important connections based on your specific goals."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We use enterprise-grade encryption and follow strict privacy standards. Your contact data is never sold or shared with third parties. You have full control over your data and can export or delete it at any time."
  },
  {
    question: "Can I import my existing contacts?",
    answer: "Yes! Rhiz supports importing contacts from CSV files, Google Contacts, and other popular platforms. Our import process is designed to preserve your existing contact information while organizing it according to your relationship goals."
  },
  {
    question: "What if I want to cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. When you cancel, you'll continue to have access to your data until the end of your billing period. We'll help you export your data if needed."
  },
  {
    question: "Do you offer team or enterprise features?",
    answer: "Yes! Our Enterprise plan includes team collaboration features, advanced analytics, API access, and dedicated support. Contact our sales team to discuss your organization's specific needs and get a custom quote."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-rhiz-gray-50" aria-label="FAQ">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont-semibold mb-4 text-rhiz-dark">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-rhiz-gray-600">
            Everything you need to know about Rhiz and relationship intelligence.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-rhiz-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-rhiz-gray-50 transition-colors"
              >
                <h3 className="text-lg font-mont-semibold text-rhiz-dark pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-rhiz-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-rhiz-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-rhiz-gray-600 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <button className="bg-rhiz-teal text-white px-8 py-3 rounded-lg font-mont-semibold hover:bg-rhiz-gold hover:text-rhiz-dark transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
} 