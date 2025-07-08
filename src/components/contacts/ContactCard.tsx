import React from 'react';
import { Card } from '../ui/Card';
import { Contact } from '../../lib/types';

interface ContactCardProps {
  contact: Contact;
  onClick?: () => void;
}

export function ContactCard({ contact, onClick }: ContactCardProps) {
  return (
    <Card className="flex items-center gap-4 cursor-pointer hover:shadow-lg transition" onClick={onClick}>
      <div className="flex-1">
        <div className="font-mont-semibold text-lg text-rhiz-teal">{contact.name}</div>
        <div className="text-sm text-rhiz-gray-600">{contact.email}</div>
        <div className="text-sm text-rhiz-gray-500">{contact.company}</div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-xs text-rhiz-gray-400">Trust</span>
        <span className="font-mont-semibold text-rhiz-gold text-lg">{contact.trust_score}</span>
      </div>
    </Card>
  );
} 