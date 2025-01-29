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
    class="min-h-[130px] flex flex-1 justify-between cursor-pointer bg-schedule-big-card-bg-color border border-borderColor rounded-md p-[1rem] group relative overflow-hidden"
  >
    <div class="flex justify-center flex-col text-[0.8rem] gap-2">
      <Skeleton
        class="font-semibold w-[100px] h-[20px]"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
      <div class="flex gap-2 font-semibold *:bg-schedule-big-card-tag-bg-color">
        <Skeleton
          class="font-semibold text-[1rem] w-14 h-5"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />

        <Skeleton
          class="font-semibold text-[1rem] w-20 h-5"
          :class="themeClass === 'light' ? 'bg-black/20' : ''"
        />
      </div>
    </div>
    <div
      class="absolute right-0 top-1/2 translate-x-[-100%] sm:translate-x-[-150%] translate-y-[-50%] xl:translate-x-[-180%] xl:w-[3rem] xl:h-[5rem] w-[4rem] h-[7rem] z-[10]"
    >
      <Skeleton
        class="font-semibold text-[1rem] w-full h-full"
        :class="themeClass === 'light' ? 'bg-black/20' : ''"
      />
    </div>
  </div>
</template>

<style scoped>
.kFTXSO {
  position: absolute;
  top: 0rem;
  left: -0.5rem;
  width: 2.5rem;
  height: 2rem;
  border-radius: 0px 0.5rem;
  background-color: white;
  color: black;
  z-index: 3;
  transform: rotate(-40deg);
  transform-origin: 0px 0px 0px;
  transition: transform 0.2s;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0.1rem;
}
</style>
