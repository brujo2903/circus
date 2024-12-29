import { Link, useLocation } from 'react-router-dom';
import { Twitter, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export function Navbar() {
  const isScrolled = useScrollPosition(20);
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/docs');

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50",
        "transition-all duration-300",
        "border-b",
        isDocsPage
          ? "bg-black/50 backdrop-blur-lg border-white/10"
          : isScrolled
            ? "bg-black/50 backdrop-blur-lg border-white/10"
            : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🎪</span>
            <span className="text-xl font-medium text-red-400 group-hover:text-red-300">circus</span>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/docs"
                className={cn(
                  "text-sm flex items-center gap-2 transition-colors",
                  isDocsPage 
                    ? "text-red-400" 
                    : "text-white/60 hover:text-red-400"
                )}
              >
                <FileText className="h-4 w-4" />
                <span>Docs</span>
              </Link>
              <div className="relative group">
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  <span>Twitter</span>
                </a>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-red-400 whitespace-nowrap">Ship Your Agent Soon</span>
                </div>
              </div>
              <div className="relative group">
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Telegram</span>
                </a>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-red-400 whitespace-nowrap">Ship Your Agent Soon</span>
                </div>
              </div>
            </div>
            <Button 
              asChild
              className={cn(
                "relative overflow-hidden group",
                "bg-gradient-to-r from-red-500 to-red-600",
                "hover:from-red-600 hover:to-red-700",
                "transition-all duration-300",
                "shadow-[0_0_15px_rgba(239,68,68,0.3)]",
                "hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]"
              )}
            >
              <Link to="/launch">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Launch Application</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}