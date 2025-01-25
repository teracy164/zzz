<template>
  <div class="flex justify-center">
    <Card class="grow" style="width: 100%; max-width: 800px">
      <h1 class="bg-red-500 p-2">
        <label>{{ news.title }}</label>
      </h1>

      <div class="flex justify-end my-2">
        <ShareBtnTwitter :title="news.title" :page-url="getPageUrl()" />
      </div>

      <div class="">
        アストラの特別番組にてイヴリンお試しができます！！
        <br />
        ここでステータスも見ることができるんですが、コアスキルの育成素材を見ることができます！

        <div class="m-2">
          <img
            src="https://upload-os-bbs.hoyolab.com/upload/2025/01/25/179183172/fcbaff860c57568e0a337443a3d5f4e0_8705711589417626306.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
            style="width: 100%; object-fit: contain"
          />
        </div>
      </div>

      <div class="flex justify-center my-5 ads">
        <div class="m-1 w-[100px] md:w-[150px] max-w-[33%]" style="object-fit: contain">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181127%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252aaw8atc%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzc4ODM3Ny4zNS4xLjE3Mzc3ODg0MjUuMC4wLjA."
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181127.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="" />
        </div>
        <div class="m-1 w-[100px] md:w-[150px] max-w-[33%]" style="object-fit: contain">
          <a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+5Z6WX" rel="nofollow">
            <img border="0" alt="" src="https://www20.a8.net/svt/bgt?aid=250118024166&wid=001&eno=01&mid=s00000003017001004000&mc=1"
          /></a>
          <img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+5Z6WX" alt="" />
        </div>
        <div class="m-1 w-[100px] md:w-[150px] max-w-[33%]" style="object-fit: contain">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181324%26page%3Drt_02%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001"
            rel="nofollow"
          >
            <img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181324.jpg"
          /></a>
          <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="" />
        </div>
      </div>

      <div>
        <h3>
          <label class="bg-yellow-500">要警戒狩り</label>
        </h3>
        <div class="pl-5">
          <p>必要な素材は「スカーレットエンジン」です</p>
          <div class="flex flex-col md:flex-row mb-2">
            <div class="mb-2">
              <img
                alt="スカーレットエンジン"
                src="/images/materials/notorious-hunt/pompey.png"
                style="width: 300px; object-fit: contain"
                class="mx-2"
              />
            </div>

            <div>
              <label class="bg-blue-400 px-2" style="border-radius: 2px">【必要数】</label>
              <div class="mx-2">
                <div class="flex"><label style="width: 4.5em">Aのみ：</label>0</div>
                <div class="flex"><label style="width: 4.5em">A～B：</label>0</div>
                <div class="flex"><label style="width: 4.5em">A～C：</label>0</div>
                <div class="flex"><label style="width: 4.5em">A～D：</label>2</div>
                <div class="flex"><label style="width: 4.5em">A～E：</label>5</div>
                <div class="flex"><label style="width: 4.5em">A～F：</label>9</div>
              </div>
            </div>
          </div>
          <div>
            <p>「ポンペイ」から取得できます</p>
            <img
              alt="ポンペイ"
              src="/images/enemies/notorious-hunt/pompey.png"
              style="max-width: 300px; max-height: 200px; object-fit: contain"
            />
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h3>
          <label class="bg-purple-500">エキスパート挑戦</label>
        </h3>
        <div class="pl-5">
          <p>必要な素材は「高次元データ：鋼鉄の悪意」です</p>
          <div class="flex flex-col md:flex-row mb-2">
            <div class="mb-2">
              <img
                alt="高次元データ：鋼鉄の悪意"
                src="/images/materials/expert-challenge/hans.png"
                style="width: 300px; object-fit: contain"
              />
            </div>

            <div>
              <div class="mx-2">
                <label class="bg-blue-400 px-2" style="border-radius: 2px">【必要数】</label>
                <div class="flex"><label style="width: 4.5em">Aのみ：</label>0</div>
                <div class="flex"><label style="width: 4.5em">A～B：</label>2</div>
                <div class="flex"><label style="width: 4.5em">A～C：</label>6</div>
                <div class="flex"><label style="width: 4.5em">A～D：</label>15</div>
                <div class="flex"><label style="width: 4.5em">A～E：</label>30</div>
                <div class="flex"><label style="width: 4.5em">A～F：</label>60</div>
              </div>
            </div>
          </div>
          <div>
            <p>「ハンス」から取得できます</p>
            <img
              alt="ハンス"
              src="/images/enemies/expert-challenge/hans.png"
              style="max-width: 300px; max-height: 200px; object-fit: contain"
            />
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/data/news';

const news = NEWS.find((n) => n.id === 'agent-20250125');

const description = [news.description].join('\n');
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
}
img {
  max-width: 80vw;
}
.ads {
  img {
    object-fit: contain;
    max-width: 100%;
  }
}
</style>
