<template>
  <div class="flex justify-center">
    <Card class="grow" style="max-width: 95vw">
      <div class="relative">
        <h1 class="bg-red-500 p-2">
          <label>{{ news.title }}</label>
        </h1>
        <div class="absolute text-sm text-gray-500" style="bottom: 100%; right: 0; font-size: 0.7em; line-height: 1em">
          {{ news.createdAt }}
        </div>
      </div>

      <div class="flex justify-end my-2">
        <ShareBtnTwitter :title="news.title" :page-url="getPageUrl()" />
      </div>

      <div class="mb-5">
        バージョン1.5でゼンレスゾーンゼロ初の別衣装が実装されます！
        <br />
        公式Xから新衣装の紹介がポストされましたが、ファッション雑誌のような紹介の仕方がおしゃれですね✨
      </div>

      <div class="flex justify-center fw-full">
        <Tweet tweet-id="1881190350586548488" style="width: 400px; max-width: 80vw" />
      </div>

      <div class="mt-5">
        対象エージェントはアストラ・エレン・ニコの3名！
        <br />
        しかも、ニコの衣装はイベント報酬として配布されますので、逃さずゲットしましょう！！
      </div>

      <div class="flex justify-center flex-wrap">
        <img src="https://pbs.twimg.com/media/GhtI5WmbsAAeHLL?format=jpg" class="w-full md:w-[600px]" />

        <div class="flex justify-center flex-wrap">
          <img src="https://pbs.twimg.com/media/GhtI7Qna8AAI1Le?format=jpg" class="w-full md:w-[33%]" />
          <img src="https://pbs.twimg.com/media/GhtI7QeaUAAqaVN?format=jpg" class="w-full md:w-[33%]" />
          <img src="https://pbs.twimg.com/media/GhtI5Wma0AAXIex?format=jpg" class="w-full md:w-[33%]" />
        </div>
      </div>

      <div class="my-5">
        バージョン1.5は1月22日（水）にリリースされます！
        <br />
        原神だと新衣装実装のバージョン中は割引き販売になるので、ゼンゼロも同じようにバージョン1.5期間中は割引きになるのではないかと思います。
        <br />
        気になる方はこの機会に購入しちゃいましょう！！
      </div>

      <div class="flex justify-center">
        <div class="m-1">
          <a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+5Z6WX" rel="nofollow">
            <img
              border="0"
              width="125"
              height="125"
              alt=""
              src="https://www21.a8.net/svt/bgt?aid=250118024166&wid=001&eno=01&mid=s00000003017001004000&mc=1"
          /></a>
          <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+5Z6WX" alt="" />
        </div>
        <div class="m-1">
          <a href="https://px.a8.net/svt/ejp?a8mat=44WWAY+DKSWFM+2ULW+6GZCH" rel="nofollow">
            <img
              border="0"
              width="125"
              height="125"
              alt=""
              src="https://www21.a8.net/svt/bgt?aid=250118026821&wid=001&eno=01&mid=s00000013298001087000&mc=1"
          /></a>
          <img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=44WWAY+DKSWFM+2ULW+6GZCH" alt="" />
        </div>
        <div class="m-1">
          <a href="https://px.a8.net/svt/ejp?a8mat=44WWAY+EPADKI+24JA+6FP1T" rel="nofollow">
            <img
              border="0"
              width="125"
              height="125"
              alt=""
              src="https://www21.a8.net/svt/bgt?aid=250118026889&wid=001&eno=01&mid=s00000009919001081000&mc=1"
          /></a>
          <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=44WWAY+EPADKI+24JA+6FP1T" alt="" />
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/data/news';
import Tweet from 'vue-tweet';
const news = NEWS.find((item) => item.id === 'skin-20250120');

const description = ['バージョン1.5でアストラ・エレン・ニコの新衣装が実装されます！さらにニコの衣装は配布！！'].join('\n');

const tagTweet = `
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          New Eridan Vol.01 I エージェントの新コスチュームが登場！<br /><br />ンナ！ンナ！<br />（やったねドゥーカ！おめでとうドゥーカ！）<br /><br />ンナナナ、ンナナ！<br />（編集長が、最近ドゥーカが担当しているコラムが好評だから、THE
          NEW&#39;Sの別冊『Eridan』の再開をドゥーカに任せたいって！）… <a href="https://t.co/XXuhZQQLeE">pic.twitter.com/XXuhZQQLeE</a>
        </p>
        &mdash; ゼンレスゾーンゼロ公式 (@ZZZ_JP)
        <a href="https://twitter.com/ZZZ_JP/status/1881190346425770482?ref_src=twsrc%5Etfw">January 20, 2025</a>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"/>
`;

useSeoMeta({
  title: news.title,
  ogTitle: news.title,
  description,
  ogDescription: description,
});

const getPageUrl = () => {
  return location.href;
};
</script>
<style lang="scss" scoped>
table.item-info {
  th,
  td {
    border: 1px solid lightgray;
    padding: 0.25em;
  }
  th {
    min-width: 5em;
    text-align: left;
  }
  li + li {
    margin-top: 0.5em;
  }
}
</style>
