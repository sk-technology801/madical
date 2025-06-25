'use client';

import { HeartPulse, Mail, PhoneCall, MapPin, Facebook, Instagram, Twitter, Clock9 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 mt-32 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center gap-2 text-3xl font-extrabold mb-4 tracking-wider">
            <HeartPulse className="text-cyan-400 animate-pulse" />
            <span className="font-mono">MEDI-ZONE</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            We offer expert care across all specialties with advanced medical technology and compassionate service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-xl mb-4 border-b border-gray-600 pb-1">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#departments" className="hover:text-cyan-400 transition">Departments</a></li>
            <li><a href="#doctors" className="hover:text-cyan-400 transition">Doctors</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            <li><a href="#book" className="hover:text-cyan-400 transition">Book Appointment</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-xl mb-4 border-b border-gray-600 pb-1">Contact Us</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><PhoneCall className="w-4 h-4 text-cyan-400" /> +123 456 7890</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /> support@medizone.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> 123 MediZone Avenue, NY</li>
            <li className="flex items-center gap-2"><Clock9 className="w-4 h-4 text-cyan-400" /> Mon–Sat: 8am – 8pm</li>
          </ul>
        </div>

        {/* Newsletter + Social Media */}
        <div>
          <h4 className="font-semibold text-xl mb-4 border-b border-gray-600 pb-1">Stay Connected</h4>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-full text-sm mb-2 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 rounded-full text-sm transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-cyan-400 transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-cyan-400 transition"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-500 text-xs border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} MediZone Hospital. All rights reserved.
      </div>
    </footer>
  );
}
