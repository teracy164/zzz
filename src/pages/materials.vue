<template>
  <div class="materials">
    <MaterialCalculator />
    <MaterialList />
  </div>
</template>
<script lang="ts" setup>
const description = [
  'ゼンレスゾーンゼロ用の育成計算機です。',
  'キャラのLvやスキルのLv、音動機のLvを指定することで、育成に必要な素材をまとめて計算します。',
  'キャラや音動機の素材一覧もこちらで確認可能です。',
].join('\n');

useSeoMeta({
  title: '育成計算機 | ゼンレスゾーンゼロ | ゼンゼロ',
  ogTitle: '育成計算機 | ゼンレスゾーンゼロ | ゼンゼロ',
  description,
  ogDescription: description,
});
</script>
