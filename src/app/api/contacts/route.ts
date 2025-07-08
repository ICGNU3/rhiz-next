import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase/client';

export async function GET(request: NextRequest) {
  const { data, error } = await supabase.from('contacts').select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { data, error } = await supabase.from('contacts').insert([body]).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data[0]);
} 