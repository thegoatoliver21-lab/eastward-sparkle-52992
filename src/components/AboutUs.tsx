import { Sword, Users, Map, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "TORNEOS ÉPICOS",
    description: "Compite en emocionantes competiciones con premios increíbles"
  },
  {
    icon: Users,
    title: "COMUNIDAD ACTIVA",
    description: "Conoce jugadores apasionados de todos los géneros"
  },
  {
    icon: Map,
    title: "EVENTOS ÚNICOS",
    description: "Participa en eventos exclusivos y experiencias memorables"
  },
  {
    icon: Sparkles,
    title: "CONTENIDO DIARIO",
    description: "Descubre streams, guías y noticias cada día"
  }
];

export const AboutUs = () => {
  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-pixel text-5xl md:text-7xl mb-6 text-primary animate-[fadeIn_1s_ease-in]">
            LA AVENTURA TE ESPERA
          </h2>
          <p className="font-game text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto">
            Descubre lo que hace especial a nuestra comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-primary/10 backdrop-blur-sm border-2 border-primary/30 p-8 text-center hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary))]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-primary/20 flex items-center justify-center border-2 border-primary group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-10 h-10 text-primary" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="font-pixel text-lg md:text-xl text-primary mb-4">
                {feature.title}
              </h3>
              <p className="font-game text-sm md:text-base text-primary/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
