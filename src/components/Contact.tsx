"use client";

import React from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-8 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-500 mb-4">Collaboration</h2>
          <p className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Ready to initiate <br /> a <span className="text-blue-600">new venture?</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-8 border border-white/5 bg-white/5 rounded-sm hover:bg-white/10 transition-all group">
              <Mail className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Email</p>
              <p className="text-sm font-medium">rsaif6863322@gmail.com</p>
            </div>
            
            <a 
              href="https://wa.link/3usvbe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 border border-white/5 bg-white/5 rounded-sm hover:bg-white/10 transition-all group"
            >
              <MessageCircle className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">WhatsApp</p>
              <p className="text-sm font-medium">Connect on WA</p>
            </a>

            <a 
              href="https://github.com/Saif-Ali-109" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 border border-white/5 bg-white/5 rounded-sm hover:bg-white/10 transition-all group"
            >
              <GithubIcon />
              <div className="mt-6">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">GitHub</p>
                <p className="text-sm font-medium">Saif-Ali-109</p>
              </div>
            </a>

            <div className="p-8 border border-white/5 bg-white/5 rounded-sm hover:bg-white/10 transition-all group">
              <MapPin className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Location</p>
              <p className="text-sm font-medium">Islamabad, PK</p>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-white/5 text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-4">
            <span>© {new Date().getFullYear()} SAIF ALI WAJID</span>
            <div className="flex gap-8">
              <a 
                href="https://www.linkedin.com/in/saif-ali-ba276132a?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white cursor-pointer transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
