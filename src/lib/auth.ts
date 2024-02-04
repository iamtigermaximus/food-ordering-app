import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { User } from '@/app/models/User';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'test@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!password) {
          return null;
        }

        mongoose.connect(process.env.MONGODB_URL!);
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        console.log(passwordOk);

        if (passwordOk) {
          return user;
        }

        return null;
      },
    }),
  ],
};
