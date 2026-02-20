import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maria Camila Fierro | Administradora de Empresas Medellin',
  description:
    'Administradora de Empresas en Medellin con especializacion en Negocios Internacionales. Profesional adaptable, comprometida y en constante aprendizaje.',
  keywords: [
    'administradora de empresas Medellin',
    'profesional administrativa Medellin',
    'administradora de empresas Colombia',
    'talento administrativo Medellin',
    'profesional negocios internacionales Medellin',
    'perfil administrativo Medellin',
    'hoja de vida administradora de empresas Medellin',
  ],
  authors: [{ name: 'Maria Camila Fierro' }],
  openGraph: {
    title: 'Maria Camila Fierro | Administradora de Empresas Medellin',
    description:
      'Administradora de Empresas en Medellin con especializacion en Negocios Internacionales. Profesional adaptable, comprometida y en constante aprendizaje.',
    type: 'profile',
    locale: 'es_CO',
    url: 'https://mariacamilafierro.com',
    siteName: 'Maria Camila Fierro - Portafolio Profesional',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#c4617a',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maria Camila Fierro',
  jobTitle: 'Administradora de Empresas',
  description:
    'Profesional administrativa en Medellin, Colombia, especializada en Negocios Internacionales con orientacion al aprendizaje continuo y generacion de valor empresarial.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellin',
    addressRegion: 'Antioquia',
    addressCountry: 'Colombia',
  },
  knowsAbout: [
    'Administracion de Empresas',
    'Negocios Internacionales',
    'Gestion Empresarial',
    'Trabajo en equipo',
    'Gestion administrativa',
    'Comunicacion empresarial',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Administracion de Empresas',
  },
  seeks: 'Oportunidades profesionales en administracion y negocios internacionales en Medellin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
