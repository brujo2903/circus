import { FeatureCard } from "./feature-card";
import { featuresList } from "./features-data";

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuresList.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          gradient={feature.gradient}
        />
      ))}
    </div>
  );
}