import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";
import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/Navbar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <Background imageUrl="https://imgur.com/LW08sa5.jpg" />
      
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative flex pt-16">
        <Sidebar />
        <main className="flex-1 px-8 py-12 ml-64">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Content glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent blur-3xl -z-10" />
              
              {/* Glass card effect */}
              <div className="relative bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 p-8 shadow-2xl">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}