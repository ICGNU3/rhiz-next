"use client";
import { useState } from 'react';
import { Contact } from '../../../lib/types';

export default function ContactsPage() {
  const [contacts] = useState<Contact[]>([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-12 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
        <h1 className="text-2xl font-semibold">Contacts</h1>
        <button
          className="px-4 py-2 rounded-lg bg-rhiz-teal text-white font-semibold hover:bg-rhiz-gold hover:text-rhiz-dark transition"
          onClick={() => setShowForm((v) => !v)}
          aria-label="Add contact"
        >
          {showForm ? 'Cancel' : 'Add Contact'}
        </button>
      </div>
      
      {showForm && (
        <div className="mb-6 p-6 bg-white rounded-lg border border-rhiz-gray-200">
          <h2 className="text-lg font-semibold mb-4">Add New Contact</h2>
          <p className="text-rhiz-gray-600">Contact form coming soon...</p>
        </div>
      )}
      
      <div className="bg-white rounded-lg border border-rhiz-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Your Contacts</h2>
        {contacts.length === 0 ? (
          <p className="text-rhiz-gray-600">No contacts yet. Add your first contact to get started!</p>
        ) : (
          <p className="text-rhiz-gray-600">Contact list coming soon...</p>
        )}
      </div>
    </div>
  );
} 