import { cn } from "@/lib/utils";

export function Overview() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className={cn(
        "bg-gradient-to-r from-red-300 via-white to-red-300",
        "bg-clip-text text-transparent",
        "animate-gradient-x"
      )}>
        CircusLLM: Step Right Up to the Big Top of Digital Creativity!
      </h1>
      
      <div className="space-y-12">
        <section>
          <h2>Overview</h2>
          <p>
            Welcome to the spectacular world of CircusLLM, where static memes transform into a dazzling circus of interactive digital performers! Just as a circus brings life to the extraordinary, CircusLLM turns ordinary memes into vibrant, engaging entities, captivating audiences across the digital big top. Imagine memes that don't just entertain but interact—tweeting their thoughts, juggling conversations in Telegram groups, joining the ringmasters of Discord, or becoming animated 3D performers that dazzle in videos.
          </p>
        </section>

        <section>
          <h2>The Grand Performance</h2>
          <p>
            At the heart of this mesmerizing show is CircusLLM's seamless onboarding experience. Picture a friendly ringmaster guiding you through the process: simply upload an image of your meme, give it a name or a brief description, and watch the magic unfold as CircusLLM breathes life into your creation. Each meme emerges as a unique character in this digital circus, equipped with its own personality and ready to perform in real-time interactive chats. This initial spectacle invites users into a broader world of wonders, showcasing how memes can become the clowns, acrobats, and stars of the ever-evolving digital big top.
          </p>
        </section>

        <section>
          <h2>The Future of Our Show</h2>
          <p>
            As the circus expands, CircusLLM envisions a future of boundless innovation. With simple inputs like descriptive text or smart contracts as your magic wand, users can summon advanced meme performers. The future tent includes breathtaking 3D rendering, dynamic video acts, and seamless integration into decentralized ecosystems, turning the digital circus into a boundless world of possibilities. CircusLLM empowers users to reimagine memes as the star performers in the evolving Web3 cultural landscape. No longer just visual puns, memes are now dynamic, engaging, and ever-evolving acts, ready to dazzle audiences and reshape the way we interact online.
          </p>
        </section>

        <div className="text-center italic text-xl text-red-400">
          So, step right up, creators and dreamers—the CircusLLM big top awaits, where your memes take center stage! 🎪
        </div>
      </div>
    </div>
  );
}