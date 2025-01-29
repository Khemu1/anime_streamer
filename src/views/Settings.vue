<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  appearance,
  displayLanguage,
  comments,
  mediaSettings,
} from "../constants/settings";

import Toaster from "@/components/ui/toast/Toaster.vue";
import { useToast } from "@/components/ui/toast/use-toast";
import { Button } from "@/components/ui/button";
import SettingsSection from "@/components/profile/SettingsSection.vue";
import { computed, ref } from "vue";
import { useUserStore } from "@/store/user";
import KeyBoardShortcuts from "@/components/settings/dialogs/KeyBoardShortcuts.vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { resetLocalSettings, resetWatchList } = userStore;
const { accent, theme } = storeToRefs(userStore);

const textColor = computed(() => (theme.value === "dark" ? "white" : "black"));

const { toast } = useToast();
const isError = ref(false);

const activateToast = (
  title: string,
  stringVariant: "default" | "destructive",
  description?: string
) => {
  toast({
    title,
    description,
    variant: stringVariant,
  });
};

const handleRestoreDefaultSettings = () => {
  isError.value = false;
  try {
    resetLocalSettings();

    activateToast(
      "Settings Restored",
      "default",
      "All settings have been restored to defaults."
    );
  } catch (error) {
    isError.value = true;
    activateToast("Error", "destructive", "Failed to restore settings.");
    console.error("Error restoring default settings:", error);
  }
};

const handleClearWatchList = () => {
  isError.value = false;
  try {
    resetWatchList();
    activateToast(
      "Watch List Cleared",
      "default",
      "Your 'Continue Watching' list has been cleared."
    );
  } catch (error) {
    isError.value = true;
    activateToast("Error", "destructive", "Failed to clear watch list.");
    console.error("Error clearing watch list:", error);
  }
};
</script>

<template>
  <main class="flex flex-1 justify-center tw-min-h-screen mt-14 sm:mt-4">
    <div
      class="flex flex-col gap-5 w-full sm:w-[75%] bg-lightDark rounded-lg sm:my-10 p-5"
    >
      <SettingsSection
        title="Appearance"
        icon="dashicons:admin-appearance"
        :settings="appearance"
      />
      <SettingsSection
        title="Display Language"
        icon="material-symbols-light:language"
        :settings="displayLanguage"
      />
      <SettingsSection
        title="Comments"
        icon="mdi:comment-text-multiple"
        :settings="comments"
      />
      <SettingsSection
        title="Media Settings"
        icon="tdesign:media-library-filled"
        :settings="mediaSettings"
      />

      <section class="py-1 px-3">
        <div class="flex gap-2">
          <Icon
            icon="ri:tools-fill"
            width="30px"
            height="30px"
            :class="[accent, 'transition-all']"
          />
          <h2 class="text-2xl font-bold mb-4">Other Settings</h2>
        </div>
        <div class="mb-6">
          <div
            class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
          >
            <div class="flex flex-col gap-2">
              <label class="block font-semibold text-[18px]">
                Keyboard Shortcuts
              </label>
              <p class="text-sm mb-2 w-[350px] opacity-60">
                Configure keyboard shortcuts for the application.
              </p>
            </div>
            <KeyBoardShortcuts :style="textColor" />
          </div>
        </div>
        <div class="mb-6">
          <div
            class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
          >
            <div class="flex flex-col gap-2">
              <label class="block font-semibold text-[18px]">
                Clear Continue Watching
              </label>
              <p class="opacity-60 text-sm mb-2 w-[350px]">
                Remove all watching entries locally. This won’t affect your
                AniList account.
              </p>
            </div>
            <Button
              class="w-[200px] font-semibold bg-lightDark hover:bg-[#00000010] text-red-600 border border-[#68676744]"
              @click="handleClearWatchList"
            >
              Clear
            </Button>
          </div>
        </div>
        <div class="mb-6">
          <div
            class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
          >
            <div class="flex flex-col gap-2">
              <label class="block font-semibold text-[18px]">
                Restore Default Settings
              </label>
              <p class="opacity-60 text-sm mb-2 w-[350px]">
                Restore all settings to their default values.
              </p>
            </div>
            <Button
              class="w-[200px] font-semibold bg-lightDark hover:bg-[#00000010] text-red-600 border border-[#68676744]"
              @click="handleRestoreDefaultSettings"
            >
              Restore
            </Button>
          </div>
        </div>
      </section>
    </div>
  </main>
  <Toaster
    class="bg-[#00000010] text-white"
    :class="isError ? '!bg-red-600' : '!bg-green-600'"
  />
</template>
