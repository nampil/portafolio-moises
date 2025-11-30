<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :class="buttonClasses"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  }
})

const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

const sizeClasses = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-4 text-base',
  lg: 'px-10 py-5 text-lg'
}

const variantClasses = {
  primary: 'bg-primary-orange hover:bg-primary-orange/90 text-white',
  secondary: 'bg-primary-navy hover:bg-primary-navy/90 text-white',
  outline: 'bg-transparent border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white'
}

const buttonClasses = computed(() => [
  'inline-block',
  'font-body font-semibold',
  'rounded-lg',
  'transition-all duration-300',
  'transform hover:scale-105',
  'shadow-lg hover:shadow-xl',
  'text-center',
  sizeClasses[props.size],
  variantClasses[props.variant]
])
</script>
