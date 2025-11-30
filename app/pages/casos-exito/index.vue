<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero -->
    <section class="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div class="container mx-auto px-4 text-center">
        <h1
          class="text-5xl md:text-6xl uppercase tracking-wider mb-6"
          style="font-family: 'Bebas Neue', sans-serif"
        >
          Casos de Éxito
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Historias reales de marcas que transformaron su negocio con video
          marketing estratégico
        </p>
      </div>
    </section>

    <!-- Grid de casos -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <article v-for="caso in casos" :key="caso.slug" class="group">
            <div
              class="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div
                class="aspect-video bg-gray-800 flex items-center justify-center"
              >
                <img
                  :src="`https://placehold.co/1200x675/FF6B35/000000?text=${encodeURIComponent(caso.cliente)}`"
                  :alt="caso.cliente"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-8">
                <div class="text-sm text-orange-500 mb-2">
                  {{ caso.industria }}
                </div>
                <h3
                  class="text-3xl font-semibold text-white mb-4 group-hover:text-orange-500 transition-colors"
                  style="font-family: 'Bebas Neue', sans-serif"
                >
                  {{ caso.cliente }}
                </h3>
                <p class="text-gray-400 mb-6">
                  {{ caso.descripcion }}
                </p>

                <!-- Resultados destacados -->
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div
                    v-for="resultado in caso.resultados"
                    :key="resultado.metrica"
                    class="text-center p-4 bg-black rounded-lg"
                  >
                    <div
                      class="text-3xl text-orange-500 mb-1"
                      style="font-family: 'Bebas Neue', sans-serif"
                    >
                      {{ resultado.valor }}
                    </div>
                    <div class="text-xs text-gray-400">
                      {{ resultado.metrica }}
                    </div>
                  </div>
                </div>

                <a
                  :href="`/casos-exito/${caso.slug}`"
                  class="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Ver caso completo
                  <svg
                    class="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div class="container mx-auto px-4 text-center">
        <h2
          class="text-4xl md:text-5xl text-white uppercase mb-6"
          style="font-family: 'Bebas Neue', sans-serif"
        >
          ¿Listo para ser el próximo caso de éxito?
        </h2>
        <p class="text-xl text-white mb-8 max-w-2xl mx-auto">
          Agenda una llamada gratuita y platiquemos sobre tu proyecto
        </p>
        <a
          href="/contacto"
          class="px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 inline-block text-lg"
        >
          Agenda tu Llamada
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Casos de Éxito | Moisés Productor Audiovisual',
  meta: [
    {
      name: 'description',
      content:
        'Historias reales de marcas que transformaron su negocio con video marketing estratégico.',
    },
  ],
})

const casos = [
  {
    cliente: 'Tu Zona Market',
    slug: 'tu-zona-market',
    industria: 'E-commerce / Supermercados',
    descripcion:
      'Posicionamiento digital integral que llevó a una marca nueva de 0% a 65% de posicionamiento en solo 6 meses.',
    resultados: [
      { metrica: 'Posicionamiento', valor: '65%' },
      { metrica: 'Autoridad', valor: '92%' },
      { metrica: 'Conversión', valor: '4.8%' },
      { metrica: 'ROI', valor: '8.5x' },
    ],
  },
  {
    cliente: 'Invertrópolis',
    slug: 'invertropolis',
    industria: 'Construcción / Inversión',
    descripcion:
      'Video institucional que ayudó a ampliar línea de crédito de $500K a $2.5M con proveedor internacional.',
    resultados: [
      { metrica: 'Línea de Crédito', valor: '$2.5M' },
      { metrica: 'Contratos', valor: '8' },
      { metrica: 'Crecimiento', valor: '400%' },
      { metrica: 'Tiempo', valor: '4 meses' },
    ],
  },
]
</script>
