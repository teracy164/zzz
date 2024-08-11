<template>
  <div class="w-full h-full flex justify-center items-center">
    <div>
      <NuxtLink to="/build">
        <div class="card">
          <h1 class="text-xl font-bold mb-2">ビルドカード生成</h1>
          <p>所持しているキャラのビルドカードを生成できます。</p>
          <p>ドライバの詳細データが表示され、スコアの計算も行います</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/materials">
        <div class="card">
          <h1 class="text-xl font-bold mb-2">育成計算機</h1>
          <p>キャラ・音動機の育成に必要な素材の数を計算します</p>
          <p>各種レベルを指定して、指定レベルで必要な素材を計算できます</p>
          <p>レベルごとに必要な素材の一覧もこちらからご覧ください</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.card {
  margin: 1em;
}
.card:hover {
  background-color: #222;
}
</style>
