import { defaultSettings } from "@/constants/settings";
import { defaultValues } from "@/constants/history";
import { useStorage } from "@vueuse/core";
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { getPrimaryAccentClass } from "@/utils/localSettings";

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
  onMounted(() => {
    document.documentElement.classList.remove("light-theme");

    console.log(localSettings.value.defaultTheme);
    if (localSettings.value.defaultTheme === "light") {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
  });

  const accent = ref(
    getPrimaryAccentClass(localSettings.value.primaryAccent) || "miruro"
  );
  const theme = computed({
    get() {
      return localSettings.value.defaultTheme ?? "dark";
    },
    set(value) {
      localSettings.value.defaultTheme = value;
    },
  });
  watch(
    () => localSettings.value.primaryAccent,
    (value) => {
      accent.value = getPrimaryAccentClass(value) || "miruro";
    }
  );
  return {
    localSettings,
    historyFilters,
    watchList,
    resetLocalSettings,
    resetHistoryFilters,
    resetWatchList,
    accent,
    theme,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
