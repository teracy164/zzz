<template>
  <div class="flex flex-col h-full">
    <Header style="height: 3em; min-height: 3em; max-height: 3em" class="no-print" />
    <main class="grow overflow-auto flex flex-col px-1 md:px-0">
      <div class="py-1">
        <AdsWide />
      </div>

      <div class="flex grow">
        <AdsVerticalRandom class="mr-2" />

        <div class="flex grow">
          <NuxtPage class="grow order-2 lg:order-1" />
          <div class="flex justify-center order-1 lg:order-2">
            <Card class="ml-0 lg:ml-2 hidden lg:block w-[160px] max-w-[95vw]" style="padding: 0.5em">
              <h3>
                <label class="bg-red-400 px-2">最近のニュース</label>
              </h3>
              <div>
                <NewsItem v-for="item in news" :item="item" class="mb-2" />
              </div>
            </Card>
          </div>
        </div>

        <AdsVerticalRandom class="ml-2" />
      </div>

      <div class="no-print text-center my-2 px-2 flex flex-wrap justify-between" style="font-size: 0.7rem">
        <div>
          <span>Created by </span>
          <el-link type="primary"><a href="https://room.teracy.link" target="_blank">teracy</a></el-link>
        </div>
        <el-link type="primary" size="small" href="https://x.com/teracy164" target="_blank"> 問い合わせはX（旧Twitter）まで </el-link>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/data/news';

const news = NEWS.slice(0, 5);

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
