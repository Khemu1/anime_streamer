<script lang="ts" setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";
import { Button } from "@/components/ui/button";

const hide = ref(false);
const userStore = useUserStore();
const { accent, theme } = storeToRefs(userStore);
const iconsColor = computed(() => (theme.value === "dark" ? "white" : "black"));
</script>

<template>
  <div
    class="flex items-center justify-between bg-schedule-small-card-bg-color rounded-md p-3 z-[10] gap-2"
    :class="hide ? 'hidden' : ''"
  >
    <div class="flex gap-2 items-center">
      <Icon
        icon="solar:bell-bold"
        width="15px"
        height="15px"
        :style="{ color: iconsColor }"
        class="flex-shrink-0"
      />
      <span class="text-sm">
        Episode
        <b>1123</b>
        will air on Sun Apr 6, 2025, 15:16 GMT+2
        <b>(69 days, 16 hours)</b>
      </span>
    </div>
    <Button
      class="bg-video-page-button-bg-color group hover:bg-video-page-button-bg-color border border-borderColor !rounded-sm h-[auto] !w-max"
      :class="[`${accent}-border-hover`]"
      @click="hide = !hide"
      style="color: unset; padding: 0.4rem; gap: 0.25rem"
    >
      <Icon
        icon="ic:round-close"
        width="20px"
        height="20px"
        :class="[`${accent}-hover`]"
      />
    </Button>
  </div>
</template>
