"use client";

import React from 'react';
import { Mail, MapPin, ChevronDown, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-[65vh] flex flex-col justify-center px-6 overflow-hidden pt-32 pb-10">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">Available for Projects</p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            SAIF ALI <br /> WAJID
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 max-w-2xl font-light leading-snug">
            Professional <span className="text-black font-normal italic">Full-Stack Developer</span> crafting high-performance web solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex flex-wrap gap-10 text-sm font-bold uppercase tracking-widest text-gray-400"
        >
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-gray-300" />
            <span>Islamabad</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-gray-300" />
            <span>rsaif6863322@gmail.com</span>
          </div>
          <a href="https://wa.link/3usvbe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-green-500 transition-colors group">
            <MessageCircle size={16} className="text-gray-300 group-hover:text-green-500" />
            <span className="border-b border-transparent group-hover:border-green-500 transition-all">WhatsApp</span>
          </a>
          <a href="https://github.com/Saif-Ali-109" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors group">
            <GithubIcon />
            <span className="border-b border-transparent group-hover:border-blue-600 transition-all">Saif-Ali-109</span>
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
