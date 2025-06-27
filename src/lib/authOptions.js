// src/lib/authOptions.js
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET, // ✅ REQUIRED

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('Login attempt:', credentials.email, '-', credentials.password);

        if (
          credentials.email === 'admin@example.com' &&
          credentials.password === 'admin123'
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: 'admin@example.com',
            role: 'admin',
          };
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },

  pages: {
    signIn: '/login',
  },
};
