"use client";
import React, { useState } from 'react';
import { Users, Target, Share2, BarChart2, Settings, Home } from 'lucide-react';
import Link from 'next/link';

const nav = [
  { href: '/dashboard', label: 'Overview', icon: <Home className="w-5 h-5" /> },
  { href: '/dashboard/contacts', label: 'Contacts', icon: <Users className="w-5 h-5" /> },
  { href: '/dashboard/goals', label: 'Goals', icon: <Target className="w-5 h-5" /> },
  { href: '/dashboard/network', label: 'Network', icon: <Share2 className="w-5 h-5" /> },
  { href: '/dashboard/insights', label: 'Insights', icon: <BarChart2 className="w-5 h-5" /> },
  { href: '/dashboard/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`h-screen bg-rhiz-dark text-white flex flex-col transition-all duration-200 ${collapsed ? 'w-16' : 'w-56'}`}>
      <div className="flex items-center justify-between px-4 py-6">
        <span className="font-semibold text-lg">{!collapsed && 'Rhiz'}</span>
        <button onClick={() => setCollapsed(!collapsed)} className="text-rhiz-gold focus:outline-none">
          {collapsed ? '→' : '←'}
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-2 px-2">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-rhiz-teal/80 transition">
            <span>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 