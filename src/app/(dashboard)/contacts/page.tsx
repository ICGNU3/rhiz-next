import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useContactsStore } from '../../../stores/contacts';
import { ContactList } from '../../../components/contacts/ContactList';
import { ContactForm } from '../../../components/contacts/ContactForm';
import { Contact, CreateContactData } from '../../../lib/types';
import { supabase } from '../../../lib/supabase/client';

async function fetchContacts() {
  const res = await fetch('/api/contacts');
  if (!res.ok) throw new Error('Failed to fetch contacts');
  return res.json();
}

async function addContact(data: CreateContactData) {
  const res = await fetch('/api/contacts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to add contact');
  return res.json();
}

async function deleteContact(id: string) {
  const res = await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete contact');
  return res.json();
}

export default function ContactsPage() {
  const { contacts, setContacts, loading, setLoading, error, setError, filters, setSearch } = useContactsStore();
  const [showForm, setShowForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(['contacts'], fetchContacts, {
    onSuccess: setContacts,
    onError: (err: any) => setError(err.message),
  });

  const addMutation = useMutation(addContact, {
    onMutate: async (newContact) => {
      setContacts([newContact as Contact, ...contacts]);
      setShowForm(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts']);
    },
    onError: (err: any) => setError(err.message),
  });

  const deleteMutation = useMutation(deleteContact, {
    onMutate: async (id: string) => {
      setContacts(contacts.filter((c) => c.id !== id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts']);
    },
    onError: (err: any) => setError(err.message),
  });

  // Real-time updates
  useEffect(() => {
    const channel = supabase
      .channel('contacts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, (payload) => {
        queryClient.invalidateQueries(['contacts']);
      })
      .subscribe();
    return () => { channel.unsubscribe(); };
  }, [queryClient]);

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filters.search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto mt-12 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
        <h1 className="text-2xl font-mont-semibold">Contacts</h1>
        <button
          className="px-4 py-2 rounded-lg bg-rhiz-teal text-white font-mont-semibold hover:bg-rhiz-gold hover:text-rhiz-dark transition"
          onClick={() => setShowForm((v) => !v)}
          aria-label="Add contact"
        >
          {showForm ? 'Cancel' : 'Add Contact'}
        </button>
      </div>
      <input
        type="text"
        placeholder="Search contacts..."
        value={filters.search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-lg border border-rhiz-gray-300 focus:outline-none focus:ring-2 focus:ring-rhiz-teal"
        aria-label="Search contacts"
      />
      {showForm && (
        <div className="mb-6">
          <ContactForm
            onSubmit={(data) => addMutation.mutate(data)}
            loading={addMutation.isLoading}
          />
        </div>
      )}
      <ContactList
        contacts={filteredContacts}
        loading={isLoading}
        onSelect={(contact) => setSelectedContact(contact)}
      />
      {isError && <div className="text-red-500 mt-4">{error}</div>}
      {/* Contact Detail/Edit Modal (scaffold) */}
      {selectedContact && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-mont-semibold mb-2">Contact Details</h2>
            <div className="mb-4">
              <div className="font-mont-medium text-rhiz-teal">{selectedContact.name}</div>
              <div className="text-sm text-rhiz-gray-600">{selectedContact.email}</div>
              <div className="text-sm text-rhiz-gray-500">{selectedContact.company}</div>
              <div className="text-sm text-rhiz-gold">Trust: {selectedContact.trust_score}</div>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-mont-semibold hover:bg-red-600 transition"
                onClick={() => {
                  deleteMutation.mutate(selectedContact.id);
                  setSelectedContact(null);
                }}
                aria-label="Delete contact"
              >
                Delete
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-rhiz-gray-300 text-rhiz-dark font-mont-semibold hover:bg-rhiz-gray-400 transition"
                onClick={() => setSelectedContact(null)}
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 