<template>
  <div class="flex justify-center">
    <Card class="grow" style="width: 100%; max-width: 800px">
      <div class="relative">
        <h1 class="bg-red-500 p-2">
          <label>{{ news.title }}</label>
        </h1>
        <div class="absolute text-sm text-gray-500" style="bottom: 100%; right: 0; font-size: 0.7em; line-height: 1em">
          {{ news.createdAt }}
        </div>
      </div>

      <div class="flex justify-end my-2">
        <ShareBtnTwitter :title="news.title" :hash-tags="news.hashTags" :page-url="fullUrl" />
      </div>

      <div>
        <slot />
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import type { NewsItem } from '~/types/news';
import { useRuntimeConfig } from '#app';

const { news } = defineProps<{ news: NewsItem }>();
const description = [news.description].join('\n');
useSeoMeta({ title: news.title, ogTitle: news.title, description, ogDescription: description });

const config = useRuntimeConfig();
const fullUrl = `${config.public.baseURL}${useRoute().fullPath}`;
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 800px;
  object-fit: cover;
  object-position: 50% 96%;
}
</style>
<style lang="scss">
// 商品情報
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
  li + li {
    margin-top: 0.5em;
  }
}
</style>
