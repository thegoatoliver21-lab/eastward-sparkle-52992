import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32">
      {/* Video de fondo - Gaming/Pixel Art */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/videoweb.mp4" type="video/mp4" />
        </video>
        {/* Overlay para mejor contraste */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Glowing orbs overlay para efecto gaming */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-primary rounded-full blur-3xl opacity-30 animate-float" 
             style={{ boxShadow: '0 0 120px hsl(190 100% 50%)' }} />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary rounded-full blur-3xl opacity-25 animate-float-slow" 
             style={{ boxShadow: '0 0 150px hsl(190 100% 50%)' }} />
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(190 100% 50%) 3px, hsl(190 100% 50%) 4px)',
      }} />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title con efecto glitch */}
        <h1 className="font-pixel text-5xl md:text-7xl lg:text-9xl mb-8 text-primary drop-shadow-[0_0_40px_rgba(0,255,255,1)] animate-fade-in-up">
          <span className="relative inline-block animate-glitch">
            404 GAMERS
          </span>
        </h1>

        {/* Animated Subtitle Bar */}
        <div className="relative mb-12 animate-fade-in-up [animation-delay:200ms]">
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" 
               style={{ boxShadow: '0 0 20px hsl(190 100% 50%)' }} />
          <p className="font-game text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-foreground font-semibold">
            Únete a la comunidad gaming más vibrante y conecta con jugadores de todo el mundo.
            <br className="hidden md:block" />
            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,255,255,1)]">
              ¡Descubre torneos, haz amigos y vive momentos inolvidables!
            </span>
          </p>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-6" 
               style={{ boxShadow: '0 0 20px hsl(190 100% 50%)' }} />
        </div>

        {/* CTA Buttons con glow intenso y z-index alto */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up [animation-delay:400ms] relative z-20">
          <Button 
            size="lg" 
            className="font-game font-bold text-lg px-8 py-6 bg-primary text-black hover:bg-primary/90 transition-all relative group cursor-pointer"
            style={{ 
              boxShadow: '0 0 30px hsl(190 100% 50%), 4px 4px 0 hsl(190 100% 30%)',
            }}
          >
            <Play className="mr-2 h-5 w-5" />
            UNIRSE AHORA
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 blur-xl transition-opacity pointer-events-none" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="font-game font-bold text-lg px-8 py-6 border-2 border-primary bg-black/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-black transition-all cursor-pointer"
            style={{ 
              boxShadow: '0 0 20px hsl(190 100% 50% / 0.5), 4px 4px 0 hsl(190 100% 30%)',
            }}
            >
            VER VIDEO
          </Button>
        </div>
      </div>
    </section>
  );
};
