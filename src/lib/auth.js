import { getServerSession } from 'next-auth';
import { authOptions } from './authOptions';

export async function getAuthSession() {
  return await getServerSession(authOptions);
}
