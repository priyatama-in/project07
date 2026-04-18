import { useState } from "react";
import Sparkles from "./Sparkles";
import Confetti from "./Confetti";
import letterTexture from "@/assets/letter-texture.jpg";

interface GiftBoxScreenProps {
  onComplete: () => void;
}

const GiftBoxScreen = ({ onComplete }: GiftBoxScreenProps) => {
  const [openedGift, setOpenedGift] = useState<number | null>(null);
  const [candleBlown, setCandleBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftsCompleted, setGiftsCompleted] = useState<Set<number>>(new Set());

  const handleOpenGift = (index: number) => {
    setOpenedGift(index);
    if (index === 0) {
      setCandleBlown(false);
    }
  };

  const handleBlowCandle = () => {
    setCandleBlown(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    markComplete(0);
  };

  const markComplete = (index: number) => {
    setGiftsCompleted((prev) => new Set(prev).add(index));
  };

  const handleBack = () => {
    if (openedGift === 1 || openedGift === 2) markComplete(openedGift);
    setOpenedGift(null);
  };

  const allDone = giftsCompleted.size === 3;

  return (
    <div className="min-h-screen paper-bg flex items-center justify-center relative overflow-hidden">
      <Sparkles count={8} />
      <Confetti active={showConfetti} />

      <div className="text-center page-enter z-10 px-4 max-w-4xl mx-auto">
        {openedGift === null ? (
          <>
            <h2 className="font-vintage-script text-5xl md:text-6xl text-primary mb-4">
              Choose Your Gift 🎁
            </h2>
            <p className="font-handwritten text-xl text-muted-foreground mb-10">
              Each one holds something special...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { emoji: "🎂", label: "Make a Wish", color: "from-primary/20 to-blush" },
                { emoji: "💌", label: "Birthday Message", color: "from-gold-light/30 to-cream" },
                { emoji: "💝", label: "My Message For You", color: "from-blush to-primary/20" },
              ].map((gift, i) => (
                <button
                  key={i}
                  onClick={() => handleOpenGift(i)}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br ${gift.color} border-2 border-gold-light vintage-shadow hover:scale-110 hover:gold-glow transition-all duration-500`}
                >
                  <div className="text-6xl mb-4 group-hover:bounce-gentle transition-transform">
                    {gift.emoji}
                  </div>
                  <p className="font-vintage-heading text-lg text-foreground">{gift.label}</p>
                  {giftsCompleted.has(i) && (
                    <span className="absolute top-2 right-2 text-2xl">✅</span>
                  )}
                </button>
              ))}
            </div>

            {allDone && (
              <button
                onClick={onComplete}
                className="mt-10 px-10 py-4 rounded-full bg-primary text-primary-foreground font-vintage-heading text-xl hover:scale-110 transition-all duration-300 vintage-shadow hover:gold-glow page-enter"
              >
                Continue to Final Surprise 💖
              </button>
            )}
          </>
        ) : openedGift === 0 ? (
          /* Gift 1: Make a Wish - Cake */
          <div className="page-enter">
            <h3 className="font-vintage-script text-5xl text-primary mb-8">Make a Wish! 🌟</h3>
            <div className="text-8xl mb-6">
              {candleBlown ? "🎂" : "🎂"}
            </div>
            {!candleBlown && (
              <div className="relative inline-block mb-6">
                <div className="text-5xl candle-glow">🕯️</div>
                <p className="font-handwritten text-lg text-muted-foreground mt-2">The candle is glowing...</p>
              </div>
            )}
            {!candleBlown ? (
              <button
                onClick={handleBlowCandle}
                className="block mx-auto px-8 py-3 rounded-full bg-primary text-primary-foreground font-vintage-heading text-lg hover:scale-105 transition-all vintage-shadow"
              >
                Blow the Candle! 🌬️
              </button>
            ) : (
              <div className="page-enter">
                <p className="font-handwritten text-2xl text-primary mb-4">
                  🎉 Your wish will come true! 🎉
                </p>
                <button
                  onClick={handleBack}
                  className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-vintage-heading hover:scale-105 transition-all vintage-shadow"
                >
                  Back to Gifts ←
                </button>
              </div>
            )}
          </div>
        ) : openedGift === 1 ? (
          /* Gift 2: Birthday Message */
          <div className="page-enter max-w-lg mx-auto">
            <div
              className="unfold rounded-xl p-8 md:p-12 vintage-shadow border-2 border-gold-light"
              style={{
                backgroundImage: `url(${letterTexture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="font-vintage-script text-4xl text-warm-brown mb-6">
                Dear Delulu⭐
              </h3>
              <p className="font-handwritten text-xl leading-relaxed text-warm-brown/90">
                Happy Birthday..


Nuvvu chala nice and genuine person… talking with you always feels easy and comfortable. I’m really happy I got to know you.

Nee life lo anni manchi jaragali, lots of happiness, success and good vibes undali. Keep smiling always 😊

Have an amazing day and enjoy your birthday!

              </p>
              <p className="font-vintage-script text-2xl text-primary mt-6">
                With all my love 💕
              </p>
            </div>
            <button
              onClick={handleBack}
              className="mt-8 px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-vintage-heading hover:scale-105 transition-all vintage-shadow"
            >
              Back to Gifts ←
            </button>
          </div>
        ) : (
          /* Gift 3: Personal Message */
          <div className="page-enter max-w-lg mx-auto">
            <div
              className="unfold rounded-xl p-8 md:p-12 vintage-shadow border-2 border-gold-light"
              style={{
                backgroundImage: `url(${letterTexture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="font-vintage-script text-4xl text-warm-brown mb-6">
                My Dearest Delulu 💝
              </h3>
              <p className="font-handwritten text-xl leading-relaxed text-warm-brown/90">
                Hey…


Ala start cheyalo teliyadamledu but e roju ayana na heart lo unnadhi neeku Chepali anukutunna na kosam kocham time petti edhi Chaduvu . Na heartfull ga rasa .
First time ni nuchi request vachindi Feb lo Anukunta but nenu accept cheyaledhu chala mandi a pedtharu enduko ni heart ki nidhe accept cheyali anipinchindi Enduku ante meeku Venkateshwara swamy ante entha istamo telsindi I accepted .
March 6th first hi pettavu I too replied 
Na gurchi nenu ni gurichi nenu telusukunnam.
Nanu na past Cheppa you accepted it 
See nenu e arrange marriage batch ayte kadhu entha kastam ayna intlo oppichi love marriage a chesukovali ani undi lekapothe Inka naku pelli a odhu aney mind set tho unna . But na past nanu break chesindi . Appudu a na Krishna ninu pampicharu anukunna. Still ni gurichi teliyali how you treat me ,how you face my mood swings,how you manage me ani nuvu try cheuskuntaa ante na kanna age lo chinna kadha antha ga emi undadu emo anukunna ,but you proved me wrong .
March 25th nuchi we started our journey 
March 27th nuvu naku oka nickname pettavu my girl ani akkade a padipoya . 
Appudu nuchi ni paina istam increase avuthuney vachindi . Ni paina istam lekapothey neeku Enduku pics pedthanu,neeku priority evakapothe ni kosam roju morning legisi msg chesta ,ni msg kosam Enduku wait chesta ,neeku Enduku 18+ reels share chesta . Iam a girl Naku ready avvadam istam undadu niksoam saree kattukutunna .ma frds enti a week ki saree kaduthunavu enti matter ani adigaru . Blush avvadam thappa emi cheppalenu. Vallu nanu ala chusi chala years ayindi .
But nenu chesindi antha ni paina istam thoney Naku ni behaviour,nuvu nanu ardam chesukone vidhanam nachindi .
But April 5th oke oka msg mana bond ni break cheisndi na life lo naku entho istam ayanavi dhooram ayaya at the age of 16 nenu suicide attempt chesa but Krishna saved me . Na life loki adhi vachina it won't stay ani telusu anduke ni paina istani 
Naloney dachukunna .
Nuvu arrange marriage chesukunta annapufu Naku chala kopam vachindi adhe time ki naku chala important meeting undi internship lo .
Adhi adho adho malatdadesa neeku nuvu a pics adiga ani a ga ela anutunavu ani annavu Naku Enduku badha vesindho telusa inka nuvu fix ayaka nenu emi cheppina nuvu vinnavu . Neeku kopam vachindi na paina ni opinion change ayindi 
Naku nuvu appudu badha peduthunavu anipichaledhu.kani okavella you choose another aney thought vala Naku bhyam vesindi . Na valla nuvu emna hurt aya unte sorry 🙂 
Nenu malli heartfull ga navindi nuvu vachaka a . Ani marchipoya happy neetho spend chesa .ninu kalavali anipichindi.
But rasipetti undho ledho teliyadhu but I manifest.
Last and final ga nuvu chala manchi vadivi delulu neeku manchi person a life partner ga vastadi nuvu chala baga chustunavu Enduku ante nuvu sister' s dhagra perigavu . You are a green flag .
Inka na paina kocham paina feeling unte cheppu oke oka life e min lo naku anipichindi cheputhunna lekapothe lifelong oka regret tho undali . Whatever you say I will accept it
 I will be your sakhi ,Will you be my sakha?
🥺🫂
Happy birthday Delulu ❤️‍🩹♾️

              </p>
              <p className="font-handwritten text-xl leading-relaxed text-warm-brown/90 mt-4">
              
              </p>
              <p className="font-vintage-script text-2xl text-primary mt-6">
                Forever & Always Yours 💖
              </p>
            </div>
            <button
              onClick={handleBack}
              className="mt-8 px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-vintage-heading hover:scale-105 transition-all vintage-shadow"
            >
              Back to Gifts ←
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftBoxScreen;
