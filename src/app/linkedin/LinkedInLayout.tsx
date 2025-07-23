// components/LinkedInLayout.tsx
"use client";
import { motion } from 'motion/react';
import LinkedInHeader from './LinkedInHeader';
import ProfileHeader from './ProfileHeader';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ActivityFeed from './ActivityFeed';
import { Users, Bookmark, Eye, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function LinkedInLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LinkedInHeader />
      
      <main className="max-w-[1128px] mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Fixed/Sticky */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block lg:col-span-3 space-y-4"
          >
            <div className="sticky top-[68px] space-y-4">
              {/* Profile Analytics Card */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900 text-sm">Analytics</h3>
                  <p className="text-xs text-gray-600 mt-1">Private to you</p>
                </div>
                
                <div className="p-4 space-y-4">
                  <motion.div 
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="flex items-center justify-between cursor-pointer p-2 -m-2 rounded transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Eye size={16} className="text-gray-600" />
                      <div>
                        <div className="text-sm text-gray-900 font-medium">147</div>
                        <div className="text-xs text-gray-600">Profile views</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-400" />
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="flex items-center justify-between cursor-pointer p-2 -m-2 rounded transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp size={16} className="text-gray-600" />
                      <div>
                        <div className="text-sm text-gray-900 font-medium">234</div>
                        <div className="text-xs text-gray-600">Post impressions</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-400" />
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="flex items-center justify-between cursor-pointer p-2 -m-2 rounded transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Users size={16} className="text-gray-600" />
                      <div>
                        <div className="text-sm text-gray-900 font-medium">89</div>
                        <div className="text-xs text-gray-600">Search appearances</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-400" />
                  </motion.div>
                </div>
                
                <div className="border-t border-gray-100 p-4">
                  <motion.button
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    className="text-center text-sm text-gray-600 hover:text-gray-900 font-medium py-1 w-full rounded transition-colors"
                  >
                    Show all analytics →
                  </motion.button>
                </div>
              </div>

              {/* Resources Card */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900 text-sm">Resources</h3>
                  <p className="text-xs text-gray-600 mt-1">Private to you</p>
                </div>
                
                <div className="p-4">
                  <motion.div 
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="flex items-start gap-3 cursor-pointer p-2 -m-2 rounded transition-colors"
                  >
                    <Bookmark size={16} className="text-gray-600 mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-900 font-medium">My items</div>
                      <div className="text-xs text-gray-600 mt-0.5">Keep track of your jobs, courses and articles</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Ad Space (Optional - to match LinkedIn) */}
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">Ad</div>
                  <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Promoted Content</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-9 space-y-6"
          >
            <ProfileHeader />
            <ActivityFeed />
            <ExperienceSection />
            <SkillsSection />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
