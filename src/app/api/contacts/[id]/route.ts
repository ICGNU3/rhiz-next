import { NextResponse } from 'next/server';

export async function PUT() {
  return NextResponse.json({ message: 'Update coming soon' });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Delete coming soon' });
} 