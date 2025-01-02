<script setup lang="ts">
import { days } from "@/constants/schedule"; // Assumes `days` contains days of the week in order
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import { getPrimaryAccentClass } from "@/utils/localSettings";
import BigCard from "@/components/schedule/BigCard.vue";
import SmallCard from "@/components/schedule/SmallCard.vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { localSettings } = storeToRefs(userStore);

const schedules = [
  {
    airTime: "12:40 AM",
    episodes: [
      {
        title: "Demon Lord 2099",
        episodeNumber: 11,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
      {
        title: "The Phantom Crusader",
        episodeNumber: 10,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
  {
    airTime: "10:15 PM",
    episodes: [
      {
        title: "Blade of the Moon",
        episodeNumber: 8,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
  {
    airTime: "9:00 PM",
    episodes: [
      {
        title: "Chronicles of Eternity",
        episodeNumber: 5,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
  {
    airTime: "1:00 AM",
    episodes: [
      {
        title: "Celestial Vanguard",
        episodeNumber: 13,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
  {
    airTime: "11:30 PM",
    episodes: [
      {
        title: "Shadow Warlock",
        episodeNumber: 7,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
  {
    airTime: "8:20 PM",
    episodes: [
      {
        title: "Arcane Adventures",
        episodeNumber: 3,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
  {
    airTime: "6:45 PM",
    episodes: [
      {
        title: "Eclipse Rising",
        episodeNumber: 6,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
  {
    airTime: "7:50 PM",
    episodes: [
      {
        title: "Mystic Realm Guardians",
        episodeNumber: 4,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
  {
    airTime: "3:30 AM",
    episodes: [
      {
        title: "Legend of the Dragon Prince",
        episodeNumber: 12,
        imageUrl: "/ezgif.com-animated-gif-maker_2.gif",
      },
    ],
  },
];

const currentDay = ref(new Date().getDay());

const selectedDate = ref(new Date());
console.log(currentDay.value);

const updateSelectedDate = (dayValue: number) => {
  const today = new Date();
  const todayDayIndex = today.getDay();
  const diff = dayValue - todayDayIndex;

  const newDate = new Date(today);
  newDate.setDate(today.getDate() + diff);

  selectedDate.value = newDate;

  console.log("Selected Date:", newDate);
};
</script>

<template>
  <div class="flex-1 flex flex-col gap-8 mt-10">
    <div
      class="flex w-full justify-around flex-col xl:flex-row flex-wrap gap-4"
    >
      <BigCard />
      <BigCard />

      <BigCard />
    </div>
    <div
      class="flex mx-auto bg-catigories-bg-color border border-borderColor rounded-md w-full scrollbar-hide sm:w-max sm:max-w-full overflow-x-auto max-w-[626px]"
    >
      <span
        v-for="(day, index) in days"
        :key="index"
        class="flex justify-center p-2 cursor-pointer px-4"
        :class="[
          `${
            index + 1 >= days.length ? '' : 'border-r-2 border-borderColor '
          }, ${getPrimaryAccentClass(localSettings.primaryAccent)}-hover`,
          `${
            currentDay === day.value
              ? getPrimaryAccentClass(localSettings.primaryAccent)
              : ''
          }`,
        ]"
        @click="
          () => {
            currentDay = day.value;
            updateSelectedDate(day.value);
          }
        "
      >
        {{ day.name }}
      </span>
    </div>

    <div class="font-semibold text-xl">
      <span>
        {{
          selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </span>
    </div>
    <div class="flex gap-10 flex-col w-full">
      <div
        v-for="(schedule, indexS) in schedules"
        :key="indexS"
        class="flex flex-col items-start w-full"
      >
        <div class="flex gap-2 w-full">
          <div class="flex flex-col justify-center gap-2 w-full">
            <div
              class="airing-time font-semibold flex items-center gap-2 text-[1rem]"
            >
              <span class="status-indicator"></span>
              {{ schedule.airTime }}
            </div>

            <div class="flex gap-4 ml-[1.8px] w-full">
              <div
                class="flex w-[.2rem] rounded-sm bg-borderColor flex-shrink-0"
              ></div>
              <div class="flex flex-wrap gap-4 w-full">
                <div v-for="(item, index) in schedule.episodes" :key="index">
                  <SmallCard
                    :episode="{ ...item, airedTime: schedule.airTime }"
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.airing-time .status-indicator {
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  background-color: var(--border-color);
  border-radius: 50%;
}
</style>
