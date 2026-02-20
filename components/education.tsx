import { GraduationCap, Award, Languages } from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    period: "Formacion Profesional",
    title: "Administracion de Empresas",
    description:
      "Formacion integral en gestion empresarial, planificacion estrategica, finanzas corporativas, mercadeo y liderazgo organizacional.",
  },
  {
    icon: Award,
    period: "Especializacion",
    title: "Negocios Internacionales",
    description:
      "Especializacion en comercio internacional, gestion de mercados globales, negociacion intercultural y estrategias de expansion empresarial.",
  },
  {
    icon: Award,
    period: "En Curso",
    title: "Diplomado Profesional",
    description:
      "Fortalecimiento de competencias profesionales con enfoque en herramientas modernas de gestion administrativa y liderazgo corporativo.",
  },
  {
    icon: Languages,
    period: "En Curso",
    title: "Ingles Profesional",
    description:
      "Aprendizaje activo del idioma ingles para fortalecer el perfil administrativo bilingue y ampliar oportunidades en mercados internacionales.",
  },
]

export function Education() {
  return (
    <section
      id="formacion"
      className="py-24 px-6"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Trayectoria Academica
          </p>
          <h2
            id="education-heading"
            className="font-serif text-3xl md:text-4xl text-foreground"
          >
            Experiencia y Formacion
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden="true" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 z-10" aria-hidden="true" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <item.icon className="text-primary" size={20} />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-primary font-medium">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="font-medium text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
