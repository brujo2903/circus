import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { navigationItems } from "./navigation-data";

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl overflow-y-auto">
      {/* Navigation */}
      <nav className="p-6 space-y-8">
        {navigationItems.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.title}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-sm transition-all duration-200",
                        "hover:bg-white/10",
                        isActive 
                          ? "bg-red-500/20 text-red-400 font-medium"
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}