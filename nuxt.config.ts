// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Modo estático (no SSR)
  ssr: false,

  // Módulos
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image'],

  // Configuración de Tailwind
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },

  // Configuración de Nuxt Content
  content: {
    documentDriven: false,
    markdown: {
      toc: { depth: 3 },
    },
    highlight: {
      theme: 'github-dark',
    },
  },

  // Meta tags por defecto
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Moisés - Productor Audiovisual',
      meta: [
        {
          name: 'description',
          content:
            'Portafolio profesional de producción audiovisual y video marketing',
        },
        { name: 'theme-color', content: '#000000' },
      ],
    },
  },

  // Variables de entorno públicas
  runtimeConfig: {
    public: {
      whatsappNumber: '5215512345678',
      siteUrl: 'http://localhost:3000',
    },
  },

  // Optimización de imágenes
  image: {
    quality: 85,
    format: ['webp'],
  },
})
