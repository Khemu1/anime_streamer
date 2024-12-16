export const appearance = [
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
    selectedValue: "Miruro",
  },
  {
    name: "Continue Watching on Home Page",
    desc: "Choose whether to go to the info page or watch page when selecting an anime.",
    values: ["Show", "Hide"],
    selectedValue: "Show",
  },
  {
    name: "Card Layout",
    desc: "Select the layout for the anime cards.",
    values: ["Clasic", "AniChart", "Card List"],
    selectedValue: "Clasic",
  },
  {
    name: "Card Size",
    desc: "Choose between large or medium card sizes in classic layout.",
    values: ["Medium", "Large"],
    selectedValue: "Medium",
  },
  {
    name: "Episode List Layout",
    desc: "Set the default layout for episode lists.",
    values: ["Classic", "Grid", "Image List"],
    selectedValue: "Classic",
  },
  {
    name: "Navbar Style (mobile)",
    desc: "Set the default navbar look.",
    values: ["Float", "Dock"],
    selectedValue: "Float",
  },
];

export const displayLanguage = [
  {
    name: "Title Language",
    desc: "Choose the language format for titles.",
    values: [
      "English (Attack on Titan)",
      "Romaji (Shingeki no Kyojin)",
      "Native (進撃の巨人)",
    ],
    selectedValue: "English (Attack on Titan)",
  },
  {
    name: "Character Name Language",
    desc: "Select the language format for character names.",
    values: ["Romaji (Shingeki no Kyojin)", "Native (キルア=ゾルディック)"],
    selectedValue: "Romaji (Shingeki no Kyojin)",
  },
];

export const comments = [
  {
    name: "Show comments",
    desc: "Choose whether to show comments by default.",
    values: ["Enabled", "Disabled"],
    selectedValue: "Enabled",
  },
];

export const mediaSettings = [
  {
    name: "Default Language",
    desc: "Set the default language for media playback.",
    values: ["Subtitles", "Debugging"],
    selectedValue: "Subtitles",
    storaggeKey: "defaultLanguage",
  },
  {
    name: "Default Provider",
    desc: "Set your preferred media provider.",
    values: ["zoro", "gogo", "vid"],
    selectedValue: "zoro",

  },
  {
    name: "Force Maximum Quality",
    desc: "Force the player to maintain the maximum quality during playback. Enable this setting if you are experiencing sudden quality drops.",
    values: ["Enabled", "Disabled"],
    selectedValue: "Enabled",
  },
  {
    name: "Auto Skip Intro/Outro",
    desc: "Automatically skip intros and outros.",
    values: ["Enabled", "Disabled"],
    selectedValue: "Enabled", 
  },
  {
    name: "Auto Play",
    desc: "Enable auto play for media.",
    values: ["Enabled", "Disabled"],
    selectedValue: "Enabled",
  },
  {
    name: "Auto Next Episode",
    desc: "Automatically advance to the next episode when the current one ends.",
    values: ["Enabled", "Disabled"],
    selectedValue: "Enabled",
  },
];
