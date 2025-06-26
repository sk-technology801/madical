'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res.ok) {
      router.push('/admin'); // ✅ Redirect to dashboard after login
    } else {
      alert('❌ Invalid credentials');
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-black text-white">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg w-[350px]">
        <h1 className="text-2xl mb-6 font-bold">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 bg-gray-800 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 bg-gray-800 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-red-600 hover:bg-red-700 w-full py-2 rounded">
          Login
        </button>
      </form>
    </main>
  );
}
