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

export interface settingOptions {
  name: string;
  desc: string;
  values: string[];
  id: SettingsKey;
}
