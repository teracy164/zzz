<template>
  <Card v-if="avatar" class="avatar-card">
    <div>
      <div style="display: flex">
        <div class="character-wrapper" style="flex-grow: 1">
          <div class="character">
            <div class="base-info">
              <div style="display: flex; align-items: center">
                <span class="level">Lv{{ avatar.level }}</span>
                <span class="name">{{ avatar.name_mi18n }}</span>
              </div>
              <div style="display: flex; align-items: center">
                <span class="element">{{ $zzz.getElementName(avatar.element_type) }}</span>
                <img class="group" :src="avatar.group_icon_path" />
              </div>
            </div>
            <div style="display: flex">
              <div class="ranks">
                <!-- Rank: -->
                <div v-for="(r, index) in avatar.ranks" class="rank" :class="{ unlocked: r.is_unlocked }">
                  <span class="number">{{ index + 1 }}</span>
                </div>
              </div>
              <div style="flex-grow: 1">
                <img :src="avatar.hollow_icon_path" />
              </div>
              <div class="skills">
                <div v-for="s in skills" class="skill" @click="showSkillDetail(s)">
                  <img v-if="skillIcons[s.skill_type]" alt="skill-icon" :src="skillIcons[s.skill_type]" decoding="async" />
                  <span>{{ s.level }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="weapon">
            <div>
              <span class="level">Lv{{ avatar.weapon.level }}</span>
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
                  <div v-for="p in avatar.weapon.main_properties" class="property">
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
        </div>
        <div class="status">
          <div v-for="p in avatar.properties" class="property">
            <div>{{ p.property_name }}</div>
            <div class="value">{{ p.final }}</div>
          </div>
        </div>
        <div class="score">
          <div class="score-wrapper">
            <el-tooltip>
              <template #content>
                <p>基準</p>
                <ul style="padding-left: 1.5em">
                  <li v-for="item in $zzz.getRankBorders()" style="display: flex">
                    <span style="flex-basis: 2em">{{ item.name }}</span>
                    <span>{{ item.score }}以上</span>
                  </li>
                </ul>
                ※上記以外は「C」
              </template>
              <span>{{ $zzz.getRank(totalScore) }}</span>
            </el-tooltip>
            <div class="score-value">{{ totalScore }}</div>
          </div>
        </div>
      </div>
      <div class="equips">
        <div class="equips-rows">
          <AvatarEquip v-for="(e, index) in avatar.equip.slice(0, 3)" :equip="e" :slot="index + 1" />
        </div>
        <div class="equips-rows">
          <AvatarEquip v-for="(e, index) in avatar.equip.slice(3)" :equip="e" :slot="index + 1 + 3" />
        </div>
      </div>
    </div>

    <el-dialog v-model="dialogSkill.visible">
      <div>
        <div v-for="item in dialogSkill.items">
          <h3>{{ item.title }}</h3>
          <div :innerHTML="item.text"></div>
        </div>
      </div>
    </el-dialog>
  </Card>
</template>
<script lang="ts" setup>
import { ZzzSkillType, type ZzzAvatar, type ZzzAvatarSkill, type ZzzAvatarSkillItem } from '@/types/zzz';

const { avatar } = defineProps<{ avatar: ZzzAvatar }>();
const { $zzz } = useNuxtApp();

const totalScore = ref(0);

const skillSort = [ZzzSkillType.NORMAL, ZzzSkillType.DASH, ZzzSkillType.SKILL, ZzzSkillType.SWITCH, ZzzSkillType.ULT, ZzzSkillType.CORE];

const skills = ref<ZzzAvatarSkill[]>([]);

const skillIcons: { [type: number]: string } = {
  [ZzzSkillType.NORMAL]:
    'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/07/04/127094529/312e1e3aa119e8eebf23d03419ec3032_1449314247289664333.png',
  [ZzzSkillType.SKILL]:
    'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/05/22/59155606/b8169819d84f76e4f20ea1ef1d0d5c7d_2960815483188094556.png',
  [ZzzSkillType.DASH]:
    'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/05/22/59155606/3927933b2df6b4b2661f3bc914043c76_694669913764422551.png',
  [ZzzSkillType.ULT]:
    'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/07/04/127094529/ad0e600a5c5453112710f346c894797c_3546263649391022402.png',
  [ZzzSkillType.CORE]:
    'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/05/22/59155606/19d366104f0e268849ae77f6aba52ebe_2444617872848533329.png',
  [ZzzSkillType.SWITCH]:
    'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/05/11/3c5a6456d767b48d3cee842339be557c_7557132698351903831.png',
};

const dialogSkill = reactive<{ visible: boolean; items: ZzzAvatarSkillItem[] | null }>({
  visible: false,
  items: null,
});

onMounted(() => {
  for (const e of avatar.equip || []) {
    const equipScore = $zzz.calcScore(e);
    totalScore.value = $zzz.adjustScore(totalScore.value + equipScore.total);
  }

  // 実際のゲーム画面に合わせて並べ替え
  skills.value = [ZzzSkillType.NORMAL, ZzzSkillType.DASH, ZzzSkillType.SWITCH, ZzzSkillType.SKILL, ZzzSkillType.ULT, ZzzSkillType.CORE].map(
    (type) => avatar.skills.find((s) => s.skill_type === type)
  );
});

const showSkillDetail = (skill: ZzzAvatarSkill) => {
  const toImg = (type: number) => `<img src="${skillIcons[type]}" style="width: 1em"/>`;
  dialogSkill.items = skill.items.map((item) => {
    return {
      title: item.title,
      text: item.text
        .replace(/\\n/g, '<br>')
        .replace(/\<IconMap:Icon_Normal\>/g, toImg(ZzzSkillType.NORMAL))
        .replace(/\<IconMap:Icon_Special\>/g, toImg(ZzzSkillType.ULT))
        .replace(/\<IconMap:Icon_Evade\>/g, toImg(ZzzSkillType.DASH))
        .replace(/\<IconMap:Icon_Switch\>/g, toImg(ZzzSkillType.SWITCH))
        .replace(/\<IconMap:Icon_UltimateReady\>/g, toImg(ZzzSkillType.ULT)),
    };
  });
  dialogSkill.visible = true;
};
</script>
<style lang="scss" scoped>
.avatar-card {
  width: 60em;
  .character-wrapper {
    position: relative;
    .character {
      padding-right: 0.5em;
      .base-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          font-size: 1.2em;
        }
        .element {
          padding: 0 0.25em;
        }
      }
      img {
        width: 100%;
        max-height: 7em;
        object-fit: contain;

        &.group {
          width: 1.6em;
          height: 1.6em;
        }
      }
      .ranks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 1.2em;
        .rank {
          position: relative;
          border: 1px solid lightgray;
          border-radius: 50%;
          width: 1em;
          height: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8em;

          &.unlocked {
            background-color: lightgray;
            color: black;
          }
        }

        .rank + .rank {
          margin-top: 0.25em;
        }
      }
    }
    .skills {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .skill {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8em;

        img {
          width: 1.2em;
        }
      }
    }
    .weapon {
      margin-top: 0.5em;
      .weapon-img-wrapper {
        position: relative;

        img {
          width: 4.5em;
          height: 4.5em;
        }

        .star {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          font-size: 0.6em;
        }
      }

      .properties {
        display: flex;
        align-items: center;
      }
    }
  }

  .status {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 0.5em;
    margin-right: 0.5em;
    width: 20em;

    .property {
      display: flex;
      justify-content: space-between;

      .value {
        display: flex;
        .final-value {
          text-align: right;
          width: 5em;
        }
        .add {
          padding: 0 0.5em;
          color: green;
        }
      }
    }
  }

  .score {
    border-radius: 5px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 10em;

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
    margin-top: 0.5em;
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

  .level {
    background-color: #aaaaaa;
    color: white;
    border-radius: 5px;
    padding: 0 0.25em;
    font-size: 0.8em;
  }
}
</style>
