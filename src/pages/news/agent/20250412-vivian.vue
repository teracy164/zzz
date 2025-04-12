<template>
  <NewsTemplate :news="news">
    <div class="">
      ビビアンの素材が判明！
      <br />
      HoYoLABの育成ガイドにて確認することができます

      <div class="m-2">
        <img
          src="https://upload-os-bbs.hoyolab.com/upload/2025/04/12/179183172/c2285f8f16119daab1b298231ee1e91f_7480056480709444968.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
          style="width: 100%; object-fit: contain"
        />
      </div>
    </div>

    <AdsCarouselAmiami class="my-5" />

    <div>
      <h3>
        <label class="bg-yellow-500">要警戒狩り</label>
      </h3>
      <div class="pl-5">
        <p>必要な素材は「狂信の塊」です</p>
        <div class="flex flex-col md:flex-row mb-2">
          <div class="mb-2">
            <img alt="狂信の塊" src="/images/materials/notorious-hunt/bringer.png" style="width: 300px; object-fit: contain" class="mx-2" />
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
          <p>「サクリファイス・ブリンガー」から取得できます</p>
          <img
            alt="サクリファイス・ブリンガー"
            src="/images/enemies/notorious-hunt/bringer.png"
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
        <p>必要な素材は「高次元データ：閃く雷光」です</p>
        <div class="flex flex-col md:flex-row mb-2">
          <div class="mb-2">
            <img
              alt="高次元データ：閃く雷光"
              src="/images/materials/expert-challenge/thracian.png"
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
          <p>「トラキアン」から取得できます</p>
          <img
            alt="トラキアン"
            src="/images/enemies/expert-challenge/thracian.png"
            style="max-width: 300px; max-height: 200px; object-fit: contain"
          />
        </div>
      </div>
    </div>
  </NewsTemplate>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/data/news';

const news = NEWS.find((n) => n.id === 'agent-20250412');
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
