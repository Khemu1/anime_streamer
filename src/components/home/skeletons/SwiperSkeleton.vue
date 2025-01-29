<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const userStore = useUserStore();
const { theme } = storeToRefs(userStore);

const themeClass = computed(() => {
  return theme.value === "dark" ? "dark" : "light";
});

const carouselItems = [
  {
    id: 1,
    image: "/ezgif.com-animated-gif-maker_2.gif",
    title: "Tying the Knot with an Amagami Sister",
    watchWhere: "TV",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut ait Accius, in oculis quidem exercitus.",
  },
];
</script>

<template>
  <Carousel class="relative mt-8 h-[345px] w-full">
    <CarouselContent>
      <CarouselItem v-for="item in carouselItems" :key="item.id">
        <div class="flex w-full relative h-[345px]">
          <Skeleton
            class="w-full h-full object-cover absolute"
            :class="themeClass === 'light' ? 'bg-black/20' : ''"
          />

          <div
            class="flex justify-end py-2 px-3 h-full flex-col w-full text-white z-10"
          >
            <div
              class="flex gap-2 font-semibold text-[13px] items-center w-max bg-gray-100/10 rounded-xl mt-2 overflow-hidden px-2 py-1 mb-1"
            >
              <Skeleton
                class="w-6 h-6 rounded-full"
                :class="themeClass === 'light' ? 'bg-black/20' : ''"
              />

              <Skeleton
                class="w-12 h-7"
                :class="themeClass === 'light' ? 'bg-black/20' : ''"
              />

              <Skeleton
                class="w-12 h-6 p-1 px-2"
                :class="themeClass === 'light' ? 'bg-black/20' : ''"
              />

              <Skeleton
                class="w-12 h-5"
                :class="themeClass === 'light' ? 'bg-black/20' : ''"
              />
            </div>

            <div
              class="flex w-full gap-4 justify-between items-start flex-col md:flex-row md:items-end"
            >
              <div class="flex flex-col gap-2 w-full">
                <Skeleton
                  class="w-[340px] h-6"
                  :class="themeClass === 'light' ? 'bg-black/20' : ''"
                />
                <Skeleton
                  class="w-[250px] h-3"
                  :class="themeClass === 'light' ? 'bg-black/20' : ''"
                />
              </div>
              <div
                class="flex gap-4 text-[12px] font-semibold md:*:w-[6.5rem] md:*:h-[2.5rem] *:w-[6.5rem] *:h-[2rem]"
              >
                <Skeleton
                  class="flex gap-1 justify-center items-center text-white transition-all rounded-xl"
                  :class="themeClass === 'light' ? 'bg-black/20' : ''"
                />

                <Skeleton
                  class="flex gap-1 justify-center items-center text-white transition-all rounded-xl"
                  :class="themeClass === 'light' ? 'bg-black/20' : ''"
                />
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious
      class="top-6 prev z-10 p-2 bg-gray-100/20 rounded-md border-none outline-none text-white transition hover:bg-black/50"
    />

    <CarouselNext
      class="absolute top-6 next z-10 p-2 bg-gray-100/20 border-none outline-none rounded-md text-white transition hover:bg-black/50"
    />
  </Carousel>
</template>

<style scoped>
.next {
  left: calc(100% - 3rem) !important;
}
.prev {
  left: calc(100% - 5.5rem) !important;
}
</style>
