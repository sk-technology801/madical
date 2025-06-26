import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  bio: String,
  image: String,
});

export default mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema);
