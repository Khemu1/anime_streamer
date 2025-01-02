<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <div class="flex flex-col gap-3 w-[175px] sm:w-[185px] h-[312px]">
    <div class="h-[270.5px] rounded-md overflow-hidden flex-shrink-0">
      <Skeleton class="w-full h-full rounded-md" />
    </div>

    <div class="flex flex-col gap-2 justify-center">
      <Skeleton class="h-4" />

      <div class="flex gap-2 items-center text-[gray] text-sm font-semibold">
        <Skeleton class="h-4 w-[30px]" />
        <Skeleton class="h-4 w-[30px]" />

        <Skeleton class="h-4 w-[25px]" />
        <Skeleton class="h-4 w-[24px] hidden md:flex" />
      </div>
    </div>
  </div>
</template>
