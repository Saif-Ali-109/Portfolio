"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: 'Wallet Chat Application',
    type: 'Full-Stack Web3 Project',
    description: 'Secure, decentralized chat application leveraging blockchain for authentication. Users connect cryptocurrency wallets (EVM & Solana) for login and exchange end-to-end encrypted messages with media sharing.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Express', 'MongoDB', 'Socket.IO', 'Solidity'],
    github: 'https://github.com/Saif-Ali-109/Wallet-Chat',
    highlights: [
      'Implemented wallet-based authentication (MetaMask, WalletConnect, Coinbase)',
      'Built real-time encrypted messaging using Socket.IO and Nacl E2EE',
      'Designed and deployed smart contracts on Ethereum Sepolia',
      'Integrated Cloudflare R2 for secure media sharing'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-8 px-6 border-t border-gray-50 bg-gray-50/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-10">Selected Works</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="relative order-2 md:order-1">
                  <div className="absolute -top-10 -left-10 text-9xl font-bold text-gray-50 select-none z-0">
                    0{index + 1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-4 tracking-tighter group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-8">{project.type}</p>
                    <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                      {project.stack.map((item) => (
                        <span key={item} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a href={project.github} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
                        <GithubIcon />
                        <span>Source</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <ul className="space-y-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-4 text-sm text-gray-500 font-light leading-relaxed">
                        <span className="text-blue-600 font-bold">/</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
