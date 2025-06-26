// src/app/api/contact/route.js
import { connectToDB } from '@/lib/db';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    await connectToDB();

    const newContact = await Contact.create({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    return NextResponse.json({ success: true, contact: newContact });
  } catch (error) {
    console.error('❌ Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
