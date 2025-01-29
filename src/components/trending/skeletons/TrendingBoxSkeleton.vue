<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";

import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const userStore = useUserStore();
const { theme } = storeToRefs(userStore);

const themeClass = computed(() => {
  return theme.value === "dark" ? "dark" : "light";
});

const tags = [
  "Action",
  "Romance",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Horror",
  "Animation",
  "Adventure",
  "Fantasy",
  "Crime",
  "Thriller",
  "Mystery",
  "Documentary",
  "Music",
  "Family",
  "War",
  "Western",
  "Film-Noir",
  "Biography",
  "History",
  "Sport",
  "Kids",
  "Musical",
  "TV-Movie",
  "Game-Show",
  "Sitcom",
  "All-Genre",
  "News",
  "Reality-TV",
  "Talk-Show",
  "Reality-Show",
];
</script>

<template>
  <div
    class="flex flex-col bg-lightDark p-4 rounded-md shadow-lg overflow-hidden cursor-pointer sm:w-[auto]"
  >
    <div class="flex gap-4">
      <div
        class="flex-shrink-0 w-1/3 h-[222px] rounded-md overflow-hidden relative cursor-pointer group"
      >
        <Skeleton
          class="w-full h-full rounded-md"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />
      </div>

      <div class="flex flex-col flex-1 overflow-hidden">
        <div>
          <Skeleton
            class="h-6 w-3/4"
            :class="themeClass === 'light' ? 'bg-black/20' : ''"
          />
          <Skeleton
            class="h-4 w-5/6 mt-2"
            :class="themeClass === 'light' ? 'bg-black/20' : ''"
          />

          <Skeleton
            class="h-20 mt-2"
            :class="themeClass === 'light' ? 'bg-black/20' : ''"
          />
        </div>
        <div
          class="flex gap-2 font-semibold text-[12px] items-center text-[gray] mt-2"
        >
          <Skeleton
            class="h-1.5 w-1.5 rounded-full"
            :class="themeClass === 'light' ? 'bg-black/20' : ''"
          />

          <div
            class="flex gap-1 items-center bg-gray-200/5 p-0.5 rounded-sm px-1 hover:text-white animate-pulse"
            :class="themeClass === 'light' ? 'bg-black/40' : ''"
          >
            <Skeleton
              class="h-4 w-4"
              :class="themeClass === 'light' ? 'bg-black/20' : ''"
            />
            <Skeleton
              class="h-4 w-10"
              :class="themeClass === 'light' ? 'bg-black/20' : ''"
            />
          </div>

          <div
            class="flex gap-1 justify-center items-center bg-gray-200/5 p-0.5 px-1 rounded-sm hover:text-white animate-pulse"
            :class="themeClass === 'light' ? 'bg-black/50' : ''"
          >
            <div
              class="flex gap-1 items-center p-0.5 rounded-sm px-1 hover:text-white"
            >
              <Skeleton
                class="h-4 w-4"
                :class="themeClass === 'light' ? 'bg-black/20' : ''"
              />
              <Skeleton
                class="h-4 w-10"
                :class="themeClass === 'light' ? 'bg-black/20' : ''"
              />
            </div>
          </div>

          <div
            class="flex gap-1 items-center bg-gray-200/5 p-0.5 px-1 rounded-sm hover:text-white animate-pulse"
            :class="themeClass === 'light' ? 'bg-black/50' : ''"
          >
            <Skeleton
              class="h-4 w-4"
              :class="themeClass === 'light' ? 'bg-black/20' : ''"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-4 items-center gap-5">
      <div class="flex gap-2 text-xl font-extrabold basis-1/3 flex-shrink-0">
        <Skeleton
          class="h-8 w-1/3"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />
        <Skeleton
          class="h-8 w-1/3"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />
      </div>

      <div class="relative flex-1 overflow-x-scroll thin-scrollbar">
        <Skeleton
          class="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth h-3 w-full"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />
      </div>
    </div>
  </div>
</template>
