<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Video Background Placeholder -->
      <div class="absolute inset-0">
        <img
          src="https://placehold.co/1920x1080/000000/FF6B35?text=Hero+Video+Background"
          alt="Hero Background"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary-black"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 container-custom text-center space-y-8 py-20">
        <h1
          class="
            font-headline 
            text-6xl md:text-8xl lg:text-9xl 
            text-white 
            uppercase 
            tracking-wider
            animate-fade-in
          "
        >
          Moisés
        </h1>
        <p class="text-2xl md:text-3xl text-white/90 font-body animate-slide-up">
          Productor Audiovisual & Estratega de Video Marketing
        </p>
        <p class="text-lg md:text-xl text-white/70 font-body max-w-3xl mx-auto animate-slide-up">
          Transformo ideas en narrativas visuales impactantes que generan resultados medibles
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-scale-in">
          <SharedCTAButton to="/contacto" size="lg">
            Agenda una Llamada
          </SharedCTAButton>
          <SharedCTAButton to="/portafolio" size="lg" variant="outline">
            Ver Portafolio
          </SharedCTAButton>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-primary-navy">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center"
          >
            <div class="text-4xl md:text-5xl font-headline text-primary-orange mb-2">
              {{ stat.numero }}
            </div>
            <div class="text-white/70 font-body">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Work Section -->
    <section class="py-20">
      <div class="container-custom">
        <SharedSectionTitle align="center">
          Trabajo Destacado
        </SharedSectionTitle>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div
            v-for="(proyecto, index) in proyectosDestacados"
            :key="index"
            class="group"
          >
            <NuxtLink :to="`/portafolio/${proyecto.categoria}/${proyecto.slug}`">
              <div class="relative overflow-hidden rounded-lg mb-4">
                <SharedVideoPlaceholder
                  :video-id="proyecto.videoId"
                  :title="proyecto.titulo"
                  :thumbnail="proyecto.thumbnail"
                />
              </div>
              <h3 class="text-xl font-body font-semibold text-white group-hover:text-primary-orange transition-colors">
                {{ proyecto.titulo }}
              </h3>
              <p class="text-white/70 text-sm mt-2">
                {{ proyecto.categoria }}
              </p>
            </NuxtLink>
          </div>
        </div>

        <div class="text-center mt-12">
          <SharedCTAButton to="/portafolio" variant="outline">
            Ver Todo el Portafolio
          </SharedCTAButton>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-20 bg-primary-navy">
      <div class="container-custom">
        <SharedSectionTitle align="center">
          Servicios
        </SharedSectionTitle>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div
            v-for="(servicio, index) in servicios"
            :key="index"
            class="bg-primary-black p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="text-4xl mb-4">{{ servicio.icono }}</div>
            <h3 class="text-2xl font-body font-semibold text-white mb-4">
              {{ servicio.titulo }}
            </h3>
            <p class="text-white/70 mb-6">
              {{ servicio.descripcion }}
            </p>
            <NuxtLink
              to="/servicios"
              class="text-primary-orange hover:text-primary-orange/80 transition-colors inline-flex items-center"
            >
              Saber más
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container-custom">
        <div class="bg-gradient-to-r from-primary-orange to-primary-orange/80 rounded-2xl p-12 text-center">
          <h2 class="text-4xl md:text-5xl font-headline text-white uppercase mb-6">
            ¿Listo para transformar tu marca?
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda una llamada gratuita y platiquemos sobre cómo el video puede impulsar tu negocio
          </p>
          <SharedCTAButton to="/contacto" variant="secondary" size="lg">
            Agenda tu Llamada Gratuita
          </SharedCTAButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags para la página
useHead({
  title: 'Moisés - Productor Audiovisual | Video Marketing Profesional',
  meta: [
    {
      name: 'description',
      content: 'Productor audiovisual profesional especializado en video marketing. Transformo ideas en narrativas visuales que generan resultados medibles.'
    }
  ]
})

const stats = [
  { numero: '10+', label: 'Años de Experiencia' },
  { numero: '200+', label: 'Proyectos Completados' },
  { numero: '50+', label: 'Clientes Satisfechos' },
  { numero: '15M+', label: 'Vistas Generadas' }
]

const proyectosDestacados = [
  {
    titulo: 'Restaurante Gourmet La Casa',
    categoria: 'Gastronómico',
    slug: 'restaurante-gourmet-la-casa',
    videoId: 'placeholder',
    thumbnail: 'https://placehold.co/800x450/000000/FF6B35?text=Gastronomico'
  },
  {
    titulo: 'Constructora Moderna',
    categoria: 'Construcción',
    slug: 'constructora-moderna',
    videoId: 'placeholder',
    thumbnail: 'https://placehold.co/800x450/1A2332/20B2AA?text=Construccion'
  },
  {
    titulo: 'FitZone Deportivo',
    categoria: 'Deportivo',
    slug: 'tienda-deportiva-fitzone',
    videoId: 'placeholder',
    thumbnail: 'https://placehold.co/800x450/FF6B35/000000?text=Deportivo'
  }
]

const servicios = [
  {
    icono: '🎬',
    titulo: 'Videos Publicitarios',
    descripcion: 'Spots creativos que capturan la atención y generan acción en tu audiencia objetivo.'
  },
  {
    icono: '🏢',
    titulo: 'Videos Corporativos',
    descripcion: 'Contenido institucional que comunica profesionalismo y construye confianza.'
  },
  {
    icono: '📱',
    titulo: 'Contenido para Redes',
    descripcion: 'Videos optimizados para redes sociales que maximizan engagement y alcance.'
  }
]
</script>
