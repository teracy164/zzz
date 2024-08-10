<template>
  <div>
    <div class="calculator">
      <h1>育成計算機</h1>
      <div class="conditions">
        <div>
          <h2>Sキャラ情報</h2>
        </div>
        <div style="margin-bottom: 1em">
          <div style="margin-bottom: 0.5em">
            <span>キャラLv：</span>
            <select v-model="form.character.lv" @change="calcMaterials">
              <option v-for="lv in [10, 20, 30, 40, 50, 60]" :value="lv">{{ lv }}</option>
            </select>
            <input
              id="character-breakthrough"
              v-model="form.character.isBreakthrough"
              type="checkbox"
              style="margin-left: 1em"
              @change="calcMaterials"
              :disabled="form.character.lv === 60"
            />
            <label for="character-breakthrough">突破する</label>
          </div>
          <div style="margin-bottom: 0.5em; display: flex; align-items: center">
            <span>スキルLv：</span>
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
              <span>{{ item.label }}</span>
              <select v-model="form.character.skills[item.prop]" @change="calcMaterials">
                <option v-for="(_, index) in new Array(12)" :value="index + 1">{{ index + 1 }}</option>
              </select>
            </div>
            <div class="skill">
              コア
              <select v-model="form.character.core" @change="calcMaterials">
                <option v-for="(_, index) in new Array(7)" :value="index">{{ CoreSkillLabels[index] }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="require-materials">
        <h2>必要素材</h2>
        <div>ディニー：{{ requiredMaterials.money.toLocaleString() }}</div>
        <div>ｴｷｽﾊﾟｰﾄ素材：{{ requiredMaterials.character.core.expert }}</div>
        <div>週ボス素材：{{ requiredMaterials.character.core.boss }}</div>

        <div>
          <table>
            <thead>
              <th>キャラ素材</th>
              <th style="width: 1.5em">A</th>
              <th style="width: 1.5em">B</th>
              <th style="width: 1.5em">C</th>
            </thead>
            <tbody>
              <tr>
                <th>突破（認証バッジ）</th>
                <td v-for="rank in ['A', 'B', 'C']">
                  {{ requiredMaterials.character.breakthrough[rank] }}
                </td>
              </tr>
              <tr>
                <th>レベル（調査員の記録）</th>
                <td v-for="rank in ['A', 'B', 'C']">
                  {{ requiredMaterials.character.lv[rank] }}
                </td>
              </tr>
              <tr>
                <th>スキル（チップ）</th>
                <td v-for="rank in ['A', 'B', 'C']">
                  {{ requiredMaterials.character.skill[rank] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <h1>Sランクキャラ</h1>
    <div class="materials">
      <div>
        <h2>突破素材</h2>
        <table>
          <thead>
            <tr>
              <th>Lv</th>
              <th>ディニー</th>
              <th>素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in characterBreakthroughList">
              <td>{{ item.lv }}</td>
              <td>{{ item.money }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td class="sum">
                <p>{{ materialNameTable.money }} x {{ item.sum.money }}</p>
                <template v-for="key in Object.keys(item.sum)">
                  <span class="material" v-if="key !== 'money' && item.sum[key]">{{ key }} x {{ item.sum[key] }}</span>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>育成素材</h2>
        <table>
          <thead>
            <tr>
              <th>Lv</th>
              <th>必要経験値</th>
              <th>素材</th>
              <th>累計経験値</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in characterExpList">
              <td>{{ item.lv }}</td>
              <td>{{ item.require }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td>{{ item.sumExp }}</td>
              <td>{{ item.sum.rank }} x {{ item.sum.num }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>スキル</h2>
        <table>
          <thead>
            <tr>
              <th>Lv</th>
              <th>ディニー</th>
              <th>素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in skillMaterials">
              <td>{{ item.lv }}</td>
              <td>{{ item.money }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td class="sum">
                <p>{{ materialNameTable.money }} x {{ item.sum.money }}</p>
                <template v-for="key in Object.keys(item.sum)">
                  <span class="material" v-if="key !== 'money' && item.sum[key]">{{ key }} x {{ item.sum[key] }}</span>
                </template>
                <p v-if="item.ex">ﾊﾑｽﾀｰｹｰｼﾞ x {{ item.ex }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin-right: 2em">
        <h2>コアスキル</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ディニー</th>
              <th>ｴｷｽﾊﾟｰﾄ素材</th>
              <th>週ボス素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in coreSkillMaterials">
              <td>{{ item.no }}</td>
              <td>{{ item.money }}</td>
              <td>{{ item.expert }}</td>
              <td>{{ item.boss }}</td>
              <td>
                <template v-for="key in Object.keys(item.sum)">
                  <p v-if="item.sum[key]">{{ materialNameTable[key] }} x {{ item.sum[key] }}</p>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div style="margin-top: 2em"></div>

    <h1>Sランク音動機</h1>
    <div class="materials">
      <div>
        <h2>突破素材</h2>
        <table>
          <thead>
            <tr>
              <th>Lv</th>
              <th>ディニー</th>
              <th>素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in weaponBreakthroughList">
              <td>{{ item.lv }}</td>
              <td>{{ item.money }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td class="sum">
                <p>{{ materialNameTable.money }} x {{ item.sum.money }}</p>
                <template v-for="key in Object.keys(item.sum)">
                  <span class="material" v-if="key !== 'money' && item.sum[key]">{{ key }} x {{ item.sum[key] }}</span>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>育成素材</h2>
        <table>
          <thead>
            <tr>
              <th>レベル</th>
              <th>必要経験値</th>
              <th>素材</th>
              <th>累計経験値</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in weaponExpList">
              <td>{{ item.lv }}</td>
              <td>{{ item.require }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td>{{ item.sumExp }}</td>
              <td>{{ item.sum.rank }} x {{ item.sum.num }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const form = reactive({
  character: {
    lv: 10,
    isBreakthrough: true,
    skills: {
      basic: 1,
      dodge: 1,
      assist: 1,
      special: 1,
      chain: 1,
    },
    core: 0,
  },
});

const requiredMaterials = reactive({
  character: {
    lv: { A: 0, B: 0, C: 0 },
    breakthrough: { A: 0, B: 0, C: 0 },
    skill: { A: 0, B: 0, C: 0 },
    core: {
      expert: 0,
      boss: 0,
    },
  },
  money: 0,
});

const calcMaterials = () => {
  requiredMaterials.money = 0;
  requiredMaterials.character.lv = { A: 0, B: 0, C: 0 };
  requiredMaterials.character.breakthrough = { A: 0, B: 0, C: 0 };
  requiredMaterials.character.skill = { A: 0, B: 0, C: 0 };
  requiredMaterials.character.core = { expert: 0, boss: 0 };

  characterBreakthroughList
    .filter((item) => {
      if (item.lv < form.character.lv) return true;
      if (item.lv === form.character.lv) {
        return form.character.isBreakthrough;
      }
      return false;
    })
    .forEach((item) => {
      requiredMaterials.money += item.money;
      requiredMaterials.character.breakthrough[item.materials.rank] += item.materials.num;
    });

  characterExpList
    .filter((item) => {
      const matches = item.lv.match(/^(\d*)～(\d*)$/);
      if (matches?.length) {
        const from = Number(matches[1]);
        const to = Number(matches[2]);
        return to <= form.character.lv;
      }
      return false;
    })
    .forEach((item) => {
      requiredMaterials.character.lv[item.materials.rank] += item.materials.num;
    });

  Object.values(form.character.skills).forEach((item) => {
    skillMaterials
      .filter((m) => m.lv <= item)
      .forEach((m) => {
        requiredMaterials.money += m.money;
        requiredMaterials.character.skill[m.materials.rank] += m.materials.num;
      });
  });

  coreSkillMaterials
    .filter((item) => item.lv <= form.character.core)
    .forEach((item) => {
      requiredMaterials.money += item.money;
      requiredMaterials.character.core.expert += item.expert;
      requiredMaterials.character.core.boss += item.boss;
    });
};

onMounted(() => {
  calcMaterials();
});

const characterBreakthroughList = [
  { lv: 10, money: 24000, materials: { rank: 'C', num: 4 } },
  { lv: 20, money: 56000, materials: { rank: 'B', num: 12 } },
  { lv: 30, money: 120000, materials: { rank: 'B', num: 20 } },
  { lv: 40, money: 200000, materials: { rank: 'A', num: 10 } },
  { lv: 50, money: 400000, materials: { rank: 'A', num: 20 } },
].reduce((list, item, index) => {
  const d = { ...item, sum: { A: 0, B: 0, C: 0, money: 0 } };
  if (index > 0) {
    // ひとつ前の累計情報をコピー
    Object.assign(d.sum, list[index - 1].sum);
  }
  d.sum[item.materials.rank] += item.materials.num;
  d.sum.money += item.money;
  return list.concat(d);
}, []);

type LvMaterial = {
  lv: string;
  require: number;
  materials: { rank: string; num: number };
  sumExp: number;
  sum: { rank: string; num: number };
};

const characterExpList: LvMaterial[] = [
  { lv: '0～10', require: 6000 },
  { lv: '11～20', require: 24000 },
  { lv: '21～30', require: 60000 },
  { lv: '31～40', require: 135000 },
  { lv: '41～50', require: 225000 },
  { lv: '51～60', require: 450000 },
].reduce((list, item, index) => {
  const d = { ...item, materials: { rank: 'A', num: Math.ceil(item.require / 3000) }, sumExp: 0, sum: { rank: 'A', num: 0 } };
  if (index > 0) {
    d.sumExp = list[index - 1].sumExp;
  }
  d.sumExp += d.require;
  d.sum.num = Math.ceil(d.sumExp / 3000);
  list.push(d);
  return list;
}, [] as LvMaterial[]);

const weaponBreakthroughList = [
  { lv: 10, money: 12000, materials: { rank: 'C', num: 4 } },
  { lv: 20, money: 28000, materials: { rank: 'B', num: 12 } },
  { lv: 30, money: 60000, materials: { rank: 'B', num: 20 } },
  { lv: 40, money: 100000, materials: { rank: 'A', num: 10 } },
  { lv: 50, money: 200000, materials: { rank: 'A', num: 20 } },
].reduce((list, item, index) => {
  const d = { ...item, sum: { A: 0, B: 0, C: 0, money: 0 } };
  if (index > 0) {
    // ひとつ前の累計情報をコピー
    Object.assign(d.sum, list[index - 1].sum);
  }
  d.sum[item.materials.rank] += item.materials.num;
  d.sum.money += item.money;
  return list.concat(d);
}, []);

const weaponExpList: LvMaterial[] = [
  { lv: '0～10', require: 4000 },
  { lv: '11～20', require: 16000 },
  { lv: '21～30', require: 40000 },
  { lv: '31～40', require: 90000 },
  { lv: '41～50', require: 150000 },
  { lv: '51～60', require: 300000 },
].reduce((list, item, index) => {
  const d = { ...item, materials: { rank: 'A', num: Math.ceil(item.require / 3000) }, sumExp: 0, sum: { rank: 'A', num: 0 } };
  if (index > 0) {
    d.sumExp = list[index - 1].sumExp;
  }
  d.sumExp += d.require;
  d.sum.num = Math.ceil(d.sumExp / 3000);
  list.push(d);
  return list;
  return list;
}, [] as LvMaterial[]);

const materialNameTable = {
  money: 'ディニー',
  expert: 'ｴｷｽﾊﾟｰﾄ',
  boss: '週ボス',
};

const CoreSkillLabels = {
  0: '',
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
};

const coreSkillMaterials = [
  { lv: 1, money: 5000, expert: 0, boss: 0 },
  { lv: 2, money: 12000, expert: 2, boss: 0 },
  { lv: 3, money: 28000, expert: 4, boss: 0 },
  { lv: 4, money: 60000, expert: 9, boss: 2 },
  { lv: 5, money: 100000, expert: 15, boss: 3 },
  { lv: 6, money: 200000, expert: 30, boss: 4 },
].reduce((list, item, index) => {
  const d = { ...item, no: CoreSkillLabels[item.lv], sum: { money: 0, expert: 0, boss: 0 } };
  if (index > 0) {
    // ひとつ前の累計情報をコピー
    Object.assign(d.sum, list[index - 1].sum);
  }
  d.sum.money += item.money;
  d.sum.expert += item.expert;
  d.sum.boss += item.boss;

  return list.concat(d);
}, []);

const skillMaterials = [
  { lv: 2, money: 2000, materials: { rank: 'C', num: 2 } },
  { lv: 3, money: 3000, materials: { rank: 'C', num: 3 } },
  { lv: 4, money: 6000, materials: { rank: 'B', num: 2 } },
  { lv: 5, money: 9000, materials: { rank: 'B', num: 3 } },
  { lv: 6, money: 12000, materials: { rank: 'B', num: 4 } },
  { lv: 7, money: 18000, materials: { rank: 'B', num: 6 } },
  { lv: 8, money: 45000, materials: { rank: 'A', num: 5 } },
  { lv: 9, money: 67500, materials: { rank: 'A', num: 8 } },
  { lv: 10, money: 90000, materials: { rank: 'A', num: 10 } },
  { lv: 11, money: 112500, materials: { rank: 'A', num: 12 } },
  { lv: 12, money: 135000, materials: { rank: 'A', num: 15 }, ex: 1 },
].reduce((list, item, index) => {
  const d = { ...item, sum: { A: 0, B: 0, C: 0, money: 0 } };
  if (index > 0) {
    // ひとつ前の累計情報をコピー
    Object.assign(d.sum, list[index - 1].sum);
  }
  d.sum[item.materials.rank] += item.materials.num;
  d.sum.money += item.money;
  return list.concat(d);
}, []);
</script>
<style lang="scss" scoped>
h1,
h2,
h3 {
  margin: 0.25em 0;
}
hr {
  margin: 0;
}

.calculator {
  padding: 0.5em;
  border: 1px solid white;

  .conditions {
    border-bottom: 1px solid white;
    .skill {
      display: flex;
      align-items: center;
      span {
        margin-right: 0.25em;
      }
    }
    .skill + .skill {
      margin-left: 0.75em;
    }
  }

  .require-materials {
    td {
      text-align: center;
    }
    tbody {
      th {
        text-align: left;
      }
    }
  }
}

table {
  border-collapse: collapse;
  th,
  td {
    border: 1px solid white;
    padding: 0em 0.25em;
  }
}

.materials {
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-right: 1em;
  }
}

.sum {
  .material + .material {
    margin-left: 0.5em;
  }
}
</style>
