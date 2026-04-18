import { useState } from "react";
import Sparkles from "./Sparkles";

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
    <div className="min-h-screen paper-bg flex items-center justify-center relative overflow-hidden">
      <Sparkles count={12} />
      <div className={`text-center page-enter ${error ? "shake" : ""}`}>
        {/* Lock Icon */}
        <div className={`text-8xl mb-8 transition-all duration-700 ${unlocking ? "scale-125 opacity-0" : ""}`}>
          {unlocking ? "🔓" : "🔒"}
        </div>

        {unlocking && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl gold-glow rounded-full p-8 animate-pulse">🎁</div>
          </div>
        )}

        {!unlocking && (
          <>
            <h1 className="font-vintage-script text-5xl md:text-6xl text-primary mb-4">
              A Special Surprise Awaits
            </h1>
            <p className="font-handwritten text-xl text-muted-foreground mb-8">
              Enter the secret password to unlock 💌
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xs mx-auto">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter the secret password 💌"
                className="w-full px-6 py-3 rounded-full bg-card border-2 border-gold-light text-center font-handwritten text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground/60 vintage-shadow"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-full bg-primary text-primary-foreground font-vintage-heading text-lg tracking-wide hover:scale-105 transition-all duration-300 vintage-shadow hover:gold-glow"
              >
                Unlock Surprise 🎁
              </button>
            </form>

            {error && (
              <p className="mt-4 text-primary font-handwritten text-lg animate-bounce">
                Oops! Wrong password 😤 Try again!
              </p>
            )}

            <p className="mt-6 text-muted-foreground/60 font-handwritten text-sm">
              Hint: what do I always say to you? 💕
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LockScreen;
