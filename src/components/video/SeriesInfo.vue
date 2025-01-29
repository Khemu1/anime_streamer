<script lang="ts" setup>
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { computed, ref } from "vue";

const {} = defineProps<{
  info: {
    id: string;
    originalName: string;
    translatedName: string;
    description?: string;
    image: string;
    website?: string;
    format: string;
    startDate: string;
    endDate?: string;
    status: string;
    rating: string;
    totalEpisodes: number;
    currentEpisodeDuration: number;
    season: string;
    country: string;
    adult: boolean;
    genres: string[];
    studios: string[];
    aniList?: string;
    myAnimeList?: string;
  };
}>();

const userStore = useUserStore();
const { theme, accent } = storeToRefs(userStore);
const iconsColor = computed(() => (theme.value === "dark" ? "white" : "black"));

const showFullDescription = ref(false);
</script>

<template>
  <div
    class="flex bg-schedule-small-card-bg-color gap-4 p-[.75rem] rounded-md h-auto"
  >
    <div class="flex w-[140px] sm:w-[168px] flex-col gap-2 flex-shrink-0">
      <div
        class="w-full h-[230px] sm:h-[240px] rounded-md overflow-hidden flex-shrink-0 transition-all"
      >
        <img :src="info.image" alt="cover" class="w-full h-full object-cover" />
      </div>
      <Button
        class="bg-lightDark hover:bg-lightDark border border-borderColor !rounded-sm h-[auto] group !p-1"
        :class="[`${accent}-border-hover`, `${accent}-hover`]"
        style="color: unset"
      >
        <Icon
          icon="tabler:playlist-add"
          class="!h-[25px] !w-[25px]"
          :class="[`${accent}-hover`]"
          :style="{ color: iconsColor }"
        />
        <span class="!text-[15px] !font-semibold" :class="[`${theme}-hover`]">
          Add TO LIST
        </span>
      </Button>
      <a
        :href="`https://www.youtube.com/results?search_query=${info.originalName} trailer`"
        target="_blank"
        class="bg-lightDark border border-borderColor !rounded-sm h-[auto] group text-center p-1 !font-semibold"
        :class="[`${accent}-border-hover`, `${accent}-hover`]"
        style="color: unset"
      >
        SEARCH TRAILER
      </a>
      <div class="flex gap-1 w-full">
        <a
          v-if="info.aniList"
          :href="`${info.aniList}`"
          target="_blank"
          class="bg-lightDark border border-borderColor !rounded-sm h-[auto] group text-center p-1 !font-semibold flex-1"
          :class="[`${accent}-border-hover`, `${accent}-hover`]"
          style="color: unset"
        >
          AL
        </a>
        <a
          v-if="info.myAnimeList"
          :href="`${info.myAnimeList}`"
          target="_blank"
          class="bg-lightDark border border-borderColor !rounded-sm h-[auto] group text-center p-1 !font-semibold flex-1"
          :class="[`${accent}-border-hover`, `${accent}-hover`]"
          style="color: unset"
        >
          MAL
        </a>
      </div>
    </div>
    <!-- Series Info Section -->
    <div class="flex flex-col gap-1">
      <h3 class="text-2xl uppercase font-semibold">
        {{ info.originalName }}
      </h3>
      <h4 class="text-xl italic uppercase">{{ info.translatedName }}</h4>
      <div
        class="bg-lightDark rounded-md overflow-hidden p-2 flex flex-col gap-2"
      >
        <span
          v-if="info.description"
          class="!text-[12px] opacity-40 cursor-pointer"
          :class="[
            showFullDescription ? 'whitespace-normal' : ' ',
            theme === 'light' ? '!opacity-100' : '',
          ]"
          @click="showFullDescription = !showFullDescription"
        >
          {{
            showFullDescription
              ? info.description + " [ Show Less ]"
              : info.description.slice(0, 60) + " .... [ Show More ]"
          }}
        </span>
      </div>
      <div class="flex flex-col lg:gap-12 gap-2 sm:flex-row text-[15px]">
        <div class="flex flex-col gap-3 series-info">
          <div v-if="info.website" class="flex gap-1">
            <p>Offical site:</p>
            <a class="flex gap-1" :href="info.website" target="_blank">
              Link
              <Icon
                icon="solar:link-outline"
                width="12px"
                height="12px"
                :style="{ color: iconsColor }"
              />
            </a>
          </div>
          <div class="flex gap-1">
            <p>Format:</p>
            <router-link
              class="flex gap-1"
              :class="[`${accent}-hover`]"
              :to="`/search?format=${info.format}`"
              target="_blank"
            >
              {{ info.format }}
            </router-link>
          </div>
          <div class="flex gap-1">
            <p>Start Date:</p>
            <span class="flex gap-1">
              {{ info.startDate }}
            </span>
          </div>
          <div class="flex gap-1">
            <p>Status:</p>
            <router-link
              class="flex gap-1"
              :class="[`${accent}-hover`]"
              :to="`/search?status=${info.status}`"
              target="_blank"
            >
              {{ info.status[0].toLocaleUpperCase() + info.status.slice(1) }}
            </router-link>
          </div>
          <div class="flex">
            <p class="mr-1">Rating:</p>
            <router-link
              class="flex"
              :class="[`${accent}-hover`]"
              :to="`/search?averageScoreMax=${info.rating}`"
              target="_blank"
            >
              {{ info.rating }}
            </router-link>
            <span style="font-weight: unset !important; opacity: 70%">
              /100
            </span>
          </div>
          <div class="flex">
            <p class="mr-1">Studios:</p>
            <span class="max-w-[200px]">{{ info.studios.join(", ") }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-3 series-info">
          <div class="flex gap-1">
            <p>Episodes:</p>
            <span style="font-weight: unset !important">
              {{ info.totalEpisodes }}
            </span>
          </div>
          <div class="flex gap-1">
            <p>Duration:</p>
            <span style="font-weight: unset !important">
              {{ info.currentEpisodeDuration }} min
            </span>
          </div>
          <div class="flex">
            <p class="mr-1">Season:</p>
            <router-link
              class="flex"
              :class="[`${accent}-hover`]"
              :to="`/search?season=${info.season}`"
              target="_blank"
            >
              {{ info.rating }}
            </router-link>
          </div>
          <div class="flex">
            <p class="mr-1">Country:</p>
            <router-link
              class="flex uppercase"
              :class="[`${accent}-hover`]"
              :to="`/search?countryOfOrigin=${info.country}`"
              target="_blank"
            >
              {{ info.country }}
            </router-link>
          </div>
          <div class="flex gap-1 series-info">
            <p>Adult:</p>
            <span style="font-weight: unset !important">
              {{ info.adult ? "Yes" : "No" }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.series-info > * p {
  opacity: 70% !important;
}
.series-info > * a,
.series-info > * span {
  font-weight: 600 !important;
}
</style>
