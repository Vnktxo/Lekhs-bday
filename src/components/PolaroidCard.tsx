// src/components/PolaroidCard.tsx

import { useState } from 'react';

type PolaroidCardProps = {
  content: string;
};

export function PolaroidCard({ content }: PolaroidCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-white p-4 pb-16 shadow-xl transition-all duration-500 cursor-pointer ${
          isHovered ? 'transform -rotate-2 scale-105 shadow-2xl' : 'rotate-1'
        }`}
        style={{
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
            : '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Polaroid Image Area */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-pink-100 to-rose-200 mb-4 flex items-center justify-center overflow-hidden">
          {/* Heart Icon */}
          <div
            className={`transition-all duration-700 ${
              isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
            }`}
          >
            <svg
              className="w-24 h-24 text-pink-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Decorative corner tape */}
          <div className="absolute top-2 right-2 w-12 h-6 bg-yellow-100/60 transform rotate-45 shadow-sm"></div>
        </div>

        {/* Handwritten Message Area */}
        <div className="px-2">
          <p
            className="text-gray-700 text-center leading-relaxed"
            style={{
              fontFamily: "'Indie Flower', cursive",
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}
          >
            {content}
          </p>
        </div>

        {/* Small heart doodle at bottom */}
        <div className="absolute bottom-3 right-4 opacity-40">
          <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>
    </div>
  );
}