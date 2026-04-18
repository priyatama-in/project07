import { useState } from "react";
import Sparkles from "./Sparkles";
import birthdayPhoto from "../assets/1000269666.webp";

interface LockScreenProps {
  onUnlock: () => void;
}

const SECRET_PASSWORD = "delulu";

const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === SECRET_PASSWORD) {
      setUnlocking(true);
      setTimeout(onUnlock, 1500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 flex items-center justify-center relative overflow-hidden">
      <Sparkles count={12} />
      <div className={`text-center page-enter ${error ? "shake" : ""} z-10 px-4 max-w-2xl w-full animate-fade-in`}>
        {/* Polaroid-style image container */}
        <div className="mb-12 inline-block">
          <div className="relative group">
            {/* Bow emoji decoration on top */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl">
              🎀
            </div>

            {/* Polaroid frame */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              {/* Image container */}
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-rose-200">
                <img
                  src={birthdayPhoto}
                  alt="Special"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Polaroid text at bottom */}
              <div className="mt-4 text-center">
                <p className="text-pink-400 font-handwriting text-lg">Forever</p>
              </div>
            </div>

            {/* Teddy bear emoji below */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-5xl animate-bounce" style={{ animationDuration: "3s" }}>
              🧸
            </div>
          </div>
        </div>

        {!unlocking && (
          <>
            <div className="mt-20">
              {/* Main heading */}
              <h1 className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                A Special Surprise
              </h1>

              {/* Subtitle */}
              <p className="font-handwriting text-xl md:text-2xl text-rose-400 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Enter the secret password 💌
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xs mx-auto">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter the secret password 💌"
                className="w-full px-6 py-3 rounded-full bg-white border-2 border-pink-200 text-center font-handwritten text-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder:text-pink-300/60 shadow-lg"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold text-lg tracking-wide hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Unlock Surprise 🎁
              </button>
            </form>

            {error && (
              <p className="mt-4 text-pink-500 font-handwriting text-lg animate-bounce">
                Oops! Wrong password 😤 Try again!
              </p>
            )}

            <p className="mt-6 text-rose-400/70 font-handwriting text-sm">
              Hint: what do I always say to you? 💕
            </p>
          </>
        )}

        {unlocking && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl rounded-full p-8 animate-pulse">🎁</div>
          </div>
        )}
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default LockScreen;
