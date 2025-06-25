'use client';

import { motion } from 'framer-motion';
import { HeartPulse, Brain, Baby, Bone, ScanLine, Siren } from 'lucide-react';

const departments = [
  {
    name: 'Cardiology',
    description: 'Advanced heart care and diagnostics with modern equipment.',
    icon: HeartPulse,
    image: 'https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?_gl=1*6z2pi0*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzQ0OTQkbzIxJGcxJHQxNzUwODc0NjM1JGozOSRsMCRoMA...',
  },
  {
    name: 'Neurology',
    description: 'Brain, spine, and nerve-related treatments with AI analysis.',
    icon: Brain,
    image: 'https://images.pexels.com/photos/19034027/pexels-photo-19034027.jpeg?_gl=1*1m39dlj*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzQ0OTQkbzIxJGcxJHQxNzUwODc0NzkyJGo1OSRsMCRoMA..',
  },
  {
    name: 'Pediatrics',
    description: 'Compassionate care for infants, children, and adolescents.',
    icon: Baby,
    image: 'https://images.pexels.com/photos/12260618/pexels-photo-12260618.jpeg?_gl=1*gmdrvh*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzQ0OTQkbzIxJGcxJHQxNzUwODc0ODg4JGoyNiRsMCRoMA..',
  },
  {
    name: 'Orthopedics',
    description: 'Bone and joint care including surgeries and rehabilitation.',
    icon: Bone,
    image: 'https://images.pexels.com/photos/8376326/pexels-photo-8376326.jpeg?_gl=1*aezp6s*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzQ0OTQkbzIxJGcxJHQxNzUwODc0OTY4JGoxNSRsMCRoMA..',
  },
  {
    name: 'Radiology',
    description: 'X-rays, MRI, CT scans with real-time imaging diagnostics.',
    icon: ScanLine,
    image: 'https://images.pexels.com/photos/5214994/pexels-photo-5214994.jpeg?_gl=1*1wz0lls*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzQ0OTQkbzIxJGcxJHQxNzUwODc1MDMxJGozMyRsMCRoMA..',
  },
  {
    name: 'Emergency',
    description: '24/7 emergency services with trauma response team on-site.',
    icon: Siren,
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?_gl=1*1qog501*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzQ0OTQkbzIxJGcxJHQxNzUwODc1MDkyJGozNCRsMCRoMA..',
  },
];

export default function DepartmentPage() {
  return (
    <main className="bg-black text-white py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16 border-b border-gray-700 pb-4"
      >
        Our Departments
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        {departments.map((dept, idx) => {
          const Icon = dept.icon;
          return (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition overflow-hidden"
            >
              <img src={dept.image} alt={dept.name} className="rounded-md mb-4 w-full h-48 object-cover" />
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold uppercase">{dept.name}</h3>
              </div>
              <p className="text-gray-300 text-sm">{dept.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* New Section: Why Choose Us */}
      <section className="mt-32 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 border-b pb-4 border-gray-700"
        >
          Why Choose Medi-Zone?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-3xl mx-auto"
        >
          We offer 24/7 emergency care, state-of-the-art facilities, patient-centric service, and a team of globally experienced doctors committed to personalized care.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {["24/7 Emergency", "Advanced AI Diagnostics", "Trusted Experts"].map((item, idx) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl text-white shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{item}</h3>
              <p className="text-sm text-gray-400">Experience our top-rated features and see what sets us apart in modern healthcare.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
