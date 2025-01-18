<template>
  <a :href="`https://twitter.com/intent/tweet?text=${title}&url=${pageUrl}`" target="_blank" rel="noopener noreferrer">
    <el-button>
      <img src="/images/x-logo-white.png" style="width: 1em; height: 1em" />
      <span class="px-2">シェア</span>
    </el-button>
  </a>
</template>
<script lang="ts" setup>
const { title, pageUrl } = defineProps<{ title: string; pageUrl: string }>();
</script>
<style lang="scss" scoped>
button {
  background-color: black;
  color: white !important;
}
button:hover {
  background-color: #333;
}
</style>
