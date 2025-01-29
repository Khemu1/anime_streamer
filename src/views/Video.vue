<script lang="ts" setup>
import Episodes from "@/components/info/Episodes.vue";
import Player from "@/components/video/Player.vue";
import NextEpisodeNot from "@/components/video/NextEpisodeNot.vue";
import VideoInfo from "@/components/video/VideoInfo.vue";
import SeriesInfo from "@/components/video/SeriesInfo.vue";
import VideosContainer from "@/components/general/VideosContainer.vue";

const info = {
  video: {
    id: "adsihadss",
    title: "2. The Great Swordsman Appears! Pirate Hunter, Roronoa Zoro",
    description:
      "Luffy and Coby arrive at Shell Island, a Marine base. They meet the bounty hunter Roronoa Zoro, held under arrest by the infamous marine, Captain Morgan, and his son Helmeppo.",
    releaseDate: "2022-01-01",
  },

  seriesInfo: {
    id: "adsihadss",
    originalName: "one piece",
    translatedName: "one piece",
    description: `Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece , and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.
Enter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.
*This includes following special episodes:
- Chopperman to the Rescue! Protect the TV Station by the Shore!
- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle!
- Team Formation! Save Chopper
- History's Strongest Collaboration vs. Glutton of the Sea
- 20th Anniversary! Special Romance Dawn`,
    aniList: "https://anilist.co/anime/117573",
    myAnimeList: "https://myanimelist.net/anime/41918",
    image: "/ezgif.com-animated-gif-maker_2.gif",
    website: "https://one-piece.com/",
    format: "TV",
    startDate: "October 20, 1999",
    status: "airing",
    rating: "88",
    studios: [
      "Toei Animation",
      "Funimation",
      "Fuji TV",
      "4Kids Entertainment",
      "TAP",
      "Asatsu DK",
      "Magic Bus",
      "Mushi Production",
      "Studio Guts",
      "Asahi Production",
      "Avex Pictures",
    ],
    totalEpisodes: 1122,
    currentEpisodeDuration: 24,
    season: "fall",
    country: "japan",
    adult: false,
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Romance"],
  },

  subtitlesProviders: ["kiwi", "gogo", "vid"],
  dubsProviders: ["gogo", "vid"],
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

  videos: [
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
  ],
};
</script>

<template>
  <div class="flex flex-col mt-14 sm:mt-12 xl:mt-8 gap-4 min-h-[38rem]">
    <div
      class="flex flex-col xl:flex-row gap-2 h-[calc(100vh-13rem)] overflow-hidden"
    >
      <Player class="!flex-1" />

      <Episodes
        class="!flex-shrink !w-auto basis-[24rem] !min-h-[500px]"
        :episodes="info.episodes"
        :defaultCardImage="info.seriesInfo.image"
      />
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col xl:flex-row gap-2 w-full">
        <div class="flex flex-col gap-2 w-full">
          <VideoInfo
            :video="info.video"
            :dubsProviders="info.dubsProviders"
            :subtitlesProviders="info.subtitlesProviders"
          />
          <NextEpisodeNot />
          <SeriesInfo :info="info.seriesInfo" />
        </div>
        <div class="flex flex-col gap-3 h-auto flex-shrink">
          <VideosContainer
            container-title="RELATED"
            icon="solar:double-alt-arrow-right-line-duotone"
            :videos="info.videos"
          />
          <VideosContainer
            container-title="Recommended"
            icon="solar:double-alt-arrow-right-line-duotone"
            :videos="info.videos"
          />
        </div>
      </div>
    </div>
  </div>
</template>
