import { Link } from 'react-router-dom';
import { Twitter, FileText, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { 
    name: "Twitter", 
    href: "https://x.com/circusLLM", 
    icon: Twitter,
    external: true 
  },
  { 
    name: "Docs", 
    href: "/docs", 
    icon: FileText,
    external: false 
  },
  { 
    name: "Telegram", 
    href: "https://t.me/circusLLM", 
    icon: Send,
    external: true 
  }
] as const;

export function Footer() {
  return (
    <footer className={cn(
      "relative z-10 mt-auto",
      "border-t border-white/10",
      "bg-black/50 backdrop-blur-lg"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2 group transition-colors duration-300"
          >
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🎪</span>
            <span className="text-xl font-medium text-red-400 group-hover:text-red-300">circus</span>
          </Link>

          {/* Links and Copyright */}
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-6">
              {socialLinks.map((link) => {
                const LinkComponent = link.external ? 'a' : Link;
                const linkProps = link.external ? {
                  href: link.href,
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {
                  to: link.href
                };

                return (
                  <LinkComponent
                    key={link.name}
                    {...linkProps}
                    className={cn(
                      "text-sm text-white/60 hover:text-red-400",
                      "transition-colors duration-300",
                      "flex items-center gap-2"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </LinkComponent>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-sm text-white/60">
              © 2024 CircusLLM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}