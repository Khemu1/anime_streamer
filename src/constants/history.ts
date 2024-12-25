import { historyFiltersKeys, historyFilter } from "@/types/settings";

export const videosFrom: historyFilter[] = [
  { name: "Miruro", value: "miruro" },
  { name: "AniList (Watching)", value: "aniListWatching" },
  { name: "AniList (Rewatching)", value: "aniListRewatching" },
];

export const defaultValues: { [key in historyFiltersKeys]: string } = {
  videosFrom: "miruro",
  sortBy: "lastWatched",
};

export const sortBy: historyFilter[] = [
  { name: "Last Watched", value: "lastWatched" },
  { name: "A-Z", value: "az" },
];
