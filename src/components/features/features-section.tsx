import { FeaturesHeader } from "./features-header";
import { FeaturesGrid } from "./features-grid";

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-4">
        <FeaturesHeader />
        <FeaturesGrid />
      </div>
    </section>
  );
}