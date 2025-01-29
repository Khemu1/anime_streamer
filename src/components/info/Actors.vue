<script setup lang="ts">
import { Select, SelectItem } from "@/components/ui/select";
import { ref, watch } from "vue";

const { actors, nationlities } = defineProps<{
  actors: {
    characterName: string;
    characterType: string;
    characterImageUrl: string;
    actorName: string;
    actorImageUrl: string;
    nationality: string;
  }[];
  nationlities: string[];
}>();

const selectedNationality = ref(nationlities[0] ?? "unknown");
const onDisplayActors = ref(
  actors.filter((actor) => actor.nationality === selectedNationality.value)
);


watch(selectedNationality, () => {
  onDisplayActors.value = actors.filter(
    (actor) => actor.nationality === selectedNationality.value
  );
});
</script>

<template>
  <div class="flex flex-col border border-borderColor rounded-md">
    <div
      class="flex justify-between bg-secondaryBg rounded-md p-2 w-full items-center border-b border-borderColor"
    >
      <h3 class="font-semibold">Characters & Voice Actors</h3>
      <div
        class="flex flex-col sm:flex-row justify-between gap-4 sm:items-center flex-wrap"
      >
        <Select class="w-[224px] !border-none" v-model="selectedNationality">
          <SelectItem
            v-for="(nat, idx) in nationlities"
            :key="idx"
            :value="nat"
          >
            {{ nat[0].toUpperCase() + nat.slice(1) }}
          </SelectItem>
        </Select>
      </div>
    </div>
    <div class="flex flex-wrap gap-4 p-3">
      <div
        class="actor-card gap-4 bg-lightDark transition-all hover:scale-[102%]"
        v-for="(actor, idx) in onDisplayActors"
        :key="idx"
      >
        <div class="flex gap-2 items-center">
          <div class="w-[65px] h-[74px] rounded-l-md overflow-hidden">
            <img
              :src="actor.characterImageUrl"
              alt="Character Image"
              class="w-full h-full object-fill"
            />
          </div>
          <div class="flex flex-col gap-2">
            <span class="font-semibold">{{ actor.characterName }}</span>
            <span class="opacity-50">
              {{ actor.characterType[0].toUpperCase()
              }}{{ actor.characterType.slice(1) }}
            </span>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <div class="flex flex-col gap-2">
            <span class="font-semibold">{{ actor.actorName }}</span>
            <span class="opacity-50">
              {{ actor.nationality[0].toUpperCase()
              }}{{ actor.nationality.slice(1) }}
            </span>
          </div>
          <div class="w-[65px] h-[74px] rounded-r-md overflow-hidden">
            <img
              :src="actor.actorImageUrl"
              alt="Actor Image"
              class="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.actor-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  flex: 1 1 calc(33.33% - 1rem);
  max-width: calc(33.33% - 1rem);
  gap: 1rem;
  z-index: 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

@media (max-width: 1024px) {
  .actor-card {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
}

@media (max-width: 640px) {
  .actor-card {
    flex: 1 1 calc(100% - 1rem);
    max-width: 100%;
  }
}
</style>
