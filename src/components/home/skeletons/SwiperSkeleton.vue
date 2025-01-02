<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

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
          <Skeleton class="w-full h-full object-cover absolute" />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
          ></div>

          <div
            class="flex justify-end py-2 px-3 h-full flex-col w-full text-white z-10"
          >
            <div
              class="flex gap-2 font-semibold text-[13px] items-center w-max bg-gray-100/10 rounded-xl mt-2 overflow-hidden px-2 py-1 mb-1"
            >
              <div
                class="text-center rounded-full py-0.5 px-1.5 h-6 bg-gray-200/20"
              >
                <Skeleton class="w-3" />
              </div>

              <div
                class="flex gap-1 items-center p-1 px-2 rounded-md bg-gray-200/10 hover:text-white h-full"
              >
                <Skeleton class="w-12" />
              </div>

              <div
                class="flex gap-1 items-center p-1 px-2 rounded-md bg-gray-200/10 hover:text-white h-full"
              >
                <Skeleton class="w-12" />
              </div>

              <div
                class="flex gap-1 items-center p-1 px-2 rounded-md bg-gray-200/10 hover:text-white h-full"
              >
                <Skeleton class="w-12" />
              </div>
            </div>

            <div
              class="flex w-full gap-4 justify-between items-start flex-col md:flex-row md:items-end"
            >
              <div class="flex flex-col gap-2 w-full">
                <Skeleton class="w-[200px] h-4" />
                <Skeleton class="w-[250px] h-3" />
              </div>
              <div
                class="flex gap-4 text-[12px] font-semibold md:*:w-[6.5rem] md:*:h-[2.5rem] *:w-[6.5rem] *:h-[2rem]"
              >
                <Skeleton
                  class="flex gap-1 justify-center items-center text-white transition-all rounded-xl"
                />

                <Skeleton
                  class="flex gap-1 justify-center items-center text-white transition-all rounded-xl"
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
