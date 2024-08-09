<template>
  <div>
    <h1>Sランクキャラ</h1>
    <div style="display: flex">
      <div style="margin-right: 2em">
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
              <th>Aランク素材<br />必要数</th>
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
    </div>

    <div style="margin-top: 5em"></div>

    <h1>Sランク音動機</h1>
    <div style="display: flex">
      <div style="margin-right: 2em">
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
              <th>Aランク素材<br />必要数</th>
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
</style>
