<template>
  <div>
    <h1>Sランクキャラ</h1>
    <div class="materials">
      <div>
        <h2>突破素材</h2>
        <ul>
          <li>Aランク素材ｘ30</li>
          <li>Bランク素材ｘ32</li>
          <li>Cランク素材ｘ4</li>
          <li>ディニーｘ800000</li>
        </ul>
      </div>
      <div>
        <h2>育成素材</h2>
        <table>
          <thead>
            <tr>
              <th>レベル</th>
              <th>必要経験値</th>
              <th>累計経験値</th>
              <th>素材<br />(Aランク換算)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in characterExpList">
              <td>{{ item.lv }}</td>
              <td>{{ item.require }}</td>
              <td>{{ item.sum }}</td>
              <td>{{ item.materials }}</td>
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in skillMaterials">
              <td>{{ item.lv }}</td>
              <td>{{ item.money }}</td>
              <td>{{ item.materials }}</td>
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
              <th>精鋭素材</th>
              <th>週ボス素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in coreSkillMaterials">
              <td>{{ item.no }}</td>
              <td>{{ item.money }}</td>
              <td>{{ item.elite }}</td>
              <td>{{ item.boss }}</td>
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
        <ul>
          <li>Aランク素材ｘ30</li>
          <li>Bランク素材ｘ32</li>
          <li>Cランク素材ｘ4</li>
          <li>ディニーｘ400000</li>
        </ul>
      </div>
      <div>
        <h2>育成素材</h2>
        <table>
          <thead>
            <tr>
              <th>レベル</th>
              <th>必要経験値</th>
              <th>累計経験値</th>
              <th>素材<br />(Aランク換算)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in weaponExpList">
              <td>{{ item.lv }}</td>
              <td>{{ item.require }}</td>
              <td>{{ item.sum }}</td>
              <td>{{ item.materials }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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

const coreSkillMaterials = [
  { no: 'A', money: 5000, elite: 0, boss: 0 },
  { no: 'B', money: 12000, elite: 2, boss: 0 },
  { no: 'C', money: 28000, elite: 4, boss: 0 },
  { no: 'D', money: 60000, elite: 9, boss: 2 },
  { no: 'E', money: 100000, elite: 15, boss: 3 },
  { no: 'F', money: 200000, elite: 30, boss: 4 },
];

const skillMaterials = [
  { lv: 2, money: 2000, materials: 'Cランク素材x2' },
  { lv: 3, money: 3000, materials: 'Cランク素材x3' },
  { lv: 4, money: 6000, materials: 'Bランク素材x2' },
  { lv: 5, money: 9000, materials: 'Bランク素材x3' },
  { lv: 6, money: 12000, materials: 'Bランク素材x4' },
  { lv: 7, money: 18000, materials: 'Bランク素材x6' },
  { lv: 8, money: 45000, materials: 'Aランク素材x5' },
  { lv: 9, money: 67500, materials: 'Aランク素材x8' },
  { lv: 10, money: 90000, materials: 'Aランク素材x10' },
  { lv: 11, money: 112500, materials: 'Aランク素材x12' },
  { lv: 12, money: 135000, materials: 'Aランク素材x15' },
];
</script>
<style lang="scss" scoped>
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
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-right: 1em;
  }
}
</style>
