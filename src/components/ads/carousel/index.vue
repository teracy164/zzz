<template>
  <div class="ads-carousel amiami">
    <el-carousel :autoplay="autoplay" :interval="4000" :cardScale="0.7" arrow="always" type="card" height="200px">
      <el-carousel-item v-for="item in items" :key="item" class="w-[70vw] md:w-full">
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
    background-color: rgba(0, 0, 0, 0);
  }

  .el-carousel__arrow {
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

  .el-carousel__item {
    display: flex;
    justify-content: center;
  }

  .item {
    display: flex;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
