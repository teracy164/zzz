<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
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
