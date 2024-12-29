import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/footer";
import { Terminal } from "@/components/launch/terminal";

export function LaunchPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Background imageUrl="https://imgur.com/LW08sa5.jpg" />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-3xl">
            <Terminal />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}