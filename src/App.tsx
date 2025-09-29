import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';
import { FlipCard } from './components/FlipCard';

// Your reasons and photos data
const reasons = [
  { id: 1, type: 'text', content: 'Because you have the kindest heart I have ever known.' },
  { id: 2, type: 'photo', content: 'https://picsum.photos/seed/her-photo/800/600' },
  { id: 3, type: 'text', content: 'Because you make me laugh like no one else can.' },
  { id: 4, type: 'text', content: 'For all the late-night talks and silly jokes.' },
  { id: 5, type: 'photo', content: 'https://picsum.photos/seed/us-photo/800/600' },
  { id: 6, type: 'text', content: 'Because you always know how to make me feel better.' },
];

function App() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  // NEW STATES for the final section
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '60%' });
  const [showPleadingMessage, setShowPleadingMessage] = useState(false);
  const [showFinale, setShowFinale] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // NEW: A timer for the "Please say yes" message
  useEffect(() => {
    if (showFinale) return; // Don't run the timer if she already said yes

    const timer = setTimeout(() => {
      setShowPleadingMessage(true);
    }, 60000); // 60 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [showFinale]);


  // NEW: Function to move the "No" button
  const handleNoHover = () => {
    const newTop = Math.random() * 80 + 10;
    const newLeft = Math.random() * 80 + 10;
    setNoButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };
  
  const handleYesClick = () => {
    setShowFinale(true);
  };

  return (
    <main>
      {/* ... Welcome and Gallery sections are the same ... */}
      <section className="h-screen w-screen bg-pink-100 flex flex-col items-center justify-center relative">
        <h1 className="text-6xl md:text-8xl font-bold text-pink-500 font-serif">Happy Birthday</h1>
        <p className="text-2xl md:text-4xl text-pink-400 mt-4">Lekha!</p>
        <Confetti width={windowSize.width} height={windowSize.height} recycle={true} numberOfPieces={150}/>
        <div className="absolute bottom-10 animate-bounce"><svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {reasons.map((reason) => reason.type === 'photo' ? (<div key={reason.id} className="shadow-lg rounded-lg overflow-hidden h-48"><img src={reason.content} alt="A special memory" className="w-full h-full object-cover"/></div>) : (<FlipCard key={reason.id} content={reason.content}/>))}
        </div>
      </section>

      {/* NEW: Final Message and Game Section */}
      <section className="bg-pink-100 py-20 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 font-serif">One last thing...</h2>
          <p className="text-xl text-pink-700 mt-6">
            Replace this with your final heartfelt message. Talk about your hopes, dreams, and how much she means to you. Make it personal and sweet!
          </p>
          <p className="text-2xl text-pink-800 mt-12 font-semibold">Will you have the best birthday ever?</p>
          
          {/* Yes/No Buttons */}
          <div className="mt-8 h-48 relative">
            <button
              onClick={handleYesClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-lg text-2xl transition-transform duration-200 hover:scale-110"
            >
              Yes!
            </button>

            <button
              onMouseEnter={handleNoHover}
              style={{ position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left }}
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out"
            >
              No
            </button>
            
            {showPleadingMessage && (
              <p className="mt-24 text-pink-600 animate-pulse">PLEASE SAY YES 🙏</p>
            )}
          </div>
        </div>
      </section>
      
      {/* NEW: Finale Celebration Screen */}
      {showFinale && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <p className="text-white text-5xl md:text-7xl font-bold animate-pulse">I LOVE YOU!</p>
          {/* This confetti is a one-time explosion */}
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            tweenDuration={8000}
          />
          {/* We can add animated flowers/fireworks here later if we want! */}
        </div>
      )}
    </main>
  );
}

export default App;