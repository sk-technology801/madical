import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  department: String,
  message: String,
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
