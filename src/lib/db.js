// src/lib/db.js
import mongoose from 'mongoose';

let isConnected = false; // Prevent multiple connections in dev

export const connectToDB = async () => {
  if (isConnected) return;

  try {
    if (!process.env.MONGODB_URI || !process.env.MONGODB_DB) {
      throw new Error('Missing MongoDB environment variables');
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    throw error;
  }
};
