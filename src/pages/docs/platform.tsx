import { cn } from "@/lib/utils";

export function Platform() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className={cn(
        "bg-gradient-to-r from-red-300 via-white to-red-300",
        "bg-clip-text text-transparent",
        "animate-gradient-x"
      )}>
        Website Platform
      </h1>
      
      <div className="space-y-12">
        <section>
          <p>
            The CircusLLM website serves as the grand entrance to our revolutionary framework, inviting users to explore the vibrant possibilities of bringing memes to life. Designed for simplicity and creativity, the platform allows anyone to turn their memes into dynamic, engaging performers in just a few steps. Here's what awaits you under the big top:
          </p>
        </section>

        <section>
          <h2>Upload and Transform Memes</h2>
          <p>
            The centerpiece of our website is an intuitive upload tool where users can select an image of their meme and provide its name or a brief description. Once uploaded, CircusLLM instantly analyzes the image and breathes life into it, crafting a unique personality for your meme. Users can then interact with their creation in real-time, experiencing its humor, quirks, and distinctive perspective firsthand.
          </p>
        </section>

        <section>
          <h2>Interactive Meme Chat</h2>
          <p>
            Step into the ring of dynamic conversation! The interactive chat feature allows users to engage in vibrant discussions with their meme. Powered by advanced natural language processing (NLP) models, the chat mirrors the personality of the meme, creating an engaging and entertaining experience. Whether it's a cheeky crypto joke or a playful quip, your meme becomes a lively digital companion.
          </p>
        </section>

        <section>
          <h2>Meme Personality Analysis</h2>
          <p>
            Beyond simple interaction, CircusLLM goes deeper, analyzing the visual traits of the meme and the context provided by the user to build a rich personality profile. This analysis forms the foundation for the meme's conversational style, sense of humor, and relevance, ensuring a unique and memorable experience with every interaction.
          </p>
        </section>

        <section>
          <h2>Crypto-Centric Features</h2>
          <p>
            In line with the latest trends in blockchain and cryptocurrency, CircusLLM offers jokes and commentary tailored to the crypto ecosystem. This makes the platform especially exciting for Web3 enthusiasts, blending the irreverence of meme culture with the innovation of blockchain technology.
          </p>
        </section>

        <section>
          <h2>Future-Proof Design</h2>
          <p>
            The CircusLLM website is just the opening act of this grand digital circus. The platform is designed with future innovation in mind, showcasing transformative features and laying the groundwork for even greater possibilities, including:
          </p>
          <ul>
            <li>Allowing memes to post autonomously on Twitter, Telegram, or Discord.</li>
            <li>Tools for creating 3D-rendered versions of memes that can speak or star in videos.</li>
            <li>Seamless integration of meme capabilities with decentralized applications and ecosystems.</li>
          </ul>
        </section>

        <div className="text-center italic text-xl text-red-400 mt-16">
          The CircusLLM website is more than just a platform—it's an interactive hub where memes come to life, embodying the future of meme culture and Web3 innovation. From uploading an image to chatting with a fully realized digital performer, the platform demonstrates the transformative power of CircusLLM in a way that's accessible, entertaining, and endlessly creative. 🎪
        </div>
      </div>
    </div>
  );
}