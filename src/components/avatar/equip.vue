<template>
  <div class="equip">
    <div class="base-info">
      <div class="base-info-wrapper">
        <img :src="equip.icon" />
        <p class="level" :class="{ [`rarity-${equip.rarity}`]: true }">Lv{{ equip.level }}</p>
        <span class="slot">{{ slot }}</span>
      </div>
      <div class="score">
        <p style="font-size: 0.6em">score</p>
        {{ score }}
      </div>
    </div>
    <div class="properties">
      <div v-for="p in equip.main_properties" class="property">
        <span class="property-name">{{ p.property_name }}</span>
        <span class="property-value">{{ p.base }}</span>
      </div>
      <hr />
      <div v-for="p in equip.properties" class="property">
        <span class="property-name">{{ p.property_name }}</span>
        <span class="property-value">{{ p.base }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ZzzEquip } from '@/types/zzz';

const { equip, slot } = defineProps<{ equip: ZzzEquip; slot: number }>();
const { $zzz } = useNuxtApp();
const score = ref(0);

onMounted(() => {
  const equipScopre = $zzz.calcScore(equip);
  score.value = equipScopre.total;
});
</script>
<style lang="scss" setup>
.equip {
  padding: 0.5em;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;

  .base-info {
    margin-right: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;

    .base-info-wrapper {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .level {
        border-radius: 5px;
        font-size: 0.7em;
        padding: 0 0.25em;
        &.rarity-S {
          border: 1px solid yellow;
        }
        &.rarity-A {
          border: 1px solid purple;
        }
        &.rarity-B {
          border: 1px solid skyblue;
        }
      }
      .rarity {
        position: absolute;
        top: 0;
        left: 0;
      }

      img {
        width: 3em;
        height: 3em;
      }
    }
    .score {
      text-align: center;
    }
  }
  .properties {
    width: 100%;
    .property {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .property-name {
        flex-grow: 1;
      }
    }
  }
}
</style>
