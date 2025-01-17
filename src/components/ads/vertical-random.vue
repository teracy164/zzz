<template>
  <component :is="Component" />
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const paths = [
  () => import('@/components/ads/amiami-vertical.vue'),
  () => import('@/components/ads/colone-vertical.vue'),
  () => import('@/components/ads/dmm-vertical.vue'),
];

const index = Math.floor(Math.random() * paths.length);
const Component = defineAsyncComponent(paths[index]);
</script>
