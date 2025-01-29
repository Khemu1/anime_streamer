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
  <div class="relative w-full overflow-hidden">
    <div class="flex w-full overflow-hidden gap-4">
      <Skeleton
        v-for="i in 20"
        :key="i"
        class="flex-shrink-0 text-[.8rem] py-[.75rem] px-[1.75rem] bg-secondaryBg rounded-md"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
    </div>
  </div>
</template>
