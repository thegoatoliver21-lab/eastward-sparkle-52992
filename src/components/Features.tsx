import { Sword, Users, Map, Sparkles } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Sword,
      title: "TORNEOS ÉPICOS",
      description: "Compite en emocionantes competiciones con premios increíbles",
    },
    {
      icon: Users,
      title: "COMUNIDAD ACTIVA",
      description: "Conoce jugadores apasionados de todos los géneros",
    },
    {
      icon: Map,
      title: "EVENTOS ÚNICOS",
      description: "Participa en eventos exclusivos y experiencias memorables",
    },
    {
      icon: Sparkles,
      title: "CONTENIDO DIARIO",
      description: "Descubre streams, guías y noticias cada día",
    },
  ];

  return (
    <section id="world" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration - Solo Cyan */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary rounded-full blur-3xl animate-float-slower" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-pixel text-3xl md:text-5xl text-center mb-4 text-foreground drop-shadow-[0_3px_0_rgba(0,0,0,1)]">
          LA AVENTURA TE ESPERA
        </h2>
        <p className="font-game text-center text-lg mb-16 text-foreground/80 max-w-2xl mx-auto">
          Descubre lo que hace especial a nuestra comunidad
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-primary to-secondary border-4 border-primary rounded-lg transition-all"
                     style={{ boxShadow: '0 0 15px hsl(190 100% 50% / 0.6), 4px 4px 0 hsl(0 0% 0%)' }}>
                  <Icon className="w-10 h-10 text-black group-hover:scale-110 group-hover:rotate-6 transition-transform" 
                        style={{ filter: 'drop-shadow(0 0 8px hsl(190 100% 50%))' }} />
                </div>
                <h3 className="font-pixel text-sm md:text-base mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="font-game text-sm text-foreground/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
