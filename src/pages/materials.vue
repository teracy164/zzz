<template>
  <div class="materials">
    <MaterialCalculator />
    <Adsbygoogle ad-slot="5137039624" ad-format="auto" />
    <MaterialList />
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
