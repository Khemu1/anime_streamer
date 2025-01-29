<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useElementVisibility } from "@vueuse/core";
import { computed, ref } from "vue";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const { episode } = defineProps<{
  episode: {
    airedTime: string;
    title: string;
    episodeNumber: number;
    imageUrl: string;
  };
}>();

const userStore = useUserStore();
const { theme } = storeToRefs(userStore);

const themeClass = computed(() => {
  return theme.value === "dark" ? "dark" : "light";
});
const target = ref(null);
</script>

<template>
  <div
    class="relative flex w-full md:w-[416px] gap-2 rounded-md bg-dark pr-2 overflow-hidden group transition-transform animate-pulse"
    :class="themeClass === 'light' ? 'bg-black/20' : 'bg-gray-300/10'"
    ref="target"
  >
    <div class="image-wrapper w-[48px] h-[65px] flex-shrink-0">
      <Skeleton
        class="w-full h-full"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
    </div>

    <div class="episode-info flex justify-center flex-col gap-2 w-full">
      <Skeleton
        class="font-semibold text-[1rem] truncate w-[100px] h-5"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
      <Skeleton
        class="text-[13px] truncate w-[75px] h-5"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
    </div>
  </div>
</template>

<style scoped>
.airing-time .status-indicator {
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  background-color: white;
  border-radius: 50%;
}
</style>
