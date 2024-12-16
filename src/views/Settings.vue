<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useLocalStorage } from "@vueuse/core";

import {
  appearance,
  displayLanguage,
  comments,
  mediaSettings as _mediaSettings,
} from "../constants/profile";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const appearanceSettings = useLocalStorage("appearanceSettings", appearance, {
  deep: true,
});
const languageSettings = useLocalStorage("languageSettings", displayLanguage, {
  deep: true,
});
const commentSettings = useLocalStorage("commentSettings", comments, {
  deep: true,
});
const mediaSettings = useLocalStorage("mediaSettings", _mediaSettings, {
  deep: true,
});
</script>

<template>
  <main class="flex flex-1 justify-center tw-min-h-screen text-white">
    <div
      class="flex flex-col gap-5 w-full sm:w-[75%] bg-secondaryBg rounded-lg sm:my-10 p-5"
    >
      <!-- Appearance Section -->
      <section class="border-b-2 border-b-[#80808018] py-1 px-3">
        <div class="flex gap-2">
          <Icon
            icon="dashicons:admin-appearance"
            width="30px"
            height="30px"
            style="color: #ffffff"
          />

          <h2 class="text-2xl font-bold mb-4">Appearance</h2>
        </div>
        <div
          v-for="(item, index) in appearanceSettings"
          :key="index"
          class="flex flex-col gap-4 mb-4"
        >
          <div
            class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
          >
            <div class="flex flex-col gap-2">
              <label class="block font-semibold text-[18px] text-gray-200">
                {{ item.name }}
              </label>
              <p class="text-[gray] text-sm mb-2 w-[350px]">
                {{ item.desc }}
              </p>
            </div>
            <Select v-model="item.selectedValue">
              <SelectTrigger class="w-[200px]">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup class="w-[200px]">
                  <SelectItem
                    v-for="(value, idx) in item.values"
                    :key="idx"
                    :value="value"
                    class=""
                  >
                    {{ value }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <!-- Language Section -->
      <section class="border-b-2 border-b-[#80808018] py-1 px-3">
        <div class="flex gap-2">
          <Icon
            icon="material-symbols-light:language"
            width="30px"
            height="30px"
            style="color: #ffffff"
          />
          <h2 class="text-2xl font-bold mb-4">Display Language</h2>
        </div>
        <div
          v-for="(item, index) in languageSettings"
          :key="index"
          class="mb-6"
        >
          <div
            class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
          >
            <div class="flex flex-col gap-2">
              <label class="block font-semibold text-[18px] text-gray-200">
                {{ item.name }}
              </label>
              <p class="text-[gray] text-sm mb-2 w-[350px]">
                {{ item.desc }}
              </p>
            </div>
            <Select class="w-[224px]" v-model="item.selectedValue">
              <Select v-model="item.selectedValue">
                <SelectTrigger class="w-[200px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup class="w-[200px]">
                    <SelectItem
                      v-for="(value, idx) in item.values"
                      :key="idx"
                      :value="value"
                      class=""
                    >
                      {{ value }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Select>
          </div>
        </div>
      </section>

      <!-- Comments Section -->
      <section class="border-b-2 border-b-[#80808018] py-1 px-3">
        <h2 class="text-2xl font-bold mb-4">💬 Comments</h2>
        <div v-for="(item, index) in commentSettings" :key="index" class="mb-6">
          <div
            class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
          >
            <div class="flex flex-col gap-2">
              <label class="block font-semibold text-[18px] text-gray-200">
                {{ item.name }}
              </label>
              <p class="text-[gray] text-sm mb-2 w-[350px]">
                {{ item.desc }}
              </p>
            </div>
            <Select class="w-[224px]" v-model="item.selectedValue">
              <Select v-model="item.selectedValue">
                <SelectTrigger class="w-[200px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup class="w-[200px]">
                    <SelectItem
                      v-for="(value, idx) in item.values"
                      :key="idx"
                      :value="value"
                      class=""
                    >
                      {{ value }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Select>
          </div>
        </div>
      </section>

      <!-- Media Settings -->
      <section class="border-b-2 border-b-[#80808018] py-1 px-3">
        <div class="flex gap-2">
          <Icon
            icon="tdesign:media-library-filled"
            width="30px"
            height="30px"
            style="color: #ffffff"
          />
          <h2 class="text-2xl font-bold mb-4">Media Settings</h2>
        </div>
        <div v-for="(item, index) in mediaSettings" :key="index" class="mb-6">
          <div
            class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
          >
            <div class="flex flex-col gap-2">
              <label class="block font-semibold text-[18px] text-gray-200">
                {{ item.name }}
              </label>
              <p class="text-[gray] text-sm mb-2 w-[350px]">
                {{ item.desc }}
              </p>
            </div>
            <Select class="w-[10px]" v-model="item.selectedValue">
              <Select v-model="item.selectedValue">
                <SelectTrigger class="w-[200px]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup class="w-[200px]">
                    <SelectItem
                      v-for="(value, idx) in item.values"
                      :key="idx"
                      :value="value"
                      class=""
                    >
                      {{ value }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Select>
          </div>
        </div>
      </section>

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
