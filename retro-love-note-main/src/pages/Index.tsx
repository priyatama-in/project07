import { useState } from "react";
import LockScreen from "@/components/LockScreen";
import WelcomeScreen from "@/components/WelcomeScreen";
import ChoiceScreen from "@/components/ChoiceScreen";
import GiftBoxScreen from "@/components/GiftBoxScreen";
import FinalScreen from "@/components/FinalScreen";

type Page = "lock" | "welcome" | "choice" | "gifts" | "final";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>("lock");
  const [transitioning, setTransitioning] = useState(false);

  const navigateTo = (page: Page) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setTransitioning(false);
    }, 500);
  };

  return (
    <div className={`transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"}`}>
      {currentPage === "lock" && <LockScreen onUnlock={() => navigateTo("welcome")} />}
      {currentPage === "welcome" && <WelcomeScreen onContinue={() => navigateTo("choice")} />}
      {currentPage === "choice" && <ChoiceScreen onYes={() => navigateTo("gifts")} />}
      {currentPage === "gifts" && <GiftBoxScreen onComplete={() => navigateTo("final")} />}
      {currentPage === "final" && <FinalScreen />}
    </div>
  );
};

export default Index;
