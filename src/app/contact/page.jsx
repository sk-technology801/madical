'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
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
        Contact Us
      </motion.h1>

      {/* Contact Info */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 mb-20">
        <div className="flex flex-col items-center text-center">
          <PhoneCall className="w-8 h-8 text-cyan-400 mb-2" />
          <h3 className="text-xl font-bold mb-1">Phone</h3>
          <p className="text-gray-400">+123 456 7890</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Mail className="w-8 h-8 text-cyan-400 mb-2" />
          <h3 className="text-xl font-bold mb-1">Email</h3>
          <p className="text-gray-400">support@medizone.com</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
          <h3 className="text-xl font-bold mb-1">Location</h3>
          <p className="text-gray-400">123 MediZone Avenue, NY</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none"
              required
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-800 text-white w-full mt-6 px-4 py-3 rounded-lg outline-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 font-bold rounded-full uppercase text-sm flex items-center gap-2"
          >
            <Send size={16} /> {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && <p className="text-green-400 mt-4">Message sent successfully!</p>}
        </motion.form>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-32 max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center border-b border-gray-700 pb-2">
          Find Us on the Map
        </h2>
        <iframe
          title="hospital-map"
          src="https://maps.google.com/maps?q=123%20mediZone%20Avenue&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-96 rounded-xl border-4 border-cyan-400 mt-6"
          loading="lazy"
        ></iframe>
      </motion.section>
    </main>
  );
}
