import { connectToDB } from '@/lib/db';
import Contact from '@/models/Contact';
import Booking from '@/models/Booking';

export default async function AdminPage() {
  await connectToDB();
  const contacts = await Contact.find().sort({ createdAt: -1 });
  const bookings = await Booking.find().sort({ createdAt: -1 });

  return (
    <main className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Contacts */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact Submissions</h2>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {contacts.map((c) => (
            <div key={c._id} className="p-4 border border-gray-700 rounded-md">
              <p><strong>Name:</strong> {c.name}</p>
              <p><strong>Email:</strong> {c.email}</p>
              <p><strong>Message:</strong> {c.message}</p>
              <p className="text-sm text-gray-400">{new Date(c.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bookings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Appointment Bookings</h2>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          {bookings.map((b) => (
            <div key={b._id} className="p-4 border border-gray-700 rounded-md">
              <p><strong>Name:</strong> {b.name}</p>
              <p><strong>Email:</strong> {b.email}</p>
              <p><strong>Phone:</strong> {b.phone}</p>
              <p><strong>Date:</strong> {b.date}</p>
              <p><strong>Department:</strong> {b.department}</p>
              <p><strong>Message:</strong> {b.message}</p>
              <p className="text-sm text-gray-400">{new Date(b.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
