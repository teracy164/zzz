<template>
  <div class="flex justify-center">
    <Card>
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
        ゼンレスゾーンゼロ主人公のアキラ・リンのねんどろいどが登場！！
        <br />

        <div class="my-5">
          <div class="w-full flex flex-col justify-center items-center">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181325%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1hucue4%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzM2MDExNC4yMC4xLjE3MzczNjAzNzYuMC4wLjA."
              rel="nofollow"
            >
              <img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181325.jpg"
            /></a>
            <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="" />
            <p>© Copyright (C) miHoYo. All Rights Reserved</p>
          </div>
          <div class="w-full flex flex-col justify-center items-center">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181324%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252asmhaxs%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzM2MDExNC4yMC4xLjE3MzczNjAzODAuMC4wLjA."
              rel="nofollow"
            >
              <img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181324.jpg"
            /></a>
            <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="" />
            <p>© Copyright (C) miHoYo. All Rights Reserved</p>
          </div>
        </div>

        <p class="my-5">
          付属のオプションパーツで、好きな表情・ポーズで飾ろう！
          <br />
          <br />
          【付属品（リン）】
          <br />
          　・表情パーツ：「微笑み顔」「ウインク顔」「軽蔑顔」
          <br />
          　・オプションパーツ：「ビデオテープ」「車のキー」「宅配紙袋」「ゲーム機」など
          <br />
          <br />
          【付属品（アキラ）】
          <br />
          　・表情パーツ：「微笑み顔」「優しい顔」「無力顔」
          <br />
          　・オプションパーツ：「宅配ボックス」「スマホ」「レシート」「ビデオテープ」など
          <br />
        </p>

        <div class="my-2 flex justify-center">
          <a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+5YJRL" rel="nofollow">
            <img
              border="0"
              width="468"
              height="60"
              alt=""
              src="https://www26.a8.net/svt/bgt?aid=250118024166&wid=001&eno=01&mid=s00000003017001001000&mc=1"
          /></a>
          <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+5YJRL" alt="" />
        </div>

        <h3 class="mt-5"><label class="bg-red-400 px-2">商品情報</label></h3>
        <table class="item-info">
          <tbody>
            <tr>
              <th>発売日</th>
              <td>2025年9月</td>
            </tr>
            <tr>
              <th>価格</th>
              <td>各7,200円(税込)</td>
            </tr>
            <tr>
              <th>製品仕様</th>
              <td>サイズ：全高：約100mm(ノンスケール) 、素材：プラスチック</td>
            </tr>
            <tr>
              <th>販売サイト</th>
              <td>
                <ul>
                  <li>
                    <p>【あみあみ】</p>
                    <div>
                      <el-link type="primary" class="ml-5">
                        <a
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181325%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1hucue4%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzM2MDExNC4yMC4xLjE3MzczNjAzNzYuMC4wLjA."
                          rel="nofollow"
                          >ねんどろいど ゼンレスゾーンゼロ アキラ[グッドスマイルアーツ上海]《０９月予約》</a
                        >
                        <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BW8O2" alt="" />
                      </el-link>
                    </div>
                    <div>
                      <el-link type="primary" class="ml-5">
                        <a
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181324%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252asmhaxs%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzM2MDExNC4yMC4xLjE3MzczNjAzODAuMC4wLjA."
                          rel="nofollow"
                          >ねんどろいど ゼンレスゾーンゼロ リン[グッドスマイルアーツ上海]《０９月予約》</a
                        >
                        <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BW8O2" alt="" />
                      </el-link>
                    </div>
                  </li>
                  <li>
                    <p>【ホビーストック】</p>
                    <div>
                      <el-link type="primary" class="ml-5">
                        <a
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAY+DKSWFM+2ULW+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.hobbystock.jp%2Fitem%2Fview%2Fhby-acf-00012730"
                          rel="nofollow"
                          >ゼンレスゾーンゼロ ねんどろいど アキラ</a
                        >
                        <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WWAY+DKSWFM+2ULW+BW8O2" alt="" />
                      </el-link>
                    </div>
                    <div>
                      <el-link type="primary" class="ml-5">
                        <a
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAY+DKSWFM+2ULW+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.hobbystock.jp%2Fitem%2Fview%2Fhby-gcf-00017929"
                          rel="nofollow"
                          >ゼンレスゾーンゼロ ねんどろいど リン</a
                        >
                        <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=44WWAY+DKSWFM+2ULW+BW8O2" alt="" />
                      </el-link>
                    </div>
                  </li>
                  <li>
                    <p>【ホビーサーチ】</p>
                    <div>
                      <el-link type="primary" class="ml-5">
                        <a
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAY+EPADKI+24JA+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.1999.co.jp%2F11163880"
                          rel="nofollow"
                          >ねんどろいど アキラ (フィギュア)</a
                        >
                        <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=44WWAY+EPADKI+24JA+BW8O2" alt="" />
                      </el-link>
                    </div>
                    <div>
                      <el-link type="primary" class="ml-5">
                        <a
                          href="https://px.a8.net/svt/ejp?a8mat=44WWAY+EPADKI+24JA+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.1999.co.jp%2F11163882"
                          rel="nofollow"
                          >ねんどろいど リン (フィギュア)</a
                        >
                        <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=44WWAY+EPADKI+24JA+BW8O2" alt="" />
                      </el-link>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
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
const news = NEWS.find((item) => item.id === 'goods-20250121');

const description = [
  'ゼンレスゾーンゼロのエージェント「エレン・ジョー」のフィギュアの予約が開始されました',
  'バージョン1.5で追加される新衣装「月曜から金曜まで」のフィギュアです',
].join('\n');
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
