import { settingOptions, SettingsKey } from "@/types/settings";

export const appearance: settingOptions[] = [
  {
    name: "Primary Accent Color",
    desc: "Select the primary accent color for the UI.",
    values: [
      "Miruro",
      "Tomato",
      "Royal Blue",
      "Orange",
      "Sea Green",
      "Hot Pink",
    ],
    id: "primaryAccent",
  },
  {
    name: "Continue Watching on Home Page",
    desc: "Choose whether to go to the info page or watch page when selecting an anime.",
    values: ["Show", "Hide"],
    id: "continueWatchingOnHome",
  },
  {
    name: "Card Layout",
    desc: "Select the layout for the anime cards.",
    values: ["Classic", "AniChart", "Card List"],
    id: "cardLayout",
  },
  {
    name: "Card Size",
    desc: "Choose between large or medium card sizes in classic layout.",
    values: ["Medium", "Large"],
    id: "cardSize",
  },
  {
    name: "Episode List Layout",
    desc: "Set the default layout for episode lists.",
    values: ["Classic", "Grid", "Image List"],
    id: "episodeLayout",
  },
  {
    name: "Navbar Style (mobile)",
    desc: "Set the default navbar look.",
    values: ["Float", "Dock"],
    id: "navbarStyle",
  },
];

export const displayLanguage: settingOptions[] = [
  {
    name: "Title Language",
    desc: "Choose the language format for titles.",
    values: [
      "English (Attack on Titan)",
      "Romaji (Shingeki no Kyojin)",
      "Native (進撃の巨人)",
    ],
    id: "titleLanguage",
  },
  {
    name: "Character Name Language",
    desc: "Select the language format for character names.",
    values: ["Romaji (Shingeki no Kyojin)", "Native (キルア=ゾルディック)"],
    id: "characterNameLanguage",
  },
];

export const comments: settingOptions[] = [
  {
    name: "Show comments",
    desc: "Choose whether to show comments by default.",
    values: ["Enabled", "Disabled"],
    id: "showComments",
  },
];

export const mediaSettings: settingOptions[] = [
  {
    name: "Default Language",
    desc: "Set the default language for media playback.",
    values: ["Subtitles", "Debugging"],
    id: "defaultLanguage",
  },
  {
    name: "Default Provider",
    desc: "Set your preferred media provider.",
    values: ["zoro", "gogo", "vid"],
    id: "defaultProvider",
  },
  {
    name: "Force Maximum Quality",
    desc: "Force the player to maintain the maximum quality during playback. Enable this setting if you are experiencing sudden quality drops.",
    values: ["Enabled", "Disabled"],
    id: "forceMaxQuality",
  },
  {
    name: "Auto Skip Intro/Outro",
    desc: "Automatically skip intros and outros.",
    values: ["Enabled", "Disabled"],
    id: "autoSkipIntroOutro",
  },
  {
    name: "Auto Play",
    desc: "Enable auto play for media.",
    values: ["Enabled", "Disabled"],
    id: "autoPlay",
  },
  {
    name: "Auto Next Episode",
    desc: "Automatically advance to the next episode when the current one ends.",
    values: ["Enabled", "Disabled"],
    id: "autoNextEpisode",
  },
];

export const defaultSettings: {
  [key in SettingsKey]: string;
} = {
  primaryAccent: "Miruro",
  continueWatchingOnHome: "Show",
  cardLayout: "Classic",
  cardSize: "Medium",
  episodeLayout: "Classic",
  navbarStyle: "Float",
  titleLanguage: "English (Attack on Titan)",
  characterNameLanguage: "Romaji (Shingeki no Kyojin)",
  showComments: "Enabled",
  defaultLanguage: "Subtitles",
  defaultProvider: "zoro",
  forceMaxQuality: "Enabled",
  autoNextEpisode: "Enabled",
  autoPlay: "Enabled",
  autoSkipIntroOutro: "Enabled",
};
