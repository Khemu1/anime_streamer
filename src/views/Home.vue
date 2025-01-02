<script setup lang="ts">
import Swiper from "@/components/home/Swiper.vue";
import CategoriesSwiper from "@/components/home/CategoriesSwiper.vue";
import WatchList from "@/components/home/WatchList.vue";
import { ref } from "vue";
import { Icon } from "@iconify/vue";

import { filters } from "@/constants/home";

import { useUserStore } from "@/store/user";
import { getPrimaryAccentClass } from "@/utils/localSettings";
import VideoCard from "@/components/home/VideoCard.vue";
import VideosContainer from "@/components/general/VideosContainer.vue";
import VideoCardSkeleton from "@/components/home/skeletons/VideoCardSkeleton.vue";
import CategoriesSwiperSkeleton from "@/components/home/skeletons/CategoriesSwiperSkeleton.vue";
import SwiperSkeleton from "@/components/home/skeletons/SwiperSkeleton.vue";
import VideosContainerSkeleton from "@/components/general/skeletons/VideosContainerSkeleton.vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { localSettings } = storeToRefs(userStore);

const currentFilter = ref("newest");
const currentPage = ref(1);

const incrementPage = () => {
  if (currentPage.value < 5) {
    currentPage.value++;
  }
};

const decrementPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const videos = [
  {
    id: "dasdasdasdsad",
    title: "Sword Art Online: Alicization",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2018",
    currentEpisode: 10,
    totalEpisodes: 24,
    rating: 10,
  },
  {
    id: "ads4d2casxzds",
    title: "Attack on Titan: Final Season",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2020",
    currentEpisode: 8,
    totalEpisodes: 16,
    rating: 10,
  },
  {
    id: "ads4d2casxzds848",
    title: "My Hero Academia: Season 6",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2022",
    currentEpisode: 12,
    totalEpisodes: 25,
    rating: 10,
  },
  {
    id: "ads4d2casxzds848dasdas",
    title:
      "Demon Slayer: Entertainment District Arc Demon Slayer: Entertainment District Arc",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2021",
    currentEpisode: 5,
    totalEpisodes: 11,
    rating: 10,
  },
  {
    id: "ads4d2ca894fsdc48dasdasdas48944",
    title: "Jujutsu Kaisen: Season 2",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2023",
    currentEpisode: 6,
    totalEpisodes: 12,
    rating: 10,
  },
  {
    id: "dasdadsaxzcvdsad",
    title: "Sword Art Online: Alicization",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2018",
    currentEpisode: 10,
    totalEpisodes: 24,
    rating: 10,
  },
  {
    id: "ads4kjuopsxzds",
    title: "Attack on Titan: Final Season",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2020",
    currentEpisode: 8,
    totalEpisodes: 16,
    rating: 10,
  },
  {
    id: "ads4d2e2yiiksxzds848",
    title: "My Hero Academia: Season 6",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2022",
    currentEpisode: 12,
    totalEpisodes: 25,
    rating: 10,
  },
  {
    id: "ads4d2cacbfghds848dasdas",
    title: "Demon Slayer: Entertainment District Arc",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2021",
    currentEpisode: 5,
    totalEpisodes: 11,
    rating: 10,
  },
  {
    id: "ads4d2casreds848dasdasdas48944",
    title: "Jujutsu Kaisen: Season 2",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2023",
    currentEpisode: 6,
    totalEpisodes: 12,
    rating: 10,
  },
];
</script>

<template>
  <div class="flex flex-1 flex-col gap-4 overflow-x-clip mt-5">
    <div class="w-full mx-auto">
      <SwiperSkeleton />
    </div>
    <div>
      <CategoriesSwiper />
    </div>
    <WatchList />
    <div class="flex w-full justify-between text-[12px]">
      <div
        class="flex items-center bg-lightDark border border-borderColor rounded-md scrollbar-hide w-max overflow-x-auto"
      >
        <span
          v-for="(filter, index) in filters"
          :key="index"
          class="flex justify-center items-center p-1 cursor-pointer px-4"
          :class="[
            `${
              index + 1 >= filters.length
                ? ''
                : 'border-r-2 border-borderColor '
            }, ${getPrimaryAccentClass(localSettings.primaryAccent)}-hover`,
            `${
              filter.value === currentFilter
                ? getPrimaryAccentClass(localSettings.primaryAccent)
                : ''
            }`,
          ]"
          @click="
            () => {
              currentFilter = filter.value;
            }
          "
        >
          {{ filter.name }}
        </span>
      </div>
      <div
        class="flex items-center justify-between bg-[#0e0e0e] border border-borderColor rounded-md w-[100px] overflow-hidden"
      >
        <button
          class="h-full transition-all"
          :class="currentPage > 1 ? 'bg-lightDark' : ''"
          :disabled="currentPage < 2"
          @click="decrementPage"
        >
          <Icon
            icon="ic:baseline-keyboard-arrow-left"
            width="30px"
            height="30px"
            style="color: #ffffff"
          />
        </button>

        <span class="px-2 text-white">{{ currentPage }}</span>

        <button
          class="h-full transition-all"
          @click="incrementPage"
          :class="currentPage >= 1 && currentPage < 5 ? 'bg-lightDark' : ''"
        >
          <Icon
            icon="ic:baseline-keyboard-arrow-right"
            width="30px"
            height="30px"
            style="color: #ffffff"
          />
        </button>
      </div>
    </div>
    <div class="flex w-full items-start flex-col xl:flex-row">
      <div
        class="grid w-full grid-cols-[repeat(auto-fill,_minmax(175px,_1fr))] gap-4"
      >
        <VideoCardSkeleton v-for="_ in 5" class="mb-8" />
        <VideoCard
          v-for="video in videos"
          :key="video.id"
          :video="video"
          class="mb-8"
        />
      </div>

      <div
        class="bg-secondaryBg rounded-md p-3 my-5 w-full xl:hidden flex"
      ></div>

      <div
        class="flex w-full flex-col sm:flex-row justify-between xl:w-max xl:flex-col xl:justify-normal gap-4 flex-shrink-0"
      >
        <div class="flex-1">
          <VideosContainerSkeleton
            containerTitle="TOP AIRING"
            icon="ic:baseline-live-tv"
            :videos="videos"
          />
        </div>

        <div class="hidden xl:flex bg-secondaryBg rounded-md p-2"></div>

        <div class="flex-1">
          <VideosContainer
            containerTitle="UPCOMING"
            icon="ri:broadcast-line"
            :videos="videos"
          />
        </div>
      </div>
    </div>
  </div>
</template>
