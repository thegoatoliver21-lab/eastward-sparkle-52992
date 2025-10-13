import { Gamepad2, Sword, Trophy, Zap } from "lucide-react";

export const Games = () => {
  const games = [
    {
      name: "League of Legends",
      icon: Sword,
      players: "150+",
      description: "Competiciones semanales y equipos profesionales"
    },
    {
      name: "Valorant",
      icon: Zap,
      players: "120+",
      description: "Torneos mensuales con premios increíbles"
    },
    {
      name: "Fortnite",
      icon: Trophy,
      players: "200+",
      description: "Eventos especiales y contenido exclusivo"
    },
    {
      name: "Otros Juegos",
      icon: Gamepad2,
      players: "100+",
      description: "CS:GO, Apex Legends, Minecraft y más"
    }
  ];

  return (
    <section id="games" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl mb-6 text-primary">
            NUESTROS JUEGOS
          </h2>
          <p className="font-game text-xl text-foreground/80">
            Competimos en los títulos más populares del momento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <div
                key={index}
                className="bg-secondary border-2 border-border p-6 hover:border-primary transition-all hover:scale-105 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-pixel text-xl mb-3 text-center">
                  {game.name}
                </h3>
                <div className="font-game text-center mb-4">
                  <span className="text-2xl font-bold text-primary">{game.players}</span>
                  <span className="text-muted-foreground"> jugadores</span>
                </div>
                <p className="font-game text-center text-muted-foreground text-sm">
                  {game.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
