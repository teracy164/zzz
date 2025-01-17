<template>
  <div class="h-full" style="width: 800px; max-width: 90vw">
    <div class="w-full flex flex-col justify-center items-center">
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
      <div class="text-center">
        <div class="flex flex-col items-start" style="width: 600px; max-width: 90vw">
          <h1>【イベントカレンダー】</h1>
          <CalendarSchedule class="w-full" :options="{ events }" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ZZZ_EVENTS } from '~/shared/data/schedule';

// FullCalendarのイベント型に変換
// 参考：https://fullcalendar.io/docs/event-object
const events = ZZZ_EVENTS.map((event) => ({
  title: event.name,
  start: new Date(event.from),
  end: new Date(event.to),
  allDay: true,
  backgroundColor: event.bgColor || undefined,
}));
</script>
<style lang="scss" scoped>
.card {
  margin: 1em;
  width: 30em;
  height: 10em;
}
.card:hover {
  background-color: #222;
}
</style>
