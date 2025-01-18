<template>
  <div class="flex justify-center">
    <Card style="width: 800px; max-width: 95vw">
      Google Chrome拡張機能として「ZZZ Score Calculator」をリリースしています
      <div>
        <el-link type="primary">
          <a
            target="_blank"
            href="https://chromewebstore.google.com/detail/zzz-score-calculator/ibbbkbnhocldehlkbemmlgkmdlbckjmn?authuser=0&hl=ja"
          >
            ZZZ Score Calculator
          </a>
        </el-link>
      </div>

      <h1 class="mt-10">
        <label class="bg-red-400 px-2">ZZZ Score Calculatorとは</label>
      </h1>
      <p>
        ワンクリックでお手軽にリッチなビルドカードが作れるChrome拡張です！！
        <br />
        以下の画像のように公式の戦績ツール内に各ドライバの詳細ステータスを表示し、スコアの計算を行います。
        <br />
        算出されたスコアをSS～Cで評価するため、ひと目で強いかどうかを判断することができます。
      </p>
      <div class="flex justify-center items-start">
        <img src="/images/build/build-card.png" style="width: 500px; max-width: 95vw; object-fit: contain" />
      </div>

      <h2 class="mt-10">
        <label class="bg-red-300 px-2">使い方</label>
      </h2>
      <p>HoYoLab内にある「戦績ツール」を開きます</p>
      <div class="flex justify-center items-start">
        <img src="/images/build/hoyolab-menu.jpg" style="height: 300px; object-fit: contain" />
      </div>
      <p class="mt-5">ビルドカードを作成したいエージェントを選択します</p>
      <div class="flex justify-center items-start">
        <img src="/images/build/agent-list.png" style="height: 150px; object-fit: contain" />
      </div>
      <p class="mt-5">ZZZ Score Calculatorを開きます</p>
      <div class="flex justify-center items-start">
        <img src="/images/build/chrome-ex.png" style="height: 400px; object-fit: contain" />
      </div>
      <p class="mt-5">オプションを選択し、「Calculate」ボタンを押下します</p>
      <p class="mt-2">オプションについて】</p>
      <ul class="list-disc pl-5">
        <li>スコアを表示：チェックを外すとスコアおよび評価が非表示となります</li>
        <li>ドライバを評価する：チェックを外すと評価のみ非表示となります</li>
        <li>計算方法：キャラのタイプによって参照するステータスを切り替えます</li>
        <li class="ml-5">攻撃力換算 ⇒ 基本的にはこっちでOK。</li>
        <li class="ml-5">異常マスタリー換算 ⇒ 異常キャラ用（雅は会心が大事なキャラなので微妙。。）</li>
      </ul>
      <div class="flex justify-center items-start">
        <img src="/images/build/chrome-ex-zoom.png" style="height: 400px; object-fit: contain" />
      </div>
      <p class="mt-5">「Calculate」ボタンを押下すると、結果が装備欄に埋め込まれます</p>
      <div class="flex justify-center items-start">
        <img src="/images/build/result.png" style="height: 600px; object-fit: contain" />
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import type { ZzzAvatar, ZzzData } from '@/types/zzz';
import type { StorageHistoryItem } from '@/types/storage';

const description = [
  'ゼンレスゾーンゼロ用のビルドカード生成ツールの「ZZZ Score Calculator」の紹介です。',
  'HoYoLab公式の戦績ツールでドライバの詳細を表示し、スコア計算およびスコアの評価を行います',
  '公式ツール内に埋め込むため、リッチなビルドカードがキャラ実装当日に利用可能です！',
].join('\n');

useSeoMeta({
  title: 'ビルドカード | ゼンレスゾーンゼロ | ゼンゼロ',
  ogTitle: 'ビルドカード | ゼンレスゾーンゼロ | ゼンゼロ',
  description,
  ogDescription: description,
});

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
