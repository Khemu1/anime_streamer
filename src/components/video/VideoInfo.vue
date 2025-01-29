<script lang="ts" setup>
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import SubtitlesAndDubs from "@/components/info/SubtitlesAndDubs.vue";

const {} = defineProps<{
  video: {
    id: string;
    title: string;
    description?: string;
    releaseDate: string;
  };
  subtitlesProviders: string[];
  dubsProviders: string[];
}>();

const userStore = useUserStore();
const { accent, theme } = storeToRefs(userStore);
const iconsColor = computed(() => (theme.value === "dark" ? "white" : "black"));

const reloadPage = () => {
  window.location.reload();
};
</script>
<template>
  <div class="flex flex-col h-max gap-2">
    <div class="flex flex-col xl:flex-row gap-2">
      <!-- Video Details Section -->
      <div
        class="flex flex-col gap-5 bg-schedule-small-card-bg-color p-3 rounded-md"
      >
        <div class="flex justify-between flex-wrap">
          <p class="font-semibold">{{ video.title }}</p>
          <div class="flex gap-1 items-center">
            <span
              class="bg-video-page-button-bg-color p-1 rounded-sm text-[10px] border border-borderColor font-semibold shadow-sm"
              style="color: unset; padding: 0.4rem; gap: 0.25rem"
            >
              {{ video.releaseDate }}
            </span>
            <Button
              disabled
              class="bg-video-page-button-bg-color hover:bg-lightDark border border-borderColor rounded-sm h-auto text-[10px]"
              :class="`${accent}-border-hover`"
              style="color: unset; padding: 0.4rem; gap: 0.25rem"
            >
              <Icon
                icon="material-symbols-light:download-rounded"
                width="13px"
                height="13px"
                :style="{ color: iconsColor }"
              />
              Download
            </Button>
            <Button
              class="bg-video-page-button-bg-color hover:bg-video-page-button-bg-color border border-borderColor rounded-sm h-auto text-[10px]"
              :class="`${accent}-border-hover ${accent}-hover`"
              style="color: unset; padding: 0.4rem; gap: 0.25rem"
            >
              <Icon
                icon="material-symbols:google-plus-reshare"
                width="13px"
                height="13px"
                :class="`${accent}-hover`"
              />
              <span class="font-semibold">Share</span>
            </Button>
          </div>
        </div>
        <span class="text-sm opacity-60">{{ video.description }}</span>
        <div class="bg-lightDark p-1 rounded-md text-sm">
          <span class="">
            If the player doesn't work or keeps buffering, try
            <b class="text-[#d69e00]">
              <button class="underline" @click="reloadPage">
                refreshing the page
              </button>
              or switching providers.
            </b>
          </span>
        </div>
      </div>
      <!-- Subtitles and Dubs Section -->
      <SubtitlesAndDubs
        :subtitlesProviders="subtitlesProviders"
        :dubsProviders="dubsProviders"
      />
    </div>
  </div>
</template>
