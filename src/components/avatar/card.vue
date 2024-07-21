<template>
  <Card v-if="avatar" class="avatar-card">
    <div>
      <div style="display: flex">
        <div class="avatar">
          <div>
            <span>Lv{{ avatar.level }}</span>
            {{ avatar.name_mi18n }}
          </div>
          <img :src="avatar.hollow_icon_path" />
          <div class="ranks">
            Rank:
            <span
              v-for="(r, index) in avatar.ranks"
              class="rank"
              :class="{ unlocked: r.is_unlocked }"
            >
              {{ index + 1 }}
            </span>
          </div>
          <div class="skills">
            Skills:
            <span v-for="s in avatar.skills" class="skill">
              {{ s.level }}
            </span>
          </div>
        </div>
        <div class="weapon">
          <div>
            <span>Lv{{ avatar.weapon.level }}</span>
            {{ avatar.weapon.name }}
          </div>
          <div style="display: flex">
            <div class="weapon-img-wrapper">
              <img :src="avatar.weapon.icon" />
              <div class="star">
                <span v-for="(_, i) in new Array(5)">
                  <span v-if="i < avatar.weapon.star">★</span>
                  <span v-else>☆</span>
                </span>
              </div>
            </div>
            <div class="properties">
              <div>
                <div
                  v-for="p in avatar.weapon.main_properties"
                  class="property"
                >
                  <span class="property-name">{{ p.property_name }}: </span>
                  <span class="property-value">{{ p.base }}</span>
                </div>
                <div v-for="p in avatar.weapon.properties" class="property">
                  <span class="property-name">{{ p.property_name }}: </span>
                  <span class="property-value">{{ p.base }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="score">
          <div class="score-wrapper">
            <span v-if="totalScore > 180" class="ss">SS</span>
            <span v-if="totalScore > 150" class="s">S</span>
            <span v-else-if="totalScore > 120" class="A">A</span>
            <span v-else-if="totalScore > 100" class="B">B</span>
            <span v-else>C</span>
            <div class="score-value">{{ totalScore }}</div>
          </div>
        </div>
      </div>
      <div class="equips">
        <div class="equips-rows">
          <AvatarEquip
            v-for="(e, index) in avatar.equip.slice(0, 3)"
            :equip="e"
            :slot="index + 1"
          />
        </div>
        <div class="equips-rows">
          <AvatarEquip
            v-for="(e, index) in avatar.equip.slice(3)"
            :equip="e"
            :slot="index + 1 + 3"
          />
        </div>
      </div>
    </div>
  </Card>
</template>
<script lang="ts" setup>
import type { ZzzAvatar } from '@/types/zzz'

const { avatar } = defineProps<{ avatar: ZzzAvatar }>()
const { $zzz } = useNuxtApp()

const totalScore = ref(0)

onMounted(() => {
  for (const e of avatar.equip || []) {
    const equipScore = $zzz.calcScore(e)
    totalScore.value = $zzz.adjustScore(totalScore.value + equipScore.total)
  }
})
</script>
<style lang="scss" scoped>
.avatar-card {
  width: 60em;
  .avatar {
    flex-grow: 1;
    .ranks {
      display: flex;
      .rank {
        width: 1.5em;
        height: 1.5em;
        border: 1px solid lightgray;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.unlocked {
          background-color: lightgray;
          color: black;
        }
      }
    }
    .skills {
      display: flex;
      .skill {
        width: 1.5em;
        height: 1.5em;
        border: 1px solid lightgray;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .weapon {
    flex-grow: 1;

    .weapon-img-wrapper {
      position: relative;

      img {
        width: 7em;
        height: 7em;
      }

      .star {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
      }
    }

    .properties {
      display: flex;
      align-items: center;
    }
  }
  .score {
    flex-grow: 1;
    border-radius: 5px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 5px;

    .score-wrapper {
      font-size: 5em;
      text-align: center;
      line-height: 1;
      .score-value {
        font-size: 2rem;
      }
    }
  }
  .equips {
    margin-top: 1em;
    .equips-rows {
      display: flex;

      .equip {
        width: 100%;
      }
      .equip + .equip {
        margin-left: 0.5em;
      }
    }
    .equips-rows + .equips-rows {
      margin-top: 0.5em;
    }
  }
}
</style>
