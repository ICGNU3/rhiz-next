import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { CreateContactData } from '../../lib/types';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  company: z.string(),
  trust_score: z.number().min(0).max(100),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  initialValues?: Partial<CreateContactData>;
  onSubmit: (data: FormData) => void;
  loading?: boolean;
}

export function ContactForm({ initialValues = {}, onSubmit, loading }: ContactFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: initialValues.name || '',
      email: initialValues.email || '',
      company: initialValues.company || '',
      trust_score: initialValues.trust_score || 0,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Name" {...register('name')} error={errors.name?.message} />
      <Input label="Email" {...register('email')} error={errors.email?.message} />
      <Input label="Company" {...register('company')} error={errors.company?.message} />
      <Input label="Trust Score" type="number" min={0} max={100} {...register('trust_score', { valueAsNumber: true })} error={errors.trust_score?.message} />
      <Button type="submit" loading={loading} className="w-full">Save Contact</Button>
    </form>
  );
} 