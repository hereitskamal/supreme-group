"use client";
import React, { useState, useReducer } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollDirection } from "@/hooks/useScrollDirection"

const langDropdownOptions = [
  {
    text: 'English',
    lang: 'en',
  },
  
  {
    text: 'German',
    lang: 'de',
  },
  {
    text: 'Japanese',
    lang: 'ja',
  },
  {
    text: 'Spanish',
    lang: 'es',
  },
 
]

const LanguageDropdown = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className={`flex items-center gap-1 text-xs font-bold transition-colors ${
          isMobile 
            ? 'text-white/70 hover:text-white' 
            : 'text-black hover:text-black/80'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/images/lang.svg"
          alt="Language Icon"
          width={15}
          height={15}
        />
        ENG
        
      </button>
      
      {isOpen && (
        <div className={`absolute ${isMobile ? 'top-full left-0' : 'top-full right-0'} mt-2 w-32 ${
          isMobile ? 'bg-gray-800' : 'bg-white'
        } border ${isMobile ? 'border-white/20' : 'border-gray/20'} rounded-lg shadow-lg py-2 z-50`}>
          {langDropdownOptions.map((option, index) => (
            <button
              key={index}
              className={`block w-full text-left px-4 py-2 transition-colors ${
                isMobile 
                  ? 'text-white/70 hover:text-white hover:bg-white/10' 
                  : 'text-black hover:bg-gray/10'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const MobileNavModal = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <Image 
          src="/images/Supreme_logo.svg" 
          alt="Supreme Logo" 
          width={120} 
          height={40}
          className="h-10 w-auto"
        />
        <button
          onClick={toggle}
          className="text-white hover:text-white/80 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="pt-4 border-t border-white/20">
          <LanguageDropdown isMobile={true} />
        </div>
        
        <div className="pt-4">
          <a
            href="https://www.linkedin.com/company/supreme-group-company/"
           
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M4.98304 7.19704C6.19144 7.19704 7.17104 6.21744 7.17104 5.00904C7.17104 3.80065 6.19144 2.82104 4.98304 2.82104C3.77464 2.82104 2.79504 3.80065 2.79504 5.00904C2.79504 6.21744 3.77464 7.19704 4.98304 7.19704Z" />
              <path d="M9.23697 8.85493V20.9939H13.006V14.9909C13.006 13.4069 13.304 11.8729 15.268 11.8729C17.205 11.8729 17.229 13.6839 17.229 15.0909V20.9949H21V14.3379C21 11.0679 20.296 8.55493 16.474 8.55493C14.639 8.55493 13.409 9.56193 12.906 10.5149H12.855V8.85493H9.23697ZM3.09497 8.85493H6.86997V20.9939H3.09497V8.85493Z" />
            </svg>
            LinkedIn
          </a>
          
          <button 
            onClick={toggle}
            className="w-full bg-[#5CD6FF] hover:bg-blue-700 text-black px-6 py-3 rounded-full transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isOpen, toggleState] = useReducer((s) => !s, false)
  const { isVisible } = useScrollDirection()

  const goToContact = () => {
    window.location.href = '/contact-us'
  }

  return (
    <nav>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-3 flex gap-4 items-center justify-between">
          <a href="/">
            <Image
              src="/images/Supreme_logo.svg"
              alt="Supreme Logo"
              width={120}
              height={40}
              className="h-10 w-auto cursor-pointer"
              priority
            />
          </a>

          {/* Desktop CTA Section */}
          <div className="gap-10 xl:flex justify-end items-center hidden">
            <button
              onClick={goToContact}
              className=" bg-[#5CD6FF] hover:bg-blue-700 text-black px-6 py-2 rounded-full font-medium transition-colors"
            >
              Contact Us
            </button>

            <Image
              src="/images/in.svg"
              alt="Supreme Logo"
              width={40}
              height={40}
              className="h-4 w-4 object-fit cursor-pointer"
              priority
            />


            <LanguageDropdown />
          </div>

          <button
            type="button"
            className="xl:hidden block p-2"
            onClick={toggleState}
          >
            <svg
              className="w-6 h-6 fill-black"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </motion.header>

      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 fixed inset-0 h-screen w-screen bg-black text-white z-50`}
      >
        <MobileNavModal toggle={toggleState} />
      </div>
    </nav>
  )
}
