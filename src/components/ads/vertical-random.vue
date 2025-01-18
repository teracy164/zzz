<template>
  <!-- 画面の横に常駐させるタイプの広告 -->
  <!-- 画面幅がたりないのでモバイルでは非表示 -->
  <div class="vertical-ad hidden lg:flex justify-center items-center">
    <div class="wrapper" v-html="ADS_A8_NET_VERTICAL[type]"></div>
  </div>
</template>
<script lang="ts" setup>
import { ADS_A8_NET_VERTICAL } from '~/shared/ad';

const keys = Object.keys(ADS_A8_NET_VERTICAL);

const index = Math.floor(Math.random() * keys.length);
const type = keys[index];
</script>
<style lang="scss" scoped>
.vertical-ad {
  min-width: 120px;
  position: relative;

  .wrapper {
    position: fixed;
    top: 60px;

    img {
      height: calc(100vh - 100px);
      object-fit: contain;
    }
  }
}
</style>
