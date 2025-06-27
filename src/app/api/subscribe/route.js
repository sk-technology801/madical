// import { connectToDB } from '@/lib/mongodb';


// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   const { email } = await req.json();
//   const db = await connectDB();
//   const collection = db.collection('subscribers');

//   const exists = await collection.findOne({ email });
//   if (exists) return NextResponse.json({ message: 'Already subscribed' });

//   await collection.insertOne({ email, subscribedAt: new Date() });
//   return NextResponse.json({ message: 'Subscribed successfully' });
// }

// Example: src/app/api/subscribe/route.js
import { connectToDB } from '@/lib/mongodb';

export async function POST(req) {
  try {
    await connectToDB();
    // your logic here
    return Response.json({ message: 'Subscribed!' });
  } catch (err) {
    console.error('Subscribe API error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
