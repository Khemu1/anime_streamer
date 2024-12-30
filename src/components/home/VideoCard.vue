<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { formatNumber } from "@/utils/trending";
import { useElementHover } from "@vueuse/core";
import { ref } from "vue";

const { video } = defineProps<{
  video: {
    id: string;
    title: string;
    image: string;
    watchWhere: string;
    year: string;
    currentEpisode: number;
    totalEpisodes: number;
    rating: number;
  };
}>();

const imageHover = ref();
const isHovered = useElementHover(imageHover);
</script>

<template>
  <div
    class="flex flex-col gap-3 w-[175px] sm:w-[185px] h-[312px] relative group cursor-pointer"
    ref="imageHover"
  >
    <div
      v-if="isHovered"
      class="absolute right-1 top-1 bg-[#0e0e0e] border border-transparent z-[10] rounded-sm shadow-lg motion-preset-pop hover:border-white hover:text-white transition-all"
    >
      <Icon
        icon="material-symbols:add"
        width="20px"
        height="20px"
        style="color: #ffffff"
      />
    </div>
    <div class="h-[270.5px] rounded-md overflow-hidden flex-shrink-0">
      <img
        :src="video.image"
        alt="Video Image"
        class="w-full h-full object-fill duration-300 rounded-md ease-in-out group-hover:translate-y-[-5px] group-hover:opacity-50"
      />
      <Icon
        v-if="isHovered"
        class="absolute inset-0 m-auto flex items-center justify-center text-white motion-preset-pop"
        icon="material-symbols:play-arrow-rounded"
        width="50px"
        height="50px"
      />
    </div>

    <div class="flex flex-col gap-2 justify-center">
      <p class="w-full font-medium truncate">
        {{ video.title }}
      </p>

      <div
        class="flex gap-2 items-center text-[gray] text-sm *:bg-[#5555551a] *:gap-[.15rem] *:py-[.1rem] *:px-[.2rem] font-semibold text-[px] sm:text-[11px] *:rounded-md"
      >
        <span>{{ video.watchWhere }}</span>

        <div class="flex items-center gap-1">
          <span>{{ video.year }}</span>
        </div>

        <div class="flex items-center gap-1">
          <Icon
            icon="material-symbols:subtitles-rounded"
            width="16px"
            height="16px"
          />
          <span>{{ video.totalEpisodes }}</span>
        </div>

        <div class="items-center gap-1 hidden md:flex">
          <Icon
            icon="material-symbols:kid-star-outline-sharp"
            width="16px"
            height="16px"
          />
          <span>{{ formatNumber(video.rating) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
