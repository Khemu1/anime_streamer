<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="min-h-[130px] flex flex-1 justify-between cursor-pointer bg-lightDark border border-borderColor rounded-md p-[1rem] transition-all xl:hover:translate-y-[-4px] group relative overflow-hidden"
  >
    <div class="kFTXSO">
      <Icon
        icon="material-symbols:check-small-rounded"
        width="20px"
        height="20px"
        style="color: #000; transform: rotate(25deg); font-weight: bold"
      />
    </div>
    <div class="flex justify-center flex-col text-[0.8rem] gap-2">
      <p class="font-semibold text-white text-[1rem]">Demon Loard 2099</p>
      <div class="flex gap-2 font-semibold">
        <div
          class="flex items-center gap-2 text-white text-sm font-semibold bg-black/20 border border-borderColor p-[0.2rem] px-[0.5rem] rounded-md"
        >
          <Icon
            icon="material-symbols:subtitles-rounded"
            width="14px"
            height="14px"
            style="color: #ffffff"
          />
          <span>EP 11</span>
        </div>

        <div
          class="flex items-center gap-2 bg-black/20 border border-borderColor p-[0.2rem] px-[0.5rem] rounded-md font-semibold w-max text-white text-sm"
        >
          <Icon
            icon="material-symbols:timer"
            width="14px"
            height="14px"
            style="color: #ffffff"
          />
          <span>00:00:00 AM</span>
        </div>
      </div>
    </div>
    <div
      class="absolute right-0 top-1/2 translate-x-[-100%] sm:translate-x-[-150%] translate-y-[-50%] xl:translate-x-[-180%] xl:w-[3rem] xl:h-[5rem] w-[4rem] h-[7rem] xl:group-hover:scale-110 transition-all z-[10]"
    >
      <img
        class="object-cover w-full h-full border-[2px] border-white/80 rounded-md shadow-lg"
        src="/ezgif.com-animated-gif-maker_2.gif"
        alt="image card"
      />
    </div>
  </div>
</template>

<style scoped>
.group::after {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  width: 8.5rem;
  height: 11.25rem;
  border-radius: var(--global-border-radius);
  z-index: 1;
  background: url("ezgif.com-animated-gif-maker_2.gif") center center / cover
    no-repeat;
  clip-path: polygon(100% 0px, 100% 100%, 0px 0px);
  z-index: 1;
  filter: brightness(50%);
}
.kFTXSO {
  position: absolute;
  top: 0rem;
  left: -0.5rem;
  width: 2.5rem;
  height: 2rem;
  border-radius: 0px 0.5rem;
  background-color: white;
  color: black;
  z-index: 3;
  transform: rotate(-40deg);
  transform-origin: 0px 0px 0px;
  transition: transform 0.2s;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0.1rem;
}
</style>
