import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "INICIO", href: "#home" },
    { name: "NOSOTROS", href: "#about" },
    { name: "JUEGOS", href: "#games" },
    { name: "EVENTOS", href: "#events" },
    { name: "GALERÍA", href: "#gallery" },
    { name: "EQUIPO", href: "#members" },
    { name: "SOCIAL", href: "#social" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b-2 border-primary shadow-[0_4px_20px_rgba(0,255,255,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img src={logo} alt="404 Gamers Not Found" className="h-12 w-12 group-hover:animate-wiggle drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
            <span className="font-pixel text-xl text-foreground group-hover:text-secondary transition-colors drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
              404 NOT FOUND
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-game font-semibold text-foreground hover:text-secondary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-secondary transition-all group-hover:w-full shadow-[0_0_8px_rgba(255,0,255,0.6)]" />
              </a>
            ))}
            <Button 
              className="font-game font-bold bg-gradient-to-r from-secondary to-accent text-white hover:from-accent hover:to-secondary shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-primary"
            >
              COMPRAR AHORA
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-game font-semibold text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="font-game font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-[3px_3px_0_0_rgba(0,0,0,1)] w-full"
              >
                COMPRAR AHORA
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
