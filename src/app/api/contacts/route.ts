import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Contacts API coming soon' });
}

export async function POST() {
  return NextResponse.json({ message: 'Contact creation coming soon' });
} 