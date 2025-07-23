// components/ProfileCard.tsx
"use client";
import { motion } from "motion/react";
import { useState } from "react";
import portfolioData from "../../data/linkedin-portfolio.json";
import Image from "next/image";

export default function ProfileCard() {
  const { user } = portfolioData;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
    >
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800 relative">
        <div className="absolute -bottom-16 left-6">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-300 overflow-hidden">
            {/* {user.profileImage ? ( */}
            <Image
              src={user.profileImage}
              alt={`${user.name}'s profile`}
              layout="fill"
              objectFit="cover"
            />
            {/* ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                KS
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 pb-6 px-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              {user.name}
            </h1>
            <p className="text-gray-600 mb-2 leading-relaxed">
              {user.headline}
            </p>
            <p className="text-sm text-gray-500 mb-1">{user.location}</p>
            <p className="text-sm text-blue-600 font-medium">
              {user.connections} connections
            </p>
          </div>

          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Connect
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              Message
            </motion.button>
          </div>
        </div>

        {/* About Section */}
        <div className="border-t border-gray-100 pt-4">
          <h3 className="font-semibold text-gray-900 mb-2">About</h3>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "60px" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 leading-relaxed">{user.about}</p>
          </motion.div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 font-medium mt-2 hover:underline"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
