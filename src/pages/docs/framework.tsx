import { cn } from "@/lib/utils";

export function Framework() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className={cn(
        "bg-gradient-to-r from-red-300 via-white to-red-300",
        "bg-clip-text text-transparent",
        "animate-gradient-x",
        "!mb-12"
      )}>
        CircusLLM Framework
      </h1>
      
      <div className="space-y-16">
        {/* Overview */}
        <section>
          <h2 className="!text-red-400 !mt-0">Overview</h2>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <p className="!text-white/90 !mb-0">
              CircusLLM is a cutting-edge framework designed to transform static memes into interactive digital performers. Built on the foundation of "meme consciousness," the architecture enables memes to become self-aware, context-sensitive, and emotionally intelligent entities that captivate and engage audiences in the digital circus.
            </p>
          </div>
        </section>

        {/* Core Components */}
        <section>
          <h2 className="!text-red-400">Core Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Circus Engine */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="!text-white !mt-0 !mb-4">Circus Engine</h3>
              <ul className="!mt-0">
                <li className="!text-white/90">Managing the lifecycle of meme performers</li>
                <li className="!text-white/90">Orchestrating interactions</li>
                <li className="!text-white/90">Maintaining system state</li>
                <li className="!text-white/90">Processing inputs and generating dynamic responses</li>
              </ul>
            </div>

            {/* Meme Entity */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="!text-white !mt-0 !mb-4">Meme Entity</h3>
              <ul className="!mt-0">
                <li className="!text-white/90">Possesses a unique identity and state</li>
                <li className="!text-white/90">Demonstrates contextual awareness</li>
                <li className="!text-white/90">Displays emotional intelligence</li>
                <li className="!text-white/90">Maintains an interaction history</li>
              </ul>
            </div>

            {/* Context Manager */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="!text-white !mt-0 !mb-4">Context Manager</h3>
              <ul className="!mt-0">
                <li className="!text-white/90">Tracks environmental and user contexts</li>
                <li className="!text-white/90">Manages interaction history</li>
                <li className="!text-white/90">Handles memory and preference tracking</li>
              </ul>
            </div>

            {/* Emotion Engine */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="!text-white !mt-0 !mb-4">Emotion Engine</h3>
              <ul className="!mt-0">
                <li className="!text-white/90">Detects and processes emotions</li>
                <li className="!text-white/90">Tracks mood and personality traits</li>
                <li className="!text-white/90">Generates emotional responses</li>
                <li className="!text-white/90">Manages historical emotional states</li>
              </ul>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section>
          <h2 className="!text-red-400">System Architecture</h2>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <pre className="!bg-black/50 !p-6 !rounded-xl !shadow-2xl !border !border-white/10 !text-white/90 !overflow-x-auto">
{`┌─────────────────────────────────────────────────────┐
│                   Client Layer                      │
│  ┌──────────────┐  ┌───────────────┐  ┌─────────┐  │
│  │     CLI      │  │     API       │  │   GUI   │  │
│  └──────────────┘  └───────────────┘  └─────────┘  │
└─────────────────────────────────────────────────────┘
                         │
┌─────────────────────────────────────────────────────┐
│                   Core Layer                        │
│  ┌──────────────┐  ┌───────────────┐  ┌─────────┐  │
│  │ Circus Engine│  │ Entity Manager│  │ Config  │  │
│  └──────────────┘  └───────────────┘  └─────────┘  │
└─────────────────────────────────────────────────────┘
                         │
┌─────────────────────────────────────────────────────┐
│                Processing Layer                     │
│  ┌──────────────┐  ┌───────────────┐  ┌─────────┐  │
│  │Context Manager│  │Emotion Engine │  │Processor│  │
│  └──────────────┘  └───────────────┘  └─────────┘  │
└─────────────────────────────────────────────────────┘
                         │
┌─────────────────────────────────────────────────────┐
│                   Data Layer                        │
│  ┌──────────────┐  ┌───────────────┐  ┌─────────┐  │
│  │  Storage     │  │    Cache      │  │   Logs  │  │
│  └──────────────┘  └───────────────┘  └─────────┘  │
└─────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="!text-red-400">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meme Consciousness */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="!text-white !mt-0 !mb-4">Meme Consciousness</h3>
              <ul className="!mt-0">
                <li className="!text-white/90">Self-awareness capabilities</li>
                <li className="!text-white/90">Autonomous state and identity management</li>
                <li className="!text-white/90">Adaptive decision-making</li>
              </ul>
            </div>

            {/* Context Awareness */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="!text-white !mt-0 !mb-4">Context Awareness</h3>
              <ul className="!mt-0">
                <li className="!text-white/90">Environmental understanding</li>
                <li className="!text-white/90">User interaction tracking</li>
                <li className="!text-white/90">Memory and situational adaptation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section>
          <h2 className="!text-red-400">Technical Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Core Framework */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="!text-white !mt-0 !mb-4">Core Framework</h3>
              <ul className="!mt-0">
                <li className="!text-white/90">Python-based modular architecture</li>
                <li className="!text-white/90">Event-driven design with asynchronous processing</li>
              </ul>
            </div>

            {/* AI/ML Components */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="!text-white !mt-0 !mb-4">AI/ML Components</h3>
              <ul className="!mt-0">
                <li className="!text-white/90">Computer Vision (OpenCV, TensorFlow)</li>
                <li className="!text-white/90">Natural Language Processing (Transformers)</li>
                <li className="!text-white/90">Custom models for emotion analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Closing */}
        <div className="text-center italic text-xl text-red-400 mt-16">
          CircusLLM represents a bold step forward in digital creativity, turning static memes into vibrant performers ready to captivate audiences in the grand circus of Web3. Join us in transforming digital culture with innovation, interactivity, and boundless imagination! 🎪
        </div>
      </div>
    </div>
  );
}