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

interface Props extends SelectRootProps {
  triggerWidth?: string;
  groupWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  triggerWidth: "200px",
  groupWidth: "200px",
});
const emits = defineEmits<SelectRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);

const userStore = useUserStore();
const { accent } = storeToRefs(userStore);
</script>

<template>
  <SelectRoot v-bind="forwarded">
    <SelectTrigger
      :style="{ width: props.triggerWidth }"
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
