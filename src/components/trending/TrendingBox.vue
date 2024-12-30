<script setup lang="ts">
import { useElementHover } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import { onMounted, onUnmounted, ref } from "vue";
import { useUserStore } from "@/store/user";
import { getPrimaryAccentClass } from "@/utils/localSettings";
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
  const container = containerRef.value;
  if (!container) return;

  const { scrollLeft, scrollWidth, clientWidth } = container;

  showLeftFade.value = scrollLeft > 0;
  showRightFade.value = scrollLeft + clientWidth < scrollWidth;
};

const enableMouseScroll = () => {
  const container = containerRef.value;
  if (!container) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const mouseDownHandler = (e: MouseEvent) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = "grabbing";
  };

  const mouseUpHandler = () => {
    isDown = false;
    container.style.cursor = "grab";
  };

  const mouseLeaveHandler = () => {
    isDown = false;
    container.style.cursor = "grab";
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  container.addEventListener("mousedown", mouseDownHandler);
  container.addEventListener("mouseup", mouseUpHandler);
  container.addEventListener("mouseleave", mouseLeaveHandler);
  container.addEventListener("mousemove", mouseMoveHandler);
};

const addListeners = () => {
  const container = containerRef.value;
  if (!container) return;

  container.addEventListener("scroll", handleScroll);
  enableMouseScroll();
  window.addEventListener("resize", handleScroll);

  handleScroll();
};

const removeListeners = () => {
  const container = containerRef.value;
  if (!container) return;

  container.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleScroll);
};

onMounted(() => {
  addListeners();
});

onUnmounted(() => {
  removeListeners();
});
</script>

<template>
  <div
    class="flex flex-col bg-lightDark p-4 rounded-md shadow-lg overflow-hidden cursor-pointer sm:w-[auto]"
  >
    <div class="flex gap-4">
      <div
        class="flex-shrink-0 w-1/3 h-[222px] rounded-md overflow-hidden relative cursor-pointer group"
        ref="imageHover"
      >
        <img
          src="/ezgif.com-animated-gif-maker_2.gif"
          class="w-full h-full object-fit transition-all duration-300 ease-in-out rounded-md group-hover:opacity-50 group-hover:translate-y-[-4px]"
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

      <div class="flex flex-col flex-1 overflow-hidden">
        <div>
          <h3
            class="text-lg font-bold overflow-hidden text-white text-ellipsis whitespace-nowrap flex-grow-0"
          >
            DAN DA DAN DAN DA DAN DAN DA DAN DAN DA DAN DAN DA DAN DAN DA DAN
            ddddddddddddddddd
          </h3>
          <h4
            class="text-sm text-gray-400 mb-2 overflow-hidden text-ellipsis whitespace-nowrap block"
          >
            Dandadan Dandadan Dandadan Dandadan Dandadan Dandadan Dandadan
            Dandadan Dandadan Dandadan Dandadan Dandadan Dandadan Dandadan
            Dandadan Dandadan Dandadan Dandadan Dandadan Dandadan Dandadan
            Dandadan Dandadan Dandadan Dandadan Dandadan Dandadan Dandadan
          </h4>
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
            The story of the occult battle and adolescence starts! This is a
            story about Momo, a high school girl who comes from a family of
            spirit mediums, and her classmate Okarun, an occult fanatic. After
            Momo rescues Okarun from being bullied, they begin talking. However,
            an argument ensues between them since Momo believes in ghosts but
            denies aliens exist, and Okarun believes in aliens but denies ghosts
            exist. To prove to each other what they believe in is real, Momo
            goes to an abandoned hospital where a UFO has been spotted and
            Okarun goes to a tunnel rumored to be haunted. To their surprise,
            they each encounter overwhelming paranormal activities that
            transcend comprehension. Amid these predicaments, Momo awakens her
            hidden power and Okarun gains the power of a curse to overcome these
            new dangers! Their fateful love begins as well!? The story of the
            occult battle and adolescence starts! This is a story about Momo, a
            high school girl who comes from a family of spirit mediums, and her
            classmate Okarun, an occult fanatic. After Momo rescues Okarun from
            being bullied, they begin talking. However, an argument ensues
            between them since Momo believes in ghosts but denies aliens exist,
            and Okarun believes in aliens but denies ghosts exist. To prove to
            each other what they believe in is real, Momo goes to an abandoned
            hospital where a UFO has been spotted and Okarun goes to a tunnel
            rumored to be haunted. To their surprise, they each encounter
            overwhelming paranormal activities that transcend comprehension.
            Amid these predicaments, Momo awakens her hidden power and Okarun
            gains the power of a curse to overcome these new dangers! Their
            fateful love begins as well!? The story of the occult battle and
            adolescence starts!
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
            <div
              class="flex gap-1 items-center p-0.5 rounded-sm px-1 hover:text-white"
            >
              <Icon
                icon="material-symbols:subtitles-rounded"
                width="14px"
                height="14px"
              />
              <span class="">0 / 12</span>
            </div>
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
        <div
          ref="containerRef"
          class="flex gap-2 overflow-x-auto w-full scrollbar-hide scroll-smooth"
          style="-webkit-overflow-scrolling: touch"
        >
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="py-[0.2rem] px-[0.5rem] text-xs rounded-sm whitespace-nowrap border border-borderColor font-semibold text-[17px]"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
