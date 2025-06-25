'use client';

import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, Microscope, Syringe, Brain, Bone } from 'lucide-react';

const departments = [
  {
    name: 'Cardiology',
    description: 'Advanced heart care and diagnostics with modern equipment.',
    icon: require('lucide-react').HeartPulse,
    image: 'https://images.unsplash.com/photo-1588776814662-dc3bbee2d60c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Neurology',
    description: 'Brain, spine, and nerve-related treatments with AI analysis.',
    icon: require('lucide-react').BrainCircuit || (() => null),
    image: 'https://images.unsplash.com/photo-1579154203451-c0527b1dd4fe?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pediatrics',
    description: 'Compassionate care for infants, children, and adolescents.',
    icon: require('lucide-react').Baby || (() => null),
    image: 'https://images.unsplash.com/photo-1615873968403-7ebbf94f3035?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Orthopedics',
    description: 'Bone and joint care including surgeries and rehabilitation.',
    icon: require('lucide-react').Bone || (() => null),
    image: 'https://images.unsplash.com/photo-1615233418544-9e26e91edc67?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Radiology',
    description: 'X-rays, MRI, CT scans with real-time imaging diagnostics.',
    icon: require('lucide-react').ScanLine,
    image: 'https://images.unsplash.com/photo-1581093588401-22c9d3f92f1c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Emergency',
    description: '24/7 emergency services with trauma response team on-site.',
    icon: require('lucide-react').AlarmClock || require('lucide-react').Siren,
    image: 'https://images.unsplash.com/photo-1584433144859-1fc1e4037d8e?auto=format&fit=crop&w=800&q=80',
  },
];


export default function DepartmentPage() {
  return (
    <main className="bg-black text-white py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-20 border-b pb-6 border-gray-600"
      >
        Our Departments
      </motion.h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        {departments.map((dept, idx) => {
          const Icon = dept.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={dept.image}
                alt={dept.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon size={28} className="text-blue-500" />
                  <h2 className="text-xl font-bold">{dept.title}</h2>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{dept.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
