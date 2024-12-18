<script setup lang="ts">
import TrendingBox from "@/components/trending/TrendingBox.vue";
import { filters } from "@/constants/trending";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ref } from "vue";

const items = [1, 2, 3, 4, 5, 6, , 8, 9];

const season = ref("Winter");
</script>

<template>
  <div class="p-8 flex flex-col flex-1">
    <header class="flex justify-center">
      <div class="flex overflow-x-scroll scrollbar-hide whitespace-nowrap">
        <div
          v-for="(filter, index) in filters"
          :key="index"
          class="flex items-center font-semibold text-2xl sm:text-4xl cursor-pointer"
          @click="season = filter"
        >
          <span
            :class="season === filter ? 'text-white' : 'text-gray-400'"
            class="transition-colors duration-200 ease-in-out leading-none h-full"
          >
            {{ filter }}
          </span>
          <span
            v-if="index !== filters.length - 1"
            class="mx-2 sm:mx-4 text-white h-full"
          >
            /
          </span>
        </div>
      </div>
    </header>

    <!-- Section content -->
    <section
      class="mt-6 grid grid-cols-[repeat(auto-fill,_minmax(545px,_1fr))] gap-5"
    >
      <TrendingBox />
      <TrendingBox />

      <TrendingBox />
      <TrendingBox />

      <TrendingBox />
    </section>
    <div class="flex justify-between mt-5 items-center">
      <div class="font-semibold">
        Showing
        <strong>1</strong>
        to
        <strong>21</strong>
        out of
        <strong>95</strong>
        results
      </div>
      <Pagination
        v-slot="{ page }"
        :total="100"
        :sibling-count="1"
        show-edges
        :default-page="2"
      >
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst />
          <PaginationPrev />

          <div v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <Button
                class="w-10 h-10 p-0"
                :variant="item.value === page ? 'default' : 'outline'"
              >
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </div>

          <PaginationNext />
          <PaginationLast />
        </PaginationList>
      </Pagination>
    </div>
  </div>
</template>
