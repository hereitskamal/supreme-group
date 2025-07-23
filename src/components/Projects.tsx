// components/Projects.tsx
"use client";
import { motion } from 'motion/react';
import portfolioData from '../data/portfolio.json';

export default function Projects() {
  const { projects } = portfolioData;
  
  return (
    <section className="py-32 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-16 h-px bg-white mb-8" />
          <h2 className="text-4xl font-light mb-6">Selected Work</h2>
          <p className="text-neutral-400 max-w-2xl">
            A collection of projects that showcase technical excellence and creative problem-solving
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center py-12 border-b border-neutral-800 group-hover:border-neutral-700 transition-colors">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-light group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs bg-neutral-800 text-neutral-300 rounded">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-neutral-400 leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm text-neutral-500 border-b border-neutral-700 pb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-4 text-right">
                  <div className="text-neutral-500 mb-4">{project.year}</div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center text-white group-hover:text-neutral-300 transition-colors"
                  >
                    <span className="mr-2">View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
