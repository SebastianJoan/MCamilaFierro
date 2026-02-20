import Image from "next/image"
import { Briefcase, Lightbulb, Target } from "lucide-react"

const projects = [
  {
    icon: Briefcase,
    title: "Gestion Administrativa Integral",
    description:
      "Desarrollo de competencias en planificacion, organizacion y control de procesos administrativos, aplicando herramientas modernas de gestion empresarial para optimizar recursos y generar eficiencia.",
    tags: ["Administracion", "Gestion", "Procesos"],
  },
  {
    icon: Lightbulb,
    title: "Proyecto de Negocios Internacionales",
    description:
      "Investigacion y analisis de mercados internacionales, estudio de regulaciones comerciales y desarrollo de estrategias de exportacion para empresas colombianas con potencial global.",
    tags: ["Comercio exterior", "Investigacion", "Estrategia"],
  },
  {
    icon: Target,
    title: "Liderazgo y Coordinacion de Equipos",
    description:
      "Participacion activa en proyectos colaborativos enfocados en la coordinacion de equipos interdisciplinarios, comunicacion empresarial y resolucion de problemas organizacionales.",
    tags: ["Liderazgo", "Trabajo en equipo", "Comunicacion"],
  },
]

export function Experience() {
  return (
    <section
      id="experiencia"
      className="py-24 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Portafolio
          </p>
          <h2
            id="experience-heading"
            className="font-serif text-3xl md:text-4xl text-foreground"
          >
            Portafolio Profesional
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <project.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-medium text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery */}
        <div>
          <h3 className="font-serif text-2xl text-foreground text-center mb-8">
            Galeria Profesional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <Image
                src="/images/gallery-1.jpg"
                alt="Maria Camila Fierro en presentacion corporativa en Medellin"
                width={600}
                height={450}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <Image
                src="/images/gallery-2.jpg"
                alt="Profesional administrativa trabajando en entorno corporativo en Medellin"
                width={600}
                height={450}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <Image
                src="/images/gallery-3.jpg"
                alt="Vista panoramica de Medellin Colombia, ciudad de oportunidades empresariales"
                width={600}
                height={450}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
