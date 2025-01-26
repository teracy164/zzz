<template>
  <div>
    <h2>
      <label class="bg-red-300 px-2">音動機</label>
    </h2>
    <div class="flex items-center">
      <div v-for="rank in ['S', 'A', 'B']" class="mr-2">
        <input
          :id="`radio-list-weapon-${rank}`"
          v-model="selectedRank"
          type="radio"
          name="list-weapon-rank"
          :value="rank"
          @change="changeRank"
        />
        <label :for="`radio-list-weapon-${rank}`" class="px-2">{{ rank }}</label>
      </div>
    </div>
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
              <td>
                <div class="flex items-center">
                  <NuxtImg
                    :src="`/images/materials/weapon/exp_${item.materials.rank}.png`"
                    alt="経験値素材A"
                    style="width: 2em; height: 2em"
                  />
                  <span class="mx-1">x</span>
                  <span>{{ item.materials.num }}</span>
                </div>
              </td>
              <td>{{ item.sumExp.toLocaleString() }}</td>
              <td>
                <div class="flex items-center">
                  <NuxtImg :src="`/images/materials/weapon/exp_${item.sum.rank}.png`" alt="経験値素材A" style="width: 2em; height: 2em" />
                  <span class="mx-1">x</span>
                  <span>{{ item.sum.num }}</span>
                </div>
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

const selectedRank = ref<'S' | 'A' | 'B'>('S');

const materials = ref($zzz.getWeaponMaterials(selectedRank.value));

const changeRank = () => {
  materials.value = $zzz.getWeaponMaterials(selectedRank.value);
};
</script>
