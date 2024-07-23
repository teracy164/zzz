<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
      <div style="text-align: center; margin: 2em 0; font-size: 0.7em">
        <el-link type="primary" size="small" href="https://x.com/teracy164" target="_blank"> 問い合わせはX（旧Twitter）まで </el-link>
        <div>Created by teracy</div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: 'ZZZ Tools',
  ogTitle: 'ZZZ Tools | ゼンレスゾーンゼロツール',
  description: 'ゼンレスゾーンゼロ用のツールです。ビルドカードの作成ができます。',
  ogDescription: 'ゼンレスゾーンゼロ用のツールです。ビルドカードの作成ができます。',
});
</script>
<style lang="scss">
main {
  padding: 1em;
}
</style>
