import { User } from '@/app/models/User';
import mongoose from 'mongoose';

export async function POST(req: Request) {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error('MongoDB URL is not defined in environment variables');
    }
    const body = await req.json();

    mongoose.connect(process.env.MONGODB_URL);
    const createdUser = await User.create(body);

    return Response.json(createdUser);
  } catch (error) {
    console.error('Error posting to database:', error);
    return Response.json(
      { message: 'Error posting to database' },
      { status: 500 }
    );
  }
}
