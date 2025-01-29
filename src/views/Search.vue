<script lang="ts" setup>
import {
  tagsFilter,
  yearsFilter,
  statusFilter,
  formatFilter,
  seasonsFilter,
  countryOfOriginFilter,
  dubsLanguageFilter,
  adultContentFilter,
  genresFilter,
  sortByFilter,
} from "@/constants/search";
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
import MultiSelect from "@/components/ui/multi-select/MultiSelect.vue";
import VideoCardSkeleton from "@/components/home/skeletons/VideoCardSkeleton.vue";
import VideoCard from "@/components/home/VideoCard.vue";
import { Icon } from "@iconify/vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { Select, SelectItem } from "@/components/ui/select";
import { computed, reactive, ref } from "vue";

const filters = reactive({
  selectedGneres: [] as { name: string; value: string }[],
  selectedTags: [] as { name: string; value: string }[],
  selectedYear: yearsFilter[0].value,
  selectedStatus: statusFilter[0].value,
  selectedFormat: formatFilter[0].value,
  selectedSeason: seasonsFilter[0].value,
  selectedCountry: countryOfOriginFilter[0].value,
  selectedDubLanguage: dubsLanguageFilter[0].value,
  selectedAdultContent: adultContentFilter[0].value,
  sortByFilter: [] as { name: string; value: string }[],
});

const showAllFilters = ref(false);
const resetFilters = () => {
  filters.selectedGneres = [];
  filters.selectedTags = [];
  filters.selectedYear = yearsFilter[0].value;
  filters.selectedStatus = statusFilter[0].value;
  filters.selectedFormat = formatFilter[0].value;
  filters.selectedSeason = seasonsFilter[0].value;
  filters.selectedCountry = countryOfOriginFilter[0].value;
  filters.selectedDubLanguage = dubsLanguageFilter[0].value;
  filters.selectedAdultContent = adultContentFilter[0].value;
  filters.sortByFilter = [];
};

const userStore = useUserStore();
const { accent, theme } = storeToRefs(userStore);
const iconColor = computed(() => (theme.value === "dark" ? "white" : "black"));
const videos = [
  {
    id: "dasdasdasdsad",
    title: "Sword Art Online: Alicization",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2018",
    currentEpisode: 10,
    totalEpisodes: 24,
    rating: 10,
  },
  {
    id: "ads4d2casxzds",
    title: "Attack on Titan: Final Season",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2020",
    currentEpisode: 8,
    totalEpisodes: 16,
    rating: 10,
  },
  {
    id: "ads4d2casxzds848",
    title: "My Hero Academia: Season 6",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2022",
    currentEpisode: 12,
    totalEpisodes: 25,
    rating: 10,
  },
  {
    id: "ads4d2casxzds848dasdas",
    title:
      "Demon Slayer: Entertainment District Arc Demon Slayer: Entertainment District Arc",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2021",
    currentEpisode: 5,
    totalEpisodes: 11,
    rating: 10,
  },
  {
    id: "ads4d2ca894fsdc48dasdasdas48944",
    title: "Jujutsu Kaisen: Season 2",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2023",
    currentEpisode: 6,
    totalEpisodes: 12,
    rating: 10,
  },
  {
    id: "dasdadsaxzcvdsad",
    title: "Sword Art Online: Alicization",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2018",
    currentEpisode: 10,
    totalEpisodes: 24,
    rating: 10,
  },
  {
    id: "ads4kjuopsxzds",
    title: "Attack on Titan: Final Season",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2020",
    currentEpisode: 8,
    totalEpisodes: 16,
    rating: 10,
  },
  {
    id: "ads4d2e2yiiksxzds848",
    title: "My Hero Academia: Season 6",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2022",
    currentEpisode: 12,
    totalEpisodes: 25,
    rating: 10,
  },
  {
    id: "ads4d2cacbfghds848dasdas",
    title: "Demon Slayer: Entertainment District Arc",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2021",
    currentEpisode: 5,
    totalEpisodes: 11,
    rating: 10,
  },
  {
    id: "ads4d2casreds848dasdasdas48944",
    title: "Jujutsu Kaisen: Season 2",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    watchWhere: "TV",
    year: "2023",
    currentEpisode: 6,
    totalEpisodes: 12,
    rating: 10,
  },
];
</script>

<template>
  <div class="flex flex-col flex-1 mt-14 sm:mt-14 md:mt-10 gap-10">
    <div class="flex w-full items-start gap-2 flex-wrap">
      <!-- Genres Filter -->
      <div class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Genres</p>
          <!-- @addOption="addGenre"
          @removeOption="removeGenre" -->
          <MultiSelect
            v-model="filters.selectedGneres"
            :options="genresFilter"
            placeholder="Select Genres"
            triggerWidth="265px"
            padding="10px"
          />
        </div>
      </div>

      <!-- Tags Filter -->
      <div class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Tags</p>
          <MultiSelect
            v-model="filters.selectedTags"
            :options="tagsFilter"
            placeholder="Select Tags"
            triggerWidth="265px"
            padding="10px"
          />
        </div>
      </div>

      <!-- Years Filter -->
      <div class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Years</p>
          <Select
            v-model="filters.selectedYear"
            group-width="265px"
            trigger-width="265px"
            paddingY="20px"
          >
            <SelectItem
              v-for="(year, index) in yearsFilter"
              :key="index"
              :value="year.value"
            >
              {{ year.name }}
            </SelectItem>
          </Select>
        </div>
      </div>

      <!-- Status Filter -->
      <div class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Status</p>
          <Select
            v-model="filters.selectedStatus"
            group-width="265px"
            trigger-width="265px"
            paddingY="20px"
          >
            <SelectItem
              v-for="(status, index) in statusFilter"
              :key="index"
              :value="status.value"
            >
              {{ status.name }}
            </SelectItem>
          </Select>
        </div>
      </div>

      <!-- Format Filter -->
      <div class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Format</p>
          <Select
            v-model="filters.selectedFormat"
            group-width="265px"
            trigger-width="265px"
            paddingY="20px"
          >
            <SelectItem
              v-for="(format, index) in formatFilter"
              :key="index"
              :value="format.value"
            >
              {{ format.name }}
            </SelectItem>
          </Select>
        </div>
      </div>

      <!-- Seasons Filter -->
      <div v-if="showAllFilters" class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Seasons</p>
          <Select
            v-model="filters.selectedSeason"
            group-width="265px"
            trigger-width="265px"
            paddingY="20px"
          >
            <SelectItem
              v-for="(season, index) in seasonsFilter"
              :key="index"
              :value="season.value"
            >
              {{ season.name }}
            </SelectItem>
          </Select>
        </div>
      </div>

      <!-- Country of Origin Filter -->
      <div v-if="showAllFilters" class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Country of Origin</p>
          <Select
            v-model="filters.selectedCountry"
            group-width="265px"
            trigger-width="265px"
            paddingY="20px"
          >
            <SelectItem
              v-for="(country, index) in countryOfOriginFilter"
              :key="index"
              :value="country.value"
            >
              {{ country.name }}
            </SelectItem>
          </Select>
        </div>
      </div>

      <!-- Dubs Language Filter -->
      <div v-if="showAllFilters" class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Dubs Language</p>
          <Select
            v-model="filters.selectedDubLanguage"
            group-width="265px"
            trigger-width="265px"
            paddingY="20px"
          >
            <SelectItem
              v-for="(language, index) in dubsLanguageFilter"
              :key="index"
              :value="language.value"
            >
              {{ language.name }}
            </SelectItem>
          </Select>
        </div>
      </div>

      <!-- Adult Content Filter -->
      <div v-if="showAllFilters" class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Adult Content</p>
          <Select
            v-model="filters.selectedAdultContent"
            group-width="265px"
            trigger-width="265px"
            paddingY="20px"
          >
            <SelectItem
              v-for="(adultContent, index) in adultContentFilter"
              :key="index"
              :value="adultContent.value"
            >
              {{ adultContent.name }}
            </SelectItem>
          </Select>
        </div>
      </div>
      <!--  sort by filter -->
      <div v-if="showAllFilters" class="flex gap-3">
        <div class="flex flex-col gap-2">
          <p class="font-semibold">Sort By</p>
          <!-- @addOption="addGenre"
          @removeOption="removeGenre" -->
          <MultiSelect
            v-model="filters.sortByFilter"
            :options="sortByFilter"
            placeholder="Select Genres"
            triggerWidth="265px"
            padding="10px"
          />
        </div>
      </div>
      <!--  apply and rest buttons -->
      <div class="flex flex-col gap-3">
        <div class="flex *:flex-1 *:text-center text-[14px]">
          <p>Apply</p>
          <p>Reset</p>
          <p>{{ showAllFilters ? "Collapse" : "Expand" }}</p>
        </div>
        <div
          class="flex *:flex-1 *:!px-[2rem] *:py-[11.5px] overflow-hidden *:bg-secondaryBg"
        >
          <Button
            class="bg-lightDark hover:bg-lightDark border border-borderColor rounded-none !rounded-l-sm flex-1 h-[auto] group"
            :class="[`${accent}-border-hover`]"
          >
            <Icon
              icon="material-symbols:filter-alt"
              width="20px"
              height="20px"
              :class="[`${accent}-hover`]"
              :style="{ color: iconColor }"
            />
          </Button>
          <Button
            class="bg-lightDark hover:bg-lightDark border border-borderColor rounded-none flex-1 h-[auto] group"
            :class="[`${accent}-border-hover`]"
            @click="resetFilters"
          >
            <Icon
              icon="ion:reload-outline"
              width="20px"
              height="20px"
              :class="[`${accent}-hover`]"
              :style="{ color: iconColor }"
            />
          </Button>
          <Button
            class="bg-lightDark hover:bg-lightDark border border-borderColor rounded-none !rounded-r-sm flex-1 h-[auto] !p-0 group"
            :class="[`${accent}-border-hover`]"
            aria-label="toggle-all-filters"
            @click="showAllFilters = !showAllFilters"
            :style="{ color: iconColor }"
          >
            <Icon
              icon="material-symbols:keyboard-arrow-down-rounded"
              :width="100"
              :height="100"
              :class="[
                `${accent}-hover`,
                `${showAllFilters ? 'rotate-180' : ''}`,
              ]"
              :style="{ color: iconColor }"
              class="transition-all"
            />
          </Button>
        </div>
      </div>
    </div>
    <div class="flex w-full items-start flex-col xl:flex-row">
      <div
        class="grid w-full grid-cols-[repeat(auto-fill,_minmax(175px,_1fr))] gap-4"
      >
        <VideoCardSkeleton v-for="_ in 5" class="mb-8" />
        <VideoCard
          v-for="video in videos"
          :key="video.id"
          :video="video"
          class="mb-8"
        />
      </div>
    </div>
    <div class="flex justify-between mt-5 items-center flex-wrap gap-4">
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
        <PaginationList
          v-slot="{ items }"
          class="flex items-center gap-1 flex-wrap"
        >
          <PaginationFirst
            class="bg-lightDark border border-borderColor rounded-md"
          />
          <PaginationPrev
            class="bg-lightDark border border-borderColor rounded-md"
          />

          <div v-for="(item, index) in items">
            <PaginationListItem
              class="bg-lightDark border border-borderColor rounded-md"
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <Button
                class="w-10 h-10 p-0"
                :class="item.value === page ? 'bg-primary' : ''"
                :variant="item.value === page ? 'default' : 'outline'"
              >
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </div>

          <PaginationNext
            class="bg-lightDark border border-borderColor rounded-md"
          />
          <PaginationLast
            class="bg-lightDark border border-borderColor rounded-md"
          />
        </PaginationList>
      </Pagination>
    </div>
  </div>
</template>
