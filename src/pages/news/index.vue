<template>
  <Card>
    <h1>
      <label class="bg-red-400">ニュース一覧</label>
    </h1>
    <template v-for="item in NEWS">
      <NewsItem :item="item" class="mb-2" />
    </template>
  </Card>
</template>
<script lang="ts" setup>
import { NEWS } from '~/shared/data/news';
</script>
