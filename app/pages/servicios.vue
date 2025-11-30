<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero -->
    <section class="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div class="container mx-auto px-4 text-center">
        <h1
          class="text-5xl md:text-6xl uppercase tracking-wider mb-6"
          style="font-family: 'Bebas Neue', sans-serif"
        >
          Servicios
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Soluciones audiovisuales estratégicas para impulsar tu marca
        </p>
      </div>
    </section>

    <!-- Servicios Principales -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="servicio in serviciosPrincipales"
            :key="servicio.id"
            class="bg-gray-900 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="text-5xl mb-4">{{ servicio.icono }}</div>
            <h3
              class="text-2xl font-semibold text-white mb-4"
              style="font-family: 'Bebas Neue', sans-serif"
            >
              {{ servicio.titulo }}
            </h3>
            <p class="text-gray-400 mb-6">
              {{ servicio.descripcion }}
            </p>
            <ul class="space-y-2 mb-6">
              <li
                v-for="item in servicio.incluye"
                :key="item"
                class="flex items-start text-gray-300 text-sm"
              >
                <svg
                  class="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ item }}
              </li>
            </ul>
            <div class="text-orange-500 font-semibold text-lg mb-4">
              {{ servicio.precio }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alianzas y Paquetes -->
    <section class="py-20 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-4xl md:text-5xl text-white uppercase tracking-wider mb-4"
            style="font-family: 'Bebas Neue', sans-serif"
          >
            Alianzas Estratégicas
          </h2>
          <p class="text-gray-300">
            Planes mensuales diseñados para mantener tu contenido siempre fresco
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            v-for="paquete in paquetes"
            :key="paquete.id"
            :class="[
              'p-8 rounded-lg border-2 transition-all duration-300',
              paquete.destacado
                ? 'bg-orange-500 border-orange-500 transform scale-105'
                : 'bg-black border-gray-700 hover:border-orange-500',
            ]"
          >
            <div v-if="paquete.destacado" class="text-center mb-4">
              <span
                class="inline-block bg-white text-orange-500 text-xs font-bold px-3 py-1 rounded-full"
              >
                MÁS POPULAR
              </span>
            </div>
            <h3
              class="text-2xl font-semibold text-center mb-2"
              :class="paquete.destacado ? 'text-white' : 'text-white'"
            >
              {{ paquete.nombre }}
            </h3>
            <div class="text-center mb-6">
              <div
                class="text-4xl font-bold"
                :class="paquete.destacado ? 'text-white' : 'text-orange-500'"
                style="font-family: 'Bebas Neue', sans-serif"
              >
                {{ paquete.videos }}
              </div>
              <div
                class="text-sm"
                :class="paquete.destacado ? 'text-white/80' : 'text-gray-400'"
              >
                videos por mes
              </div>
            </div>
            <div class="text-center mb-6">
              <div
                class="text-3xl font-bold"
                :class="paquete.destacado ? 'text-white' : 'text-white'"
              >
                {{ paquete.precio }}
              </div>
              <div
                class="text-sm"
                :class="paquete.destacado ? 'text-white/80' : 'text-gray-400'"
              >
                por mes
              </div>
            </div>
            <ul class="space-y-3 mb-8">
              <li
                v-for="beneficio in paquete.beneficios"
                :key="beneficio"
                class="flex items-start text-sm"
                :class="paquete.destacado ? 'text-white' : 'text-gray-300'"
              >
                <svg
                  class="w-4 h-4 mr-2 flex-shrink-0 mt-0.5"
                  :class="paquete.destacado ? 'text-white' : 'text-orange-500'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ beneficio }}
              </li>
            </ul>
            <a
              href="/contacto"
              :class="[
                'block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300',
                paquete.destacado
                  ? 'bg-black text-white hover:bg-gray-900 border-2 border-black hover:border-gray-900'
                  : 'bg-orange-500 text-white hover:bg-orange-600',
              ]"
            >
              Contratar Paquete
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso de Trabajo -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-4xl md:text-5xl text-white uppercase tracking-wider mb-4"
            style="font-family: 'Bebas Neue', sans-serif"
          >
            Cómo Trabajamos
          </h2>
          <p class="text-gray-300">
            Un proceso probado que garantiza resultados excepcionales
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div
            v-for="(paso, index) in proceso"
            :key="paso.id"
            class="flex gap-6 mb-8"
          >
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl"
                style="font-family: 'Bebas Neue', sans-serif"
              >
                {{ index + 1 }}
              </div>
            </div>
            <div>
              <h3
                class="text-2xl font-semibold text-white mb-2 flex items-center gap-3"
              >
                <span class="text-3xl">{{ paso.icono }}</span>
                {{ paso.titulo }}
              </h3>
              <p class="text-gray-400">{{ paso.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div class="container mx-auto px-4 text-center">
        <h2
          class="text-4xl md:text-5xl text-white uppercase mb-6"
          style="font-family: 'Bebas Neue', sans-serif"
        >
          ¿Listo para comenzar?
        </h2>
        <p class="text-xl text-white mb-8 max-w-2xl mx-auto">
          Agenda una consulta gratuita y descubre cómo podemos ayudarte a
          alcanzar tus objetivos
        </p>
        <a
          href="/contacto"
          class="px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 inline-block text-lg"
        >
          Agenda tu Consulta Gratuita
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Servicios | Moisés Productor Audiovisual',
  meta: [
    {
      name: 'description',
      content:
        'Servicios de producción audiovisual: videos publicitarios, corporativos, contenido para redes sociales y más.',
    },
  ],
})

const serviciosPrincipales = [
  {
    id: 1,
    icono: '🎬',
    titulo: 'Videos Publicitarios',
    descripcion:
      'Spots creativos que capturan la atención y generan acción en tu audiencia objetivo.',
    incluye: [
      'Estrategia y concepto creativo',
      'Producción completa',
      'Post-producción profesional',
      'Entrega en múltiples formatos',
      'Revisiones incluidas',
    ],
    precio: 'Desde $3,500 USD',
  },
  {
    id: 2,
    icono: '🏢',
    titulo: 'Videos Corporativos',
    descripcion:
      'Contenido institucional que comunica profesionalismo y construye confianza.',
    incluye: [
      'Videos institucionales',
      'Testimoniales',
      'Capacitaciones',
      'Eventos corporativos',
      'Cobertura completa',
    ],
    precio: 'Desde $2,800 USD',
  },
  {
    id: 3,
    icono: '📱',
    titulo: 'Contenido para Redes',
    descripcion:
      'Videos optimizados para redes sociales que maximizan engagement y alcance.',
    incluye: [
      'Reels & Shorts',
      'Videos verticales',
      'Historias animadas',
      'Optimización por plataforma',
      'Calendario de contenido',
    ],
    precio: 'Desde $800 USD',
  },
]

const paquetes = [
  {
    id: 1,
    nombre: 'Starter',
    videos: '4',
    precio: '$2,500',
    destacado: false,
    beneficios: [
      '4 videos mensuales',
      'Hasta 60 segundos c/u',
      'Formatos para RRSS',
      'Edición profesional',
      'Música y efectos',
      '2 revisiones por video',
    ],
  },
  {
    id: 2,
    nombre: 'Professional',
    videos: '8',
    precio: '$4,500',
    destacado: true,
    beneficios: [
      '8 videos mensuales',
      'Hasta 90 segundos c/u',
      'Todos los formatos',
      'Estrategia de contenido',
      'Color grading avanzado',
      'Revisiones ilimitadas',
      'Reportes mensuales',
    ],
  },
  {
    id: 3,
    nombre: 'Enterprise',
    videos: '12',
    precio: '$6,200',
    destacado: false,
    beneficios: [
      '12 videos mensuales',
      'Sin límite de duración',
      'Filmación en locación',
      'Estrategia integral',
      'Gestión de redes',
      'Prioridad en producción',
      'Consultoría mensual',
    ],
  },
]

const proceso = [
  {
    id: 1,
    icono: '🎯',
    titulo: 'Estrategia',
    descripcion:
      'Sesión inicial para entender tu negocio, objetivos y audiencia. Desarrollamos una estrategia alineada con tus metas.',
  },
  {
    id: 2,
    icono: '🎨',
    titulo: 'Concepto Creativo',
    descripcion:
      'Creamos conceptos únicos que capturan la esencia de tu marca y conectan con tu audiencia.',
  },
  {
    id: 3,
    icono: '🎬',
    titulo: 'Producción',
    descripcion:
      'Filmación profesional con equipo de cine, iluminación y audio de alta calidad.',
  },
  {
    id: 4,
    icono: '✨',
    titulo: 'Post-producción',
    descripcion:
      'Edición, color grading, diseño de sonido y gráficos que elevan la calidad final.',
  },
  {
    id: 5,
    icono: '🚀',
    titulo: 'Entrega y Seguimiento',
    descripcion:
      'Entrega en todos los formatos necesarios y seguimiento de resultados.',
  },
]
</script>
