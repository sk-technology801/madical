'use client';

import { motion } from 'framer-motion';
import { User, Stethoscope, Heart, Star, Video, Clock } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Amelia Carter',
    specialty: 'Cardiologist',
    bio: 'Expert in heart disease and preventive cardiology with 15+ years of experience.',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
    icon: Heart,
    rating: 5,
    availability: 'Mon-Fri, 9am - 5pm',
    video: true,
  },
  {
    name: 'Dr. Leo Thompson',
    specialty: 'Neurologist',
    bio: 'Specialist in stroke, migraines, and neurological disorders.',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    icon: User,
    rating: 4,
    availability: 'Tue-Sat, 10am - 6pm',
    video: false,
  },
  {
    name: 'Dr. Sara Kim',
    specialty: 'Pediatrician',
    bio: 'Passionate about child health and family-centered care.',
    photo: 'https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?_gl=1*6dobtb*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzQ0OTQkbzIxJGcxJHQxNzUwODc1NDUxJGo0NyRsMCRoMA..',
    icon: Stethoscope,
    rating: 5,
    availability: 'Mon-Fri, 8am - 4pm',
    video: true,
  },
];

export default function DoctorsPage() {
  return (
    <main className="bg-black text-white py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-center mb-16 border-b pb-4 border-gray-700"
      >
        Meet Our Doctors
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {doctors.map((doc, idx) => {
          const Icon = doc.icon;
          return (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            >
              <img
                src={doc.photo}
                alt={doc.name}
                className="w-full h-72 object-cover object-top"
              />
              <div className="p-6 text-center">
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-pulse" />
                <h2 className="text-xl font-bold mb-1">{doc.name}</h2>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                  {doc.specialty}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{doc.bio}</p>

                {/* Rating */}
                <div className="flex justify-center items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < doc.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                      fill={i < doc.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>

                {/* Availability */}
                <div className="flex justify-center items-center gap-2 text-sm text-gray-400 mb-2">
                  <Clock className="w-4 h-4" />
                  {doc.availability}
                </div>

                {/* Video Consultation */}
                {doc.video && (
                  <div className="flex justify-center items-center gap-2 text-green-400 text-sm mt-2 animate-pulse">
                    <Video className="w-4 h-4" />
                    Video Consultation Available
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Excellence Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-32 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-600 pb-2">Commitment to Excellence</h2>
        <p className="text-gray-400 mb-6">
          Our team blends compassion, experience, and advanced medical technology to provide personalized healthcare.
        </p>
        <a
          href="#book"
          className="inline-block bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 font-bold rounded-full uppercase text-sm transition"
        >
          Book Appointment
        </a>
      </motion.section>
    </main>
  );
}