// src/app/api/contact/route.js
import { connectToDB } from '@/lib/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();
    const db = await connectToDB();

    const result = await db.collection('contacts').insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 201,
    });
  } catch (error) {
    console.error('❌ Contact Form Error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Something went wrong.' }), {
      status: 500,
    });
  }
}
