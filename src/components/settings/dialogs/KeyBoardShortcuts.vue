<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogScrollContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { shortcuts } from "@/constants/settings";

const { style } = defineProps<{
  style: string;
}>();
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button
        class="w-[200px] font-semibold bg-lightDark hover:bg-[#00000010] border border-[#68676744]"
        :style="{ color: style }"
      >
        Open
      </Button>
    </DialogTrigger>
    <DialogScrollContent
      class="w-[370px] md:w-[670px] lg:-w-[700px] max-h-[600px] overflow-y-scroll p-0 text-sm"
    >
      <DialogHeader class="bg-lightDark p-5 w-full border-b border-borderColor">
        <DialogTitle>Keyboard Shortcuts [shift+/]</DialogTitle>
      </DialogHeader>
      <div class="flex flex-col gap-4 py-4 w-full">
        <div class="flex flex-col gap-6 px-6 text-[gray] font-semibold">
          <div
            v-for="(item, index) in shortcuts"
            :key="index"
            class="flex items-center justify-between gap-2 *:border-b *:pb-2 *:border-gray-100/20"
            :class="index + 1 === shortcuts.length ? '*:border-none' : ''"
          >
            <span class="w-3/4">{{ item.name }}</span>
            <span class="text- w-2/4">{{ item.key }}</span>
          </div>
        </div>
      </div>
      <DialogFooter></DialogFooter>
    </DialogScrollContent>
  </Dialog>
</template>
