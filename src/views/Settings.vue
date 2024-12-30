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
import { ref, watch } from "vue";
import { useUserStore } from "@/store/user";
import { getPrimaryAccentClass } from "@/utils/localSettings";
import KeyBoardShortcuts from "@/components/settings/dialogs/KeyBoardShortcuts.vue";

const { localSettings, resetLocalSettings, resetWatchList } = useUserStore();
const accent = ref(
  getPrimaryAccentClass(localSettings.primaryAccent) || "miruro"
);

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

watch(
  () => localSettings.primaryAccent,
  (value) => {
    console.log(value);
    accent.value = getPrimaryAccentClass(value);
  }
);
</script>

<template>
  <main class="flex flex-1 justify-center tw-min-h-screen text-white">
    <div
      class="flex flex-col gap-5 w-full sm:w-[75%] bg-secondaryBg rounded-lg sm:my-10 p-5"
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
              <label class="block font-semibold text-[18px] text-gray-200">
                Keyboard Shortcuts
              </label>
              <p class="text-[gray] text-sm mb-2 w-[350px]">
                Configure keyboard shortcuts for the application.
              </p>
            </div>
            <KeyBoardShortcuts />
          </div>
        </div>
        <div class="mb-6">
          <div
            class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
          >
            <div class="flex flex-col gap-2">
              <label class="block font-semibold text-[18px] text-gray-200">
                Clear Continue Watching
              </label>
              <p class="text-[gray] text-sm mb-2 w-[350px]">
                Remove all watching entries locally. This won’t affect your
                AniList account.
              </p>
            </div>
            <Button
              class="w-[200px] font-semibold bg-transparent hover:bg-[#00000010] text-red-600 border border-[#68676744]"
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
              <label class="block font-semibold text-[18px] text-gray-200">
                Restore Default Settings
              </label>
              <p class="text-[gray] text-sm mb-2 w-[350px]">
                Restore all settings to their default values.
              </p>
            </div>
            <Button
              class="w-[200px] font-semibold bg-transparent hover:bg-[#00000010] text-red-600 border border-[#68676744]"
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
