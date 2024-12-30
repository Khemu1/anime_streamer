import { defaultSettings } from "@/constants/settings";
import { defaultValues } from "@/constants/history";
import { useStorage } from "@vueuse/core";
import { acceptHMRUpdate, defineStore } from "pinia";
import { watch } from "vue";

export const useUserStore = defineStore("user", () => {
  const localSettings = useStorage("settings", defaultSettings);
  const watchList = useStorage<{ id: string; stoppedAt: string }[]>(
    "watchList",
    []
  );
  const historyFilters = useStorage("historyFilters", defaultValues);

  //todo: why does this work ?
  const resetLocalSettings = () => {
    Object.assign(localSettings.value, defaultSettings);
  };

  const resetHistoryFilters = () => {
    Object.assign(historyFilters.value, defaultValues);
  };

  const resetWatchList = () => {
    Object.assign(watchList, []);
  };

  watch(
    () => localSettings.value,
    (value) => {
      console.log("new change in stroe", value);
    },
    { deep: true }
  );

  return {
    localSettings,
    historyFilters,
    watchList,
    resetLocalSettings,
    resetHistoryFilters,
    resetWatchList,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
