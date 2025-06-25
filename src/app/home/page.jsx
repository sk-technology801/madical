'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Stethoscope, Syringe, Hospital, ScanLine, Microscope, User, HeartPulse, Thermometer, Ambulance, BedDouble } from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const services = [
    {
      icon: Stethoscope,
      title: 'General Diagnostics',
      desc: 'Comprehensive checkups and modern medical evaluations.',
    },
    {
      icon: Syringe,
      title: 'Emergency Care',
      desc: '24/7 ER with trauma support and rapid response units.',
    },
    {
      icon: ScanLine,
      title: 'Radiology',
      desc: 'MRI, CT, and ultrasound for accurate internal imaging.',
    },
    {
      icon: Microscope,
      title: 'Laboratory Tests',
      desc: 'Accurate blood tests, biopsies, and pathogen detection.',
    },
    {
      icon: Hospital,
      title: 'Inpatient Facilities',
      desc: 'Modern patient rooms and high-care ICUs with 24/7 staff.',
    },
    {
      icon: HeartPulse,
      title: 'Cardiac Care',
      desc: 'ECG, angioplasty, and cardiac surgery units.',
    },
    {
      icon: BedDouble,
      title: 'Private Wards',
      desc: 'Luxurious wards with personalized patient care.',
    },
    {
      icon: Thermometer,
      title: 'Infection Control',
      desc: 'Sanitized zones and isolation for contagious diseases.',
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/9703033/pexels-photo-9703033.jpeg?_gl=1*r1ecmo*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzA2MzkkbzIwJGcxJHQxNzUwODcwNzY0JGo1OSRsMCRoMA..')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold glitch-text mb-4">
            HEALING WITH HONOR
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            Where innovation meets compassion — we deliver world-class care.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <PhoneCall size={20} /> Contact Emergency
          </a>
        </motion.div>
      </section>

      {/* Our Core Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white border-b pb-4 border-gray-700"
        >
          Our Core Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 bg-white text-black rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon size={36} className="text-blue-700" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?_gl=1*rzxwhf*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzA2MzkkbzIwJGcxJHQxNzUwODcxMzcwJGo1OCRsMCRoMA.."
              alt="Our Mission"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We aim to create a healthier future through groundbreaking treatments, personalized care plans, and deep commitment to patient satisfaction. Our vision is to blend modern science with compassionate service.
            </p>
          </motion.div>
        </div>
      </section>

      ...

      {/* Facilities Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 border-b pb-4 border-gray-600"
          >
            Our Facilities
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/32697183/pexels-photo-32697183.jpeg?_gl=1*vz4dzh*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzA2MzkkbzIwJGcxJHQxNzUwODcxNTQ3JGozMCRsMCRoMA.."
                alt="Robotic Surgery"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold mb-2">Robotic Surgery Suite</h3>
                <p className="text-sm text-gray-300">
                  AI-assisted systems provide minimally invasive, high-precision surgeries with faster recovery.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/14553829/pexels-photo-14553829.jpeg?_gl=1*1oxfp1j*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzA2MzkkbzIwJGcxJHQxNzUwODcxNjMzJGoyMyRsMCRoMA.."
                alt="Smart Rooms"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold mb-2">Smart Patient Rooms</h3>
                <p className="text-sm text-gray-300">
                  Fully digital suites with automation, voice commands, and integrated monitoring.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/10987487/pexels-photo-10987487.jpeg?_gl=1*1ab5n4z*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzA2MzkkbzIwJGcxJHQxNzUwODcxNzE3JGoyNCRsMCRoMA.."
                alt="ICU"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold mb-2">Advanced ICU</h3>
                <p className="text-sm text-gray-300">
                  Critical care units with real-time analytics, alert systems, and precision monitoring.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?_gl=1*1dxexdv*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA4NzA2MzkkbzIwJGcxJHQxNzUwODcxODQ0JGoxOCRsMCRoMA.."
                alt="Pharmacy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-bold mb-2">On-site Digital Pharmacy</h3>
                <p className="text-sm text-gray-300">
                  Real-time medication dispensing and automated inventory ensures immediate access.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
...

    </main>
  );
}
