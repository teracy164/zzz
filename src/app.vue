<template>
  <div class="flex flex-col h-full">
    <Header style="height: 3em; min-height: 3em; max-height: 3em" class="no-print" />
    <main class="grow overflow-auto px-3 flex flex-col">
      <div class="py-1">
        <AdsWide />
      </div>

      <NuxtPage class="grow" />

      <div class="py-1">
        <AdsWide />
      </div>
      <div class="no-print text-center my-2 px-2 flex flex-wrap justify-between" style="font-size: 0.7rem">
        <div>Created by teracy</div>
        <el-link type="primary" size="small" href="https://x.com/teracy164" target="_blank"> 問い合わせはX（旧Twitter）まで </el-link>
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
