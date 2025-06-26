import { connectToDB } from '@/lib/db';
import Doctor from '@/models/Doctor';

export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();

    const newDoctor = new Doctor(body);
    await newDoctor.save();

    return new Response(JSON.stringify(newDoctor), { status: 201 });
  } catch (error) {
    console.error('Doctor POST error:', error);
    return new Response(JSON.stringify({ error: 'Server Error' }), { status: 500 });
  }
}
