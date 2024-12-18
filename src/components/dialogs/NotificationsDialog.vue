<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/vue";
</script>

<template>
  <Drawer direction="right" class="!border-none">
    <DrawerTrigger>
      <Button
        class="bg-lightDark hover:bg-lightDark border border-borderColor h-full rounded-sm"
      >
        <Icon
          icon="material-symbols-light:bottom-drawer"
          width="50px"
          height="50px"
          style="color: #ffffff"
        />
      </Button>
    </DrawerTrigger>

    <DrawerContent class="h-full ml-auto w-[400px] !border-none">
      <DrawerHeader>
        <DrawerTitle>
          <div class="flex justify-between items-center">
            <span>Notifications</span>
            <div class="flex gap-2 items-center">
              <Button
                class="bg-lightDark hover:bg-lightDark hover:border-white border border-borderColor rounded-full p-1 h-[30px] w-[30px]"
              >
                <Icon
                  icon="material-symbols:refresh"
                  style="color: #ffffff"
                  width="30px"
                  height="30px"
                />
              </Button>
              <Button
                class="text-[15px] text-white flex items-center gap-2 bg-lightDark hover:bg-lightDark hover:border-white border border-borderColor rounded-full p-1 px-2"
              >
                <Icon
                  icon="proicons:checkmark"
                  width="20px"
                  height="20px"
                  style="color: #ffffff"
                />
                Mark all as Read
              </Button>
              <DrawerClose>
                <Button
                  class="bg-transparent text-white hover:bg-red-600 border border-borderColor rounded-full p-1 h-[30px] w-[30px]"
                >
                  <Icon
                    icon="ic:round-close"
                    width="20px"
                    height="20px"
                    style="color: #ffffff"
                  />
                </Button>
              </DrawerClose>
            </div>
          </div>
        </DrawerTitle>

        <DrawerDescription class="text-sm text-gray-400 mt-2">
          This action cannot be undone.
        </DrawerDescription>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>
</template>
