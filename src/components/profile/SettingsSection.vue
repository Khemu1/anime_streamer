<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Select, SelectItem } from "@/components/ui/select";
import { SettingsKey } from "@/types/settings";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const { title, icon, settings } = defineProps<{
  title: string;
  icon: string;
  settings: {
    name: string;
    desc: string;
    values: string[];
    id: SettingsKey;
  }[];
}>();

const userStore = useUserStore();
const { localSettings, accent } = storeToRefs(userStore);
</script>

<template>
  <section class="border-b-2 border-b-[#80808018] py-1 px-3">
    <div class="flex gap-2">
      <Icon
        :icon="icon"
        width="30px"
        height="30px"
        :class="[accent, 'transition-all']"
      />
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    </div>
    <div v-for="(item, index) in settings" :key="index" class="mb-6">
      <div
        class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
      >
        <div class="flex flex-col gap-2">
          <label class="block text-[18px] font-semibold">
            {{ item.name }}
          </label>
          <p class="text-sm mb-2 w-[350px] opacity-60">{{ item.desc }}</p>
        </div>
        <Select class="w-[224px] !border-none" v-model="localSettings[item.id]">
          <SelectItem
            v-for="(value, idx) in item.values"
            :key="idx"
            :value="value"
            :class="['font-semibold', `${accent}-focus`]"
          >
            {{ value }}
          </SelectItem>
        </Select>
      </div>
    </div>
  </section>
</template>
