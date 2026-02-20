import { CheckCircle2 } from "lucide-react"

const valuePoints = [
  {
    title: "Compromiso con la Excelencia",
    text: "Profesional responsable que aborda cada proyecto con dedicacion, buscando siempre superar las expectativas y generar resultados medibles.",
  },
  {
    title: "Adaptacion Inmediata",
    text: "Capacidad demostrada de integrarse rapidamente a equipos de trabajo y entornos empresariales dinamicos, aportando desde el primer dia.",
  },
  {
    title: "Vision Integral de Negocios",
    text: "Formacion en administracion de empresas y negocios internacionales que permite una comprension holistica de la gestion corporativa.",
  },
  {
    title: "Crecimiento Continuo",
    text: "Inversion constante en formacion profesional, incluyendo diplomados y aprendizaje de idiomas, para mantenerse competitiva en el mercado laboral.",
  },
  {
    title: "Comunicacion Empresarial Efectiva",
    text: "Habilidad para transmitir ideas de forma clara, tanto en presentaciones ejecutivas como en coordinacion de equipos interdisciplinarios.",
  },
  {
    title: "Orientacion a Resultados",
    text: "Enfoque en metricas y objetivos claros, priorizando la eficiencia organizacional y la generacion de valor para la empresa.",
  },
]

export function ValueProposition() {
  return (
    <section
      id="propuesta"
      className="py-24 px-6 bg-secondary/50"
      aria-labelledby="value-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Por que elegirme
          </p>
          <h2
            id="value-heading"
            className="font-serif text-3xl md:text-4xl text-foreground mb-4"
          >
            Propuesta de Valor
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Maria Camila Fierro aporta a las empresas una combinacion de
            formacion estrategica, compromiso genuino y una mentalidad de
            aprendizaje continuo que la convierten en un talento administrativo
            valioso para cualquier organizacion en Medellin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuePoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <CheckCircle2
                className="text-primary shrink-0 mt-0.5"
                size={20}
              />
              <div>
                <h3 className="font-medium text-foreground text-sm mb-1.5">
                  {point.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
