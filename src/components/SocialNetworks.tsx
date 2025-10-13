import { Facebook, Twitter, Youtube, Instagram, MessageCircle, Twitch } from "lucide-react";

export const SocialNetworks = () => {
  const socials = [
    {
      name: "Discord",
      icon: MessageCircle,
      followers: "2.5K",
      description: "Únete a nuestra comunidad",
      link: "#",
      color: "hover:bg-[#5865F2]"
    },
    {
      name: "Twitch",
      icon: Twitch,
      followers: "1.8K",
      description: "Síguenos en vivo",
      link: "#",
      color: "hover:bg-[#9146FF]"
    },
    {
      name: "YouTube",
      icon: Youtube,
      followers: "3.2K",
      description: "Videos y highlights",
      link: "#",
      color: "hover:bg-[#FF0000]"
    },
    {
      name: "Twitter",
      icon: Twitter,
      followers: "1.5K",
      description: "Últimas noticias",
      link: "#",
      color: "hover:bg-[#1DA1F2]"
    },
    {
      name: "Instagram",
      icon: Instagram,
      followers: "2.1K",
      description: "Fotos y momentos",
      link: "#",
      color: "hover:bg-[#E4405F]"
    },
    {
      name: "Facebook",
      icon: Facebook,
      followers: "1.2K",
      description: "Comunidad activa",
      link: "#",
      color: "hover:bg-[#1877F2]"
    }
  ];

  return (
    <section id="social" className="relative py-32 px-4 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl mb-6 text-primary">
            SÍGUENOS EN REDES
          </h2>
          <p className="font-game text-xl text-foreground/80">
            Conecta con nosotros en todas las plataformas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                className={`bg-background border-2 border-border p-8 hover:scale-105 transition-all group ${social.color} block`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-pixel text-2xl mb-2 group-hover:text-background transition-colors">
                      {social.name}
                    </h3>
                    <div className="font-game text-primary font-bold mb-2 group-hover:text-background transition-colors">
                      {social.followers} seguidores
                    </div>
                    <p className="font-game text-sm text-muted-foreground group-hover:text-background/90 transition-colors">
                      {social.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-background border-2 border-border p-12 hover:border-primary transition-all">
          <h3 className="font-pixel text-3xl mb-4">
            ¡ÚNETE A LA COMUNIDAD!
          </h3>
          <p className="font-game text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Sé parte de nuestra familia gamer. Participa en eventos, compite en torneos 
            y conecta con jugadores de todo el mundo.
          </p>
          <button className="font-pixel px-8 py-4 bg-primary text-primary-foreground hover:bg-accent hover:scale-105 transition-all text-xl">
            ÚNETE AHORA
          </button>
        </div>
      </div>
    </section>
  );
};
