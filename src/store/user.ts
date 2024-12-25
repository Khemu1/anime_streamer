import { defaultSettings } from "@/constants/settings";
import { defaultValues } from "@/constants/history";
import { useStorage } from "@vueuse/core";
import { acceptHMRUpdate, defineStore } from "pinia";
import { watchEffect } from "vue";

export const useUserStore = defineStore("user", () => {
  const localSettings = useStorage("settings", defaultSettings);
  const historyFilters = useStorage("historyFilters", defaultValues);

  watchEffect(() => {
    console.log("New primary accent:", localSettings);
    console.log("current accent");
  });

  return {
    localSettings,
    historyFilters,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
