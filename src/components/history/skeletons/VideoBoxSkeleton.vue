<script lang="ts" setup>
import { useUserStore } from "@/store/user";
import { Skeleton } from "@/components/ui/skeleton";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const { watchList } = defineProps<{
  watchList?: boolean;
}>();

const userStore = useUserStore();
const { theme } = storeToRefs(userStore);

const themeClass = computed(() => {
  return theme.value === "dark" ? "dark" : "light";
});
</script>
<template>
  <div
    class="relative flex flex-col gap-2 rounded-md border border-borderColor shadow-lg overflow-hidden cursor-pointer bg-lightDark group"
    ref="imageHover"
  >
    <div class="overflow-hidden relative cursor-pointer">
      <Skeleton
        class="w-[425px] h-[248px]"
        :class="[
          watchList ? 'h-[170px]' : 'h-[248px]',
          themeClass === 'light' ? 'bg-black/20' : '',
        ]"
      />
    </div>
    <div class="flex flex-col gap-2 p-1">
      <Skeleton
        class="w-[85%] h-4"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
      <Skeleton
        class="w-[40%] h-4"
        :class="[
          watchList ? 'hidden' : '',
          themeClass === 'light' ? 'bg-black/20' : '',
        ]"
      />
    </div>
  </div>
</template>
