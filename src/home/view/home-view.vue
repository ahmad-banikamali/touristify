<script setup lang="ts">
import {useCountryStore} from "../data/store/country-store.ts";
import XComponent from "./components/x-component.vue";

const store = useCountryStore()

</script>

<template>
  i am home view
  <br>

  <x-component/>
  {{store.countryById}}
  <router-view/>
</template>

<style scoped>

</style>
