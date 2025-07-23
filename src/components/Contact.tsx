// components/Contact.tsx
"use client";
import { motion } from 'motion/react';
import portfolioData from '../data/portfolio.json';

export default function Contact() {
  const { personal, contact } = portfolioData;
  
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="w-16 h-px bg-neutral-900 mb-8 mx-auto" />
          <h2 className="text-4xl font-light text-neutral-900 mb-6">
            {contact.title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-medium text-neutral-900 mb-6">Get in touch</h3>
              <div className="space-y-4">
                <a 
                  href={`mailto:${personal.email}`}
                  className="block text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {personal.email}
                </a>
                <a 
                  href={`tel:${personal.phone.replace(/[^\d+]/g, '')}`}
                  className="block text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {personal.phone}
                </a>
                <span className="block text-neutral-600">
                  {personal.location}
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="space-y-4">
                {contact.formFields.map((field, index) => (
                  field.type === 'textarea' ? (
                    <textarea
                      key={index}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      className="w-full p-4 border-b border-neutral-200 bg-transparent focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                    />
                  ) : (
                    <input
                      key={index}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full p-4 border-b border-neutral-200 bg-transparent focus:border-neutral-900 focus:outline-none transition-colors"
                    />
                  )
                ))}
              </div>
              
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
