import { useState } from 'react';
import { motion } from 'framer-motion';

type FlipCardProps = {
  content: string;
};

export function FlipCard({ content }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-48 [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-pink-50 shadow-lg rounded-lg flex flex-col items-center justify-center text-center p-4">
          <p className="text-2xl text-pink-400">💌</p>
          <p className="text-lg text-pink-600 font-semibold mt-2">A little note...</p>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-pink-500 shadow-lg rounded-lg flex items-center justify-center text-center p-6">
          <p className="text-xl text-white">{content}</p>
        </div>
      </motion.div>
    </div>
  );
}