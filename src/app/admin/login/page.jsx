'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email: e.target.email.value,
      password: e.target.password.value,
      redirect: true,
      callbackUrl: '/admin',
    });

    if (res?.error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow">
        <h2 className="text-xl mb-4 font-bold">Admin Login</h2>
        <input name="email" type="email" placeholder="Email" required className="w-full p-2 mb-2 border" />
        <input name="password" type="password" placeholder="Password" required className="w-full p-2 mb-4 border" />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 w-full">Login</button>
      </form>
    </div>
  );
}
