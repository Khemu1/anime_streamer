<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { eposides, showSpoilers, defaultCardImage } = defineProps<{
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
  defaultCardImage: string;
  showSpoilers: boolean;
}>();

const userStore = useUserStore();
const { theme } = storeToRefs(userStore);
const iconsColor = computed(() => (theme.value === "dark" ? "white" : "black"));
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] p-2 gap-2 flex-grow overflow-y-scroll"
  >
    <div
      v-for="(eposide, index) in eposides"
      class="eposide-card gap-4 bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400"
      :key="index"
    >
      <div
        class="w-[150px] h-[100px] rounded-l-md overflow-hidden opacity-85 group-hover:opacity-100 flex-shrink-0"
      >
        <img
          :src="showSpoilers ? eposide.image : defaultCardImage"
          alt="Episode Image"
          class="w-full h-full object-fill"
        />
      </div>
      <div
        class="flex flex-col gap-[2px] text-sm py-1.5 overflow-hidden w-full h-full pr-3"
      >
        <p
          class="group-hover:opacity-100 opacity-85 block truncate text-[12px]"
          style="width: calc(100% - 49px)"
        >
          {{ eposide.title }}
        </p>
        <span
          class="opacity-85 text-[11px] truncate block"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            white-space: normal;
          "
        >
          {{ showSpoilers ? eposide.description : "" }}
        </span>
        <div
          v-if="showSpoilers"
          class="flex justify-end opacity-85 group-hover:opacity-100 text-[11px]"
        >
          <span>{{ eposide.releaseData }}</span>
        </div>
      </div>

      <div
        class="flex gap-2 absolute top-2 right-0 opacity-85 group-hover:opacity-100"
      >
        <Icon
          icon="material-symbols:subtitles"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
        <Icon
          icon="material-symbols:mic-rounded"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
      </div>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      class="eposide-card gap-4 bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400"
      :key="index"
    >
      <div
        class="w-[150px] h-[100px] rounded-l-md overflow-hidden opacity-85 group-hover:opacity-100 flex-shrink-0"
      >
        <img
          :src="showSpoilers ? eposide.image : defaultCardImage"
          alt="Episode Image"
          class="w-full h-full object-fill"
        />
      </div>
      <div
        class="flex flex-col gap-[2px] text-sm py-1.5 overflow-hidden w-full h-full pr-3"
      >
        <p
          class="group-hover:opacity-100 opacity-85 block truncate text-[12px]"
          style="width: calc(100% - 49px)"
        >
          {{ eposide.title }}
        </p>
        <span
          class="opacity-85 text-[11px] truncate block"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            white-space: normal;
          "
        >
          {{ showSpoilers ? eposide.description : "" }}
        </span>
        <div
          v-if="showSpoilers"
          class="flex justify-end opacity-85 group-hover:opacity-100 text-[11px]"
        >
          <span>{{ eposide.releaseData }}</span>
        </div>
      </div>

      <div
        class="flex gap-2 absolute top-2 right-0 opacity-85 group-hover:opacity-100"
      >
        <Icon
          icon="material-symbols:subtitles"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
        <Icon
          icon="material-symbols:mic-rounded"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
      </div>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      class="eposide-card gap-4 bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400"
      :key="index"
    >
      <div
        class="w-[150px] h-[100px] rounded-l-md overflow-hidden opacity-85 group-hover:opacity-100 flex-shrink-0"
      >
        <img
          :src="showSpoilers ? eposide.image : defaultCardImage"
          alt="Episode Image"
          class="w-full h-full object-fill"
        />
      </div>
      <div
        class="flex flex-col gap-[2px] text-sm py-1.5 overflow-hidden w-full h-full pr-3"
      >
        <p
          class="group-hover:opacity-100 opacity-85 block truncate text-[12px]"
          style="width: calc(100% - 49px)"
        >
          {{ eposide.title }}
        </p>
        <span
          class="opacity-85 text-[11px] truncate block"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            white-space: normal;
          "
        >
          {{ showSpoilers ? eposide.description : "" }}
        </span>
        <div
          v-if="showSpoilers"
          class="flex justify-end opacity-85 group-hover:opacity-100 text-[11px]"
        >
          <span>{{ eposide.releaseData }}</span>
        </div>
      </div>

      <div
        class="flex gap-2 absolute top-2 right-0 opacity-85 group-hover:opacity-100"
      >
        <Icon
          icon="material-symbols:subtitles"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
        <Icon
          icon="material-symbols:mic-rounded"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
      </div>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      class="eposide-card gap-4 bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400"
      :key="index"
    >
      <div
        class="w-[150px] h-[100px] rounded-l-md overflow-hidden opacity-85 group-hover:opacity-100 flex-shrink-0"
      >
        <img
          :src="showSpoilers ? eposide.image : defaultCardImage"
          alt="Episode Image"
          class="w-full h-full object-fill"
        />
      </div>
      <div
        class="flex flex-col gap-[2px] text-sm py-1.5 overflow-hidden w-full h-full pr-3"
      >
        <p
          class="group-hover:opacity-100 opacity-85 block truncate text-[12px]"
          style="width: calc(100% - 49px)"
        >
          {{ eposide.title }}
        </p>
        <span
          class="opacity-85 text-[11px] truncate block"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            white-space: normal;
          "
        >
          {{ showSpoilers ? eposide.description : "" }}
        </span>
        <div
          v-if="showSpoilers"
          class="flex justify-end opacity-85 group-hover:opacity-100 text-[11px]"
        >
          <span>{{ eposide.releaseData }}</span>
        </div>
      </div>

      <div
        class="flex gap-2 absolute top-2 right-0 opacity-85 group-hover:opacity-100"
      >
        <Icon
          icon="material-symbols:subtitles"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
        <Icon
          icon="material-symbols:mic-rounded"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
      </div>
    </div>
    <div
      v-for="(eposide, index) in eposides"
      class="eposide-card gap-4 bg-lightDark transition-all hover:scale-[102%] relative group border border-secondaryBg hover:border-gray-400"
      :key="index"
    >
      <div
        class="w-[150px] h-[100px] rounded-l-md overflow-hidden opacity-85 group-hover:opacity-100 flex-shrink-0"
      >
        <img
          :src="showSpoilers ? eposide.image : defaultCardImage"
          alt="Episode Image"
          class="w-full h-full object-fill"
        />
      </div>
      <div
        class="flex flex-col gap-[2px] text-sm py-1.5 overflow-hidden w-full h-full pr-3"
      >
        <p
          class="group-hover:opacity-100 opacity-85 block truncate text-[12px]"
          style="width: calc(100% - 49px)"
        >
          {{ eposide.title }}
        </p>
        <span
          class="opacity-85 text-[11px] truncate block"
          style="
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            white-space: normal;
          "
        >
          {{ showSpoilers ? eposide.description : "" }}
        </span>
        <div
          v-if="showSpoilers"
          class="flex justify-end opacity-85 group-hover:opacity-100 text-[11px]"
        >
          <span>{{ eposide.releaseData }}</span>
        </div>
      </div>

      <div
        class="flex gap-2 absolute top-2 right-0 opacity-85 group-hover:opacity-100"
      >
        <Icon
          icon="material-symbols:subtitles"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
        <Icon
          icon="material-symbols:mic-rounded"
          width="20px"
          height="15px"
          :style="{ color: iconsColor }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.eposide-card {
  display: flex;

  align-items: start;
  text-decoration: none;
  overflow: hidden;
  height: 100px;
  gap: 5px;
  z-index: 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
}
</style>
