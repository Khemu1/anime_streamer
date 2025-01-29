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
  <div class="flex flex-col gap-3 w-[175px] sm:w-[185px] h-[312px]">
    <div class="h-[270.5px] rounded-md overflow-hidden flex-shrink-0">
      <Skeleton
        class="w-full h-full rounded-md"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
    </div>

    <div class="flex flex-col gap-2 justify-center">
      <Skeleton
        class="h-4"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />

      <div class="flex gap-2 items-center text-[gray] text-sm font-semibold">
        <Skeleton
          class="h-4 w-[30px]"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />
        <Skeleton
          class="h-4 w-[30px]"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />

        <Skeleton
          class="h-4 w-[25px]"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />
        <Skeleton
          class="h-4 w-[24px] hidden md:flex"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />
      </div>
    </div>
  </div>
</template>
