import { LLMHeader } from "./llm-header";
import { LLMChat } from "./llm-chat";

export function LLMSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <LLMHeader />
        <LLMChat />
      </div>
    </section>
  );
}