const skillGroups = [
  {
    category: "Gestion Administrativa",
    skills: [
      "Planificacion estrategica",
      "Gestion de proyectos",
      "Organizacion empresarial",
      "Procesos administrativos",
      "Gestion documental",
      "Control de indicadores",
    ],
  },
  {
    category: "Negocios Internacionales",
    skills: [
      "Comercio internacional",
      "Negociacion intercultural",
      "Mercados globales",
      "Logistica internacional",
      "Regulaciones comerciales",
      "Estrategia de expansion",
    ],
  },
  {
    category: "Trabajo en Equipo",
    skills: [
      "Liderazgo colaborativo",
      "Comunicacion efectiva",
      "Resolucion de conflictos",
      "Coordinacion de grupos",
      "Escucha activa",
      "Delegacion de tareas",
    ],
  },
  {
    category: "Adaptabilidad y Comunicacion",
    skills: [
      "Adaptacion rapida",
      "Aprendizaje continuo",
      "Comunicacion empresarial",
      "Presentaciones ejecutivas",
      "Pensamiento critico",
      "Orientacion a resultados",
    ],
  },
]

export function Skills() {
  return (
    <section
      id="habilidades"
      className="py-24 px-6 bg-secondary/50"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Competencias
          </p>
          <h2
            id="skills-heading"
            className="font-serif text-3xl md:text-4xl text-foreground"
          >
            Habilidades Administrativas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-medium text-foreground text-sm mb-4 pb-3 border-b border-border">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
