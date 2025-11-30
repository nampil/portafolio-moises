<template>
  <footer class="bg-primary-navy border-t border-white/10">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Columna 1: Brand -->
        <div class="space-y-4">
          <h3 class="text-2xl font-headline text-white">MOISÉS</h3>
          <p class="text-white/70 text-sm">
            Productor Audiovisual & Estratega de Video Marketing
          </p>
          <!-- Redes Sociales -->
          <div class="flex space-x-4">
            <a
              v-for="red in redes"
              :key="red.name"
              :href="red.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/70 hover:text-primary-orange transition-colors"
              :aria-label="red.name"
            >
              <component :is="red.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Columna 2: Enlaces -->
        <div>
          <h4 class="text-white font-body font-semibold mb-4">Enlaces</h4>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="text-white/70 hover:text-primary-orange transition-colors text-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Servicios -->
        <div>
          <h4 class="text-white font-body font-semibold mb-4">Servicios</h4>
          <ul class="space-y-2 text-white/70 text-sm">
            <li>Videos Publicitarios</li>
            <li>Videos Corporativos</li>
            <li>Contenido para Redes</li>
            <li>Video Marketing</li>
          </ul>
        </div>

        <!-- Columna 4: Contacto -->
        <div>
          <h4 class="text-white font-body font-semibold mb-4">Contacto</h4>
          <ul class="space-y-2 text-white/70 text-sm">
            <li>
              <a href="mailto:contacto@moises.com" class="hover:text-primary-orange transition-colors">
                contacto@moises.com
              </a>
            </li>
            <li>
              <a href="tel:+5255123456778" class="hover:text-primary-orange transition-colors">
                +52 55 1234 5678
              </a>
            </li>
            <li>Ciudad de México</li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Moisés Productor Audiovisual. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { label: 'Inicio', path: '/' },
  { label: 'Quién Soy', path: '/quien-soy' },
  { label: 'Portafolio', path: '/portafolio' },
  { label: 'Casos de Éxito', path: '/casos-exito' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacto', path: '/contacto' }
]

const redes = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/moises',
    icon: 'IconInstagram'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@moises',
    icon: 'IconYouTube'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/moises',
    icon: 'IconLinkedIn'
  }
]
</script>
