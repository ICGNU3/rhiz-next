import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '../../lib/supabase/client';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import Link from 'next/link';

const schema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { error } = await supabase.auth.resetPasswordForEmail(data.email);
    if (error) setError(error.message);
    else setSuccess(true);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input label="Email" type="email" {...register('email')} error={errors.email?.message} autoComplete="email" />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">Check your email for a password reset link.</div>}
      <Button type="submit" loading={loading} className="w-full">Send Reset Link</Button>
      <div className="text-sm mt-2 text-center">
        <Link href="/auth/login" className="text-rhiz-teal hover:underline">Back to login</Link>
      </div>
    </form>
  );
} 