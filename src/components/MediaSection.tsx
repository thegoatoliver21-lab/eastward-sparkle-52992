import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

export const MediaSection = () => {
  const reviews = [
    {
      quote: "¡La mejor comunidad gaming que he conocido!",
      score: "10/10",
      source: "GameSpot",
    },
    {
      quote: "Un lugar increíble para conectar con otros gamers",
      score: "10/10",
      source: "IGN",
    },
    {
      quote: "Eventos geniales y gente maravillosa",
      score: "9.5/10",
      source: "PC Gamer",
    },
  ];

  return (
    <section id="media" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <div className="mb-20">
          <div className="relative aspect-video bg-gradient-to-br from-primary via-secondary to-primary border-4 border-primary rounded-lg overflow-hidden group cursor-pointer transition-all" style={{ boxShadow: '0 0 30px hsl(190 100% 50%), 8px 8px 0 hsl(0 0% 0%)' }}>
            {/* Video Thumbnail Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-black to-primary/30 backdrop-blur-sm">
              <div className="text-center">
                <Button 
                  size="lg"
                  className="rounded-full w-24 h-24 bg-background text-primary hover:bg-card group-hover:scale-125 transition-all duration-300 shadow-[6px_6px_0_0_rgba(0,0,0,1)] border-4 border-primary"
                >
                  <Play className="w-12 h-12" fill="currentColor" />
                </Button>
                <p className="font-game font-bold text-white text-xl mt-6 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
                  VER EL VIDEO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <h2 className="font-pixel text-3xl md:text-5xl text-center mb-4 text-foreground drop-shadow-[0_3px_0_rgba(0,0,0,1)]">
          LO QUE DICEN
        </h2>
        <p className="font-game text-center text-lg mb-16 text-foreground/80 max-w-2xl mx-auto">
          Nuestra comunidad habla por sí misma
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
              <div
              key={review.source}
              className="bg-card p-6 border-4 border-primary rounded-lg transition-all animate-fade-in-up hover:border-accent"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: '0 0 20px hsl(190 100% 50% / 0.5), 6px 6px 0 hsl(0 0% 0%)'
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                  />
                ))}
              </div>
              <blockquote className="font-game text-foreground/90 mb-4 text-lg leading-relaxed">
                "{review.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="font-pixel text-sm text-primary drop-shadow-[0_0_8px_rgba(0,255,255,1)]">
                  {review.score}
                </span>
                <span className="font-game font-semibold text-primary">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
