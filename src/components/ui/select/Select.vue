<script setup lang="ts">
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
} from "@/components/ui/select";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import type { SelectRootEmits, SelectRootProps } from "radix-vue";
import { SelectRoot, useForwardPropsEmits } from "radix-vue";

type Props = Omit<SelectRootProps, "defaultValue" | "modelValue"> & {
  triggerWidth?: string;
  groupWidth?: string;
  defaultValue?: string | number;
  modelValue?: string | number;
  paddingY?: string;
};

const props = withDefaults(defineProps<Props>(), {
  triggerWidth: "200px",
  groupWidth: "200px",
  paddingY: "0.5rem", // Default padding value
});

const emits = defineEmits<
  Omit<SelectRootEmits, "update:modelValue"> & {
    "update:modelValue": [value: string | number];
  }
>();

const forwarded = useForwardPropsEmits(props, emits);

const userStore = useUserStore();
const { accent } = storeToRefs(userStore);
</script>

<template>
  <!-- @vue-ignore -->
  <SelectRoot v-bind="forwarded" class="">
    <SelectTrigger
      :style="{ width: props.triggerWidth, paddingBlock: props.paddingY }"
      class="bg-secondaryBg border-borderColor transition-all font-semibold"
      :class="[`${accent}-border-hover`, `${accent}-ring-focus`]"
    >
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>

    <SelectContent class="!border-none bg-secondaryBg" style="color: unset">
      <SelectGroup :style="{ width: props.groupWidth }">
        <slot />
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>
