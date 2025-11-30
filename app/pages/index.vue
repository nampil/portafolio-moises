<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <!-- Hero Content -->
      <div class="relative z-10 container mx-auto px-4 text-center space-y-8 py-20">
        <h1 class="text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-wider" style="font-family: 'Bebas Neue', sans-serif;">
          MOISÉS
        </h1>
        <p class="text-2xl md:text-3xl text-white">
          Productor Audiovisual & Estratega de Video Marketing
        </p>
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Transformo ideas en narrativas visuales impactantes que generan resultados medibles
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a 
            href="/contacto" 
            class="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Agenda una Llamada
          </a>
          <a 
            href="/portafolio" 
            class="px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Ver Portafolio
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl md:text-5xl text-orange-500 mb-2" style="font-family: 'Bebas Neue', sans-serif;">
              10+
            </div>
            <div class="text-gray-400">
              Años de Experiencia
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl text-orange-500 mb-2" style="font-family: 'Bebas Neue', sans-serif;">
              200+
            </div>
            <div class="text-gray-400">
              Proyectos Completados
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl text-orange-500 mb-2" style="font-family: 'Bebas Neue', sans-serif;">
              50+
            </div>
            <div class="text-gray-400">
              Clientes Satisfechos
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl text-orange-500 mb-2" style="font-family: 'Bebas Neue', sans-serif;">
              15M+
            </div>
            <div class="text-gray-400">
              Vistas Generadas
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Work Section -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-5xl md:text-6xl text-white uppercase tracking-wider mb-4" style="font-family: 'Bebas Neue', sans-serif;">
            Trabajo Destacado
          </h2>
          <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="group">
            <a href="/portafolio">
              <div class="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-800 flex items-center justify-center">
                <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">
                Restaurante Gourmet La Casa
              </h3>
              <p class="text-gray-400 text-sm mt-2">
                Gastronómico
              </p>
            </a>
          </div>

          <div class="group">
            <a href="/portafolio">
              <div class="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-800 flex items-center justify-center">
                <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">
                Constructora Moderna
              </h3>
              <p class="text-gray-400 text-sm mt-2">
                Construcción
              </p>
            </a>
          </div>

          <div class="group">
            <a href="/portafolio">
              <div class="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-800 flex items-center justify-center">
                <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">
                FitZone Deportivo
              </h3>
              <p class="text-gray-400 text-sm mt-2">
                Deportivo
              </p>
            </a>
          </div>
        </div>

        <div class="text-center mt-12">
          <a 
            href="/portafolio" 
            class="px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-lg transition-all duration-300 inline-block"
          >
            Ver Todo el Portafolio
          </a>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-20 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-5xl md:text-6xl text-white uppercase tracking-wider mb-4" style="font-family: 'Bebas Neue', sans-serif;">
            Servicios
          </h2>
          <div class="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="bg-black p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-4xl mb-4">🎬</div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              Videos Publicitarios
            </h3>
            <p class="text-gray-400 mb-6">
              Spots creativos que capturan la atención y generan acción en tu audiencia objetivo.
            </p>
            <a href="/servicios" class="text-orange-500 hover:text-orange-400 transition-colors inline-flex items-center">
              Saber más
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div class="bg-black p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-4xl mb-4">🏢</div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              Videos Corporativos
            </h3>
            <p class="text-gray-400 mb-6">
              Contenido institucional que comunica profesionalismo y construye confianza.
            </p>
            <a href="/servicios" class="text-orange-500 hover:text-orange-400 transition-colors inline-flex items-center">
              Saber más
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div class="bg-black p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
            <div class="text-4xl mb-4">📱</div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              Contenido para Redes
            </h3>
            <p class="text-gray-400 mb-6">
              Videos optimizados para redes sociales que maximizan engagement y alcance.
            </p>
            <a href="/servicios" class="text-orange-500 hover:text-orange-400 transition-colors inline-flex items-center">
              Saber más
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center">
          <h2 class="text-4xl md:text-5xl text-white uppercase mb-6" style="font-family: 'Bebas Neue', sans-serif;">
            ¿Listo para transformar tu marca?
          </h2>
          <p class="text-xl text-white mb-8 max-w-2xl mx-auto">
            Agenda una llamada gratuita y platiquemos sobre cómo el video puede impulsar tu negocio
          </p>
          <a 
            href="/contacto" 
            class="px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 inline-block text-lg"
          >
            Agenda tu Llamada Gratuita
          </a>
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
</script>
