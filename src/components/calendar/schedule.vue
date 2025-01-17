<template>
  <FullCalendar class="schedule-calendar" :options="calendarOptions" />
</template>
<script lang="ts" setup>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const { options = {} } = defineProps<{ options?: { events: { title: string; start: Date; end: Date }[] } }>();

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: 'ja',
  ...options,
};
</script>
<style lang="scss">
.schedule-calendar {
  .fc-day-today {
    background-color: rgb(82, 82, 39) !important;
  }
}
</style>
