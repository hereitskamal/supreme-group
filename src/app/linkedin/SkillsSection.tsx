// components/SkillsSection.tsx
"use client";
import { motion } from 'motion/react';
import { useState } from 'react';
import { Plus, Edit, ArrowRight } from 'lucide-react';
import mockData from '../../data/linkedin-portfolio.json';

export default function SkillsSection() {
  const { skills } = mockData;
  const [endorsedSkills, setEndorsedSkills] = useState<Set<string>>(new Set());

  const handleEndorse = (skillName: string) => {
    setEndorsedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skillName)) {
        newSet.delete(skillName);
      } else {
        newSet.add(skillName);
      }
      return newSet;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-lg border border-gray-200 p-6"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
          <p className="text-sm text-gray-600">Show all {skills.length} skills</p>
        </div>
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

      {/* Skills List */}
      <div className="space-y-4">
        {skills.slice(0, 6).map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">{skill.name}</h3>
              <p className="text-sm text-gray-600">
                {skill.endorsements} endorsements
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleEndorse(skill.name)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                endorsedSkills.has(skill.name)
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              {endorsedSkills.has(skill.name) ? '✓ Endorsed' : '+ Endorse'}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Show All Skills Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        className="w-full mt-4 p-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
      >
        <span>Show all {skills.length} skills</span>
        <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
}
