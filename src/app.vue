<template>
  <div>
    <Header class="no-print" />
    <main>
      <div class="main-contents">
        <NuxtPage />
      </div>
      <div class="no-print" style="text-align: center; margin: 2em 0; font-size: 0.7em">
        <el-link type="primary" size="small" href="https://x.com/teracy164" target="_blank"> 問い合わせはX（旧Twitter）まで </el-link>
        <div>Created by teracy</div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
const description = [
  'ゼンレスゾーンゼロ用のツールです。',
  'ビルドカードの作成ができ、スコア計算にも対応しています。',
  'また、キャラ・武器を育成するための素材の数を確認することできます。',
  'zenless zone zero build card and calculate score.',
  'materials list. and materials calculator',
].join('\n');

useSeoMeta({
  title: 'ZZZ Tools | ゼンレスゾーンゼロツール',
  ogTitle: 'ZZZ Tools | ゼンレスゾーンゼロツール',
  description,
  ogDescription: description,
});
</script>
