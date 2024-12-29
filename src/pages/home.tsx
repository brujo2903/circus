import { useState, useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import { Background } from "@/components/layout/background";
import { HeroSection } from "@/components/hero/hero-section";
import { FeaturesSection } from "@/components/features/features-section";
import { LLMSection } from "@/components/llm/llm-section";
import { LearnMoreSection } from "@/components/learn-more/learn-more-section";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/loading/loading-screen";

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      
      <div className="min-h-screen relative">
        <Background imageUrl="https://imgur.com/LW08sa5.jpg" />
        
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4">
            <HeroSection />
            <FeaturesSection />
            <LLMSection />
            <LearnMoreSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}