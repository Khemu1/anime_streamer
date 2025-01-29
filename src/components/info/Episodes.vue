<script lang="ts" setup>
import { Select, SelectItem } from "@/components/ui/select";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFocus } from "@vueuse/core";

import { computed, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";
import FullLayout from "@/components/info/FullLayout.vue";
import ListLayout from "@/components/info/ListLayout.vue";
import GridLayout from "@/components/info/GridLayout.vue";

const { episodes, defaultCardImage } = defineProps<{
  episodes: {
    id: string;
    number: number;
    title: string;
    image: string;
    description?: string;
    releaseData: string;
    subtitle: boolean;
    dup: boolean;
  }[];
  defaultCardImage: string;
}>();

const searchResults = ref<
  {
    id: string;
    number: number;
    title: string;
    image: string;
    description?: string;
    releaseData: string;
    subtitle: boolean;
    dup: boolean;
  }[]
>(episodes);

const searchText = ref("");

const userStore = useUserStore();
const { theme } = storeToRefs(userStore);
const iconsColor = computed(() => (theme.value === "dark" ? "white" : "black"));

const target = ref();
const { focused } = useFocus(target);

const showSpoiler = ref(true);
const selectedLayout = ref<"full" | "grid" | "list">("full");
const selectedRange = ref(1);

const iconName = computed(() => {
  if (selectedLayout.value === "full") return "material-symbols:image-rounded";
  if (selectedLayout.value === "grid") return "material-symbols:grid-on";
  return "material-symbols:list-alt-rounded";
});

const toggleSpoiler = () => {
  showSpoiler.value = !showSpoiler.value;
};

const toggleSelectedLayout = () => {
  const layouts = ["full", "grid", "list"] as const;
  const index = layouts.indexOf(selectedLayout.value);

  if (index === layouts.length - 1) {
    selectedLayout.value = layouts[0];
  } else {
    selectedLayout.value = layouts[index + 1];
  }
};

const episodeRanges = computed(() => {
  const rangeSize = 100;
  const totalEpisodes = episodes.length;

  const ranges: { value: number; label: string }[] = [];
  for (let start = 1; start <= totalEpisodes; start += rangeSize) {
    const end = Math.min(start + rangeSize - 1, totalEpisodes);
    ranges.push({ label: `Episodes ${start}-${end}`, value: start });
  }

  return ranges;
});

const computedEpisdoes = computed(() => {
  return episodes.filter(
    (eposide) =>
      eposide.title
        .toLowerCase()
        .includes(searchText.value.trim().toLowerCase()) ||
      (eposide.description &&
        eposide.description
          .toLowerCase()
          .includes(searchText.value.trim().toLowerCase())) ||
      eposide.number.toString().includes(searchText.value.trim().toLowerCase())
  );
});

watch(selectedRange, (newValue) => {
  console.log(newValue);
  const end = Number(newValue);
  const start = end - 99 > 0 ? end - 99 : 1;
  searchResults.value = episodes.slice(start - 1, end);
});
</script>

<template>
  <div class="flex flex-col border border-borderColor rounded-md w-full">
    <div
      class="flex gap-2 bg-secondaryBg rounded-md p-2 w-full items-center border-b border-borderColor"
    >
      <div class="flex-shrink-0 min-w-[150px]">
        <Select v-model="selectedRange" group-width="100%" trigger-width="100%">
          <SelectItem
            v-for="(range, index) in episodeRanges"
            :key="index"
            :value="range.value"
          >
            {{ range.label }}
          </SelectItem>
        </Select>
      </div>

      <div class="relative flex-grow">
        <Input
          v-model="searchText"
          placeholder="Search for episodes"
          name="search"
          id="search"
          class="!border border-borderColor pl-[25px] w-full"
          ref="target"
        />
        <Icon
          icon="simple-line-icons:magnifier"
          width="13px"
          height="13px"
          class="absolute top-[34%] left-2 transition-all"
          :style="{ color: iconsColor }"
          :class="[focused ? 'opacity-100' : 'opacity-50']"
        />
      </div>

      <div class="flex gap-2">
        <Button
          class="bg-lightDark hover:bg-lightDark border border-borderColor !rounded-sm flex-1 h-[auto]"
          @click="toggleSelectedLayout"
        >
          <Icon
            :icon="iconName"
            width="20px"
            height="20px"
            :style="{ color: iconsColor }"
          />
        </Button>
        <Button
          :disabled="selectedLayout !== 'full'"
          class="bg-lightDark hover:bg-lightDark border border-borderColor !rounded-sm flex-1 h-[auto]"
          @click="toggleSpoiler"
        >
          <Icon
            :icon="showSpoiler ? 'tabler:eye' : 'tabler:eye-off'"
            width="20px"
            height="20px"
            :style="{ color: iconsColor }"
          />
        </Button>
      </div>
    </div>
    <FullLayout
      v-if="selectedLayout === 'full'"
      :eposides="computedEpisdoes"
      :defaultCardImage="defaultCardImage"
      :show-spoilers="showSpoiler"
    />
    <ListLayout v-if="selectedLayout === 'list'" :eposides="computedEpisdoes" />
    <GridLayout v-if="selectedLayout === 'grid'" :eposides="computedEpisdoes" />
  </div>
</template>
