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
</script>

<template>
  <div
    class="w-full xl:w-[400px] max-h-[625px] overflow-y-scroll flex flex-col p-[0.75rem] bg-secondaryBg rounded-md gap-4"
  >
    <div class="flex gap-2 items-center">
      <Skeleton
        class="w-[30%] h-[20px]"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
    </div>
    <div class="flex flex-col gap-4">
      <div
        v-for="index in 4"
        :key="index"
        class="flex gap-4 bg-lightDark rounded-md transition-all cursor-pointer"
      >
        <div class="w-[68px] h-[96px] rounded-md overflow-hidden flex-shrink-0">
          <Skeleton
            class="w-[68px] h-[96px]"
            :class="themeClass === 'light' ? 'bg-black/20' : ''"
          />
        </div>
        <div class="flex w-full flex-col gap-2 justify-center">
          <Skeleton
            class="w-[85%] h-4"
            :class="themeClass === 'light' ? 'bg-black/20' : ''"
          />
          <div
            class="flex gap-2 items-center text-[gray] *:bg-[#5555551a] *:gap-[.15rem] *:py-[.1rem] *:px-[.2rem] font-semibold text-[11px] *:rounded-md"
          >
            <Skeleton
              class="w-[6%] h-4 rounded-full"
              :class="themeClass === 'light' ? 'bg-black/20' : ''"
            />
            <Skeleton
              class="w-[10%] h-4 rounded-md"
              :class="themeClass === 'light' ? 'bg-black/20' : ''"
            />
            <Skeleton
              class="w-[10%] h-4 rounded-md"
              :class="themeClass === 'light' ? 'bg-black/20' : ''"
            />
          </div>
        </div>
      </div>
    </div>
    <Skeleton class="w-full h-6 rounded-md py-5 bg-lightDark" />
  </div>
</template>
