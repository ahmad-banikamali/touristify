<script setup lang="ts">
import {useCountryStore} from "../data/store/country-store.ts";
import CountryItem from "./components/country-item.vue";

const countryStore = useCountryStore();

countryStore.getCountries(0, 60)

</script>

<template>
  <div class="h-screen flex items-stretch">
    <div class="border border-green-700 w-[10rem] h-full">
      select your language
    </div>
    <div class="grid grid-cols-3 grow h-full overflow-scroll">
      <country-item v-for="i in countryStore.countries" :name="i"/>
    </div>
  </div>
</template>

<style scoped>

</style>
