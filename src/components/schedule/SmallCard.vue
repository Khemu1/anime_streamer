<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

const { episode } = defineProps<{
  episode: {
    airedTime: string;
    title: string;
    episodeNumber: number;
    imageUrl: string;
  };
}>();

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
</script>

<template>
  <div
    class="relative flex w-full md:w-[416px] gap-2 border-[.5px] border-borderColor bg-[#0e0e0e]/20 rounded-md bg-dark pr-2 overflow-hidden group xl:hover:scale-[101%] transition-transform cursor-pointer"
    ref="target"
    :class="targetIsVisible ? 'motion-preset-fade motion-duration-2000' : ''"
  >
    <div class="image-wrapper w-[48px] h-[65px] flex-shrink-0">
      <img
        :src="episode.imageUrl"
        :alt="`Cover image of ${episode.title}`"
        class="w-full h-full object-cover rounded-sm"
      />
    </div>

    <div class="episode-info flex justify-center flex-col gap-2 w-full">
      <p class="font-semibold text-white text-[1rem] truncate">
        {{ episode.title }}
      </p>
      <p class="text-sm text-[gray] truncate">
        EP
        <strong>{{ episode.episodeNumber }}</strong>
        aired at
        {{ episode.airedTime }}
      </p>
    </div>
    <div
      class="absolute right-5 top-1/2 translate-y-[-50%] w-[25px] h-[25px] transition-all z-[10] invisible opacity-0 xl:group-hover:visible xl:group-hover:opacity-100 xl:group-hover:translate-x-0 translate-x-[20px]"
    >
      <Icon
        icon="material-symbols-light:arrow-circle-right-outline"
        width="25px"
        height="25px"
        style="color: #ffffff"
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
