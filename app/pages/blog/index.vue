<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero -->
    <section class="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div class="container mx-auto px-4 text-center">
        <h1
          class="text-5xl md:text-6xl uppercase tracking-wider mb-6"
          style="font-family: 'Bebas Neue', sans-serif"
        >
          Blog
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Artículos sobre video marketing, producción audiovisual y estrategia
          de contenido
        </p>
      </div>
    </section>

    <!-- Grid de artículos -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="articulo in articulos"
            :key="articulo.slug"
            class="group"
          >
            <div
              class="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                class="aspect-video bg-gray-800 flex items-center justify-center"
              >
                <img
                  :src="`https://placehold.co/800x450/1A2332/FF6B35?text=${encodeURIComponent(articulo.titulo)}`"
                  :alt="articulo.titulo"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <div class="text-sm text-orange-500 mb-2">
                  {{ articulo.categoria }}
                </div>
                <h3
                  class="text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors"
                >
                  {{ articulo.titulo }}
                </h3>
                <p class="text-gray-400 text-sm mb-4">
                  {{ articulo.excerpt }}
                </p>
                <div class="text-xs text-gray-500">
                  {{ articulo.fecha }}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog | Moisés Productor Audiovisual',
  meta: [
    {
      name: 'description',
      content:
        'Artículos sobre video marketing, producción audiovisual y estrategias de contenido.',
    },
  ],
})

const articulos = [
  {
    titulo: 'Cómo el Video Marketing Transforma tu Marca en 2025',
    slug: 'video-marketing-transforma-marca-2025',
    categoria: 'Video Marketing',
    excerpt:
      'Descubre las estrategias más efectivas de video marketing para transformar tu marca...',
    fecha: '29 Nov 2024',
  },
  {
    titulo: 'Producción Audiovisual: De la Idea al Resultado Final',
    slug: 'produccion-audiovisual-proceso-completo',
    categoria: 'Proceso de Producción',
    excerpt: 'Una guía completa sobre el proceso de producción audiovisual...',
    fecha: '20 Nov 2024',
  },
  {
    titulo: '5 Errores Comunes al Crear Videos Corporativos',
    slug: 'errores-comunes-videos-corporativos',
    categoria: 'Tips y Consejos',
    excerpt:
      'Aprende a evitar los errores más frecuentes en la producción de videos corporativos...',
    fecha: '10 Nov 2024',
  },
]
</script>
