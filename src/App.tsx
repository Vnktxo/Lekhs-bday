import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';
import { PolaroidCard } from './components/PolaroidCard';
import CurvedLoop from './components/CurvedLoop';
import ImageCarousel from './components/ImageCarousel';
import { MusicPlayer } from './components/MusicPlayer';

// --- DATA FOR YOUR COMPONENTS ---

const reasons = [
  { id: 1, type: 'text', content: 'Because you have the kindest heart I have ever known.' },
  { id: 2, type: 'photo', content: '/IMG_20250929_160246_237.jpg' },
  { id: 3, type: 'text', content: 'Because you make me laugh like no one else can.' },
  { id: 4, type: 'photo', content: '/IMG_20250929_160246_679.jpg' },
  { id: 5, type: 'text', content: 'For all the late-night talks and silly jokes.' },
  { id: 6, type: 'photo', content: '/IMG_20250929_160247_066.jpg' },
  { id: 7, type: 'text', content: 'Because you always know how to make me feel better.' },
  { id: 8, type: 'photo', content: '/20240802_083852.jpg' },
  { id: 9, type: 'text', content: 'For being my rock and my biggest supporter.' },
  { id: 10, type: 'photo', content: '/20241129_160323.jpg' },
  { id: 11, type: 'text', content: 'Because you inspire me to be a better person every day.' },
  { id: 12, type: 'photo', content: '/IMG_20250929_160335_391.jpg' },
  { id: 13, type: 'text', content: 'For all the adventures we have shared and those yet to come.' },
  { id: 14, type: 'photo', content: '/IMG_20250929_160335_447.jpg' },
  { id: 15, type: 'text', content: 'Because you are simply amazing in every way.' },
  { id: 16, type: 'photo', content: '/IMG_20250929_160351_113.jpg' }, 
];

const myTracks = [
  { id: 0, title: 'Replay', artist: 'Iyaz', image: '/music/replay-art.jpg', src: '/music/replay.mp3' },
  { id: 1, title: 'All of Me', artist: 'John Legend', image: '/music/all-of-me-art.jpg', src: '/music/all-of-me.mp3' },
  { id: 2, title: 'Perfect', artist: 'Ed Sheeran', image: '/music/perfect-art.jpg', src: '/music/perfect.mp3' },
  { id: 3, title: "Fallin' All in you", artist: 'Shawn Mendes', image: '/music/fallin-all-in-you-art.jpg', src: '/music/fallin-all-in-you.mp3' },
  { id: 4, title: 'Adore You', artist: 'Harry Styles', image: '/music/adore-you-art.jpg', src: '/music/adore-you.mp3' },
  { id: 5, title: 'Snowchild', artist: 'The Weeknd', image: '/music/snowchild-art.jpg', src: '/music/snowchild.mp3' },
  { id: 6, title: 'If I can\'t Have You', artist: 'Shawn Mendes', image: '/music/if-i-cant-have-you-art.jpg', src: '/music/if-i-cant-have-you.mp3' },
  { id: 7, title: 'Lost in the Fire', artist: 'Gesaffelstein & The Weeknd', image: '/music/lost-in-the-fire-art.jpg', src: '/music/lost-in-the-fire.mp3' },
  { id: 8, title: 'Do I Wanna Know?', artist: 'Arctic Monkeys', image: '/music/do-i-wanna-know-art.jpg', src: '/music/do-i-wanna-know.mp3' },
  { id: 9, title: 'I wanna Be Yours', artist: 'Arctic Monkeys', image: '/music/i-wanna-be-yours-art.jpg', src: '/music/i-wanna-be-yours.mp3' },
  { id: 10, title: 'R U Mine?', artist: 'Arctic Monkeys', image: '/music/r-u-mine-art.jpg', src: '/music/r-u-mine.mp3' },
  { id: 11, title: 'So far away(feat. Jamie Foxx)', artist: 'Martin Garrix', image: '/music/so-far-away-art.jpg', src: '/music/so-far-away.mp3' },
  { id: 12, title: 'Drown(feat. Clinton Kane)', artist: 'Martin Garrix', image: '/music/drown-art.jpg', src: '/music/drown.mp3' },
  { id: 13, title: 'Polaroid(feat. Liam Payne)', artist: 'Jonas Blue', image: '/music/polaroid-art.jpg', src: '/music/polaroid.mp3' },
  { id: 14, title: 'Collide(feat. Tyga)', artist: 'Justine Skye', image: '/music/collide-art.jpg', src: '/music/collide.mp3' },
  { id: 15, title: 'A sky full of stars', artist: 'Coldplay', image: '/music/a-sky-full-of-stars-art.jpg', src: '/music/a-sky-full-of-stars.mp3' },
  { id: 16, title: 'Those Eyes', artist: 'New west', image: '/music/those-eyes-art.jpg', src: '/music/those-eyes.mp3' },
  { id: 17, title: 'Naan Un', artist: 'A.R. Rahman', image: '/music/naan-un-art.jpg', src: '/music/naan-un.mp3' },
  { id: 18, title: 'Boomiyil', artist: 'Pradeep Kumar', image: '/music/boomiyil-art.jpg', src: '/music/boomiyil.mp3' },
  { id: 19, title: 'Azhage', artist: 'Hiphop Tamizha', image: '/music/azhage-art.jpg', src: '/music/azhage.mp3' },
  { id: 20, title: 'Feel It', artist: 'D4vd', image: '/music/feel-it-art.jpg', src: '/music/feel-it.mp3' },
  { id: 21, title: 'Nee Marilyn Monroe', artist: 'AR Rahman', image: '/music/nee-marilyn-monroe-art.jpg', src: '/music/nee-marilyn-monroe.mp3' },
  { id: 22, title: 'Ei Suzhali', artist: 'Santhosh Narayanan', image: '/music/ei-suzhali-art.jpg', src: '/music/ei-suzhali.mp3' },
  { id: 23, title: 'Tharangini', artist: 'AR Rahman', image: '/music/tharangini-art.jpg', src: '/music/tharangini.mp3' },
  { id: 24, title: 'Ilamai Thirumbudhe', artist: 'Anirudh Ravichander', image: '/music/ilamai-thirumbudhe-art.jpg', src: '/music/ilamai-thirumbudhe.mp3' },
  { id: 25, title: 'Nee kavithaigala', artist: 'Pradeep Kumar', image: '/music/nee-kavithaigala-art.jpg', src: '/music/nee-kavithaigala.mp3' },
  { id: 26, title: 'vizhi Moodi', artist: 'Karthik', image: '/music/vizhi-moodi-art.jpg', src: '/music/vizhi-moodi.mp3' },
  { id: 27, title: 'Senjitaley', artist: 'anirudh Ravichander', image: '/music/senjitaley-art.jpg', src: '/music/senjitaley.mp3' },
  { id: 28, title: 'Agasatha', artist: 'Pradeep Kumar', image: '/music/agasatha-art.jpg', src: '/music/agasatha.mp3' },
  { id: 29, title: 'Nee Partha', artist: 'Ilaiyaraaja', image: '/music/nee-partha-art.jpg', src: '/music/nee-partha.mp3' },
  { id: 30, title: 'Neee', artist: 'yuvan Shankar Raja', image: '/music/neee-art.jpg', src: '/music/neee.mp3' },
  { id: 31, title: 'My Love(feat. T.I.)', artist: 'Justin Timberlake', image: '/music/my-love-art.jpg', src: '/music/my-love.mp3' },
];

function App() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showFinale, setShowFinale] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleYesClick = () => {
    setShowFinale(true);
  };

  const galleryItems = reasons
    .filter(reason => reason.type === 'photo')
    .map((reason) => ({
      image: reason.content,
      text: '',
    }));

  const textReasons = reasons.filter(reason => reason.type === 'text');

  return (
    <main className="overflow-x-hidden">
      <section className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-pink-300 to-rose-300 flex flex-col items-center justify-center relative px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40">
          <CurvedLoop 
            marqueeText="HAPPY ✦ BIRTHDAY ✦ LEKHA ✦ DABBA ✦ MOOKI ✦ PAPA ✦ CUTIEEEE ✦ BANGARAM ✦ MEANIE ✦ MUSHROOM GIRL ✦ BUB ✦ BBG ✦ YOME ✦HAPPY ✦ BIRTHDAY ✦ LEKHA ✦ DABBA ✦ MOOKI ✦"
            speed={4}
            curveAmount={200}
            direction="left"
            interactive={true}
            className="gradient-text-loop"
          />
        </div>
        
        <div className="text-center z-10 px-6 max-w-2xl mt-32">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-500 font-poppins mb-4">
              Happy BIRTHDAY, LEKHA 💖
            </h1>
            <p className="font-quicksand text-lg md:text-xl text-gray-700 my-6">
              A year of beautiful memories, endless laughter, and infinite love...
            </p>
          </div>
        </div>
        
        <Confetti 
          width={windowSize.width} 
          height={windowSize.height} 
          recycle={true} 
          numberOfPieces={150}
        />
        
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      <section className="w-full min-h-screen bg-pink-900 flex items-center justify-center p-4">
        <ImageCarousel items={galleryItems} />
      </section>

      <section className="bg-gradient-to-br from-white to-pink-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 font-poppins">
            A Few More Reasons...
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textReasons.map((reason) => (
  <PolaroidCard key={reason.id} content={reason.content} />
))}
        </div>
      </section>

      <section className="min-h-screen bg-gradient-to-br from-pink-300 to-rose-400 flex flex-col items-center justify-center py-20 px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-white font-poppins text-center mb-12 drop-shadow-lg">
          Listen to OUR TUNES 🎵
        </h3>
        <MusicPlayer tracks={myTracks} />
      </section>

      <section className="bg-gradient-to-br from-pink-100 to-rose-200 py-20 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-pink-600 font-poppins mb-8">
            One Last Thing...
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 font-quicksand leading-relaxed">
            Every moment with you is a treasure. You make my world brighter, my days happier, 
            and my heart fuller. Thank you for being you. ❤️
          </p>
          <button
            onClick={handleYesClick}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Click Me! 💕
          </button>
        </div>
      </section>

      {showFinale && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 text-center px-4">
          <p className="text-white text-5xl md:text-7xl font-bold animate-pulse font-poppins mb-4">
            I LOVE YOU! ❤️
          </p>
          <p className="text-white text-2xl md:text-3xl font-quicksand mt-4">
            Forever and always, LEKHA 💖
          </p>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            tweenDuration={8000}
          />
          <button
            onClick={() => setShowFinale(false)}
            className="mt-12 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full backdrop-blur-sm transition-all"
          >
            Close
          </button>
        </div>
      )}
    </main>
  );
}

export default App;