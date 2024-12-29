import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Docs", href: "#docs" },
  { name: "Blog", href: "#blog" },
  { name: "GitHub", href: "#github" },
] as const;

interface NavigationItemsProps {
  className?: string;
}

export function NavigationItems({ className }: NavigationItemsProps) {
  return (
    <div className={cn("hidden md:flex items-center space-x-6", className)}>
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm text-white/60 hover:text-red-400 transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}