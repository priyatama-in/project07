import { useEffect, useState } from "react";

const COLORS = [
  "hsl(340, 60%, 65%)",
  "hsl(40, 70%, 55%)",
  "hsl(30, 50%, 96%)",
  "hsl(340, 50%, 90%)",
  "hsl(40, 80%, 75%)",
  "hsl(20, 60%, 70%)",
];

const Confetti = ({ active }: { active: boolean }) => {
  const [pieces, setPieces] = useState<Array<{
    id: number; left: number; color: string; delay: number; size: number; rotation: number;
  }>>([]);

  useEffect(() => {
    if (active) {
      setPieces(
        Array.from({ length: 50 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          delay: Math.random() * 2,
          size: 6 + Math.random() * 8,
          rotation: Math.random() * 360,
        }))
      );
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute confetti-piece"
          style={{
            left: `${p.left}%`,
            top: "-20px",
            width: `${p.size}px`,
            height: `${p.size * 1.5}px`,
            backgroundColor: p.color,
            borderRadius: "2px",
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
