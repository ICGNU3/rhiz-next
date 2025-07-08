import React from 'react';
import { Contact } from '../../lib/types';
import { ContactCard } from './ContactCard';

interface ContactListProps {
  contacts: Contact[];
  loading?: boolean;
  onSelect?: (contact: Contact) => void;
}

export function ContactList({ contacts, loading, onSelect }: ContactListProps) {
  if (loading) return <div className="text-center py-8">Loading contacts...</div>;
  if (!contacts.length) return <div className="text-center py-8 text-rhiz-gray-500">No contacts found.</div>;
  return (
    <div className="grid gap-4">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onClick={() => onSelect?.(contact)} />
      ))}
    </div>
  );
} 