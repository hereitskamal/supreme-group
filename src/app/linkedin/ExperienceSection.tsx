// components/ExperienceSection.tsx
"use client";
import { motion } from "motion/react";
import { Plus, Edit, Building, Calendar, MapPin } from "lucide-react";
import mockData from "../../data/linkedin-portfolio.json";

export default function ExperienceSection() {
  const { experience } = mockData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-lg border border-gray-200 p-6"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
          >
            <Plus size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
          >
            <Edit size={20} />
          </motion.button>
        </div>
      </div>

      {/* Experience Items */}
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex gap-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-100 rounded border flex items-center justify-center">
                <Building size={20} className="text-gray-600" />
              </div>
            </div>

            {/* Experience Details */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {exp.company.name} · {exp.employmentType}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <Edit size={16} />
                </motion.button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.startDate} - {exp.endDate} · {exp.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </div>
              </div>

              <div className="text-gray-700 leading-relaxed mb-4">
                {exp.description}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
