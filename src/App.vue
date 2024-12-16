<script setup lang="ts">
import Navbar from "@/components/general/Navbar.vue";
import Footer from "@/components/general/Footer.vue";
import LeftAside from "@/components/general/LeftAside.vue";
</script>

<template>
  <main class="flex flex-col flex-1 w-screen h-screen">
    <Navbar />
    <div class="flex flex-1">
      <LeftAside />
      <div class="flex flex-col w-full">
        <router-view />
        <Footer />
      </div>
    </div>
  </main>
</template>
