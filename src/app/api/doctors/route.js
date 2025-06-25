import { connectDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, specialization, message } = await req.json();
  const db = await connectDB();
  const collection = db.collection('doctor_messages');

  await collection.insertOne({ name, specialization, message, createdAt: new Date() });
  return NextResponse.json({ message: 'Doctor request submitted' });
}
