import { Calendar, Clock, Users, Trophy } from "lucide-react";
import { Button } from "./ui/button";

export const Events = () => {
  const upcomingEvents = [
    {
      title: "Torneo League of Legends",
      date: "15 Nov 2024",
      time: "18:00 PM",
      participants: "32 equipos",
      prize: "$500",
      status: "Inscripciones Abiertas"
    },
    {
      title: "Copa Valorant",
      date: "22 Nov 2024",
      time: "20:00 PM",
      participants: "16 equipos",
      prize: "$300",
      status: "Próximamente"
    },
    {
      title: "Fortnite Battle Royale",
      date: "30 Nov 2024",
      time: "19:00 PM",
      participants: "100 jugadores",
      prize: "$400",
      status: "Inscripciones Abiertas"
    }
  ];

  return (
    <section id="events" className="py-20 px-4" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl mb-6 text-primary">
            PRÓXIMOS EVENTOS
          </h2>
          <p className="font-game text-xl text-foreground/80">
            Únete a nuestras competiciones y demuestra tu habilidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-background border-2 border-border p-6 hover:border-primary hover:translate-y-[-8px] transition-all"
            >
              <div className="bg-primary text-primary-foreground font-pixel text-sm px-4 py-2 inline-block mb-4">
                {event.status}
              </div>
              
              <h3 className="font-pixel text-2xl mb-4">
                {event.title}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 font-game text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 font-game text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 font-game text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span>{event.participants}</span>
                </div>
                <div className="flex items-center gap-3 font-game">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold">{event.prize}</span>
                </div>
              </div>

              <Button className="w-full font-pixel">
                INSCRIBIRSE
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
