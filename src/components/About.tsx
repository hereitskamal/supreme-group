// components/About.tsx
"use client";
import { motion } from 'motion/react';
import portfolioData from '../data/portfolio.json';

export default function About() {
  const { about } = portfolioData;
  
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-12">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-neutral-900 mb-8"
              />
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-8 leading-tight">
                {about.title}
              </h2>
            </div>
            
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              {about.content.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-lg" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="space-y-12">
              {about.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-neutral-100 pl-8"
                >
                  <div className="text-4xl font-light text-neutral-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
