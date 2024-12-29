import { cn } from "@/lib/utils";

export function Philosophy() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className={cn(
        "bg-gradient-to-r from-red-300 via-white to-red-300",
        "bg-clip-text text-transparent",
        "animate-gradient-x"
      )}>
        Philosophy
      </h1>
      
      <div className="space-y-12">
        <section>
          <p>
            CircusLLM is built on the conviction that creativity and technology can unite to transform static digital artifacts into living, dynamic experiences. Just as a circus reimagines the ordinary into the extraordinary, CircusLLM reinvents memes—those fleeting expressions of internet humor—as vibrant, engaging performers with unique personalities and charm. This vision inspires our framework, aiming to create an innovative and empowering platform for creators and audiences alike.
          </p>
        </section>

        <section>
          <h2>Empowering Creativity</h2>
          <p>
            At its core, CircusLLM hands the tools of creation to its users, much like the circus invites its performers to shine under the spotlight. Through intuitive features and advanced AI capabilities, anyone can transform their ideas into digital personas. Memes evolve beyond static images, becoming dynamic entities that speak, interact, and join online communities. CircusLLM elevates creativity, blending content creation with interaction, like a grand show combining humor, awe, and wonder.
          </p>
        </section>

        <section>
          <h2>Redefining Digital Interactions</h2>
          <p>
            CircusLLM envisions a new way of engaging with digital content, turning memes from static jokes into charismatic digital companions. These dynamic entities learn, communicate, and actively participate in online spaces, creating deeper connections between users and their creations. By merging creativity, humor, and technology, CircusLLM transforms digital interactions into engaging performances, where the audience becomes part of the act.
          </p>
        </section>

        <section>
          <h2>Bridging Art and Technology</h2>
          <p>
            Memes are more than just jokes—they're a form of modern art. CircusLLM bridges this artistic medium with cutting-edge technology, expanding the possibilities for creative expression. From conversational AI to 3D-rendered designs, the platform elevates the artistry of memes, turning them into digital performers ready for the spotlight, all while enhancing their accessibility and impact.
          </p>
        </section>

        <section>
          <h2>Decentralization and Ownership</h2>
          <p>
            In the spirit of a traveling circus, where every act is unique and owned by its performer, CircusLLM embraces decentralization. By integrating blockchain technology, every digital entity gains uniqueness and security. Users retain full ownership, enabling them to trade, control, and protect their creations like prized acts under the big top of Web3.
          </p>
        </section>

        <section>
          <h2>Humor as a Universal Connector</h2>
          <p>
            Humor transcends cultures, languages, and boundaries, much like a circus delights audiences worldwide. CircusLLM harnesses humor's universal appeal to bridge the gap between people and technology. By embedding humor into digital interactions, the platform transforms complex systems into approachable, enjoyable experiences, drawing audiences into the vibrant world of Web3 innovation.
          </p>
        </section>

        <section>
          <h2>Innovating for the Future</h2>
          <p>
            CircusLLM isn't just following trends; it's setting the stage for the future. Grounded in the belief that personalization and interactivity are the keys to tomorrow, the framework evolves constantly to meet the shifting needs of creators and audiences. CircusLLM's forward-thinking philosophy positions it as a leader in redefining digital culture, setting the tone for the next era of digital performance.
          </p>
        </section>

        <div className="text-center italic text-xl text-red-400 mt-16">
          CircusLLM isn't just a tool—it's a movement. It's about transforming static moments into dynamic experiences, fleeting jokes into captivating performances, and digital artifacts into relatable companions. By fostering creativity and interaction, CircusLLM opens up a world of possibilities, where memes take center stage as performers in the grand circus of digital culture. 🎪
        </div>
      </div>
    </div>
  );
}