import { Crown, Star, Shield, Users } from "lucide-react";

export const Members = () => {
  const staff = [
    {
      name: "SHADOW",
      role: "Fundador",
      icon: Crown,
      description: "Creador de 404 Gamers y líder de la comunidad"
    },
    {
      name: "PHANTOM",
      role: "Admin",
      icon: Star,
      description: "Administrador de torneos y eventos"
    },
    {
      name: "BLAZE",
      role: "Moderador",
      icon: Shield,
      description: "Moderador principal de la comunidad"
    },
    {
      name: "FROST",
      role: "Moderador",
      icon: Shield,
      description: "Soporte y gestión de miembros"
    }
  ];

  return (
    <section id="members" className="py-20 px-4" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl mb-6 text-primary">
            NUESTRO EQUIPO
          </h2>
          <p className="font-game text-xl text-foreground/80">
            El staff que hace posible esta comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {staff.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="bg-background border-2 border-border p-6 text-center hover:border-primary hover:scale-105 transition-all group"
              >
                <div className="w-24 h-24 bg-primary mx-auto mb-4 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <Icon className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-pixel text-2xl mb-2">
                  {member.name}
                </h3>
                <div className="font-game text-primary font-bold mb-3">
                  {member.role}
                </div>
                <p className="font-game text-sm text-muted-foreground">
                  {member.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-background border-2 border-border p-8 text-center hover:border-primary transition-all">
          <Users className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="font-pixel text-3xl mb-4">
            ÚNETE A NOSOTROS
          </h3>
          <p className="font-game text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            ¿Quieres formar parte de nuestro staff? Estamos buscando personas 
            apasionadas por los videojuegos y la comunidad.
          </p>
          <button className="font-pixel px-8 py-3 bg-primary text-primary-foreground hover:bg-accent hover:scale-105 transition-all">
            APLICAR AHORA
          </button>
        </div>
      </div>
    </section>
  );
};
