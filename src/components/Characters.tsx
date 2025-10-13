import { useState } from "react";
import heroChar from "@/assets/hero-character.png";
import coolGamer from "@/assets/cool-gamer.png";
import knightChar from "@/assets/knight-character.png";
import scoutChar from "@/assets/scout-character.png";
import side1 from "@/assets/side-character-1.png";
import side2 from "@/assets/side-character-2.png";

export const Characters = () => {
  const [activeCharacter, setActiveCharacter] = useState(0);

  const characters = [
    {
      id: 0,
      name: "STREAMER",
      image: heroChar,
      bio: "¡El rey del contenido! Este gamer ha dominado el arte de entretener mientras juega. Con carisma natural y habilidades excepcionales, construye comunidades leales y crea momentos épicos en cada transmisión. Su energía contagiosa mantiene a miles de espectadores pegados a la pantalla.",
      favoriteGame: "Apex Legends",
      likes: "Interactuar con el chat",
      dislikes: "Trolls y toxicidad",
    },
    {
      id: 1,
      name: "PRO PLAYER",
      image: coolGamer,
      bio: "Maestro de los esports y leyenda viviente del gaming competitivo. Este jugador ha alcanzado el más alto nivel de habilidad a través de incontables horas de práctica y dedicación. Su precisión es legendaria y su estrategia impecable, dominando cada partida con maestría absoluta.",
      favoriteGame: "League of Legends",
      likes: "Entrenar y mejorar",
      dislikes: "Perder, lag",
    },
    {
      id: 2,
      name: "MODERADOR",
      image: knightChar,
      bio: "Guardián de la comunidad y protector del buen ambiente. Con paciencia infinita y sentido de justicia, este héroe mantiene el orden en los servidores más caóticos. Es respetado por todos y temido por los que rompen las reglas. La comunidad no sería lo mismo sin su presencia vigilante.",
      favoriteGame: "Discord",
      likes: "Comunidad sana",
      dislikes: "Spam y toxicidad",
    },
    {
      id: 3,
      name: "CAZADOR",
      image: scoutChar,
      bio: "Experto en logros y coleccionista obsesivo de achievements. Este gamer no descansa hasta completar cada juego al 100%, encontrando todos los secretos y desbloqueando cada logro posible. Su biblioteca de juegos completados es impresionante y su paciencia, infinita.",
      favoriteGame: "Todo lo que tenga logros",
      likes: "Completar juegos al 100%",
      dislikes: "Logros imposibles",
    },
  ];

  return (
    <section id="characters" className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Character Buttons - Horizontal */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 flex-wrap">
          {characters.map((character) => (
            <button
              key={character.id}
              onClick={() => setActiveCharacter(character.id)}
              className={`relative group transition-all duration-300 ${
                activeCharacter === character.id
                  ? "scale-110 z-10"
                  : "scale-100 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative overflow-hidden rounded-lg border-4 border-primary bg-gradient-to-br from-primary/20 to-secondary/20 w-24 h-24 md:w-32 md:h-32">
                <img
                  src={character.image}
                  alt={character.name}
                  className={`w-full h-full object-contain p-3 md:p-4 transition-transform duration-300 ${
                    activeCharacter === character.id
                      ? "scale-110"
                      : "group-hover:scale-105"
                  }`}
                  style={{
                    filter:
                      activeCharacter === character.id
                        ? "drop-shadow(0 0 30px hsl(190 100% 50%))"
                        : "drop-shadow(0 0 15px hsl(190 100% 50% / 0.5))",
                  }}
                />
              </div>
              {activeCharacter === character.id && (
                <div className="absolute -inset-1 bg-primary/30 rounded-lg blur-xl -z-10 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        <h2 className="font-pixel text-3xl md:text-5xl text-center mb-8 text-foreground drop-shadow-[0_3px_0_rgba(0,0,0,1)]">
          CONOCE AL ELENCO
        </h2>

        {/* Character Card */}
        <div className="relative max-w-4xl mx-auto">
          {characters.map((character) => (
            <div
              key={character.id}
              className={`transition-all duration-500 ${
                activeCharacter === character.id
                  ? "opacity-100 scale-100 relative"
                  : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="bg-gradient-to-br from-card to-card/80 rounded-lg border-4 border-primary p-6 md:p-8"
                   style={{ boxShadow: '0 0 30px hsl(190 100% 50% / 0.3), 6px 6px 0 hsl(0 0% 0%)' }}>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-pixel text-2xl md:text-3xl text-primary mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                      {character.name}
                    </h4>
                    <p className="font-game text-foreground/90 text-base md:text-lg leading-relaxed">
                      {character.bio}
                    </p>
                  </div>

                  <div className="border-t-2 border-primary/30 pt-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="font-pixel text-sm text-primary/80">Juego favorito:</span>
                      <span className="font-game text-foreground text-right flex-1 ml-4">
                        {character.favoriteGame}
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-pixel text-sm text-primary/80">Le gusta:</span>
                      <span className="font-game text-foreground text-right flex-1 ml-4">
                        {character.likes}
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-pixel text-sm text-primary/80">No le gusta:</span>
                      <span className="font-game text-foreground text-right flex-1 ml-4">
                        {character.dislikes}
                      </span>
                    </div>
                  </div>

                  {/* Character sprite decoration */}
                  <div className="flex justify-center pt-4">
                    <div className="relative w-24 h-24 border-4 border-primary/50 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-contain p-2"
                        style={{ filter: 'drop-shadow(0 0 10px hsl(190 100% 50% / 0.5))' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
