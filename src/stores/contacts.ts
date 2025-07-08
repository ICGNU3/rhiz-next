import { create } from 'zustand';
import { Contact } from '../lib/types';

interface ContactFilters {
  search: string;
}

interface ContactsState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
  filters: ContactFilters;
  setContacts: (contacts: Contact[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSearch: (search: string) => void;
}

export const useContactsStore = create<ContactsState>((set) => ({
  contacts: [],
  loading: false,
  error: null,
  filters: { search: '' },
  setContacts: (contacts) => set({ contacts }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSearch: (search) => set((state) => ({ filters: { ...state.filters, search } })),
})); 