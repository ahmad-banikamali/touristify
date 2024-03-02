<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <div class="border-red-600 border h-40 flex items-center justify-center">
    {{ name }}
  </div>
</template>

<style scoped>

</style>
