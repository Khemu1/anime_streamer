<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { buttons } from "@/constants/mainAside";
import { useRoute } from "vue-router";
import { useUserStore, getPrimaryAccentClass } from "@/store/user";

const route = useRoute();
const { primaryAccentClass, localSettings } = useUserStore();

console.log("primaryAccentClass", primaryAccentClass);
</script>

<template>
  <aside
    class="w-20 h-full bg-lightDark border-r border-borderColor hidden sm:flex flex-col items-center"
  >
    <router-link
      v-for="(button, index) in buttons"
      :key="index"
      :to="button.route"
      class="relative flex flex-col items-center justify-center py-2 w-full group hover:bg-gray-400/10 transition-all"
      :class="[route.path === button.route ? 'bg-gray-400/10' : '']"
    >
      <Icon
        :icon="button.icon"
        width="20px"
        height="20px"
        class="text-white"
        :class="[
          route.path === button.route
            ? `${getPrimaryAccentClass(localSettings.primaryAccent)}`
            : '',
          `${getPrimaryAccentClass(localSettings.primaryAccent)}-hover`,
        ]"
      />
      <span
        class="text-xs text-white mt-1"
        :class="[
          route.path === button.route
            ? `${getPrimaryAccentClass(localSettings.primaryAccent)}`
            : '',
          `${getPrimaryAccentClass(localSettings.primaryAccent)}-hover`,
        ]"
      >
        {{ button.name }}
      </span>
      <span
        v-if="route.path === button.route"
        :class="[
          `absolute top-0 right-[-1px] h-full ${getPrimaryAccentClass(
            localSettings.primaryAccent
          )}-bg rounded-full w-[1px]`,
        ]"
      ></span>
    </router-link>
  </aside>
</template>
