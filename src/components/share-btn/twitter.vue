<template>
  <a :href="`https://twitter.com/intent/tweet?text=${message}`" target="_blank" rel="noopener noreferrer">
    <el-button>
      <img src="/images/x-logo-white.png" style="width: 1em; height: 1em" />
      <span class="px-2">シェア</span>
    </el-button>
  </a>
</template>
<script lang="ts" setup>
const { title, pageUrl, hashTags } = defineProps<{ title: string; pageUrl: string; hashTags?: string[] }>();

const hashTag = hashTags?.map((tag) => `%23${tag}`).join(' ') || '';
const message = encodeURI(`${title}\n\n${pageUrl}` + (hashTag ? '\n\n' : '')) + hashTag;
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
