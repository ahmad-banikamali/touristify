<script setup lang="ts">
import {useLocale} from "../features/common/data/state/i18n-store.ts";
import {onMounted} from "vue";

onMounted(function () {
  useLocale().setCurrentLocale("en")
})


</script>

<template>
    <router-view/>
</template>

<style scoped>

</style>
