"use client";
import React from 'react';

interface CircularProgressBarButtonProps {
  progress: number;
  togglePlayPause: () => void;
  isPlaying: boolean;
}

const CircularProgressBarButton: React.FC<CircularProgressBarButtonProps> = ({ 
  progress, 
  togglePlayPause, 
  isPlaying 
}) => {
  const radius = 23;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-block z-50">
      <button
        type="button"
        onClick={togglePlayPause}
        className="p-3 2xl:p-4 rounded-full z-10 relative text-white hover:text-blue-400 transition-colors"
      >
        {!isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 12 12"
          >
            <path
              fill="currentColor"
              d="M4.496 1.994A1 1 0 0 0 3 2.862v6.277a1 1 0 0 0 1.496.868l5.492-3.139a1 1 0 0 0 0-1.736z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
            />
          </svg>
        )}
      </button>
      <svg
        className="absolute top-0 left-0 z-0"
        width="100%"
        height="100%"
        viewBox="0 0 48 48"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={isNaN(offset) ? '0' : offset}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBarButton;