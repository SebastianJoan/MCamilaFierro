import { BookOpen, Users, Globe, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: BookOpen,
    title: "Aprendizaje Continuo",
    text: "Actualmente cursando diplomado profesional y aprendiendo ingles para fortalecer su perfil internacional.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    text: "Adaptacion rapida a equipos de trabajo con orientacion colaborativa y comunicacion empresarial efectiva.",
  },
  {
    icon: Globe,
    title: "Vision Internacional",
    text: "Formacion en negocios internacionales con proyeccion hacia mercados globales desde Medellin.",
  },
  {
    icon: TrendingUp,
    title: "Orientacion Estrategica",
    text: "Enfoque en gestion organizacional y planificacion estrategica para generar valor empresarial.",
  },
]

export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 px-6 bg-secondary/50"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Conoceme
          </p>
          <h2
            id="about-heading"
            className="font-serif text-3xl md:text-4xl text-foreground"
          >
            Perfil Profesional
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Narrative */}
          <div className="flex flex-col gap-5">
            <p className="leading-relaxed text-muted-foreground">
              Maria Camila Fierro es una Administradora de Empresas ubicada en
              Medellin, Colombia, con formacion en negocios internacionales,
              habilidades administrativas, gestion organizacional y adaptacion a
              entornos empresariales dinamicos.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Como profesional administrativa en Medellin, se destaca por su
              compromiso con el crecimiento continuo, la responsabilidad y la
              capacidad de integrarse rapidamente a nuevos equipos de trabajo.
              Su formacion como administradora de empresas en Colombia le
              permite aportar una vision integral de la gestion corporativa.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Actualmente en busqueda de oportunidades profesionales donde
              aportar valor y adquirir experiencia en el campo administrativo
              y de negocios internacionales en Medellin y modalidad remota.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm w-fit">
              <Globe className="text-primary" size={16} />
              Disponible para oportunidades en Medellin y trabajo remoto
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
              >
                <item.icon className="text-primary mb-3" size={22} />
                <h3 className="font-medium text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
