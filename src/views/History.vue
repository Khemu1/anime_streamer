<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
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

import { videosFrom, sortBy } from "@/constants/history";
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import VideoBox from "@/components/history/VideoBox.vue";

const { historyFilters } = useUserStore();
const searchText = ref<string>("");
</script>

<template>
  <section class="flex flex-1 flex-col p-8">
    <header class="flex flex-wrap items-center gap-4 w-full">
      <div class="flex-shrink-0 w-max">
        <Select v-model="historyFilters.videosFrom">
          <SelectTrigger class="w-[200px] transition-all bg-lightDark !py-2">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="(item, idx) in videosFrom"
                :key="idx"
                :value="item.value"
              >
                {{ item.name }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <!-- Select Dropdown 2 -->
      <div class="flex-shrink-0 w-max">
        <Select v-model="historyFilters.sortBy">
          <SelectTrigger class="w-[200px] transition-all bg-lightDark !py-2">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="(item, idx) in sortBy"
                :key="idx"
                :value="item.value"
              >
                {{ item.name }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="flex-grow">
        <Input
          v-model="searchText"
          placeholder="Filter by title"
          name="search"
          id="search"
          class="w-full sm:w-[200px] bg-lightDark"
          ref="target"
        />
      </div>
    </header>
    <section class="mt-4 flex flex-col">
      <section
        class="mt-6 grid grid-cols-[repeat(auto-fill,_minmax(auto,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-5"
      >
        <VideoBox />
        <VideoBox />

        <VideoBox />
        <VideoBox />

        <VideoBox />
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
    </section>
  </section>
</template>
