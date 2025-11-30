<template>
  <div class="relative aspect-video w-full bg-black rounded-lg overflow-hidden group">
    <!-- Imagen placeholder -->
    <img
      :src="thumbnail"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover"
    />
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
    
    <!-- Play button -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="
          w-20 h-20 
          bg-primary-orange 
          rounded-full 
          flex items-center justify-center
          transform transition-all duration-300
          group-hover:scale-110
          group-hover:bg-primary-orange/90
          shadow-2xl
        "
      >
        <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
        </svg>
      </div>
    </div>

    <!-- Badge de duración si se proporciona -->
    <div
      v-if="duration"
      class="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded"
    >
      {{ duration }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: String,
    default: 'placeholder'
  },
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    default: 'https://placehold.co/1920x1080/000000/FF6B35?text=Video+Placeholder'
  },
  duration: {
    type: String,
    default: null
  }
})
</script>
