<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-b from-primary-black to-primary-navy">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://placehold.co/600x600/1A2332/FFFFFF?text=Moises"
              alt="Moisés"
              class="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <SharedSectionTitle align="left">
              Quién Soy
            </SharedSectionTitle>
            <p class="text-xl text-white/80 mb-6">
              Productor Audiovisual & Estratega de Video Marketing con más de <span class="text-primary-orange font-semibold">10 años de experiencia</span>
            </p>
            <p class="text-white/70 mb-4">
              Desde niño, siempre me fascinó <strong>contar historias</strong>. Lo que comenzó con una cámara prestada y YouTube tutorials, se convirtió en una <strong>década de pasión</strong> transformando ideas en narrativas visuales impactantes.
            </p>
            <p class="text-white/70">
              He tenido el privilegio de trabajar con startups disruptivas, marcas consolidadas y emprendedores visionarios, ayudándoles a comunicar su esencia a través del poder del video.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filosofía -->
    <section class="py-20">
      <div class="container-custom">
        <SharedSectionTitle align="center">
          Mi Filosofía
        </SharedSectionTitle>
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-xl text-white/80 mb-8">
            No creo en hacer "solo videos bonitos". Creo en crear <strong class="text-primary-orange">activos audiovisuales estratégicos</strong>
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-primary-navy p-6 rounded-lg">
              <div class="text-4xl mb-4">✨</div>
              <h3 class="text-xl font-body font-semibold text-white mb-2">Historias Auténticas</h3>
              <p class="text-white/70">Que resuenan con tu audiencia</p>
            </div>
            <div class="bg-primary-navy p-6 rounded-lg">
              <div class="text-4xl mb-4">📈</div>
              <h3 class="text-xl font-body font-semibold text-white mb-2">Resultados Medibles</h3>
              <p class="text-white/70">En engagement, conversión y ventas</p>
            </div>
            <div class="bg-primary-navy p-6 rounded-lg">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-xl font-body font-semibold text-white mb-2">Objetivos Claros</h3>
              <p class="text-white/70">Alineados con tu negocio</p>
            </div>
            <div class="bg-primary-navy p-6 rounded-lg">
              <div class="text-4xl mb-4">💡</div>
              <h3 class="text-xl font-body font-semibold text-white mb-2">Marca a Largo Plazo</h3>
              <p class="text-white/70">Contenido evergreen</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mi Proceso -->
    <section class="py-20 bg-primary-navy">
      <div class="container-custom">
        <SharedSectionTitle align="center">
          Mi Proceso
        </SharedSectionTitle>
        <div class="max-w-4xl mx-auto space-y-8">
          <div
            v-for="(paso, index) in proceso"
            :key="index"
            class="flex gap-6"
          >
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-primary-orange flex items-center justify-center text-white font-headline text-xl">
                {{ index + 1 }}
              </div>
            </div>
            <div>
              <h3 class="text-2xl font-body font-semibold text-white mb-2 flex items-center gap-3">
                <span class="text-3xl">{{ paso.icono }}</span>
                {{ paso.titulo }}
              </h3>
              <p class="text-white/70">{{ paso.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center"
          >
            <div class="text-5xl font-headline text-primary-orange mb-2">
              {{ stat.numero }}
            </div>
            <div class="text-white/70 font-body">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-primary-orange to-primary-orange/80">
      <div class="container-custom text-center">
        <h2 class="text-4xl md:text-5xl font-headline text-white uppercase mb-6">
          ¿Listo para crear algo extraordinario juntos?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Agenda una llamada gratuita y platiquemos sobre tu proyecto
        </p>
        <SharedCTAButton to="/contacto" variant="secondary" size="lg">
          Agenda tu Llamada
        </SharedCTAButton>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Quién Soy | Moisés Productor Audiovisual',
  meta: [
    {
      name: 'description',
      content: 'Productor audiovisual con más de 10 años de experiencia. Especialista en crear narrativas visuales que generan resultados medibles.'
    }
  ]
})

const stats = [
  { numero: '10+', label: 'Años de Experiencia' },
  { numero: '200+', label: 'Proyectos Completados' },
  { numero: '50+', label: 'Clientes Satisfechos' },
  { numero: '15M+', label: 'Vistas Generadas' }
]

const proceso = [
  {
    icono: '🎯',
    titulo: 'Estrategia',
    descripcion: 'Antes de tocar una cámara, entiendo tu negocio, audiencia y objetivos. Desarrollamos una estrategia que alinea el contenido audiovisual con tus metas.'
  },
  {
    icono: '🎨',
    titulo: 'Creatividad',
    descripcion: 'Conceptualizamos narrativas únicas que capturan la esencia de tu marca y conectan emocionalmente con tu audiencia.'
  },
  {
    icono: '🎬',
    titulo: 'Producción',
    descripcion: 'Ejecutamos con profesionalismo y atención al detalle, utilizando equipo de nivel cinema y un equipo experimentado.'
  },
  {
    icono: '✨',
    titulo: 'Post-producción',
    descripcion: 'Pulimos cada frame con color grading cinematográfico, audio inmersivo y edición que mantiene la atención.'
  },
  {
    icono: '📊',
    titulo: 'Medición',
    descripcion: 'Rastreamos el performance del contenido y optimizamos la estrategia basándonos en datos reales.'
  }
]
</script>
