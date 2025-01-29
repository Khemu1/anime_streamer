<script lang="ts" setup>
import "@skjnldsv/vue-plyr/dist/vue-plyr.css";
import { onMounted } from "vue";
const plyrOptions = {
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "captions",
    "settings",
    "fullscreen",
  ],
  settings: ["quality"],
  quality: {
    default: 1080,
    options: [720, 1080],
  },
};
onMounted(() => {
  document.querySelector(".plyr")?.classList.add("flex-1");
});
</script>

<template>
  <vue-plyr
    class="flex-1 flex-shrink-0 flex-grow h-auto"
    :options="plyrOptions"
  >
    <video
      controls
      playsinline
      data-poster="https://via.placeholder.com/1280x720"
      class="w-full"
    >
      <!-- Set data-quality attribute on each source -->
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
        size="720"
      />
      <source
        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
        type="video/mp4"
        size="1080"
      />
      <track
        default
        kind="captions"
        label="English captions"
        src="https://example.com/path/to/english.vtt"
        srclang="en"
      />
    </video>
  </vue-plyr>
</template>
