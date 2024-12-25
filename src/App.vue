<script setup lang="ts">
import Navbar from "@/components/general/Navbar.vue";
import Footer from "@/components/general/Footer.vue";
import LeftAside from "@/components/general/Aside.vue";
import { useUserStore } from "@/store/user";

useUserStore();
</script>

<template>
  <main class="flex flex-col flex-1 w-screen h-screen overflow-x-clip">
    <Navbar />
    <LeftAside />
    <div class="flex flex-1 relative overflow-clip mt-[60px]">
      <div class="flex flex-col w-full md:ml-[90px]">
        <router-view />
        <Footer />
      </div>
    </div>
  </main>
</template>
