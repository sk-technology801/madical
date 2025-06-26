'use client';

import { useState } from 'react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email} / ${password}`);
    // You can use NextAuth or your own API here
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-black text-white px-6">
      <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 mb-4 rounded-lg outline-none"
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 mb-6 rounded-lg outline-none"
        />

        <button
          type="submit"
          className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 rounded-lg uppercase"
        >
          Login
        </button>
      </form>
    </main>
  );
}
