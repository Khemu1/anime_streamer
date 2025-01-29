<script setup lang="ts">
import { useUserStore } from "@/store/user";
import VideoBox from "../history/VideoBox.vue";
import { onMounted, onUnmounted, ref } from "vue";
import VideoBoxSkeleton from "../history/skeletons/VideoBoxSkeleton.vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { watchList } = storeToRefs(userStore);

const containerRef = ref<HTMLDivElement | null>(null);

// Enable mouse-based scrolling
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
    const walk = (x - startX) * 2; // Adjust scroll speed
    container.scrollLeft = scrollLeft - walk;
  };

  container.addEventListener("mousedown", mouseDownHandler);
  container.addEventListener("mouseup", mouseUpHandler);
  container.addEventListener("mouseleave", mouseLeaveHandler);
  container.addEventListener("mousemove", mouseMoveHandler);

  return () => {
    container.removeEventListener("mousedown", mouseDownHandler);
    container.removeEventListener("mouseup", mouseUpHandler);
    container.removeEventListener("mouseleave", mouseLeaveHandler);
    container.removeEventListener("mousemove", mouseMoveHandler);
  };
};

const addListeners = () => {
  if (!containerRef.value) return;
  const cleanup = enableMouseScroll();
  return cleanup;
};

const removeListeners = (cleanup?: () => void) => {
  if (cleanup) cleanup();
};

let cleanupListeners: (() => void) | undefined;
onMounted(() => {
  cleanupListeners = addListeners();
});

onUnmounted(() => {
  removeListeners(cleanupListeners);
});
</script>

<template>
  <div v-if="watchList.length > -1" class="flex flex-col gap-4">
    <div class="">
      <p class="opacity-80">Your Watchlist</p>
      <h2 class="text-2xl font-semibold">Continue Watching</h2>
    </div>

    <div
      ref="containerRef"
      class="flex gap-4 overflow-x-scroll w-full pb-4 scroll-smooth scrollbar-hide"
      style="-webkit-overflow-scrolling: touch"
    >
      <div
        class="flex gap-4 flex-shrink-0 rounded-md overflow-x-scroll md:*:w-[300px] *:w-[270px]"
      >
        <VideoBox />
        <VideoBox />

        <VideoBoxSkeleton :watchList="true" />
        <VideoBoxSkeleton :watchList="true" />
      </div>

      <router-link
        to="/history"
        class="flex justify-center items-center w-[270px] md:w-[300px] flex-shrink-0 bg-lightDark rounded-md transition-all"
      >
        View More
      </router-link>
    </div>
  </div>
</template>
