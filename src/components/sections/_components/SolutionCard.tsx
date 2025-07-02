"use client";
import React from 'react';

interface SolutionCardProps {
  video: string;
  title: string;
  poster: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ video, title, poster }) => {
  return (
    <div className="text-white flex flex-col justify-between text-center">
      <video
        loop
        muted
        playsInline
        poster={poster}
        className="object-cover mb-4 rounded-lg h-48"
      >
        <source src={video} type="video/mp4" />
      </video>
      <span className="text-sm">{title}</span>
    </div>
  );
};

export default SolutionCard;
