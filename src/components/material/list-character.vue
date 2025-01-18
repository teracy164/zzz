<template>
  <div>
    <h2>
      <label class="bg-red-300 px-2">キャラ</label>
    </h2>
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
            <tr v-for="item in materials.breakthrough">
              <td>{{ item.lv }}</td>
              <td>{{ item.money.toLocaleString() }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td class="sum">
                <p class="flex items-center">
                  <NuxtImg src="/images/denny.webp" alt="ディニー" style="width: 1em; height: 1em" />
                  <span class="mx-1">x</span>
                  {{ item.sum.money.toLocaleString() }}
                </p>
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
            <tr v-for="item in materials.exp">
              <td>{{ item.lv }}</td>
              <td>{{ item.require.toLocaleString() }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td>{{ item.sumExp.toLocaleString() }}</td>
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
            <tr v-for="item in materials.skill">
              <td>{{ item.lv }}</td>
              <td>{{ item.money.toLocaleString() }}</td>
              <td>{{ item.materials.rank }} x {{ item.materials.num }}</td>
              <td class="sum">
                <p class="flex items-center">
                  <NuxtImg src="/images/denny.webp" alt="ディニー" style="width: 1em; height: 1em" />
                  <span class="mx-1">x</span>
                  {{ item.sum.money.toLocaleString() }}
                </p>
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
            <tr v-for="item in materials.core">
              <td>{{ item.no }}</td>
              <td>{{ item.money.toLocaleString() }}</td>
              <td>{{ item.expert }}</td>
              <td>{{ item.boss }}</td>
              <td>
                <template v-for="key in Object.keys(item.sum)">
                  <p v-if="key === 'money'" class="flex items-center">
                    <NuxtImg src="/images/denny.webp" alt="ディニー" style="width: 1em; height: 1em" />
                    <span class="mx-1">x</span>
                    {{ item.sum.money.toLocaleString() }}
                  </p>
                  <p v-else-if="item.sum[key]">{{ materialNameTable[key] }} x {{ item.sum[key] }}</p>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { $zzz } = useNuxtApp();

const selectedRank = ref<'S' | 'A'>('S');

const materials = $zzz.getCharacterMaterials(selectedRank.value);

const materialNameTable = {
  money: 'ディニー',
  expert: 'ｴｷｽﾊﾟｰﾄ',
  boss: '週ボス',
};
</script>
