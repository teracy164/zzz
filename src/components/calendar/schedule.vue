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
  .fc-header-toolbar {
    margin-bottom: 0.25em !important;
    .fc-toolbar-title {
      font-size: 1.25em !important;
    }
    .fc-button {
      padding: 0 0.25em !important;
    }
  }
  .fc-day-today {
    background-color: rgb(82, 82, 39) !important;
  }
  .fc-daygrid-day-number {
    font-size: 0.8em !important;
  }
}
</style>
