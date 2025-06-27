// src/app/admin/layout.jsx
import { redirect } from 'next/navigation';
import { getAuthSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }) {
  const session = await getAuthSession();
  console.log('Session in AdminLayout:', session); // ✅ Debug

  if (!session || session.user.role !== 'admin') {
    redirect('/login');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {children}
    </div>
  );
}
