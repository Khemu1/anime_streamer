<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";
import { useUserStore } from "@/store/user";
import { getPrimaryAccentClass } from "@/utils/localSettings";
import { storeToRefs } from "pinia";


const { containerTitle, icon, videos } = defineProps<{
  containerTitle: string;
  icon: string;
  videos: {
    id: string;
    title: string;
    image: string;
    watchWhere: string;
    year: string;
    currentEpisode: number;
    totalEpisodes: number;
  }[];
}>();

const userStore = useUserStore();
const { localSettings } = storeToRefs(userStore);
const showAll = ref(false);
const displayedVideos = computed(() =>
  showAll.value ? videos : videos.slice(0, 4)
);

const toggleShowAll = () => {
  setTimeout(() => {
    showAll.value = !showAll.value;
  }, 100);
};
</script>

<template>
  <div
    class="w-full xl:w-[400px] max-h-[625px] overflow-y-hidden flex flex-col p-[0.75rem] bg-lightDark rounded-md gap-4"
  >
    <div class="flex gap-2 items-center">
      <Icon :icon="icon" width="20px" height="20px" />
      <h2 class="font-semibold text-xl">{{ containerTitle }}</h2>
    </div>
    <div class="flex flex-col gap-4 overflow-y-scroll py-2 scrollbar-hide">
      <div
        v-for="video in displayedVideos"
        :key="video.id"
        class="flex gap-4 bg-secondaryBg rounded-md transition-all hover:ml-2 cursor-pointer"
      >
        <div class="w-[68px] h-[96px] rounded-md overflow-hidden flex-shrink-0">
          <img
            :src="video.image"
            alt="Video Image"
            class="w-full h-full object-fill"
          />
        </div>
        <div class="flex flex-col gap-2 justify-center">
          <p
            class="text-wrap whitespace-break-spaces w-full"
            style="font-weight: 500"
          >
            {{ video.title }}
          </p>
          <div
            class="flex gap-2 items-center text-[gray] *:bg-[#5555551a] *:gap-[.15rem] *:py-[.1rem] *:px-[.2rem] font-semibold text-[11px] *:rounded-md"
          >
            <span>{{ video.watchWhere }}</span>
            <div class="flex items-center">
              <Icon
                icon="ic:outline-calendar-month"
                width="16px"
                height="16px"
              />
              <span>{{ video.year }}</span>
            </div>
            <div class="flex items-center">
              <Icon
                icon="material-symbols:subtitles-rounded"
                width="16px"
                height="16px"
              />
              <span>
                {{ video.currentEpisode }} / {{ video.totalEpisodes }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="toggleShowAll"
      class="flex justify-center bg-secondaryBg font-semibold py-2 px-4 rounded-md mt-2 active:scale-95 transition-all hover:opacity-80"
      v-if="!showAll"
      :class="[`${getPrimaryAccentClass(localSettings.primaryAccent)}-hover`]"
    >
      <Icon icon="ic:sharp-keyboard-arrow-down" width="30px" height="30px" />
    </button>
  </div>
</template>
