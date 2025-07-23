// components/Experience.tsx
"use client";
import { motion } from 'motion/react';
import portfolioData from '../data/portfolio.json';

export default function Experience() {
  const { experience } = portfolioData;
  
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-16 h-px bg-neutral-900 mb-8" />
          <h2 className="text-4xl font-light text-neutral-900">Experience</h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 ml-8"></div>
          
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-white border-2 border-neutral-900 rounded-full"></div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-medium text-neutral-900 mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-neutral-600 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm text-neutral-700 bg-white border border-neutral-200 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-neutral-500 font-medium mb-1">
                      {exp.period}
                    </div>
                    <div className="text-sm text-neutral-400">
                      {exp.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
