'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/admin',
    });

    if (res?.error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input type="email" name="email" placeholder="Email" required className="mb-2 w-full p-2 border rounded" />
        <input type="password" name="password" placeholder="Password" required className="mb-4 w-full p-2 border rounded" />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
}
