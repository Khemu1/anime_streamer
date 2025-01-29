<script lang="ts" setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const model = defineModel<{ name: string; value: string }[]>({ default: [] });

const {
  options,
  placeholder,
  triggerWidth = "240px",
  padding = "0px",
} = defineProps<{
  options: { name: string; value: string }[];
  placeholder: string;
  triggerWidth?: string;
  padding?: string;
}>();

const userStore = useUserStore();
const { theme, accent } = storeToRefs(userStore);
const iconsColor = computed(() => (theme.value === "dark" ? "white" : "black"));

const isDropdownOpen = ref(false);
const allOptions = ref<typeof options>(options);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const addValue = (v: { name: string; value: string }) => {
  model.value.push(v);
  allOptions.value = allOptions.value.filter((item) => item.value !== v.value);
};

const removeValue = (v: { name: string; value: string }) => {
  const obj = options.find((item) => item.value === v.value);
  if (obj) allOptions.value.push(obj);
  model.value = model.value.filter((item) => item !== v);
};
</script>

<template>
  <div class="multi-select" :style="{ width: triggerWidth }">
    <div
      class="dropdown-trigger"
      @click="toggleDropdown"
      :class="[`${accent}-border-hover`]"
      :style="{ paddingBlock: padding }"
    >
      <div class="selected-options">
        <span v-if="model.length === 0" class="font-semibold text-[14px]">
          {{ placeholder }}
        </span>
        <div
          v-for="(v, index) in model"
          :key="index"
          v-else
          class="flex items-top mx-[2px] rounded-md px-1 py-0.5 text-[11px] bg-lightDark"
          @click="removeValue(v)"
        >
          <span>
            {{ v.name }}
          </span>
          <span>
            <div>
              <Icon
                icon="material-symbols:close-small-rounded"
                width="20px"
                height="20px"
                :style="{ color: iconsColor }"
              />
            </div>
          </span>
        </div>
      </div>
      <div class="flex items-center gap-1">
        <Icon
          v-if="model.length > 0"
          icon="material-symbols:close-rounded"
          width="16px"
          height="16px"
          @click="
            model = [];
            allOptions = options;
          "
        />
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 opacity-50 shrink-0"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <div v-if="isDropdownOpen && allOptions.length > 0" class="dropdown">
      <ul>
        <li
          v-for="option in allOptions"
          :key="option.value"
          @click="addValue(option)"
          class="dropdown-item"
          :class="[`${accent}-bg-hover`]"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
