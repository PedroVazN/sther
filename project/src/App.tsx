import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

function FloatingHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-pink-400/30 animate-float-${i % 15}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
          size={24 + Math.random() * 24}
        />
      ))}
    </div>
  );
}

function BurstHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <Heart
          key={i}
          className="absolute left-1/2 top-1/2 text-pink-500 animate-burst-heart"
          style={{
            animationDelay: `${Math.random() * 0.8}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: 0.6 + Math.random() * 0.4,
          }}
          size={20 + Math.random() * 30}
        />
      ))}
    </div>
  );
}

function RainHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-pink-300 animate-rain-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
          size={16 + Math.random() * 16}
        />
      ))}
    </div>
  );
}

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleReveal = () => {
    setShowBurst(true);
    setTimeout(() => {
      setShowVideo(true);
      setShowBurst(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 relative overflow-hidden">
      <FloatingHearts />
      <RainHearts />
      {showBurst && <BurstHearts />}
      
      <div className={`max-w-3xl mx-auto p-8 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-transparent pointer-events-none" />
          
          <h1 className="text-4xl font-bold text-pink-600 mb-6 relative">
            Para Sther ❤️
          </h1>
          
          <div className="mb-8">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-pink-300 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://github.com/PedroVazN/sther/blob/main/project/src/sther.png?raw=true"
                alt="Sther"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
            </div>
          </div>

          <p className="text-xl text-pink-700 mb-8 font-medium">
            Quero te ver logo vida
          </p>

          {!showVideo ? (
            <button
              onClick={handleReveal}
              className="group px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto space-x-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/30 to-pink-400/0 group-hover:translate-x-full transition-transform duration-1000" />
              <Heart className="animate-pulse" size={24} />
              <span>Clique para ver sua surpresa</span>
              <Heart className="animate-pulse" size={24} />
            </button>
          ) : (
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-8 animate-fade-in">
              <video 
                className="w-full h-full object-cover"
                src="https://youtube.com/shorts/gDchuVSrJaU?feature=share"
                controls
                autoPlay
                playsInline
              />
            </div>
          )}

          <div className="text-pink-600 text-lg mt-8">
            <p>Com todo meu amor e carinho ❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;