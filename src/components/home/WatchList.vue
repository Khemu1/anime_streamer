<script setup lang="ts">
import { useUserStore } from "@/store/user";
import VideoBox from "../history/VideoBox.vue";
import { onMounted, onUnmounted, ref } from "vue";

const { watchList } = useUserStore();

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

  // Add event listeners
  container.addEventListener("mousedown", mouseDownHandler);
  container.addEventListener("mouseup", mouseUpHandler);
  container.addEventListener("mouseleave", mouseLeaveHandler);
  container.addEventListener("mousemove", mouseMoveHandler);

  return () => {
    // Remove event listeners when component unmounts
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

// Use Vue lifecycle hooks to add/remove listeners
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
    <div class="text-gray-400">
      <p>Your Watchlist</p>
      <h2 class="text-white text-2xl font-semibold">Continue Watching</h2>
    </div>

    <div
      ref="containerRef"
      class="flex gap-4 overflow-x-scroll w-full pb-4 scroll-smooth scrollbar-hide"
      style="-webkit-overflow-scrolling: touch"
    >
      <div
        class="flex gap-4 flex-shrink-0 rounded-md overflow-x-scroll md:*:w-[300px] *:w-[270px]"
      >
        <VideoBox :watchList="true" />
        <VideoBox :watchList="true" />

        <VideoBox :watchList="true" />
      </div>

      <router-link
        to="/history"
        class="flex justify-center items-center w-[270px] md:w-[300px] flex-shrink-0 border border-borderColor rounded-md hover:border-white transition-all text-white"
      >
        View More
      </router-link>
    </div>
  </div>
</template>
