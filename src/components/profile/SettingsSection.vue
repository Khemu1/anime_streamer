<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { SettingsKey } from "@/types/settings";
import { useUserStore, getPrimaryAccentClass } from "@/store/user";

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

const { localSettings } = useUserStore();
</script>

<template>
  <section class="border-b-2 border-b-[#80808018] py-1 px-3">
    <div class="flex gap-2">
      <Icon
        :icon="icon"
        width="30px"
        height="30px"
        :class="[
          getPrimaryAccentClass(localSettings.primaryAccent),
          'transition-all',
        ]"
      />
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    </div>
    <div v-for="(item, index) in settings" :key="index" class="mb-6">
      <div
        class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
      >
        <div class="flex flex-col gap-2">
          <label class="block font-semibold text-[18px] text-gray-200">
            {{ item.name }}
          </label>
          <p class="text-[gray] text-sm mb-2 w-[350px]">{{ item.desc }}</p>
        </div>
        <!-- had add a type for keys in order to do this approach-->
        <Select class="w-[224px]" v-model="localSettings[item.id]">
          <SelectTrigger class="w-[200px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup class="w-[200px]">
              <SelectItem
                v-for="(value, idx) in item.values"
                :key="idx"
                :value="value"
              >
                {{ value }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </section>
</template>
