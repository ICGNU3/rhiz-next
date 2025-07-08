import React, { Suspense } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rhiz-teal via-rhiz-purple to-rhiz-gold">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <div className="mb-6 text-center">
          <span className="font-semibold text-2xl text-rhiz-teal">Rhiz</span>
        </div>
        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          {children}
        </Suspense>
      </div>
    </div>
  );
} 