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
  'ゼンレスゾーンゼロ用のツールです。ビルドカードの作成ができます。',
  'スコア計算にも対応しています。',
  'zenless zone zero build card',
].join('\n');

useSeoMeta({
  title: 'ZZZ Build Card Creator',
  ogTitle: 'ZZZ Build Card Creator',
  description,
  ogDescription: description,
});
</script>
