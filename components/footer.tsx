import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-6" role="contentinfo">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-foreground">
              Maria Camila Fierro
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Administradora de Empresas | Medellin, Colombia
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/mariacamilafierro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Perfil de LinkedIn de Maria Camila Fierro"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mariacamilafierro@email.com"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Enviar correo a Maria Camila Fierro"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* SEO semantic section */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground/60 leading-relaxed text-center max-w-3xl mx-auto">
            Maria Camila Fierro es una profesional administrativa en Medellin,
            Colombia, con formacion en negocios internacionales y gestion
            empresarial. Talento administrativo orientado al aprendizaje
            continuo, trabajo en equipo y generacion de valor corporativo.
            Disponible para oportunidades profesionales en Medellin y trabajo
            remoto.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground/40">
            {'© '}{new Date().getFullYear()}{' Maria Camila Fierro. Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
