<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { filters } from "@/constants/info";
import { ref } from "vue";

import Video from "@/components/info/Video.vue";
import Actors from "@/components/info/Actors.vue";
import Episodes from "@/components/info/Episodes.vue";

const userStore = useUserStore();
const { accent } = storeToRefs(userStore);

const info = {
  title: "The Island of Siliang",
  type: "ONA",
  year: 2022,
  status: "Finished",
  videoId: "KLL4WmHKllM",
  progress: 67,
  image: "/ezgif.com-animated-gif-maker_2.gif",
  defaultCardImage: "/ezgif.com-animated-gif-maker_2.gif",
  urls: [
    { name: "AL", value: "https://anilist.co/anime/117573" },
    { name: "MAL", value: "https://myanimelist.net/anime/41918" },
  ],
  data: [
    { label: "Studios", value: "Studio Ghibli" },
    { label: "Episodes", value: 12 },
    { label: "Duration", value: "15m" },
    { label: "Season", value: "Spring" },
    { label: "Country", value: "Japan" },
    { label: "Native", value: "眷思量" },
  ],
  episodes: [
    {
      id: "1",
      number: 1,
      subtitle: true,
      dup: false,
      title: "Episode 1",
      image: "/ezgif.com-gif-maker.gif",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      releaseData: "2022-01-01",
    },
    {
      id: "2",
      number: 2,
      title: "Episode 2",
      subtitle: true,
      dup: true,
      image: "/ezgif.com-gif-maker.gif",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      releaseData: "2022-01-01",
    },
    {
      id: "3",
      number: 3,
      subtitle: true,
      dup: false,
      title: "Episode 3",
      image: "/ezgif.com-gif-maker.gif",
      url: "/",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      releaseData: "2022-01-01",
    },
    {
      id: "4",
      number: 4,
      title: "Episode 4",
      subtitle: true,
      dup: true,
      image: "/ezgif.com-gif-maker.gif",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      releaseData: "2022-01-01",
    },
    {
      id: "5",
      number: 5,
      title: "Episode 5",
      subtitle: true,
      dup: true,
      image: "/ezgif.com-gif-maker.gif",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      releaseData: "2022-01-01",
    },
    {
      id: "6",
      number: 6,
      title: "Episode 6",
      subtitle: true,
      dup: true,
      image: "/ezgif.com-gif-maker.gif",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      releaseData: "2022-01-01",
    },
  ],
  genres: ["Action", "Romance", "Fantasy"],
  actors: [
    {
      characterName: "アンナ",
      characterType: "main",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
    {
      characterName: "アンナ",
      characterType: "supporting",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
    {
      characterName: "アンナ",
      characterType: "main",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
    {
      characterName: "アンナ",
      characterType: "main",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
    {
      characterName: "アンナ",
      characterType: "main",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
    {
      characterName: "アンナ",
      characterType: "main",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
    {
      characterName: "アンナ",
      characterType: "main",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
    {
      characterName: "アンナ",
      characterType: "main",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
    {
      characterName: "アンナ",
      characterType: "main",
      characterImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      actorName: "アンナ",
      actorImageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      nationality: "japanese",
    },
  ],
  nationalties: ["japanese", "korean", "english"],
};
const activeTab = ref(filters[0].value ?? "overview");
</script>

<template>
  <div class="flex flex-1 flex-col mt-14 sm:mt-12 lg:mt-8 gap-5">
    <header class="flex relative">
      <div class="w-full rounded-sm h-[320px] bg-lightDark"></div>
    </header>

    <div class="flex flex-col md:flex-row gap-2">
      <div class="flex gap-2 pl-2 md:p-10 w-full md:w-[310px]">
        <div
          class="flex flex-col gap-2 w-full shrink-0 bg-lightDark md:bg-transparent pl-2 pt-16 md:pt-[6.5rem]"
        >
          <div class="flex gap-4 absolute top-56">
            <div
              class="w-[160px] md:w-[185px] h-[226px] md:h-[315px] object-fit rounded-md overflow-hidden"
            >
              <img
                :src="info.image"
                alt="cover"
                class="w-full h-full object-fit"
                style="box-shadow: 0px 0px 10px #000"
              />
            </div>
            <div class="flex flex-col gap-2 font-semibold h-max">
              <p class="sm:text-[2em]">{{ info.title }}</p>
              <div class="flex gap-2 text-[12px] font-semibold flex-wrap">
                <router-link
                  :to="`/search?type=${info.type}`"
                  class="hover:opacity-100 p-1 px-2 rounded-md border border-borderColor cursor-pointer"
                  :class="[`${accent}-hover ${accent}-border-hover`]"
                >
                  {{ info.type.toUpperCase() }}
                </router-link>
                <router-link
                  :to="`/search?year=${info.year}`"
                  class="hover:opacity-100 p-1 px-2 rounded-md border border-borderColor cursor-pointer"
                  :class="[`${accent}-hover ${accent}-border-hover`]"
                >
                  {{ info.year }}
                </router-link>
                <router-link
                  :to="`/search?status=${info.status}`"
                  class="hover:opacity-100 p-1 px-2 rounded-md border border-borderColor cursor-pointer"
                  :class="[`${accent}-hover ${accent}-border-hover`]"
                >
                  {{ info.status }}
                </router-link>
                <router-link
                  :to="`/search?progress=${info.progress}`"
                  class="hover:opacity-100 p-1 px-2 rounded-md border border-borderColor cursor-pointer"
                  :class="[`${accent}-hover ${accent}-border-hover`]"
                >
                  {{ info.progress }}%
                </router-link>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col gap-2 *:bg-lightDark font-semibold w-[150px] md:w-[auto]"
          >
            <div
              class="flex justify-center items-center flex-1 border border-borderColor px-1 py-1.5 rounded-sm text-center cursor-pointer flex-shrink-0"
              :class="[`${accent}-hover ${accent}-border-hover`]"
            >
              Watch Now
            </div>
            <div
              class="flex justify-center items-center flex-1 border border-borderColor px-1 py-1.5 rounded-sm text-center cursor-pointer flex-shrink-0"
              :class="[`${accent}-hover ${accent}-border-hover`]"
            >
              Add To List
            </div>
          </div>

          <div
            class="flex gap-2 text-xl font-extrabold flex-shrink-0 w-[150px] md:w-[auto]"
          >
            <router-link
              v-for="(url, index) in info.urls"
              :key="index"
              :to="url.value"
              class="flex-1 border border-borderColor p-1 rounded-sm text-center cursor-pointer bg-lightDark"
              :class="[`${accent}-hover ${accent}-border-hover`]"
            >
              {{ url.name }}
            </router-link>
          </div>

          <div
            class="flex md:flex-col overflow-scroll gap-6 md:gap-2 w-full p-4 rounded-md md:bg-lightDark"
          >
            <div
              v-for="(item, index) in info.data"
              :key="index"
              class="flex flex-col gap-[2px]"
            >
              <p class="font-semibold">{{ item.label }}</p>
              <span class="text-[14px] opacity-80">{{ item.value }}</span>
            </div>

            <div class="flex flex-col gap-1">
              <p class="font-semibold">Genres</p>
              <div class="flex gap-2 md:flex-wrap">
                <router-link
                  v-for="(genre, index) in info.genres"
                  :key="index"
                  :to="`/search?genre=${genre.toLowerCase()}`"
                  class="bg-lightDark p-1 px-2 rounded-md cursor-pointer text-[12px] opacity-80 border border-borderColor font-semibold"
                  :class="[`${accent}-hover ${accent}-border-hover`]"
                >
                  {{ genre }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full gap-2 z-[10]">
        <div
          class="flex items-center bg-lightDark border border-borderColor rounded-md scrollbar-hide w-max overflow-x-auto z-[10] flex-shrink-0"
        >
          <span
            v-for="(filter, index) in filters"
            :key="index"
            class="flex justify-center items-center p-1 py-2 cursor-pointer px-4 font-semibold"
            :class="[
              `${
                index + 1 >= filters.length
                  ? ''
                  : 'border-r-2 border-borderColor '
              }, ${accent}-hover`,
              `${filter.value === activeTab ? accent : ''}`,
            ]"
            @click="
              () => {
                activeTab = filter.value;
              }
            "
          >
            {{ filter.name }}
          </span>
        </div>
        <Video
          v-if="activeTab === 'overview'"
          :videoId="info.videoId"
          :seriesName="info.title"
        />
        <Actors
          v-if="activeTab === 'characters'"
          :actors="info.actors"
          :nationlities="info.nationalties"
        />
        <Episodes
          class="max-h-[500px]"
          v-if="activeTab === 'episodes'"
          :episodes="info.episodes"
          :defaultCardImage="info.defaultCardImage"
        />
      </div>
    </div>
  </div>
</template>
