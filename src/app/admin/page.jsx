import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/db';



export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.email !== process.env.ADMIN_EMAIL) {
    return <div className="text-red-500 text-center mt-10">Access Denied</div>;
  }

  const db = await connectDB();
  const contacts = await db.collection('contacts').find().toArray();
  const appointments = await db.collection('appointments').find().toArray();

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <section className="mb-10">
        <h2 className="text-2xl mb-2">Contact Messages</h2>
        <ul className="bg-gray-900 p-4 rounded space-y-2">
          {contacts.map((c) => (
            <li key={c._id}>{c.name} — {c.email}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-2">Appointments</h2>
        <ul className="bg-gray-900 p-4 rounded space-y-2">
          {appointments.map((a) => (
            <li key={a._id}>{a.name} — {a.date}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
