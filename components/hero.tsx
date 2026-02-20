import Image from "next/image"
import { MapPin, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
      aria-label="Presentacion profesional"
    >
      <div className="mx-auto max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Portrait */}
        <div className="relative shrink-0 opacity-0 animate-fade-in-up">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Maria Camila Fierro, Administradora de Empresas en Medellin"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-medium shadow-lg flex items-center gap-1.5">
            <MapPin size={14} />
            <span>Medellin, Colombia</span>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Portafolio Profesional
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance text-foreground">
              Maria Camila Fierro
            </h1>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground font-light">
              Administradora de Empresas en Medellin
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Especialista en Negocios Internacionales
            </p>
          </div>

          <p className="max-w-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
            Profesional administrativa comprometida con el aprendizaje continuo,
            la generacion de valor organizacional y la adaptacion a entornos
            empresariales dinamicos en Medellin y Colombia.
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up animation-delay-600">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contactar
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
            >
              Conocer mas
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
