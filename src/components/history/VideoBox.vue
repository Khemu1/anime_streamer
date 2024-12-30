<script lang="ts" setup>
import { useElementHover } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const { watchList } = defineProps<{
  watchList?: boolean;
}>();

const imageHover = ref();
const isHovered = useElementHover(imageHover);
</script>
<template>
  <div
    class="relative flex flex-col gap-2 rounded-md border border-borderColor shadow-lg overflow-hidden cursor-pointer bg-lightDark group"
    ref="imageHover"
  >
    <div
      v-if="isHovered"
      class="absolute right-1 top-1 bg-white text-black border z-[10] rounded-sm shadow-lg motion-preset-pop hover:bg-black hover:text-white"
    >
      <Icon icon="ic:round-close" width="20px" height="20px" />
    </div>
    <div class="overflow-hidden relative cursor-pointer">
      <img
        src="/ezgif.com-animated-gif-maker_2.gif"
        class="w-full h-full object-fit transition-all duration-300 ease-in-out group-hover:opacity-50 group-hover:scale-110"
        alt="Preview of DAN DA DAN"
      />
      <Icon
        v-if="isHovered"
        class="absolute inset-0 m-auto flex items-center justify-center motion-preset-pop"
        :class="watchList ? 'bg-white text-black rounded-full' : 'text-white'"
        icon="material-symbols:play-arrow-rounded"
        width="40px"
        height="40px"
      />
    </div>
    <div class="p-1 text-[13px]">
      <span class="overflow-hidden text-ellipsis whitespace-nowrap block">
        Sword Art Online Alternative: Gun Gale Online II Sword Art Online
        Alternative: Gun Gale Online II Sword Art Online Alternative: Gun Gale
        Online II Sword Art Online Alternative: Gun Gale Online II
      </span>
    </div>
  </div>
</template>
