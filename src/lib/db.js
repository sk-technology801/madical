import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
    });
    isConnected = true;
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ DB connection error:', error);
  }
};
