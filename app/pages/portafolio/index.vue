<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero -->
    <section class="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div class="container mx-auto px-4 text-center">
        <h1
          class="text-5xl md:text-6xl uppercase tracking-wider mb-6"
          style="font-family: 'Bebas Neue', sans-serif"
        >
          Portafolio
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Explora mi trabajo en diferentes industrias y formatos
        </p>
      </div>
    </section>

    <!-- Filtros de categoría -->
    <section class="py-8 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            v-for="cat in categorias"
            :key="cat.slug"
            @click="categoriaActiva = cat.slug"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              categoriaActiva === cat.slug
                ? 'bg-orange-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700',
            ]"
          >
            {{ cat.nombre }}
          </button>
        </div>
      </div>
    </section>

    <!-- Grid de videos -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="proyecto in proyectosFiltrados"
            :key="proyecto.slug"
            class="group"
          >
            <div
              class="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-800 flex items-center justify-center"
            >
              <div
                class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <svg
                  class="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
                  />
                </svg>
              </div>
            </div>
            <h3
              class="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors"
            >
              {{ proyecto.titulo }}
            </h3>
            <p class="text-gray-400 text-sm mt-2">
              {{ proyecto.categoria }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Portafolio | Moisés Productor Audiovisual',
  meta: [
    {
      name: 'description',
      content:
        'Explora mi trabajo en producción audiovisual: videos publicitarios, corporativos, eventos y más.',
    },
  ],
})

const categoriaActiva = ref('todos')

const categorias = [
  { slug: 'todos', nombre: 'Todos' },
  { slug: 'gastronomico', nombre: 'Gastronómico' },
  { slug: 'construccion', nombre: 'Construcción' },
  { slug: 'deportivo', nombre: 'Deportivo' },
  { slug: 'retail', nombre: 'Retail' },
  { slug: 'corporativo', nombre: 'Corporativo' },
  { slug: 'podcast', nombre: 'Podcast' },
  { slug: 'eventos', nombre: 'Eventos' },
  { slug: 'conferencias', nombre: 'Conferencias' },
]

const proyectos = [
  {
    titulo: 'Restaurante Gourmet La Casa',
    categoria: 'Gastronómico',
    slug: 'restaurante-gourmet-la-casa',
  },
  {
    titulo: 'Constructora Moderna',
    categoria: 'Construcción',
    slug: 'constructora-moderna',
  },
  {
    titulo: 'FitZone Deportivo',
    categoria: 'Deportivo',
    slug: 'tienda-deportiva-fitzone',
  },
  {
    titulo: 'Café Boutique Urban',
    categoria: 'Gastronómico',
    slug: 'cafe-boutique',
  },
  {
    titulo: 'Tech Corp',
    categoria: 'Corporativo',
    slug: 'tech-corp',
  },
  {
    titulo: 'Retail Fashion Store',
    categoria: 'Retail',
    slug: 'fashion-store',
  },
]

const proyectosFiltrados = computed(() => {
  if (categoriaActiva.value === 'todos') {
    return proyectos
  }
  return proyectos.filter((p) =>
    p.categoria.toLowerCase().includes(categoriaActiva.value.toLowerCase())
  )
})
</script>
