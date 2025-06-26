export const dynamic = "force-dynamic";

import { signIn } from "next-auth/react";

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        className="bg-gray-900 p-8 rounded-md space-y-4"
        action="/api/auth/callback/credentials"
        method="POST"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded text-white font-semibold"
        >
          Login
        </button>
      </form>
    </main>
  );
}
