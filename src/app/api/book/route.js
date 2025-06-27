// src/app/api/book/route.js
import { connectToDB } from '@/lib/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();

    const db = await connectToDB();

    const result = await db.collection('bookings').insertOne({
      name: body.name,
      email: body.email,
      phone: body.phone,
      date: body.date,
      department: body.department,
      message: body.message,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    console.error('❌ Booking API Error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Booking failed' }), {
      status: 500,
    });
  }
}
