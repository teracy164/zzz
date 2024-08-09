<template>
  <div>
    <div>ビルドカード生成</div>
    <div class="no-print" style="margin-bottom: 1em; display: flex">
      <el-button type="primary" @click="dialogInput.visible = true">input data</el-button>

      <div v-if="histories?.length" :key="updKey" style="margin-left: 2em">
        <el-select v-model="selected" style="width: 10em" @change="selectHistory">
          <el-option v-for="(h, index) in histories" :label="h.data.name_mi18n" :value="h.date">
            <div style="display: flex; justify-content: space-between">
              <span style="padding-right: 1em">{{ `[${h.date}]　${h.data.name_mi18n}` }}</span>
              <el-button type="text" title="履歴を削除" @click.stop="removeHistory(index)"> <span style="color: red">ｘ</span></el-button>
            </div>
          </el-option>
        </el-select>
        <el-button @click="clearHistories">履歴を削除</el-button>
      </div>
    </div>
    <el-dialog v-model="dialogInput.visible">
      <p>公式の戦績ツールからデータを取得して、以下に貼り付けてください</p>
      <el-tooltip trigger="click">
        <el-button> データの取得方法（How to get data）??? </el-button>
        <template #content>
          <div style="max-height: 50vh; overflow: auto">
            公式の戦績ツール（<a :href="officialTool" target="_blank">{{ officialTool }} </a>）で作業します
            <ul>
              <li>1. F12で開発者ツールを開き、画面をリロードします</li>
              <li>2. 「ネットワークタブ」に切り替えます</li>
              <li>3. キャラ情報を取得しているAPI(末尾がinfo?id_list[]=～)をクリック</li>
              <li>4. プレビュータブに切り替えて、「data」で右クリック⇒値をコピー</li>
            </ul>
            <img src="/assets/images/help/help.png" style="max-width: 95vw" />
          </div>
        </template>
      </el-tooltip>

      <div style="margin: 1em 0">
        <el-input type="textarea" v-model="json" :rows="5" />
        <div style="margin-top: 1em; display: flex; justify-content: flex-end">
          <el-button type="primary" @click="parse()">生成</el-button>
        </div>
      </div>
    </el-dialog>

    <div v-if="avatar">
      <p class="no-print">スコアは「会心率 x 2 + 会心ダメージ + 攻撃力%」で計算しています</p>
      <AvatarCard v-if="avatar" :key="updKey" :avatar="avatar" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ZzzAvatar, ZzzData } from '@/types/zzz';
import type { StorageHistoryItem } from '@/types/storage';

const { $zzz } = useNuxtApp();

const json = ref<string>('');
const avatar = ref<ZzzAvatar>();
const updKey = ref(0);

const selected = ref<string>();
const histories = ref<StorageHistoryItem[]>([]);

const dialogInput = reactive({
  visible: false,
});

const officialTool = 'https://act.hoyolab.com/app/mihoyo-zzz-game-record/index.html';

onMounted(() => {
  histories.value = $zzz.loadHistory();
});

const selectHistory = (key: string) => {
  const target = histories.value.find((h) => h.date === key);
  if (target) {
    createBuildCard(target.data);
  }
};

const removeHistory = (index: number) => {
  $zzz.removeHistory(index);
  reloadHistory();
};

const reloadHistory = () => {
  histories.value = $zzz.loadHistory();
};

const clearHistories = () => {
  avatar.value = null;
  $zzz.clearHistory();
  reloadHistory();
};

const parse = () => {
  try {
    const parsed = JSON.parse(json.value) as ZzzData;
    if (parsed.avatar_list?.length) {
      const a = parsed.avatar_list[0];
      createBuildCard(a);
      const history = $zzz.saveAvatar(a);
      reloadHistory();
      selected.value = history.date;
      dialogInput.visible = false;
    }
  } catch (err) {
    console.error(err);
    alert('invalid format');
  }
};

const createBuildCard = (a: ZzzAvatar) => {
  avatar.value = a;
  // 変更を検知させる
  updKey.value++;
};
</script>
<style lang="scss" setup>
.input-model {
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  overflow: hidden;

  .input-model-wrapper {
    overflow: auto;
    background-color: black;
  }
}
</style>
