import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }) {
  const session = await getAuthSession();

  if (!session || session.user.role !== 'admin') {
    redirect('/login');
  }

  return (
    <section className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {children}
    </section>
  );
}
