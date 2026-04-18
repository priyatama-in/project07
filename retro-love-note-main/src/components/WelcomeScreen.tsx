import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";
import birthdayPhoto from "../assets/1000269666.webp";

interface WelcomeScreenProps {
  onContinue: () => void;
}

const WelcomeScreen = ({ onContinue }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <FloatingHearts count={15} />
      <Sparkles count={8} />

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-2xl w-full animate-fade-in">
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
                  alt="Welcome"
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

        {/* Text content */}
        <div className="mt-20">
          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Welcome 💖
          </h1>

          {/* Subtitle */}
          <p className="font-handwriting text-xl md:text-2xl text-rose-400 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            made with love 💕
          </p>

          {/* Continue button */}
          <button
            onClick={onContinue}
            className="px-8 md:px-12 py-3 md:py-4 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform"
          >
            Continue 💗
          </button>
        </div>
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

        @font-face {
          font-family: "handwriting";
          src: url("data:application/x-font-woff;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMgkSBfMAAAC8AAAAYGNtYXAW/hOOAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAhnbHlmvJaKlAAAA4AAAACsaGVhZAtEYQAAAzQAAAA2aGhlYQcKA/gAAANsAAAAJGhtdHgN4QAAAAADjAAAABBsb2NhAkQCpgAAA5QAAAAKbWF4cAGVAHsAAAOgAAAAIHBvc3T/hQAFAAADuAAAACBwcmVwutxWfgAAA8gAAAA7AAEAAAAA");
        }

        .font-handwriting {
          font-family: "handwriting", cursive;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;