import { User } from '@/app/models/User';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export async function POST(req: Request) {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error('MongoDB URL is not defined in environment variables');
    }

    const { email, password } = await req.json();

    mongoose.connect(process.env.MONGODB_URL);
    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ message: 'User not found' }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return Response.json({ message: 'Incorrect password' }, { status: 401 });
    }

    return Response.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    return Response.json({ message: 'Internal server error' }, { status: 500 });
  }
}
