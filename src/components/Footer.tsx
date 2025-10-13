import { Facebook, Twitter, Youtube, Instagram, Gamepad2 } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 border-t-8 border-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="h-8 w-8" />
              <span className="font-pixel text-xl">404 GAMERS</span>
            </div>
            <p className="font-game text-primary-foreground/80">
              La comunidad gaming definitiva
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-pixel text-sm mb-4">ENLACES RÁPIDOS</h3>
            <ul className="font-game space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#games" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Juegos
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#members" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Equipo
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-pixel text-sm mb-4">SÍGUENOS</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary-foreground text-primary rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-primary-foreground/20 pt-8 text-center">
          <p className="font-game text-primary-foreground/60 text-sm">
            © 2024 404 Gamers. Todos los derechos reservados. | Hecho con ❤️ para la comunidad gaming
          </p>
        </div>
      </div>
    </footer>
  );
};
