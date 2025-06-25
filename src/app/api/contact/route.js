import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;

    const db = client.db('medizone'); // your database name
    const contactCollection = db.collection('contacts');

    await contactCollection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('❌ Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit contact' }, { status: 500 });
  }
}
