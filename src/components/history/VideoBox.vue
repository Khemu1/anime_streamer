<script lang="ts" setup>
import { useElementHover } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const imageHover = ref();
const isHovered = useElementHover(imageHover);
</script>
<template>
  <div
    class="flex flex-col gap-2 rounded-md border border-borderColor shadow-lg overflow-hidden cursor-pointer bg-lightDark"
  >
    <div class="overflow-hidden relative cursor-pointer group" ref="imageHover">
      <img
        src="/ezgif.com-animated-gif-maker_2.gif"
        class="w-full h-full object-fit transition-all duration-300 ease-in-out group-hover:opacity-70"
        alt="Preview of DAN DA DAN"
      />
      <Icon
        v-if="isHovered"
        class="absolute inset-0 m-auto flex items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        icon="material-symbols:play-arrow-rounded"
        width="50px"
        height="50px"
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
