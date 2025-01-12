<template>
  <div class="flex flex-col h-full">
    <Header style="height: 3em; min-height: 3em; max-height: 3em" class="no-print" />
    <!-- for ad -->
    <div v-html="TAG_AD" class="hidden md:flex justify-center"></div>
    <div v-html="TAG_AD_WIDE_MOBILE" class="flex md:hidden justify-center"></div>
    <!-- for ad -->
    <main class="grow overflow-auto p-3">
      <NuxtPage />
      <!-- モバイルの場合、画面下部にオーバーレイ広告が表示されるため、スペースを明けておく -->
      <div class="block md:hidden" style="height: 90px"></div>
    </main>
    <div class="no-print text-center my-2 px-2 flex flex-wrap justify-between" style="font-size: 0.7rem">
      <div>Created by teracy</div>
      <el-link type="primary" size="small" href="https://x.com/teracy164" target="_blank"> 問い合わせはX（旧Twitter）まで </el-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { TAG_AD, TAG_AD_WIDE_MOBILE } from '@/shared/ad';

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
