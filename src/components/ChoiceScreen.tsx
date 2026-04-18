import { useState } from "react";
import Sparkles from "./Sparkles";

interface ChoiceScreenProps {
  onYes: () => void;
}

const ChoiceScreen = ({ onYes }: ChoiceScreenProps) => {
  const [saidNo, setSaidNo] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const handleNo = () => {
    setSaidNo(true);
    setNoCount((c) => c + 1);
  };

  const angryMessages = [
    "No option not allowed 😡 Try again!",
    "I said NO is not an option!! 😤😤",
    "Are you seriously pressing No again?! 🤬",
    "LAST CHANCE... press YES! 💢",
  ];

  return (
    <div className="min-h-screen paper-bg flex items-center justify-center relative overflow-hidden">
      <Sparkles count={6} />

      <div className="text-center page-enter z-10 px-4">
        <h2 className="font-vintage-script text-5xl md:text-6xl text-primary mb-8">
          Are you ready for the surprise?
        </h2>

        {saidNo && (
          <div className="mb-8 page-enter">
            <div className="text-6xl mb-4 shake">😤</div>
            <p className="font-handwritten text-2xl text-primary">
              {angryMessages[Math.min(noCount - 1, angryMessages.length - 1)]}
            </p>
          </div>
        )}

        <div className="flex gap-6 justify-center items-center flex-wrap">
          <button
            onClick={onYes}
            className={`px-12 py-4 rounded-full bg-primary text-primary-foreground font-vintage-heading text-2xl tracking-wide hover:scale-110 transition-all duration-300 vintage-shadow hover:gold-glow ${
              saidNo ? "animate-pulse scale-110" : ""
            }`}
          >
            YES 💕
          </button>

          <button
            onClick={handleNo}
            className={`px-12 py-4 rounded-full bg-secondary text-secondary-foreground font-vintage-heading text-2xl tracking-wide hover:scale-95 transition-all duration-300 vintage-shadow ${
              saidNo ? "opacity-50 text-base" : ""
            }`}
            style={noCount >= 3 ? { fontSize: "12px", padding: "8px 16px" } : {}}
          >
            NO 😏
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceScreen;
