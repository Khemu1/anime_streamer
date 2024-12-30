<script setup lang="ts">
import { ref } from "vue";
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

import NotificationsDialog from "@/components/dialogs/NotificationsDialog.vue";

const searchText = ref<string>("");

const target = ref();
const { focused } = useFocus(target);

const isSearchOpen = ref(false);

const handleSearchBarToggle = () => {
  setTimeout(() => {
    isSearchOpen.value = !isSearchOpen.value;
  }, 100);
};
</script>

<template>
  <nav
    class="fixed z-[100] top-0 flex flex-col gap-3 sm:flex-row w-full p-2.5 bg-[#060707] md:bg-secondaryBg sm:border-b border-borderColor items-center justify-between px-2"
  >
    <div class="w-full flex items-center justify-between">
      <router-link
        to="/"
        class="flex items-center text-white font-extrabold uppercase"
      >
        AnimeVault
      </router-link>

      <!-- large screen Search Form -->
      <form action="POST" class="sm:flex gap-2 hidden w-max h-max">
        <div
          class="flex items-center bg-lightDark border border-borderColor px-2 rounded-sm"
        >
          <Icon
            icon="simple-line-icons:magnifier"
            width="15px"
            height="15px"
            class="transition-all"
            :style="{ color: focused ? '#ffffff' : '#a0a0a0' }"
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
            class="transition-all"
            :style="{ color: focused ? '#ffffff' : '#a0a0a0' }"
          />
        </div>
        <Button
          class="bg-lightDark hover:bg-lightDark border border-borderColor !rounded-sm flex-1 h-[auto]"
        >
          <Icon
            icon="simple-line-icons:magnifier"
            style="color: #ffffff"
            width="15px"
            height="15px"
          />
        </Button>
        <Button
          class="bg-lightDark hover:bg-lightDark border border-borderColor !rounded-sm flex-1 h-[auto]"
        >
          <Icon
            icon="hugeicons:shuffle"
            style="color: #ffffff"
            width="15px"
            height="15px"
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
            style="color: #ffffff"
            width="15px"
            height="15px"
          />
        </Button>
        <NotificationsDialog />
        <DropdownMenu>
          <DropdownMenuTrigger
            class="sm:hidden flex justify-center items-center !border !border-borderColor bg-lightDark w-[50px] rounded"
          >
            <Icon
              icon="tabler:user"
              width="20px"
              height="20px"
              class="transition-all"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent class="border-borderColor rounded-sm">
            <DropdownMenuItem>
              <router-link to="/profile" class="flex items-center gap-2 w-full">
                <Icon
                  icon="solar:user-bold"
                  width="20px"
                  height="20px"
                  style="color: #ffffff"
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
                  style="color: #ffffff"
                />
                <span>Settings</span>
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
          style="color: #ffffff"
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
