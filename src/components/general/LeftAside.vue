<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { buttons } from "@/constants/mainAside";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <aside
    class="w-20 h-full bg-lightDark border-r border-borderColor hidden sm:flex flex-col items-center"
  >
    <router-link
      v-for="(button, index) in buttons"
      :key="index"
      :to="button.route"
      class="flex flex-col items-center justify-center mb-4 py-2 w-full group hover:bg-gray-400/10 transition-all"
      :class="[route.path === button.route ? 'bg-gray-400/10' : '']"
    >
      <Icon
        :icon="button.icon"
        width="20px"
        height="20px"
        class="text-white group-hover:text-[#ff5454]"
        :class="[route.path === button.route ? 'text-[#ff5454]' : '']"
      />
      <span
        class="text-xs text-white mt-1 group-hover:text-[#ff5454]"
        :class="[route.path === button.route ? 'text-[#ff5454]' : '']"
      >
        {{ button.name }}
      </span>
    </router-link>
  </aside>
</template>
