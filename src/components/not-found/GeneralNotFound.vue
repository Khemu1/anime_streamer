<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full bg-lightDark"
  >
    <div class="flex flex-col items-center justify-center gap-2 text-center">
      <h1 class="text-4xl font-bold text-white">404</h1>
      <h2 class="text-2xl font-bold text-white">{{ route.name }} not found</h2>
    </div>
  </div>
</template>
