<template>
  <div class="materials">
    <MaterialCalculator />
    <MaterialList />
    <!-- モバイルの場合画面下部に固定で表示されるため、スペースを明けておく -->
    <div style="height: 90px"></div>
  </div>
</template>
<script lang="ts" setup>
const description = [
  'ゼンレスゾーンゼロ用の育成計算機です。',
  'キャラのLvやスキルのLv、音動機のLvを指定することで、育成に必要な素材をまとめて計算します。',
  'キャラや音動機の育成素材の段階ごとの必要数もこちらで確認することができます。',
].join('\n');

useSeoMeta({
  title: '育成計算機 | ゼンレスゾーンゼロ | ゼンゼロ',
  ogTitle: '育成計算機 | ゼンレスゾーンゼロ | ゼンゼロ',
  description,
  ogDescription: description,
});
</script>
