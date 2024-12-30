<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Icon } from "@iconify/vue";
import { formatNumber } from "@/utils/trending";

const carouselItems = [
  {
    id: 1,
    image: "/ezgif.com-animated-gif-maker_2.gif",
    title: "Tying the Knot with an Amagami Sister",
    watchWhere: "TV",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut ait Accius, in oculis quidem exercitus.",
  },
  {
    id: 2,
    image: "/ezgif.com-animated-gif-maker_2.gif",
    title: "Another Amazing Title",
    watchWhere: "TV",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut ait Accius, in oculis quidem exercitus.",
  },
  {
    id: 3,
    image: "/ezgif.com-animated-gif-maker_2.gif",
    title: "Another Amazing Title",
    watchWhere: "TV",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut ait Accius, in oculis quidem exercitus.",
  },
  {
    id: 4,
    image: "/ezgif.com-animated-gif-maker_2.gif",
    title: "Another Amazing Title",
    watchWhere: "TV",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut ait Accius, in oculis quidem exercitus.",
  },
];
</script>

<template>
  <Carousel
    v-slot="{ canScrollNext }"
    :plugins="[Autoplay({ delay: 5000 })]"
    class="relative mt-8 h-[345px] w-full"
  >
    <CarouselContent>
      <CarouselItem v-for="item in carouselItems" :key="item.id">
        <div class="flex w-full relative h-[345px]">
          <img
            :src="item.image"
            alt=""
            class="w-full h-full object-cover absolute"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
          ></div>

          <div
            class="flex justify-end py-2 px-3 h-full flex-col w-full text-white z-10"
          >
            <div
              class="flex gap-2 font-semibold text-[13px] items-center w-max bg-gray-100/10 rounded-xl mt-2 overflow-hidden px-2 py-1"
            >
              <!-- Watch Where -->
              <div
                class="text-center rounded-full py-0.5 px-1.5 h-full bg-gray-200/20"
              >
                {{ item.watchWhere }}
              </div>

              <div
                class="flex gap-1 items-center p-1 px-2 rounded-md bg-gray-200/10 hover:text-white h-full"
              >
                <Icon
                  icon="material-symbols:subtitles-rounded"
                  width="16px"
                  height="16px"
                />
                <span>0 / 12</span>
              </div>

              <div
                class="flex gap-1 items-center p-1 px-2 rounded-md bg-gray-200/10 hover:text-white h-full"
              >
                <Icon
                  icon="material-symbols:kid-star-outline-sharp"
                  width="16px"
                  height="16px"
                />
                <span>{{ formatNumber(1000) }}</span>
              </div>

              <div
                class="flex gap-1 items-center p-1 px-2 rounded-md bg-gray-200/10 hover:text-white h-full"
              >
                <Icon
                  icon="material-symbols:timer"
                  width="16px"
                  height="16px"
                />
                <span>{{ formatNumber(1000000000) }}</span>
              </div>
            </div>

            <div
              class="flex w-full gap-3 justify-between items-start flex-col md:flex-row md:items-end"
            >
              <div class="flex flex-col gap-2 w-full">
                <h2 class="text-2xl font-bold">{{ item.title }}</h2>
                <p
                  class="hidden md:block max-w-[500px] max-h-[50px] text-wrap text-ellipsis overflow-hidden"
                >
                  {{ item.description }}
                </p>
              </div>
              <div
                class="flex gap-4 text-[12px] font-semibold md:*:w-[6.5rem] md:*:h-[2.5rem] *:w-[6.5rem] *:h-[2rem]"
              >
                <button
                  class="flex gap-1 justify-center items-center bg-gray-100/10 border-[.5px] border-gray-100/20 text-white transition-all hover:border-gray-100/80 rounded-xl hover:scale-105"
                >
                  <Icon
                    icon="material-symbols:info-rounded"
                    width="20px"
                    height="20px"
                    style="color: #ffffff"
                  />
                  <span>DETAILS</span>
                </button>
                <button
                  class="flex gap-1 justify-center items-center bg-gray-100/10 border-[.5px] border-gray-100/20 text-white transition-all hover:border-gray-100/80 rounded-xl hover:scale-105"
                >
                  <Icon
                    icon="ic:round-play-circle"
                    width="20px"
                    height="20px"
                    style="color: #ffffff"
                  />
                  <span>Watch</span>
                </button>
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
      v-if="canScrollNext"
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
