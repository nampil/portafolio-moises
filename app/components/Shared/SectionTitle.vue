<template>
  <div :class="['mb-12', alignClass]">
    <h2
      :class="[
        'font-headline uppercase tracking-wider mb-4',
        sizeClasses[size],
        colorClasses[color]
      ]"
    >
      <slot />
    </h2>
    <div
      v-if="showLine"
      :class="[
        'h-1',
        lineWidthClass,
        `bg-primary-${lineColor}`
      ]"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  color: {
    type: String,
    default: 'white',
    validator: (value) => ['white', 'orange', 'navy'].includes(value)
  },
  lineColor: {
    type: String,
    default: 'orange'
  },
  showLine: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  }
})

const sizeClasses = {
  sm: 'text-3xl md:text-4xl',
  md: 'text-4xl md:text-5xl',
  lg: 'text-5xl md:text-6xl',
  xl: 'text-6xl md:text-7xl'
}

const colorClasses = {
  white: 'text-white',
  orange: 'text-primary-orange',
  navy: 'text-primary-navy'
}

const alignClass = computed(() => {
  return {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[props.align]
})

const lineWidthClass = computed(() => {
  return {
    left: 'w-24',
    center: 'w-24 mx-auto',
    right: 'w-24 ml-auto'
  }[props.align]
})
</script>
