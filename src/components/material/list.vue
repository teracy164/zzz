<template>
  <div>
    <h1 style="margin-top: 2em">必要素材リスト</h1>

    <h2>&lt;Sランクキャラ&gt;</h2>
    <div class="material-list">
      <div>
        <h3 class="font-bold">突破素材</h3>
        <table class="border">
          <thead>
            <tr>
              <th>Lv</th>
              <th>ディニー</th>
              <th>素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.character.breakthrough">
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
        <h3>育成素材</h3>
        <table class="border">
          <thead>
            <tr>
              <th rowspan="2">Lv</th>
              <th colspan="2">段階ごと</th>
              <th colspan="2">累計</th>
            </tr>
            <tr>
              <th>経験値</th>
              <th>素材</th>
              <th>経験値</th>
              <th>素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.character.exp">
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
        <h3>スキル</h3>
        <table class="border">
          <thead>
            <tr>
              <th>Lv</th>
              <th>ディニー</th>
              <th>素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.character.skill">
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
        <h3>コアスキル</h3>
        <table class="border">
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
            <tr v-for="item in materials.character.core">
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

    <h2>&lt;Sランク音動機&gt;</h2>
    <div class="material-list">
      <div>
        <h3>突破素材</h3>
        <table class="border">
          <thead>
            <tr>
              <th>Lv</th>
              <th>ディニー</th>
              <th>素材</th>
              <th>累計素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.weapon.breakthrough">
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
        <h3>育成素材</h3>
        <table class="border">
          <thead>
            <tr>
              <th rowspan="2">Lv</th>
              <th colspan="2">段階ごと</th>
              <th colspan="2">累計</th>
            </tr>
            <tr>
              <th>経験値</th>
              <th>素材</th>
              <th>経験値</th>
              <th>素材</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials.weapon.exp">
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
const { $zzz } = useNuxtApp();

const characterRank = ref<'S' | 'A'>('S');
const weaponRank = ref<'S' | 'A'>('S');

const materials = reactive({
  character: $zzz.getCharacterMaterials(characterRank.value),
  weapon: $zzz.getWeaponMaterials(weaponRank.value),
});

const materialNameTable = {
  money: 'ディニー',
  expert: 'ｴｷｽﾊﾟｰﾄ',
  boss: '週ボス',
};
</script>
<style lang="scss" scoped>
.material-list {
  font-size: 12px;
  line-height: 1.2em;
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
