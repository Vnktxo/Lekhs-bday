import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';
import { PolaroidCard } from './components/PolaroidCard';
import CurvedLoop from './components/CurvedLoop';
import { MusicPlayer } from './components/MusicPlayer'; 

// --- QUESTION SECTION COMPONENT ---
function QuestionSection({ onYesClick }: { onYesClick: () => void }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '60%' });
  const [showPleading, setShowPleading] = useState(false);
  const [noButtonText, setNoButtonText] = useState('Nope');
  const [hoverCount, setHoverCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPleading(true);
      setNoButtonText('Are you sure you wanna do this?');
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleNoHover = () => {
    const newTop = Math.random() * 70 + 10;
    const newLeft = Math.random() * 70 + 10;
    setNoButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
    setHoverCount(prev => prev + 1);
    
    if (hoverCount > 5) {
      setNoButtonText('Really? 🥺');
    }
    if (hoverCount > 10) {
      setNoButtonText('Please don\'t... 💔');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-300 via-pink-300 to-purple-300 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              opacity: 0.3,
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Main question card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 font-poppins mb-6">
          A Little Question... 💭
        </h2>
        
        <p className="text-2xl md:text-3xl text-gray-700 font-quicksand mb-12 leading-relaxed">
          Will you stay with me forever? ❤️
        </p>

        {showPleading && (
          <p className="text-xl md:text-2xl text-pink-500 font-bold mb-6 animate-gradual-fade-in">
            PLEASE SAY YES! 🥺💕
          </p>
        )}

        {/* Yes Button - Fixed position */}
        <div className="flex flex-col items-center justify-center gap-6 relative" style={{ minHeight: '100px' }}>
          <button
            onClick={onYesClick}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-12 rounded-full text-2xl shadow-lg transform hover:scale-110 transition-all duration-300 z-20"
          >
            Yes! 💖
          </button>

          {/* No Button - Moving position */}
          <button
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            style={{
              position: 'absolute',
              top: noButtonPosition.top,
              left: noButtonPosition.left,
              transform: 'translate(-50%, -50%)',
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-200"
          >
            {noButtonText}
          </button>
        </div>

        {hoverCount > 3 && (
          <p className="mt-8 text-gray-600 italic animate-fade-in-slow">
            You sure you wanna say NO?! 🥺
          </p>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}

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
  { id: 16, type: 'photo', content: '/IMG_20250929_160351_113.jpg' }, 
  { id: 17, type: 'text', content: 'For being you, and for letting me be me.' },
  { id: 18, type: 'photo', content: '/20250825_200447.jpg' },
  { id: 19, type: 'text', content: 'Because life is just better with you in it.' },
  { id: 20, type: 'photo', content: '/20240829_131823.jpg' },
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
  { id: 27, title: 'Agasatha', artist: 'Pradeep Kumar', image: '/music/agasatha-art.jpg', src: '/music/agasatha.mp3' },
  { id: 28, title: 'Nee Partha', artist: 'Ilaiyaraaja', image: '/music/nee-partha-art.jpg', src: '/music/nee-partha.mp3' },
  { id: 29, title: 'Neee', artist: 'yuvan Shankar Raja', image: '/music/neee-art.jpg', src: '/music/neee.mp3' },
];

function App() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showFinale, setShowFinale] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleQuestionYes = () => {
    setQuestionAnswered(true);  
    setShowFireworks(true);
    
    setTimeout(() => {
      setShowFireworks(false);
    }, 5000);
  };

  const handleFinaleClick = () => {
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
            marqueeText="HAPPY ✦ BIRTHDAY ✦ LEKHA ✦ DABBA ✦ MOOKI ✦ PAPA ✦ CUTIEEEE ✦ PLUMPKIN ✦ BANGARAM ✦ POOKIE ✦ MOMMY ✦ PLUMPY ✦ HONEY BUM ✦ WOOKIE ✦ MEANIE ✦ MUSHROOM GIRL ✦ BUB ✦ BBG ✦ YOME ✦ SRI ✦ BIRTHDAY ✦ LEKHA ✦ DABBA ✦ MOOKI ✦"
            speed={4}
            curveAmount={200}
            direction="left"
            interactive={true}
            className="gradient-text-loop"
          />
        </div>
        
        <div className="text-center z-10 px-6 max-w-2xl mt-32">
          <div className="bg-white-80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-500 font-poppins mb-4">
              Happy 21! LEKHA 💖
            </h1>
            <p className="font-quicksand text-lg md:text-xl text-gray-800 my-6">
              Thanking you every year for making my life better just by existing and making <b>BEAUTIFUL</b> memories, laughters, tears and unconditional infinite love...
            </p>
          </div>
        </div>
        
        <Confetti 
          width={windowSize.width} 
          height={windowSize.height} 
          recycle={true} 
          numberOfPieces={250}
        />
        
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
      
      <section className="min-h-screen bg-gradient-to-br from-pink-300 to-rose-400 flex flex-col items-center justify-center py-20 px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-white font-poppins text-center mb-12 drop-shadow-lg">
          But first let's start with OUR TUNES 🎵
        </h3>
        <MusicPlayer tracks={myTracks} />
      </section>

      <section className="w-full min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 overflow-hidden">
        <div className="w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-4 sm:gap-6 animate-scroll-infinite">
              {[...galleryItems, ...galleryItems].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-infinite {
            animation: scroll-infinite 25s linear infinite;
          }
          
          .animate-scroll-infinite:hover {
            animation-play-state: paused;
          }
        `}</style>
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

      {!questionAnswered && <QuestionSection onYesClick={handleQuestionYes} />}

      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={800}
            gravity={0.3}
            colors={['#ec4899', '#f43f5e', '#fb7185', '#fda4af', '#fecdd3']}
          />
        </div>
      )}

      {questionAnswered && !showFinale && (
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
              onClick={handleFinaleClick}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Click Me! 💕
            </button>
          </div>
        </section>
      )}

      {showFinale && (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4">
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl w-full text-center text-white">
      {/* Image at top */}
      <img
        src="/IMG_20250929_160351_113.jpg"
        alt="Lekha"
        className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-white/30"
      />

      {/* Title */}
      <p className="text-4xl md:text-6xl font-bold animate-pulse font-poppins mb-6">
        I LOVE YOU MORE!
      </p>

      {/* Message */}
      <p className="text-lg md:text-2xl font-quicksand leading-relaxed">
        It's almost 4 years now and 8 if I count from 8th or 2018 ig; like where
        did all that time go? Still the MOST BEAUTFUL WOMAN I have ever seen and
        ever will like you make every other person unattractive! I'm so obsessed
        with ya like I smile at the beautiful memories and moments we had years
        ago which instantly lifts my mood and everything. Once again HAPPY
        BIRTHDAY! I wish ALL YOUR DREAMS COME and pains go away and also don't
        you ever forget that 60 years promise we made that day. I want to grow
        old with you. Forever and always Thank you for not being everything I've
        ever wanted but being SO MUCH MORE THAN THAT!!!, LEKHA 💖
      </p>

      {/* Confetti */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={500}
        tweenDuration={8000}
      />

      {/* Button */}
      <button
        onClick={() => setShowFinale(false)}
        className="mt-10 bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg"
      >
        LOVE YOU TOO!
      </button>
    </div>
  </div>
)}
    </main>
  );
}

export default App;