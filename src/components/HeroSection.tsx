// components/Hero.tsx
"use client";
import { motion } from 'motion/react';
import portfolioData from '../data/portfolio.json';

export default function Hero() {
  const { personal, hero } = portfolioData;
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white"></div>
      
      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-neutral-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 bg-neutral-100 rounded-lg"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-light text-neutral-900 mb-8 tracking-tight"
          >
            {personal.name}
          </motion.h1>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4 mb-12"
          >
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              {hero.tagline}
            </p>
            <p className="text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              {hero.subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center gap-8"
          >
            {hero.buttons.map((button, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 font-medium rounded-none transition-colors duration-300 ${
                  button.type === 'primary'
                    ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                    : 'border border-neutral-300 text-neutral-700 hover:border-neutral-400'
                }`}
              >
                {button.text}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-neutral-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
