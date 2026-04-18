import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";
import Confetti from "./Confetti";
import birthdayPhoto from "../assets/1000269666.webp";
import { useEffect, useState } from "react";

const FinalScreen = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen paper-bg flex items-center justify-center relative overflow-hidden">
      <FloatingHearts count={25} />
      <Sparkles count={15} />
      <Confetti active={showConfetti} />

      {/* Soft glowing lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-blush/20 rounded-full blur-3xl" />
      </div>

      <div className="text-center page-enter z-10 px-4">
        <h1 className="font-vintage-script text-6xl md:text-8xl text-primary mb-4 glow-pulse inline-block px-4 py-2 rounded-xl">
          Happy Birthday Again
        </h1>
        <h2 className="font-vintage-script text-4xl md:text-6xl text-accent-foreground mb-8">
          My Delulu 💖
        </h2>

        {/* Photo */}
        <div className="relative inline-block mb-10">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden photo-glow border-4 border-gold-light mx-auto">
            <img
              src={birthdayPhoto}
              alt="Birthday Person"
              className="w-full h-full object-cover"
              width={288}
              height={288}
            />
          </div>
          <span className="absolute -top-4 -right-6 text-4xl float-heart">💕</span>
          <span className="absolute -bottom-4 -left-6 text-3xl float-heart" style={{ animationDelay: "1.5s" }}>💗</span>
          <span className="absolute top-1/2 -right-10 text-2xl float-heart" style={{ animationDelay: "0.7s" }}>✨</span>
        </div>

        <p className="font-handwritten text-2xl md:text-3xl text-foreground/80 max-w-md mx-auto leading-relaxed">
          Thank you for being the most amazing person in my life.
          May all your dreams come true! 🌟
        </p>

        <div className="mt-8 text-4xl space-x-3">
          <span className="inline-block bounce-gentle">🎂</span>
          <span className="inline-block bounce-gentle" style={{ animationDelay: "0.2s" }}>🎉</span>
          <span className="inline-block bounce-gentle" style={{ animationDelay: "0.4s" }}>💖</span>
          <span className="inline-block bounce-gentle" style={{ animationDelay: "0.6s" }}>🎈</span>
          <span className="inline-block bounce-gentle" style={{ animationDelay: "0.8s" }}>🥳</span>
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
