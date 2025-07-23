// components/ProfileHeader.tsx
"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Camera,
  MapPin,
  Calendar,
  ExternalLink,
  Edit,
  MoreHorizontal,
} from "lucide-react";
import mockData from "../../data/linkedin-portfolio.json";
import Image from "next/image";

export default function ProfileHeader() {
  const { user } = mockData;
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
    >
      {/* Background Image */}
      <div className="relative h-32 sm:h-40 md:h-48">
        {user.backgroundImage ? (
          <Image
            src={user.backgroundImage}
            alt={`${user.name}'s banner`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
        >
          <Camera size={14} className="sm:w-4 sm:h-4" />
        </motion.button>

        {/* Profile Image */}
        <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-3 sm:left-4 md:left-6">
          <div className="relative">
            {user.profileImage ? (
              <Image
                src={user.profileImage}
                alt={`${user.name}'s profile`}
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
                width={128}
                height={128}
              />
            ) : (
              <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 sm:border-4 border-white bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                  KS
                </span>
              </div>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 md:bottom-2 md:right-2 p-1 sm:p-1.5 md:p-2 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <Camera size={10} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 px-3 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 space-y-4 lg:space-y-0">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 truncate">
                {user.name}
              </h1>
              {true && (
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded w-fit">
                  Premium
                </span>
              )}
            </div>

            <p className="text-base sm:text-lg text-gray-700 mb-3 leading-relaxed">
              {user.headline}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <MapPin size={14} className="flex-shrink-0" />
                <span className="truncate">{user.location}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium w-fit"
              >
                Contact info
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
              <span className="text-blue-600 font-medium">
                {user.connections} connections
              </span>
              <span className="hidden sm:inline">•</span>
              {/* <span className="text-blue-600 font-medium">
                {user.followers? user.followers : 0} followers
              </span> */}
            </div>

           
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Open to
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 sm:px-6 py-2 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors text-center"
            >
              Add profile section
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full self-center sm:self-auto"
            >
              <MoreHorizontal size={20} />
            </motion.button>
          </div>
        </div>

        {/* About Section */}
        <div className="border-t border-gray-100 pt-4 sm:pt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              About
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full flex-shrink-0"
            >
              <Edit size={16} />
            </motion.button>
          </div>

          <motion.div
            initial={false}
            animate={{ height: showMore ? "auto" : "120px" }}
            className="overflow-hidden"
          >
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {user.about}
            </p>
          </motion.div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 font-medium mt-2 hover:underline text-sm sm:text-base"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>

        {/* Quick Stats */}
        <div className="border-t border-gray-100 pt-4 sm:pt-6 mt-4 sm:mt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-semibold text-gray-900">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Profile views
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-semibold text-gray-900">
                1.2K
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Post impressions
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-semibold text-gray-900">
                89
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Search appearances
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-semibold text-gray-900">
                24
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Profile actions
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
