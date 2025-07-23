// components/LinkedInHeader.tsx
"use client";
import { motion } from 'motion/react';
import { useState } from 'react';
import { Bell, MessageCircle, Users, Briefcase, Home, Search, Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  notifications?: number;
}

export default function LinkedInHeader() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { icon: <Home size={24} />, label: 'Home', active: true },
    { icon: <Users size={24} />, label: 'My Network', notifications: 12 },
    { icon: <Briefcase size={24} />, label: 'Jobs', notifications: 3 },
    { icon: <MessageCircle size={24} />, label: 'Messaging', notifications: 2 },
    { icon: <Bell size={24} />, label: 'Notifications', notifications: 8 },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-[1128px] mx-auto px-4">
        <div className="flex items-center justify-between h-[52px]">
          {/* Logo and Search */}
          <div className="flex items-center space-x-2">
            {/* LinkedIn Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-[34px] h-[34px] bg-[#0a66c2] rounded flex items-center justify-center cursor-pointer mr-2"
            >
              <span className="text-white font-bold text-[14px]">in</span>
            </motion.div>
            
            {/* Search Bar */}
            <motion.div
              animate={{ width: isSearchFocused ? 350 : 280 }}
              className="relative hidden md:block"
            >
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-10 pr-4 py-[7px] bg-[#edf3f8] rounded-[2px] border-0 focus:outline-none focus:ring-0 focus:bg-white focus:shadow-[inset_0_0_0_1px_#0a66c2] transition-all text-sm placeholder-gray-600"
                />
              </div>
              
              {/* Search Suggestions Dropdown */}
              {isSearchFocused && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 py-2 z-50"
                >
                  {['React Developer', 'Frontend Jobs', 'JavaScript', 'Next.js'].map((suggestion, index) => (
                    <div key={index} className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center">
                      <Search className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-sm text-gray-900">{suggestion}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -1 }}
                className={`flex flex-col items-center cursor-pointer px-3 py-2 relative min-w-[80px] ${
                  item.active ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="relative mb-1">
                  {item.icon}
                  {item.notifications && (
                    <span className="absolute -top-1 -right-1 bg-[#c37d16] text-white text-[10px] rounded-full min-w-[16px] h-4 flex items-center justify-center px-1 font-medium">
                      {item.notifications > 99 ? '99+' : item.notifications}
                    </span>
                  )}
                </div>
                <span className="text-xs leading-none">{item.label}</span>
                {item.active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 rounded-t"
                  />
                )}
              </motion.div>
            ))}
            
            {/* Divider */}
            <div className="w-px h-6 bg-gray-300 mx-3"></div>
            
            {/* Profile Dropdown */}
            <motion.div 
              whileHover={{ y: -1 }}
              className="flex flex-col items-center cursor-pointer px-3 py-2 text-gray-600 hover:text-gray-900 relative"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-1">
                <span className="text-white text-xs font-bold">KS</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs leading-none mr-1">Me</span>
                <ChevronDown size={12} />
              </div>
            </motion.div>

            {/* Work Dropdown */}
            <motion.div 
              whileHover={{ y: -1 }}
              className="flex flex-col items-center cursor-pointer px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <div className="w-6 h-6 grid grid-cols-2 gap-0.5 mb-1">
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-sm"></div>
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-sm"></div>
              </div>
              <div className="flex items-center">
                <span className="text-xs leading-none mr-1">Work</span>
                <ChevronDown size={12} />
              </div>
            </motion.div>
          </nav>

          {/* Mobile Search and Menu */}
          <div className="flex items-center lg:hidden">
            <Search className="w-6 h-6 text-gray-600 mr-4 cursor-pointer" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-gray-900">{item.label}</span>
                  </div>
                  {item.notifications && (
                    <span className="bg-[#c37d16] text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                      {item.notifications}
                    </span>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex items-center space-x-3 px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">KS</span>
                  </div>
                  <span className="text-gray-900">Profile</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
