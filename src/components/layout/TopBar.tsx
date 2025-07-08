import React from 'react';
import { Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-xs px-4 py-2 rounded-lg border border-rhiz-gray-300 focus:outline-none focus:ring-2 focus:ring-rhiz-teal"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-rhiz-gray-500 hover:text-rhiz-teal">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-rhiz-gold rounded-full"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-rhiz-gray-200 flex items-center justify-center font-semibold text-rhiz-teal">U</div>
      </div>
    </header>
  );
} 