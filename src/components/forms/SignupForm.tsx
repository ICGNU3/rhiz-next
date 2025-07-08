"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '../../lib/supabase/client';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import Link from 'next/link';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    if (error) setError(error.message);
    else setSuccess(true);
    setLoading(false);
  };

  const handleSocial = async (provider: 'google' | 'github') => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" aria-label="Signup form">
      <Input label="Email" type="email" {...register('email')} error={errors.email?.message} autoComplete="email" />
      <Input label="Password" type="password" {...register('password')} error={errors.password?.message} autoComplete="new-password" />
      {error && <div className="text-red-500 text-sm" role="alert">{error}</div>}
      {success && <div className="text-green-600 text-sm">Check your email to verify your account.</div>}
      <Button type="submit" loading={loading} className="w-full">Sign Up</Button>
      <div className="flex gap-2 mt-2">
        <Button type="button" variant="outline" onClick={() => handleSocial('google')} className="flex-1">Sign up with Google</Button>
        <Button type="button" variant="outline" onClick={() => handleSocial('github')} className="flex-1">Sign up with GitHub</Button>
      </div>
      <div className="text-sm mt-2 text-center">
        <Link href="/auth/login" className="text-rhiz-teal hover:underline">Already have an account? Sign in</Link>
      </div>
    </form>
  );
} 