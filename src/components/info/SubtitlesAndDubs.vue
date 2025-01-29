<script lang="ts" setup>
import { useUserStore } from "@/store/user";
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { Button } from "@/components/ui/button";

const { subtitlesProviders, dubsProviders } = defineProps<{
  subtitlesProviders: string[];
  dubsProviders: string[];
}>();

const userStore = useUserStore();
const { accent, theme } = storeToRefs(userStore);
const iconsColor = computed(() => (theme.value === "dark" ? "white" : "black"));
</script>
<template>
  <div
    class="flex flex-col xl:basis-[24rem] h-auto rounded-md bg-schedule-small-card-bg-color p-2 gap-2 justify-center"
  >
    <div class="flex gap-2 items-center w-full justify-between">
      <div class="flex gap-1 items-center">
        <Icon
          icon="material-symbols:subtitles"
          width="15px"
          height="15px"
          :style="{ color: iconsColor }"
        />
        <span class="text-[12px] font-semibold">Sub</span>
      </div>
      <div
        class="flex bg-video-page-button-bg-color rounded-sm text-[10px] border border-borderColor font-semibold w-full"
      >
        <Button
          v-for="(provider, index) in subtitlesProviders"
          :key="provider"
          class="bg-transparent hover:bg-transparent rounded-none shadow-none h-[auto] flex-1 font-semibold text-[14px]"
          :class="[
            `${accent}-hover`,
            `${
              index < subtitlesProviders.length - 1
                ? 'border-r border-borderColor'
                : 'border-none'
            }`,
          ]"
          style="color: unset; padding: 0.4rem; gap: 0.25rem"
        >
          {{ provider }}
        </Button>
      </div>
    </div>
    <div class="flex gap-2 items-center w-full">
      <div class="flex gap-1 items-center">
        <Icon
          icon="material-symbols:mic-rounded"
          width="15px"
          height="15px"
          :style="{ color: iconsColor }"
        />
        <span class="text-[12px] font-semibold">Dub</span>
      </div>
      <div
        class="flex bg-video-page-button-bg-color rounded-sm text-[10px] border border-borderColor font-semibold w-full justify-between"
      >
        <Button
          v-for="(provider, index) in dubsProviders"
          :key="provider"
          class="bg-transparent hover:bg-transparent rounded-none shadow-none h-[auto] flex-1 font-semibold text-[14px]"
          :class="[
            `${accent}-hover`,
            `${
              index < subtitlesProviders.length - 1
                ? 'border-r border-borderColor'
                : 'border-none'
            }`,
          ]"
          style="color: unset; padding: 0.4rem; gap: 0.25rem"
        >
          {{ provider }}
        </Button>
      </div>
    </div>
  </div>
</template>
