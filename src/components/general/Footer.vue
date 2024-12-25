<script setup lang="ts">
const publicUrl = import.meta.env.VITE_PUBLIC_URL as string;
console.log("asdasuudjghsjudkgasd", publicUrl);
</script>

<template>
  <footer class="p-8 flex flex-col gap-2 text-sm text-[gray]">
    <div class="flex justify-between w-full border-b-4 pb-4 border-borderColor">
      <div class="flex flex-col gap-2">
        <div
          class="w-[70px] h-[70px] transition-all focus:scale-110 active:scale-95 active:opacity-70 rounded-md overflow-hidden"
        >
          <img src="/05.jpg" alt="logo" class="object-fit w-full h-full" />
        </div>
        <p class="text-[12px] text-gray-300/30">
          This website does not retain any files on its server. Rather, it
          solely provides links to media content hosted by third-party services.
        </p>
      </div>
      <div class="flex gap-5">
        <div class="flex flex-col gap-3">
          <router-link to="#" class="hover:text-white">About</router-link>
          <router-link to="#" class="hover:text-white">Domains</router-link>
        </div>
        <div class="flex flex-col gap-3">
          <router-link to="#" class="hover:text-white">Donate <3</router-link>
          <router-link to="#" class="hover:text-white">
            Privacy Policy
          </router-link>
          <router-link to="#" class="hover:text-white">
            Terms of Service
          </router-link>
        </div>
      </div>
    </div>
    <div class="font-semibold text-[11px]">
      <span class="font-semibold mr-1">&copy;</span>
      <span class="mr-1">{{ new Date().getFullYear() }}</span>
      <router-link to="/" class="underline">Animevault.com</router-link>
      <
    </div>
  </footer>
</template>
