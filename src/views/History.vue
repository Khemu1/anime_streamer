<script setup lang="ts">
import { Select, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/vue";

import { videosFrom, sortBy } from "@/constants/history";
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import VideoBox from "@/components/history/VideoBox.vue";
import VideoBoxSkeleton from "@/components/history/skeletons/VideoBoxSkeleton.vue";
import { storeToRefs } from "pinia";

const currentPage = ref(1);

const incrementPage = () => {
  if (currentPage.value < 5) {
    currentPage.value++;
  }
};

const decrementPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const userStore = useUserStore();
const { historyFilters, accent } = storeToRefs(userStore);

const searchText = ref<string>("");
</script>

<template>
  <section class="flex flex-1 flex-col mt-10">
    <header class="flex flex-wrap items-center gap-4 w-full">
      <div class="flex-shrink-0 w-max">
        <Select v-model="historyFilters.videosFrom">
          <SelectItem
            v-for="(videoFrom, idx) in videosFrom"
            :key="idx"
            :value="videoFrom.value"
            :class="['font-semibold', `${accent}-focus`]"
          >
            {{ videoFrom.name }}
          </SelectItem>
        </Select>
      </div>

      <div class="flex-shrink-0 w-max">
        <Select v-model="historyFilters.sortBy">
          <SelectItem
            v-for="(sort, idx) in sortBy"
            :key="idx"
            :value="sort.value"
          >
            {{ sort.name }}
          </SelectItem>
        </Select>
      </div>

      <div class="flex-grow">
        <Input
          v-model="searchText"
          placeholder="Filter by title"
          name="search"
          id="search"
          class="w-full sm:w-[200px] bg-lightDark border-borderColor"
          :class="[`${accent}-border-hover`, `${accent}-ring-focus`]"
          ref="target"
        />
      </div>
    </header>
    <section class="mt-4 flex flex-col">
      <section
        class="mt-6 grid grid-cols-[repeat(auto-fill,_minmax(auto,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-5"
      >
        <VideoBoxSkeleton />
        <VideoBoxSkeleton />

        <VideoBoxSkeleton />
        <VideoBoxSkeleton />

        <VideoBoxSkeleton />
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
        <div
          class="flex items-center justify-between bg-[#0e0e0e] border border-borderColor rounded-md w-[100px] overflow-hidden"
        >
          <button
            class="h-full transition-all"
            :class="currentPage > 1 ? 'bg-lightDark' : ''"
            :disabled="currentPage < 2"
            @click="decrementPage"
          >
            <Icon
              icon="ic:baseline-keyboard-arrow-left"
              width="30px"
              height="30px"
              style="color: #ffffff"
            />
          </button>

          <span class="px-2 text-white">{{ currentPage }}</span>

          <button
            class="h-full transition-all"
            @click="incrementPage"
            :class="currentPage >= 1 && currentPage < 5 ? 'bg-lightDark' : ''"
          >
            <Icon
              icon="ic:baseline-keyboard-arrow-right"
              width="30px"
              height="30px"
              style="color: #ffffff"
            />
          </button>
        </div>
      </div>
    </section>
  </section>
</template>
