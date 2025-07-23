// components/Skills.tsx
"use client";
import { motion } from 'motion/react';
import portfolioData from '../data/portfolio.json';

export default function Skills() {
  const { skills } = portfolioData;
  
  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-16 h-px bg-neutral-900 mb-8" />
          <h2 className="text-4xl font-light text-neutral-900 mb-6">Expertise</h2>
          <p className="text-neutral-600 max-w-2xl">
            A curated selection of technologies I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-neutral-100 p-1">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-lg font-medium text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                  {skill.name}
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">
                  {skill.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
