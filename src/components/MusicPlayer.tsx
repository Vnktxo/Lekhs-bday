// src/components/MusicPlayer.tsx

import { useState, useRef, useEffect } from 'react';

// Define the shape of a single track
export interface Track {
  id: number;
  title: string;
  artist: string;
  image: string; // URL to album art
  src: string;   // URL to the mp3 file
}

interface MusicPlayerProps {
  tracks: Track[];
}

export function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.log("Playback was prevented.", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };
  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  return (
    // The main container is now a vertical flex column
    <div className="w-full max-w-sm rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md border border-white/20 font-poppins text-white flex flex-col items-center">
      <audio ref={audioRef} src={currentTrack.src} onEnded={handleNext} />

      {/* Album Art (larger and on top) */}
      <img src={currentTrack.image} alt={currentTrack.title} className="w-full aspect-square rounded-lg shadow-md mb-6" />

      {/* Song Info (centered below art) */}
      <div className="text-center">
        <h3 className="font-bold text-2xl truncate">{currentTrack.title}</h3>
        <p className="text-md opacity-80 mt-1">{currentTrack.artist}</p>
      </div>
      
      {/* Controls (at the bottom) */}
      <div className="flex items-center justify-center space-x-6 mt-8 w-full">
        <button onClick={handlePrev} className="p-2 rounded-full hover:bg-white/20 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>
        </button>
        <button onClick={handlePlayPause} className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-colors shadow-lg">
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path></svg>
          )}
        </button>
        <button onClick={handleNext} className="p-2 rounded-full hover:bg-white/20 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg>
        </button>
      </div>
    </div>
  );
}