import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }) {
  const session = await getAuthSession();

  if (!session || session.user.role !== 'admin') {
    redirect('/login');
  }

  return <div>{children}</div>;
}
