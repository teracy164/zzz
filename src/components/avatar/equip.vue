<template>
  <div class="equip">
    <div class="base-info">
      <div class="base-info-wrapper">
        <div class="equip-img" :class="{ [`rarity-${equip.rarity}`]: true }">
          <img :src="equip.icon" />
          <div class="level">
            <span class="level-wrapper">Lv{{ equip.level }}</span>
          </div>
        </div>
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
      position: relative;

      .equip-img {
        border-radius: 50%;
        width: 3em;
        height: 3em;
        padding: 3px;
        position: relative;

        &.rarity-S {
          background-color: yellow;
        }
        &.rarity-A {
          background-color: purple;
        }
        &.rarity-B {
          background-color: skyblue;
        }

        .level {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: flex;
          justify-content: center;

          .level-wrapper {
            background-color: black;
            border-radius: 5px;
            color: white;
            width: 3em;
            text-align: center;
            font-size: 0.7em;
            padding: 0 0.1em;
          }
        }
      }

      .slot {
        position: absolute;
        top: -0.2em;
        right: -0.2em;
        background-color: lightgray;
        color: black;
        width: 1em;
        height: 1em;
        padding: 0.2em;
        font-size: 0.7em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
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
