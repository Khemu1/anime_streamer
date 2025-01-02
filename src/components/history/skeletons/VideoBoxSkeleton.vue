<script lang="ts" setup>
import { Skeleton } from "@/components/ui/skeleton";
const { watchList } = defineProps<{
  watchList?: boolean;
}>();
</script>
<template>
  <div
    class="relative flex flex-col gap-2 rounded-md border border-borderColor shadow-lg overflow-hidden cursor-pointer bg-lightDark group"
    ref="imageHover"
  >
    <div class="overflow-hidden relative cursor-pointer">
      <Skeleton
        class="w-[425px] h-[248px]"
        :class="watchList ? 'h-[170px]' : 'h-[248px]'"
      />
    </div>
    <div class="flex flex-col gap-2 p-1">
      <Skeleton class="w-[85%] h-4" />
      <Skeleton class="w-[40%] h-4" :class="watchList ? 'hidden' : ''" />
    </div>
  </div>
</template>
