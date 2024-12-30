export type SettingsKey =
  | "primaryAccent"
  | "continueWatchingOnHome"
  | "cardLayout"
  | "cardSize"
  | "episodeLayout"
  | "navbarStyle"
  | "titleLanguage"
  | "characterNameLanguage"
  | "showComments"
  | "defaultLanguage"
  | "defaultProvider"
  | "forceMaxQuality"
  | "autoNextEpisode"
  | "autoSkipIntroOutro"
  | "autoPlay";

export type Settings = Record<SettingsKey, string>;
export interface settingOptions {
  name: string;
  desc: string;
  values: string[];
  id: SettingsKey;
}

export type historyFiltersKeys = "videosFrom" | "sortBy";
export interface historyFilter {
  name: string;
  value: string;
}
