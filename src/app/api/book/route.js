// route.js for /api/book
import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';

import Booking from '@/models/Booking';

export async function POST(req) {
  try {
    await connectToDB(); // Connect with mongoose

    const body = await req.json();
    const newBooking = new Booking(body);
    await newBooking.save();

    return NextResponse.json({ success: true, message: 'Booking saved' });
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
