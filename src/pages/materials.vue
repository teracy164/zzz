<template>
  <div class="materials">
    <MaterialCalculator />
    <MaterialList />
  </div>
</template>
<script lang="ts">
const description = `ゼンレスゾーンゼロ用の育成計算機です。
キャラのLvやスキルのLv、音動機のLvを指定することで、育成に必要な素材をまとめて計算します。
キャラや音動機の素材一覧もこちらで確認可能です。
`;

useSeoMeta({
  title: 'ゼンレスゾーンゼロ　育成計算機',
  ogTitle: 'ゼンレスゾーンゼロ　育成計算機',
  description,
  ogDescription: description,
});
</script>
<style lang="scss"></style>
