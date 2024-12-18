<script setup lang="ts">
import { useElementHover } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import { onMounted, onUnmounted, ref } from "vue";
import { getPrimaryAccentClass, useUserStore } from "@/store/user";
import { formatNumber } from "@/utils/trending";

const imageHover = ref();
const isHovered = useElementHover(imageHover);

const { localSettings } = useUserStore();

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

const containerRef = ref<HTMLDivElement | null>(null);
const showLeftFade = ref(false);
const showRightFade = ref(true);

const handleScroll = () => {
  if (!containerRef.value) return;

  const { scrollLeft, scrollWidth, clientWidth } = containerRef.value;

  console.log(
    "scrollLeft:",
    scrollLeft,
    "scrollWidth:",
    scrollWidth,
    "clientWidth:",
    clientWidth
  );

  // Show the left fade if we are scrolled left
  showLeftFade.value = scrollLeft > 0;

  // Show the right fade if there's overflow on the right
  showRightFade.value = scrollLeft + clientWidth < scrollWidth;
};

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <div
    class="flex flex-col bg-lightDark p-4 rounded-md shadow-lg overflow-hidden cursor-pointer"
  >
    <div class="flex gap-4">
      <div
        class="w-1/3 h-[222px] rounded-md overflow-hidden relative cursor-pointer group"
        ref="imageHover"
      >
        <img
          src="/home/khemu/anime_streamer/public/ezgif.com-animated-gif-maker_2.gif"
          class="w-full h-full object-fit transition-all duration-300 ease-in-out group-hover:opacity-70 group-hover:translate-y-[-4px]"
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

      <div class="flex flex-col flex-1">
        <div>
          <h3 class="text-lg font-bold text-white">DAN DA DAN</h3>
          <h4 class="text-sm text-gray-400 mb-2">Dandadan</h4>
          <p
            class="text-[12px] text-gray-300/50 overflow-y-auto pr-2 max-h-[150px] scrollbar-hide"
          >
            This is a story about Momo, a high school girl who comes from a
            family of spirit mediums, and her classmate Okarun, an occult
            fanatic. After Momo rescues Okarun from being bullied, they begin
            talking. However, an argument ensues between them since Momo
            believes in ghosts but denies aliens exist, and Okarun believes in
            aliens but denies ghosts exist. To prove to each other what they
            believe in is real, Momo goes to an abandoned hospital where a UFO
            has been spotted and Okarun goes to a tunnel rumored to be haunted.
            To their surprise, they each encounter overwhelming paranormal
            activities that transcend comprehension. Amid these predicaments,
            Momo awakens her hidden power and Okarun gains the power of a curse
            to overcome these new dangers! Their fateful love begins as well!?
            The story of the occult battle and adolescence starts!
          </p>
        </div>
        <div
          class="flex gap-2 font-semibold text-[12px] items-center text-[gray] mt-2"
        >
          <span class="rounded-full bg-green-600 w-1.5 h-1.5"></span>

          <div
            class="flex gap-1 items-center bg-gray-200/5 p-0.5 rounded-sm px-1 hover:text-white"
          >
            <Icon icon="typcn:group" width="15px" height="15px" class="" />
            <span class="">
              {{ formatNumber(1000000000) }}
            </span>
          </div>

          <div
            class="flex gap-1 justify-center items-center bg-gray-200/5 p-0.5 px-1 rounded-sm hover:text-white"
          >
            <span
              class="text-center font-extrabold bg-gray-300/20 px-1 rounded-sm w-[25px]"
            >
              CC
            </span>
            <span class="flex hover:text-white">0 / 12</span>
          </div>

          <div
            class="flex gap-1 items-center bg-gray-200/5 p-0.5 px-1 rounded-sm hover:text-white"
          >
            <span>{{ formatNumber(1000) }}</span>
            <Icon
              icon="material-symbols:kid-star-outline-sharp"
              width="15px"
              height="15px"
              class=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-4 items-center gap-5">
      <div class="flex gap-2 text-xl font-extrabold basis-1/3 flex-shrink-0">
        <span
          class="flex justify-center items-center flex-1 border border-borderColor bg-gray-300/5 p-1 rounded-sm text-center text-white group"
          :class="[
            `${getPrimaryAccentClass(
              localSettings.primaryAccent
            )}-hover ${getPrimaryAccentClass(
              localSettings.primaryAccent
            )}-border-hover`,
          ]"
        >
          AL
        </span>
        <span
          class="flex justify-center items-center flex-1 border border-borderColor bg-gray-300/5 p-1 rounded-sm text-center text-white"
          :class="[
            `${getPrimaryAccentClass(
              localSettings.primaryAccent
            )}-hover ${getPrimaryAccentClass(
              localSettings.primaryAccent
            )}-border-hover`,
          ]"
        >
          MAL
        </span>
      </div>

      <div class="relative flex-1 overflow-x-scroll thin-scrollbar">
        <div
          v-if="showLeftFade"
          class="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"
        ></div>

        <div
          v-if="showRightFade"
          class="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black/40 to-transparent pointer-events-none"
        ></div>

        <!-- Scrollable Tag List -->
        <div ref="containerRef" class="flex gap-2 overflow-x-auto w-max">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="py-[0.2rem] px-[0.5rem] bg-gray-300/5 text-xs rounded-sm whitespace-nowrap border border-borderColor font-semibold text-[17px]"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
