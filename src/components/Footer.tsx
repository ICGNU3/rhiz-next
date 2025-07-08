import React from 'react';
import { Mail, Twitter, Linkedin, Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rhiz-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-rhiz-teal" />
              <span className="font-mont-semibold text-2xl">Rhiz</span>
            </div>
            <p className="text-rhiz-gray-300 mb-4 max-w-md">
              Transform scattered contacts into a living graph of purpose and trust. 
              Goal-driven relationship management for modern networks.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/rhizapp" aria-label="Twitter" className="hover:text-rhiz-gold transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/rhizapp" aria-label="LinkedIn" className="hover:text-rhiz-gold transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/rhizapp" aria-label="GitHub" className="hover:text-rhiz-gold transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-mont-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-rhiz-gray-300">
              <li><a href="#features" className="hover:text-rhiz-gold transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-rhiz-gold transition">Pricing</a></li>
              <li><a href="#demo" className="hover:text-rhiz-gold transition">Demo</a></li>
              <li><a href="/auth" className="hover:text-rhiz-gold transition">Sign In</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mont-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-rhiz-gray-300">
              <li><a href="/about" className="hover:text-rhiz-gold transition">About</a></li>
              <li><a href="/blog" className="hover:text-rhiz-gold transition">Blog</a></li>
              <li><a href="/careers" className="hover:text-rhiz-gold transition">Careers</a></li>
              <li><a href="mailto:hello@rhiz.app" className="hover:text-rhiz-gold transition flex items-center gap-1">
                <Mail className="w-4 h-4" />Contact
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rhiz-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-rhiz-gray-400">
            &copy; {new Date().getFullYear()} Rhiz. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-rhiz-gray-400">
            <a href="/privacy" className="hover:text-rhiz-gold transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-rhiz-gold transition">Terms of Service</a>
            <a href="/cookies" className="hover:text-rhiz-gold transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 