<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { categories } from "@/constants/home";
import { Icon } from "@iconify/vue";
import { useUserStore } from "@/store/user";
import { getPrimaryAccentClass } from "@/utils/localSettings";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { localSettings } = storeToRefs(userStore);

const containerRef = ref<HTMLDivElement | null>(null);
const showLeftFade = ref(false);
const showRightFade = ref(true);

function scrollLeft() {
  if (containerRef.value) {
    containerRef.value.scrollBy({ left: -200, behavior: "smooth" });
  }
}

function scrollRight() {
  if (containerRef.value) {
    containerRef.value.scrollBy({ left: 200, behavior: "smooth" });
  }
}

const handleScroll = () => {
  const container = containerRef.value;
  if (!container) return;

  const { scrollLeft, scrollWidth, clientWidth } = container;

  showLeftFade.value = scrollLeft > 0;
  showRightFade.value = scrollLeft + clientWidth < scrollWidth;
};

const addListeners = () => {
  const container = containerRef.value;
  if (!container) return;

  container.addEventListener("scroll", handleScroll);
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
  <div class="relative w-full">
    <button
      @click="scrollLeft"
      class="absolute top-1/2 left-[-10px] -translate-y-1/2 z-10 bg-black/30 text-white px-2 py-1 rounded-full"
      :class="[`${getPrimaryAccentClass(localSettings.primaryAccent)}-hover`]"
      v-if="showLeftFade"
    >
      <Icon icon="ic:sharp-arrow-circle-left" width="25px" height="25px" />
    </button>

    <div
      ref="containerRef"
      class="flex w-full overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
    >
      <div
        v-for="category in categories"
        :key="category"
        class="flex-shrink-0 text-[.8rem] py-[.5rem] px-[1.75rem] bg-catigories-bg-color rounded-md"
      >
        {{ category }}
      </div>
    </div>

    <!-- Scroll Right Button -->
    <button
      @click="scrollRight"
      class="absolute top-1/2 right-[-10px] -translate-y-1/2 z-10 bg-black/30 text-white px-2 py-1 rounded-full"
      :class="[`${getPrimaryAccentClass(localSettings.primaryAccent)}-hover`]"
      v-if="showRightFade"
    >
      <Icon icon="ic:sharp-arrow-circle-right" width="25px" height="25px" />
    </button>
  </div>
</template>
