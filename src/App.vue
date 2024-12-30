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
    <div
      class="flex flex-col justify-between flex-1 relative overflow-clip mt-[5px] md:ml-[40px] lg:ml-[120px]"
    >
      <div
        class="flex flex-1 flex-col w-full p-2 md:p-8 md:pr-3 lg:pr-[5.1rem]"
      >
        <router-view />
      </div>
      <Footer />
    </div>
  </main>
</template>
