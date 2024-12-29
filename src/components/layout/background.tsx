interface BackgroundProps {
  imageUrl: string;
}

export function Background({ imageUrl }: BackgroundProps) {
  return (
    <div 
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}