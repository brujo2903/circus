import { cn } from "@/lib/utils";

export function MissionVision() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className={cn(
        "bg-gradient-to-r from-red-300 via-white to-red-300",
        "bg-clip-text text-transparent",
        "animate-gradient-x"
      )}>
        Mission & Vision
      </h1>
      
      <div className="space-y-16">
        <section>
          <h2 className="text-red-400">Mission</h2>
          <p>
            To empower creativity and transform the way we interact with digital culture by providing an innovative framework that brings memes to life. CircusLLM redefines memes as dynamic performers that engage, entertain, and participate in the digital world. By leveraging cutting-edge artificial intelligence, blockchain integration, and interactive technologies, we aim to create a seamless platform where users can turn their ideas into vibrant, living digital personalities capable of performing across multiple platforms—from social media stages to immersive 3D arenas.
          </p>
        </section>

        <section>
          <h2 className="text-red-400">Vision</h2>
          <p>
            We envision a world where digital content transcends static formats to become dynamic, interactive experiences that enrich the digital landscape. CircusLLM strives to lead this transformation as the premier framework for creating and interacting with meme-based digital performers. In our vision, memes evolve from fleeting moments of humor into enduring digital personalities that contribute to conversations, star in decentralized communities, and seamlessly blend creativity with technology.
          </p>
          
          <p>
            Our ultimate goal is to inspire a global shift in how people engage with content, empowering creators to innovate, connect, and build a more vibrant Web3 ecosystem. With CircusLLM, the digital stage becomes a boundless circus where memes take center ring, entertaining and connecting audiences worldwide.
          </p>
        </section>

        <div className="text-center italic text-xl text-red-400">
          Step into the future of digital entertainment with CircusLLM 🎪
        </div>
      </div>
    </div>
  );
}