<template>
  <div>
    <div v-html="TAG_AD_WIDE_PC" class="hidden md:flex justify-center"></div>
    <div v-html="TAG_AD_WIDE_MOBILE" class="flex md:hidden justify-center"></div>
  </div>
</template>
<script lang="ts" setup>
import { TAG_AD_WIDE_PC, TAG_AD_WIDE_MOBILE } from '@/shared/ad';
</script>
