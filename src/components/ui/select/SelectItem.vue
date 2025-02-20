<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import { CheckIcon } from "@radix-icons/vue";
import { storeToRefs } from "pinia";
import {
  SelectItem,
  SelectItemIndicator,
  type SelectItemProps,
  SelectItemText,
  useForwardProps,
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  Omit<SelectItemProps, "value"> & {
    class?: HTMLAttributes["class"];
    value: string | number;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const userStore = useUserStore();
const { accent } = storeToRefs(userStore);
</script>

<template>
  <!-- @vue-ignore -->
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
        `${accent}-focus border-borderColor `
      )
    "
  >
    <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <CheckIcon class="h-4 w-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
