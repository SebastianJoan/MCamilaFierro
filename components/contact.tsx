import { Mail, Linkedin, MapPin, Send } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Conectemos
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl text-foreground mb-4"
          >
            Contacto Profesional en Medellin
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Disponible para oportunidades profesionales en Medellin y modalidad
            remota. Profesional administrativa en crecimiento continuo,
            comprometida con aportar valor organizacional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Email */}
          <a
            href="mailto:mariacamilafierro@email.com"
            className="flex flex-col items-center gap-3 bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all group text-center"
            aria-label="Enviar correo electronico"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Email</p>
              <p className="text-xs text-muted-foreground mt-1">
                mariacamilafierro@email.com
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mariacamilafierro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all group text-center"
            aria-label="Ver perfil de LinkedIn"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Linkedin className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">LinkedIn</p>
              <p className="text-xs text-muted-foreground mt-1">
                /in/mariacamilafierro
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-3 bg-card rounded-xl p-8 border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Ubicacion</p>
              <p className="text-xs text-muted-foreground mt-1">
                Medellin, Colombia
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="mailto:mariacamilafierro@email.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            Enviar Mensaje
          </a>
        </div>
      </div>
    </section>
  )
}
