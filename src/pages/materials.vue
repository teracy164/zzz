<template>
  <div class="materials">
    <MaterialCalculator />

    <div class="flex justify-center">
      <div class="m-2">
        <!-- amiami -->
        <a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+66H9D" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt=""
            src="https://www20.a8.net/svt/bgt?aid=250118024166&wid=001&eno=01&mid=s00000003017001038000&mc=1"
        /></a>
        <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+66H9D" alt="" />
      </div>
      <div class="m-2">
        <!-- GAMERS -->
        <a href="https://px.a8.net/svt/ejp?a8mat=44WUR2+3RQUPE+4AHY+5ZMCH" rel="nofollow">
          <img
            border="0"
            width="300"
            height="250"
            alt=""
            src="https://www20.a8.net/svt/bgt?aid=250116014228&wid=001&eno=01&mid=s00000020023001006000&mc=1"
        /></a>
        <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=44WUR2+3RQUPE+4AHY+5ZMCH" alt="" />
      </div>
    </div>

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
