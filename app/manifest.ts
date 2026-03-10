import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Radiast - Transformación Digital',
    short_name: 'Radiast',
    description: 'Transformación digital, automatización RPA e inteligencia artificial para empresas',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'technology'],
    lang: 'es-BO',
    dir: 'ltr',
    icons: [
      {
        src: '/icons/logo/logo-radiast.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
