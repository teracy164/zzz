<template>
  <div class="ads-carousel amiami">
    <el-carousel :autoplay="autoplay" :interval="4000" arrow="always" type="card" height="200px">
      <el-carousel-item v-for="item in items" :key="item">
        <div v-html="item" class="item"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts" setup>
const { items } = defineProps<{
  /** 広告埋め込用DOM文字列 */
  items: string[];
}>();

const autoplay = items.length > 3;
</script>
<style lang="scss">
.ads-carousel {
  width: 100%;
  background-color: #222;

  .el-carousel__indicators {
    display: none;
  }

  .el-carousel__mask {
    display: none;
  }

  .item {
    display: flex;
    justify-content: center;
    // width: 200px;
    height: 200px;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
}
</style>
