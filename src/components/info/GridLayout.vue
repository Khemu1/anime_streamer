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
    class="grid grid-cols-[repeat(auto-fill,_minmax(4rem,_1fr))] p-2 gap-2 flex-grow overflow-y-scroll"
  >
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
      </span>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      :key="eposide.id"
      class="eposide-card bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400 overflow-hidden rounded-md flex-shrink-0"
    >
      <span class="group-hover:text-white w-full truncate block text-sm h-full">
        {{ index + 1 }}
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
  height: 35px;
  padding: 0.4rem 0px;
  text-align: center;
}
</style>
