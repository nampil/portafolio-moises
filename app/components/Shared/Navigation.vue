<template>
  <nav class="fixed w-full z-50 bg-primary-black/95 backdrop-blur-sm border-b border-white/10">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-headline text-white hover:text-primary-orange transition-colors">
          MOISÉS
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-white/80 hover:text-primary-orange transition-colors font-body font-semibold"
            active-class="text-primary-orange"
          >
            {{ item.label }}
          </NuxtLink>
          <SharedCTAButton to="/contacto" size="sm">
            Contacto
          </SharedCTAButton>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden py-4 space-y-4 border-t border-white/10"
      >
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="block text-white/80 hover:text-primary-orange transition-colors font-body font-semibold py-2"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <SharedCTAButton to="/contacto" size="sm" class="w-full">
          Contacto
        </SharedCTAButton>
      </div>
    </div>
  </nav>
  <!-- Spacer for fixed nav -->
  <div class="h-20"></div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Quién Soy', path: '/quien-soy' },
  { label: 'Portafolio', path: '/portafolio' },
  { label: 'Casos de Éxito', path: '/casos-exito' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Blog', path: '/blog' }
]
</script>
