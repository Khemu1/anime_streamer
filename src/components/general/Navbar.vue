<script setup lang="ts">
import { computed, ref } from "vue";
import { useFocus } from "@vueuse/core";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Icon } from "@iconify/vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserStore } from "@/store/user";

import NotificationsDialog from "@/components/dialogs/NotificationsDialog.vue";
import { storeToRefs } from "pinia";

const searchText = ref<string>("");
const userStore = useUserStore();
const { theme } = storeToRefs(userStore);
const target = ref();
const { focused } = useFocus(target);
const iconsColor = computed(() => (theme.value === "dark" ? "white" : "black"));
const isSearchOpen = ref(false);

const handleSearchBarToggle = () => {
  setTimeout(() => {
    isSearchOpen.value = !isSearchOpen.value;
  }, 100);
};

const handleThemeToggle = () => {
  setTimeout(() => {
    if (theme.value === "dark") {
      theme.value = "light";
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    } else {
      theme.value = "dark";
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    }
  }, 100);
};
</script>

<template>
  <nav
    class="fixed z-[100] top-0 flex flex-col gap-3 sm:flex-row w-full p-2.5 md:bg-secondaryBg sm:border-b border-borderColor shadow-lg sm:shadow-none items-center justify-between px-2"
    :class="[theme === 'dark' ? 'bg-[#060707]' : 'bg-white']"
  >
    <div class="w-full flex items-center justify-between">
      <router-link
        to="/"
        class="flex items-center font-extrabold uppercase mr-2"
      >
        AnimeVault
      </router-link>

      <!-- large screen Search Form -->
      <form action="POST" class="sm:flex gap-2 hidden w-max h-max mr-2">
        <div
          class="flex items-center bg-lightDark border border-borderColor px-2 rounded-sm"
        >
          <Icon
            icon="simple-line-icons:magnifier"
            width="15px"
            height="15px"
            :class="[
              'transition-all',
              `text-${iconsColor}`,
              theme === 'dark' ? 'text-white' : 'text-black',
              focused ? 'opacity-100' : 'opacity-50',
            ]"
          />
          <Input
            v-model="searchText"
            placeholder="Search for anime"
            name="search"
            id="search"
            class="w-full navbar-search borderless-input"
            ref="target"
          />
          <Icon
            icon="tabler:drone"
            width="20px"
            height="20px"
            :class="[
              'transition-all',
              `text-${iconsColor}`,
              theme === 'dark' ? 'text-white' : 'text-black',
              focused ? 'opacity-100' : 'opacity-50',
            ]"
          />
        </div>
        <Button
          class="bg-lightDark hover:bg-lightDark border border-borderColor !rounded-sm flex-1 h-[auto]"
        >
          <Icon
            icon="simple-line-icons:magnifier"
            width="15px"
            height="15px"
            :style="{ color: iconsColor }"
          />
        </Button>
        <Button
          class="bg-lightDark hover:bg-lightDark border border-borderColor !rounded-sm flex-1 h-[auto]"
        >
          <Icon
            icon="hugeicons:shuffle"
            width="15px"
            height="15px"
            :style="{ color: iconsColor }"
          />
        </Button>
      </form>

      <!-- Drawer Button -->
      <div class="flex gap-2">
        <Button
          class="flex sm:hidden bg-lightDark hover:bg-lightDark border border-borderColor h-full !rounded-none w-max"
          @click="handleSearchBarToggle"
        >
          <Icon
            icon="simple-line-icons:magnifier"
            width="15px"
            height="15px"
            :style="{ color: iconsColor }"
          />
        </Button>
        <Button
          class="flex bg-lightDark hover:bg-lightDark border border-borderColor h-full rounded-sm w-max"
          @click="handleThemeToggle"
        >
          <Icon
            :icon="
              theme === 'dark' ? 'solar:sun-2-bold-duotone' : 'solar:moon-bold'
            "
            width="15px"
            height="15px"
            :style="{ color: iconsColor }"
          />
        </Button>
        <NotificationsDialog :style="iconsColor" />
        <DropdownMenu>
          <DropdownMenuTrigger
            class="sm:hidden flex justify-center items-center !border !border-borderColor bg-lightDark w-[50px] rounded"
          >
            <Icon
              icon="tabler:user"
              width="20px"
              height="20px"
              :style="{ color: iconsColor }"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            class="bg-lightDark border-borderColor rounded-sm"
          >
            <DropdownMenuItem>
              <router-link to="/profile" class="flex items-center gap-2 w-full">
                <Icon
                  icon="solar:user-bold"
                  width="20px"
                  height="20px"
                  :style="{ color: iconsColor }"
                />
                <span>Profile</span>
              </router-link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <router-link
                to="/settings"
                class="flex items-center gap-2 w-full"
              >
                <Icon
                  icon="material-symbols:settings-outline"
                  width="20px"
                  height="20px"
                  :style="{ color: iconsColor }"
                />
                <span style="color: unset">Settings</span>
              </router-link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    <form
      v-if="isSearchOpen"
      action="POST"
      class="sm:hidden gap-2 h-full flex w-full"
    >
      <div
        class="flex items-center bg-lightDark border border-borderColor px-2 rounded-sm w-full"
      >
        <Icon
          icon="simple-line-icons:magnifier"
          width="15px"
          height="15px"
          class="transition-all"
          :style="{ color: iconsColor }"
        />
        <Input
          v-model="searchText"
          placeholder="Search for anime"
          name="search"
          id="search"
          class="w-full navbar-search borderless-input"
          ref="target"
        />
      </div>
    </form>
  </nav>
</template>
