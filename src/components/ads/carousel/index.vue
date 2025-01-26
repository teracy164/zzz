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
    // display: none;
    background-color: rgba(0, 0, 0, 0);
  }

  .el-carousel__arrow {
    // zoom: 150%;
    border: 1px solid white;

    &.el-carousel__arrow--left {
      left: 1em !important;
    }
    &.el-carousel__arrow--right {
      right: 1em !important;
    }

    &:hover {
      background-color: #333;
    }
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
