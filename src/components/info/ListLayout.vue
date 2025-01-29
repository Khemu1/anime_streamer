<script setup lang="ts">
const { eposides } = defineProps<{
  eposides: {
    id: string;
    number: number;
    title: string;
    image: string;
    description?: string;
    releaseData: string;
    subtitle: boolean;
    dup: boolean;
  }[];
}>();
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] p-2 gap-2 flex-grow overflow-y-scroll"
  >
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="index"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden"
    >
      <span class="group-hover:text-white w-full truncate block text-sm">
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }} {{ index + 1 }}.
        {{ eposide.title }} {{ index + 1 }}. {{ eposide.title }}
        {{ index + 1 }}. {{ eposide.title }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.eposide-card {
  display: flex;
  flex-shrink: 0;
  outline: none;
  cursor: pointer;
  align-items: center;
  height: 40px;
  padding: 0.5rem;
  text-align: left;
  justify-content: space-between;
  border-radius: 0.5rem;
}
</style>
