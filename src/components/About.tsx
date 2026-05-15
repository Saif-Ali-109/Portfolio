"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-6">Expertise</h2>
          <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-gray-900">
            I am a <span className="font-bold">Full-Stack Developer</span> with hands-on experience in building decentralized <span className="text-blue-600 font-medium">Web3</span> applications and <span className="text-blue-600 font-medium">AI-powered</span> solutions. 
            Proficient in modern web technologies and blockchain integration. Strong in AI integration using OpenAI SDK and Claude API. 
          </p>
          <div className="mt-12 h-1 w-24 bg-gray-100" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
