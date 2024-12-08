<template>
  <div class="calculator" :key="updKey">
    <h1 class="legend">育成計算機</h1>
    <div class="conditions">
      <div class="flex flex-col mb-2">
        <label>
          【
          <input id="check-character" type="checkbox" v-model="form.character.include" @change="calcMaterials" />
          <label for="check-character">キャラ</label>
          】
        </label>
        <div class="pl-5">
          <div class="flex items-center">
            <label for="calc-select-character-lv" style="width: 4em">レベル</label>
            <select id="calc-select-character-lv" v-model="form.character.lv" @change="calcMaterials" :disabled="!form.character.include">
              <option v-for="lv in [0, 10, 20, 30, 40, 50, 60]" :value="lv">{{ lv }}</option>
            </select>
            <input
              id="character-breakthrough"
              v-model="form.character.isBreakthrough"
              type="checkbox"
              style="margin-left: 1em"
              @change="calcMaterials"
              :disabled="!form.character.include || form.character.lv === 60"
            />
            <label for="character-breakthrough">突破する</label>
          </div>
          <div class="flex items-center">
            <label style="width: 4em; min-width: 4em">スキル</label>
            <div class="flex flex-wrap">
              <div
                v-for="item in [
                  { label: '通常', prop: 'basic' },
                  { label: '回避', prop: 'dodge' },
                  { label: '支援', prop: 'assist' },
                  { label: '特殊', prop: 'special' },
                  { label: '連携', prop: 'chain' },
                ]"
                class="skill"
              >
                <label :for="`calc-select-${item.prop}`">
                  {{ item.label }}
                  <NuxtImg :src="`/images/skills/${item.prop}.png`" :alt="item.label" />
                </label>
                <select
                  :id="`calc-select-${item.prop}`"
                  v-model="form.character.skills[item.prop]"
                  @change="calcMaterials"
                  :disabled="!form.character.include"
                >
                  <option v-for="(_, index) in new Array(12)" :value="index + 1">{{ index + 1 }}</option>
                </select>
              </div>
              <div class="skill">
                <label for="calc-select-core">
                  コア
                  <NuxtImg src="/images/skills/core.png" alt="コア" />
                </label>
                <select id="calc-select-core" v-model="form.character.core" @change="calcMaterials" :disabled="!form.character.include">
                  <option v-for="(_, index) in new Array(7)" :value="index">{{ $zzz.toCoreSkillLavel(index) }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <label style="width: 4em; min-width: 4em">属性</label>
            <template v-for="op in ATTRIBUTE_NAMES">
              <input
                type="radio"
                :id="`attribute-${op.value}`"
                name="attribute"
                :value="op.value"
                :checked="form.character.attribute.value === op.value"
                @change="changeAttribute"
              />
              <label :for="`attribute-${op.value}`" class="mr-3">
                <img :src="op.icon" style="width: 1.5em; height: 1.5em" />
              </label>
            </template>
          </div>
          <div class="flex items-center">
            <label style="width: 4em; min-width: 4em">特性</label>
            <template v-for="op in PROFESSION_NAMES">
              <input
                type="radio"
                :id="`profession-${op.value}`"
                name="profession"
                :value="op.value"
                :checked="form.character.profession.value === op.value"
                @change="changeProfession"
              />
              <label :for="`profession-${op.value}`" class="mr-3">
                <img :src="op.icon" style="width: 1.5em; height: 1.5em" />
              </label>
            </template>
          </div>
        </div>
      </div>
      <div class="flex flex-col mb-2">
        <label>
          【
          <input id="check-weapon" type="checkbox" v-model="form.weapon.include" @change="calcMaterials" />
          <label for="check-weapon">音動機</label>
          】
        </label>
        <div class="pl-5">
          <div class="flex items-center">
            <span style="width: 4em">ランク</span>
            <div v-for="rank in ['S', 'A', 'B']" class="mr-2">
              <input
                :id="`radio-calc-weapon-${rank}`"
                v-model="form.weapon.rank"
                type="radio"
                name="calc-weapon-rank"
                :value="rank"
                :disabled="!form.weapon.include"
                @change="calcMaterials"
              />
              <label :for="`radio-calc-weapon-${rank}`" class="px-2">{{ rank }}</label>
            </div>
          </div>

          <div class="flex items-center">
            <label for="calc-select-weapon-lv" style="width: 4em">レベル</label>
            <select id="calc-select-weapon-lv" v-model="form.weapon.lv" @change="calcMaterials" :disabled="!form.weapon.include">
              <option v-for="lv in [0, 10, 20, 30, 40, 50, 60]" :value="lv">{{ lv }}</option>
            </select>
            <input
              id="weapon-breakthrough"
              v-model="form.weapon.isBreakthrough"
              type="checkbox"
              style="margin-left: 1em"
              @change="calcMaterials"
              :disabled="!form.weapon.include || form.weapon.lv === 60 || form.weapon.lv === 0"
            />
            <label for="weapon-breakthrough">突破する</label>
          </div>
        </div>
      </div>
    </div>
    <div class="require-materials">
      <h2 class="text-xl font-bold">必要素材</h2>
      <div class="flex flex-wrap">
        <div class="mr-5">
          <p class="flex items-center">
            <NuxtImg src="/images/denny.webp" alt="ディニー" style="width: 1em; height: 1em" />
            <span class="mx-1">x</span>
            {{ result.money.toLocaleString() }}
          </p>
        </div>
        <div class="mr-5">ｴｷｽﾊﾟｰﾄ素材：{{ result.character.core.expert }}</div>
        <div class="mr-5">週ボス素材：{{ result.character.core.boss }}</div>
        <div class="mr-5">ﾊﾑｽﾀｰｹｰｼﾞ：{{ result.character.skillEx }}</div>
      </div>
      <div style="display: flex; flex-wrap: wrap">
        <table class="border">
          <thead>
            <th>キャラ素材</th>
            <th style="width: 1.5em">A</th>
            <th style="width: 1.5em">B</th>
            <th style="width: 1.5em">C</th>
          </thead>
          <tbody>
            <tr>
              <th>
                <div>
                  突破
                  <img :src="getImagePath(form.character.profession.badgeIcon)" />
                </div>
              </th>
              <td v-for="rank in ['A', 'B', 'C']">
                {{ result.character.breakthrough[rank] }}
              </td>
            </tr>
            <tr>
              <th>
                <div>
                  レベル
                  <NuxtImg src="/images/materials/character_A.webp" alt="キャラレベル素材" />
                </div>
              </th>
              <td v-for="rank in ['A', 'B', 'C']">
                {{ result.character.lv[rank] }}
              </td>
            </tr>
            <tr>
              <th>
                <div>
                  スキル
                  <img :src="getImagePath(form.character.attribute.materialIcon)" />
                </div>
              </th>
              <td v-for="rank in ['A', 'B', 'C']">
                {{ result.character.skill[rank] }}
              </td>
            </tr>
          </tbody>
        </table>

        <table class="border">
          <thead>
            <th>音動機素材</th>
            <th style="width: 1.5em">A</th>
            <th style="width: 1.5em">B</th>
            <th style="width: 1.5em">C</th>
          </thead>
          <tbody>
            <tr>
              <th>
                <div>
                  突破
                  <img :src="getImagePath(form.character.profession.kitIcon)" />
                </div>
              </th>
              <td v-for="rank in ['A', 'B', 'C']">
                {{ result.weapon.breakthrough[rank] }}
              </td>
            </tr>
            <tr>
              <th>
                <div>
                  レベル
                  <NuxtImg src="/images/materials/weapon_A.webp" alt="武器レベル素材" />
                </div>
              </th>
              <td v-for="rank in ['A', 'B', 'C']">
                {{ result.weapon.lv[rank] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { MaterialExp, MaterialBreakthrough } from '@/types/material';
import { ATTRIBUTE_NAMES, PROFESSION_NAMES, ZzzAttribute, ZzzProfession, type ZzzAttributeInfo } from '~/types/zzz';

const { $zzz } = useNuxtApp();

const updKey = ref(0);

/*
  ビルドしたjsで起動した際、imgのsrcを動的に変更すると画像が表示されない。
  回避のために正式なパスを取得する
*/
const images = import.meta.glob('/public/**/*', { eager: true });

const getImagePath = (path: string) => {
  const item = images[`/public${path}`] as any;
  if (item) {
    return item.default;
  }
  return '';
};

const form = reactive({
  character: {
    include: true,
    lv: 60,
    isBreakthrough: true,
    skills: { basic: 8, dodge: 8, assist: 8, special: 8, chain: 8 },
    core: 4,
    attribute: ATTRIBUTE_NAMES[0],
    profession: PROFESSION_NAMES[0],
  },
  weapon: {
    include: true,
    lv: 60,
    isBreakthrough: true,
    rank: 'S' as 'S' | 'A' | 'B',
  },
});

const result = reactive({
  character: {
    lv: { A: 0, B: 0, C: 0 },
    breakthrough: { A: 0, B: 0, C: 0 },
    skill: { A: 0, B: 0, C: 0 },
    skillEx: 0,
    core: { expert: 0, boss: 0 },
  },
  weapon: { lv: { A: 0, B: 0, C: 0 }, breakthrough: { A: 0, B: 0, C: 0 } },
  money: 0,
});

const changeAttribute = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value) as ZzzAttribute;
  const target = ATTRIBUTE_NAMES.find((item) => item.value === value);
  if (target) {
    form.character.attribute = target;
  }

  updKey.value++;
};

const changeProfession = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value) as ZzzProfession;
  const target = PROFESSION_NAMES.find((item) => item.value === value);
  if (target) {
    form.character.profession = target;
  }

  updKey.value++;
};

const calcMaterials = () => {
  result.money = 0;
  result.character.lv = { A: 0, B: 0, C: 0 };
  result.character.breakthrough = { A: 0, B: 0, C: 0 };
  result.character.skill = { A: 0, B: 0, C: 0 };
  result.character.skillEx = 0;
  result.character.core = { expert: 0, boss: 0 };
  result.weapon.lv = { A: 0, B: 0, C: 0 };
  result.weapon.breakthrough = { A: 0, B: 0, C: 0 };

  const materials = {
    character: $zzz.getCharacterMaterials('S'),
    weapon: $zzz.getWeaponMaterials(form.weapon.rank),
  };

  const filterExp = (list: MaterialExp[], lv: number) => {
    return list.filter((item) => {
      const matches = item.lv.match(/^(\d*)～(\d*)$/);
      const to = matches?.length > 2 ? Number(matches[2]) : 0;
      return to <= lv;
    });
  };

  const filterBreakthrough = (list: MaterialBreakthrough[], lv: number, includeBreakthrough: boolean) => {
    return list.filter((item) => {
      if (item.lv < lv) return true;
      if (item.lv === lv) {
        return includeBreakthrough;
      }
      return false;
    });
  };

  if (form.character.include) {
    // キャラ突破素材の算出
    filterBreakthrough(materials.character.breakthrough, form.character.lv, form.character.isBreakthrough).forEach((item) => {
      result.money += item.money;
      result.character.breakthrough[item.materials.rank] += item.materials.num;
    });

    // キャラレベル素材の算出
    filterExp(materials.character.exp, form.character.lv).forEach(
      (item) => (result.character.lv[item.materials.rank] += item.materials.num)
    );

    // キャラスキル素材の算出
    Object.values(form.character.skills).forEach((item) => {
      materials.character.skill
        .filter((m) => m.lv <= item)
        .forEach((m) => {
          result.money += m.money;
          result.character.skill[m.materials.rank] += m.materials.num;
          if (m.ex) {
            result.character.skillEx += m.ex;
          }
        });
    });

    // キャラコアスキル素材の算出
    materials.character.core
      .filter((item) => item.lv <= form.character.core)
      .forEach((item) => {
        result.money += item.money;
        result.character.core.expert += item.expert;
        result.character.core.boss += item.boss;
      });
  }

  if (form.weapon.include) {
    // 武器突破素材の算出
    filterBreakthrough(materials.weapon.breakthrough, form.weapon.lv, form.weapon.isBreakthrough).forEach((item) => {
      result.money += item.money;
      result.weapon.breakthrough[item.materials.rank] += item.materials.num;
    });

    // 武器レベル素材の算出
    filterExp(materials.weapon.exp, form.weapon.lv).forEach((item) => {
      // 武器経験値は段階によって小数点が出るため、段階ごとの素材数を加算せず合計から算出する
      result.weapon.lv[item.materials.rank] = Math.ceil(item.sumExp / 3000);
    });
  }
};

onMounted(() => {
  calcMaterials();
});
</script>
<style lang="scss" scoped>
.calculator {
  margin: 1em 0;
  padding: 0.5em;
  padding-top: 1.5em;
  border: 1px solid white;
  position: relative;

  .legend {
    position: absolute;
    top: -1em;
    font-size: 1.4em;
    padding: 0 0.5em;
    background-color: black;
  }
  .conditions {
    border-bottom: 1px solid white;
    .skill {
      display: flex;
      align-items: center;
      margin-right: 1em;
      label {
        width: 4em;
        display: flex;

        img {
          width: 1.5em;
          height: 1.5em;
        }
      }
      select {
        width: 2.5em;
      }
    }
  }

  .require-materials {
    table {
      margin: 0.5em;
    }
    tbody {
      th {
        text-align: left;
        > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 6em;

          img {
            width: 1.2em;
            height: 1.2em;
          }
        }
      }
      td {
        text-align: center;
        width: 2.5em;
      }
    }
  }
}
</style>
