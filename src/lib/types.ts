export interface Contact {
  id: string;
  user_id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  title?: string;
  tags?: string[];
  trust_score: number;
  last_contacted?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export type CreateContactData = Omit<Contact, 'id' | 'created_at' | 'updated_at'>;

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  category: string;
  target_date?: string;
  status: string;
  progress: number;
  created_at: string;
  updated_at: string;
}

export type CreateGoalData = Omit<Goal, 'id' | 'created_at' | 'updated_at'>; 