<template>
  <div>
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
              <th>レベル</th>
              <th>必要経験値</th>
              <th>累計経験値</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in characterExpList">
              <td>{{ item.lv }}</td>
              <td>{{ item.require }}</td>
              <td>{{ item.sum }}</td>
              <td>A x {{ item.materials }}</td>
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
              <td>{{ item.elite }}</td>
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

    <div style="margin-top: 5em"></div>

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
              <th>累計経験値</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in weaponExpList">
              <td>{{ item.lv }}</td>
              <td>{{ item.require }}</td>
              <td>{{ item.sum }}</td>
              <td>A x {{ item.materials }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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
  sum: number;
  materials: number;
};

const characterExpList: LvMaterial[] = [
  { lv: '0～10', require: 6000 },
  { lv: '11～20', require: 24000 },
  { lv: '21～30', require: 60000 },
  { lv: '31～40', require: 135000 },
  { lv: '41～50', require: 225000 },
  { lv: '51～60', require: 450000 },
].reduce((list, item, index) => {
  const sum = (list[index - 1]?.sum || 0) + item.require;
  list.push({
    ...item,
    sum,
    materials: sum / 3000,
  });
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
  const sum = (list[index - 1]?.sum || 0) + item.require;
  list.push({
    ...item,
    sum,
    materials: Math.ceil(sum / 3000),
  });
  return list;
}, [] as LvMaterial[]);

const materialNameTable = {
  money: 'ディニー',
  elite: 'ｴｷｽﾊﾟｰﾄ',
  boss: '週ボス',
};

const coreSkillMaterials = [
  { no: 'A', money: 5000, elite: 0, boss: 0 },
  { no: 'B', money: 12000, elite: 2, boss: 0 },
  { no: 'C', money: 28000, elite: 4, boss: 0 },
  { no: 'D', money: 60000, elite: 9, boss: 2 },
  { no: 'E', money: 100000, elite: 15, boss: 3 },
  { no: 'F', money: 200000, elite: 30, boss: 4 },
].reduce((list, item, index) => {
  const d = { ...item, sum: { money: 0, elite: 0, boss: 0 } };
  if (index > 0) {
    // ひとつ前の累計情報をコピー
    Object.assign(d.sum, list[index - 1].sum);
  }
  d.sum.money += item.money;
  d.sum.elite += item.elite;
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
  { lv: 12, money: 135000, materials: { rank: 'A', num: 15 } },
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
h2 {
  margin: 0.25em 0;
}
hr {
  margin: 0;
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

  .sum {
    .material + .material {
      margin-left: 0.5em;
    }
  }
}
</style>
