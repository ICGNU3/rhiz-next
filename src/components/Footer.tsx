import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rhiz-dark text-white py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mont-semibold text-lg">Rhiz</span>
        </div>
        <nav className="flex gap-6 text-rhiz-gray-300">
          <a href="#features" className="hover:text-rhiz-gold transition">Features</a>
          <a href="/auth" className="hover:text-rhiz-gold transition">Sign In</a>
          <a href="mailto:hello@rhiz.app" className="hover:text-rhiz-gold transition flex items-center gap-1"><Mail className="w-4 h-4" />Contact</a>
        </nav>
        <div className="flex gap-4">
          <a href="https://twitter.com/" aria-label="Twitter" className="hover:text-rhiz-gold transition"><Twitter className="w-5 h-5" /></a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="hover:text-rhiz-gold transition"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
      <div className="text-center text-xs text-rhiz-gray-400 mt-4">&copy; {new Date().getFullYear()} Rhiz. All rights reserved.</div>
    </footer>
  );
} 