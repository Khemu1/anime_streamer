<script setup lang="ts">
import { Icon } from "@iconify/vue";

import {
  appearance,
  displayLanguage,
  comments,
  mediaSettings,
} from "../constants/settings";
import { Button } from "@/components/ui/button";
import SettingsSection from "@/components/profile/SettingsSection.vue";
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

      <!-- Other Settings -->
      <section class="py-1 px-3">
        <div class="flex gap-2">
          <Icon
            icon="ri:tools-fill"
            width="30px"
            height="30px"
            style="color: #ffffff"
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
            <Button
              class="w-[200px] font-semibold bg-transparent hover:bg-[#00000010] text-white border border-[#68676744]"
            >
              button
            </Button>
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
            >
              Restore
            </Button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
