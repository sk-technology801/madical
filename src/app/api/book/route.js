import { NextResponse } from 'next/server';
import clientPromise from '@/lib/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db('medizone'); // your DB name
    const bookings = db.collection('bookings');

    await bookings.insertOne({
      name: body.name,
      email: body.email,
      phone: body.phone,
      date: body.date,
      department: body.department,
      message: body.message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: 'Booking confirmed!' });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ success: false, error: 'Failed to book appointment' }, { status: 500 });
  }
}
