<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex w-full overflow-hidden gap-4">
      <Skeleton
        v-for="i in 20"
        :key="i"
        class="flex-shrink-0 text-[.8rem] py-[.5rem] px-[1.75rem] bg-secondaryBg rounded-md"
      />
    </div>
  </div>
</template>
