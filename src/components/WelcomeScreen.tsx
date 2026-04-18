import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";
import birthdayPhoto from "../assets/1000269666.webp";

interface WelcomeScreenProps {
  onContinue: () => void;
}

const WelcomeScreen = ({ onContinue }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen paper-bg flex items-center justify-center relative overflow-hidden">
      <FloatingHearts count={20} />
      <Sparkles count={8} />

      <div className="text-center page-enter z-10 px-4">
        <h1 className="font-vintage-script text-6xl md:text-8xl text-primary mb-2 glow-pulse inline-block px-4 py-2 rounded-xl">
          Happy Birthday
        </h1>

        <h2 className="font-vintage-script text-5xl md:text-7xl text-accent-foreground mb-8">
          Delulu 💖
        </h2>

        {/* Photo */}
        <div className="relative inline-block mb-8">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden photo-glow border-4 border-gold-light mx-auto">
            <img
              src={birthdayPhoto}
              alt="Birthday Person"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="absolute -top-4 -right-4 text-3xl float-heart">💕</span>
          <span
            className="absolute -bottom-2 -left-4 text-2xl float-heart"
            style={{ animationDelay: "1s" }}
          >
            💗
          </span>
        </div>

        {/* Emojis */}
        <div className="text-4xl mb-8 space-x-2">
          <span className="inline-block bounce-gentle">🎂</span>
          <span className="inline-block bounce-gentle" style={{ animationDelay: "0.3s" }}>🎉</span>
          <span className="inline-block bounce-gentle" style={{ animationDelay: "0.6s" }}>🎈</span>
          <span className="inline-block bounce-gentle" style={{ animationDelay: "0.9s" }}>🥳</span>
        </div>

        <button
          onClick={onContinue}
          className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-vintage-heading text-xl tracking-wide hover:scale-110 transition-all duration-300 vintage-shadow hover:gold-glow"
        >
          Are you ready for the surprise? 👉
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;