import { Play } from "lucide-react";

export const Gallery = () => {
  const clips = [
    {
      title: "Pentakill Épico",
      game: "League of Legends",
      views: "15K"
    },
    {
      title: "ACE 1v5",
      game: "Valorant",
      views: "23K"
    },
    {
      title: "Victoria Royale",
      game: "Fortnite",
      views: "18K"
    },
    {
      title: "Clutch Imposible",
      game: "CS:GO",
      views: "31K"
    },
    {
      title: "Speedrun Record",
      game: "Minecraft",
      views: "12K"
    },
    {
      title: "Combo Perfecto",
      game: "Street Fighter",
      views: "9K"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl mb-6 text-primary">
            GALERÍA DE CLIPS
          </h2>
          <p className="font-game text-xl text-foreground/80">
            Los mejores momentos de nuestra comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clips.map((clip, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative bg-secondary border-2 border-border aspect-video overflow-hidden group-hover:border-primary transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/50" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 font-game text-sm text-muted-foreground">
                  {clip.views} vistas
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-pixel text-xl mb-2 group-hover:text-primary transition-colors">
                  {clip.title}
                </h3>
                <p className="font-game text-muted-foreground">{clip.game}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
