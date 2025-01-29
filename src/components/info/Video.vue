<script setup lang="ts">
import { computed, ref } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const { videoId, seriesName } = defineProps<{
  videoId?: string;
  seriesName: String;
}>();
const userStore = useUserStore();
const { localSettings } = storeToRefs(userStore);

const router = useRouter();

const handleSearchVideo = () => {
  router.push(`https://www.youtube.com/results?search_query=${seriesName}`);
};
const iframeUrl = computed(() => {
  return `https://www.youtube.com/embed/${videoId}`;
});
</script>

<template>
  <div class="p-2 bg-lightDark rounded-md w-full h-full z-[10]">
    <iframe
      v-if="videoId"
      width="100%"
      height="100%"
      :src="iframeUrl"
      title="Munknörr - Uruz (Video Produced by Stag &amp; Crow Magazine)"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="rounded-md"
    ></iframe>
  </div>
</template>
