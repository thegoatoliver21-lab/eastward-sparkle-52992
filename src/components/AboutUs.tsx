export const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-4xl md:text-5xl mb-6 text-primary">
            SOBRE NOSOTROS
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-game text-lg md:text-xl mb-6">
              Somos 404 Gamers, la comunidad gaming más apasionada y diversa. 
              Nos dedicamos a unir jugadores de todos los niveles para compartir 
              experiencias, competir en torneos y disfrutar de lo que más nos gusta: los videojuegos.
            </p>
            <p className="font-game text-lg md:text-xl text-muted-foreground">
              Desde 2024, hemos creado un espacio donde cada gamer puede encontrar su lugar, 
              ya sea en competencias profesionales o en sesiones casuales con amigos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-background border-2 border-border p-8 text-center hover:border-primary hover:scale-105 transition-all">
            <div className="text-5xl font-pixel text-primary mb-4">500+</div>
            <div className="font-game text-xl text-muted-foreground">Miembros Activos</div>
          </div>
          <div className="bg-background border-2 border-border p-8 text-center hover:border-primary hover:scale-105 transition-all">
            <div className="text-5xl font-pixel text-primary mb-4">50+</div>
            <div className="font-game text-xl text-muted-foreground">Torneos Realizados</div>
          </div>
          <div className="bg-background border-2 border-border p-8 text-center hover:border-primary hover:scale-105 transition-all">
            <div className="text-5xl font-pixel text-primary mb-4">24/7</div>
            <div className="font-game text-xl text-muted-foreground">Comunidad Activa</div>
          </div>
        </div>
      </div>
    </section>
  );
};
