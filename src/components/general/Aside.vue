<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { buttons } from "@/constants/mainAside";
import { useRoute } from "vue-router";
import { useUserStore } from "@/store/user";
import { getPrimaryAccentClass, getAsideLayOut } from "@/utils/localSettings";

const route = useRoute();
const mobileButtons = buttons.filter(
  (button) => button.name !== "Settings" && button.name !== "Profile"
);
const { localSettings } = useUserStore();
</script>

<template>
  <aside
    class="fixed mt-[59.4px] left-0 top-0 z-[999] w-[64px] h-full bg-secondaryBg border-r border-borderColor hidden md:flex flex-col items-center"
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
  <!--mobile-->

  <aside
    class="md:hidden"
    :class="[`aside-${getAsideLayOut(localSettings.navbarStyle)}`]"
  >
    <router-link
      v-for="(button, index) in mobileButtons"
      :key="index"
      :to="button.route"
      class="relative flex flex-col items-center justify-center py-2 w-full group transition-all"
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
        ]"
      >
        {{ button.name }}
      </span>
    </router-link>
  </aside>
</template>
