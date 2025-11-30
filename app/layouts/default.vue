<template>
  <div class="flex flex-col min-h-screen">
    <SharedNavigation />
    <main class="flex-grow">
      <slot />
    </main>
    <SharedFooter />
  </div>
</template>
