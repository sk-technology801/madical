'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  HeartPulse,
  Menu,
  X,
  Sun,
  Moon,
  PhoneCall,
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setDarkMode(saved ? saved === 'dark' : true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Departments', path: '/department' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="flex items-center gap-2 text-2xl font-extrabold tracking-widest"
        >
          <HeartPulse className="w-6 h-6 animate-pulse text-white" />
          <span className="font-mono glitch-text">MEDI-ZONE</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-semibold uppercase tracking-wide text-sm">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={link.path} className="hover:text-gray-400 transition">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
          </button>

          {/* Emergency call */}
          <a
            href="tel:+123456789"
            className="hidden lg:flex items-center gap-2 border px-4 py-2 border-white rounded-full hover:bg-white hover:text-black transition text-sm"
          >
            <PhoneCall size={16} />
            +123 456 789
          </a>

          {/* Book Now */}
          <Link
            href="/book"
            className="hidden md:inline-block bg-white text-black font-bold px-5 py-2 rounded-full shadow hover:bg-gray-300 transition uppercase text-xs"
          >
            Book
          </Link>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden bg-black text-white px-4 pb-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block py-3 border-b border-gray-800 hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            className="block mt-3 bg-white text-black text-center py-2 rounded-md font-bold uppercase"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </header>
  );
}
