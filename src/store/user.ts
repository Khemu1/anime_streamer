import { defaultSettings } from "@/constants/settings";
import { useLocalStorage, useStorage } from "@vueuse/core";
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, watch, watchEffect } from "vue";

export const useUserStore = defineStore("user", () => {
  const localSettings = useStorage("settings", defaultSettings);

  const primaryAccentClass = computed(
    () => {
      if (localSettings) {
        return getPrimaryAccentClass(localSettings.value.primaryAccent);
      } else {
        return "miruro";
      }
    }
    // getPrimaryAccentClass(localSettings.value.primaryAccent)
  );

  watchEffect(() => {
    console.log("New primary accent:", localSettings);
    console.log("current accent");
  });

  return {
    localSettings,
    primaryAccentClass,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export function getPrimaryAccentClass(accent: string): string {
  const accentMap: Record<string, string> = {
    Miruro: "miruro",
    Tomato: "tomato",
    "Royal Blue": "royal-blue",
    Orange: "orange",
    "Sea Green": "sea-green",
    "Hot Pink": "hot-pink",
  };

  return accentMap[accent] || "miruro";
}
