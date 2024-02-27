<script setup lang="ts">
import {useLocale} from "../features/common/data/state/i18n-store.ts";
</script>

<template>
  <div :dir="useLocale().layoutDir">
    <router-view/>
  </div>
</template>

<style scoped>

</style>
