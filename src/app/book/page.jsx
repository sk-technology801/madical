'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, User, Mail, PhoneCall, Syringe } from 'lucide-react';

export default function BookPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Appointment booked successfully!');
      setForm({ name: '', email: '', phone: '', date: '', department: '', message: '' });
    } else {
      alert('Booking failed. Try again.');
    }
  };

  return (
    <main className="bg-black text-white py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-center mb-16 border-b pb-4 border-gray-700"
      >
        Book Appointment
      </motion.h1>

      <section className="max-w-4xl mx-auto bg-gray-900 p-10 rounded-xl shadow-2xl">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-3 top-3 text-cyan-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-gray-800 text-white pl-10 py-3 rounded-lg outline-none"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-cyan-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-gray-800 text-white pl-10 py-3 rounded-lg outline-none"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <PhoneCall className="absolute left-3 top-3 text-cyan-400" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-gray-800 text-white pl-10 py-3 rounded-lg outline-none"
                required
              />
            </div>

            <div className="relative">
              <CalendarClock className="absolute left-3 top-3 text-cyan-400" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white pl-10 py-3 rounded-lg outline-none"
                required
              />
            </div>
          </div>

          <div className="relative">
            <Syringe className="absolute left-3 top-3 text-cyan-400" />
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white pl-10 py-3 rounded-lg outline-none"
              required
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="orthopedics">Orthopedics</option>
            </select>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Additional Message (Optional)"
            className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 bg-cyan-400 hover:bg-cyan-500 text-black px-8 py-3 font-bold rounded-full uppercase text-sm shadow-lg transition"
          >
            Confirm Booking
          </motion.button>
        </motion.form>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-32 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-700">Your Health Is Our Priority</h2>
        <p className="text-gray-400">
          We are committed to ensuring convenient access to professional medical care. Schedule your appointment today
          and get expert attention you deserve.
        </p>
      </motion.section>
    </main>
  );
}
