"use client";

import { useState } from "react";
import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewWeekAgenda,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "temporal-polyfill/global";
import "@schedule-x/theme-shadcn/dist/index.css";

export default function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const [dayBoundaries] = useState({
    start: "06:00",
    end: "18:00",
  });
  const [typesCalendar] = useState({
    beard: {
      colorName: "beard",
      lightColors: {
        main: "#1cf9b0",
        container: "#dafff0",
        onContainer: "#004d3d",
      },
      darkColors: {
        main: "#c0fff5",
        onContainer: "#e6fff5",
        container: "#42a297",
      },
    },
    hair: {
      colorName: "hair",
      lightColors: {
        main: "#1c7df9",
        container: "#d2e7ff",
        onContainer: "#002859",
      },
      darkColors: {
        main: "#c0dfff",
        onContainer: "#dee6ff",
        container: "#426aa2",
      },
    },
  });

  const calendar = useNextCalendarApp({
    theme: "shadcn",
    locale: "pt-BR",
    timezone: "America/Sao_Paulo",
    isDark: true,
    dayBoundaries,
    calendars: typesCalendar,
    views: [
      createViewDay(),
      createViewWeekAgenda(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: "1",
        title: "Corte de cabelo",
        people: ["Junior Braguinha"],
        calendarId: "hair",
        start: Temporal.ZonedDateTime.from(
          "2026-09-02T10:00:00-03:00[America/Sao_Paulo]",
        ),
        end: Temporal.ZonedDateTime.from(
          "2026-09-02T11:00:00-03:00[America/Sao_Paulo]",
        ),
      },
      {
        id: "2",
        title: "Corte de barba",
        people: ["Reni Ribas"],
        calendarId: "beard",
        start: Temporal.ZonedDateTime.from(
          "2026-09-02T12:00:00-03:00[America/Sao_Paulo]",
        ),
        end: Temporal.ZonedDateTime.from(
          "2026-09-02T13:00:00-03:00[America/Sao_Paulo]",
        ),
      },
    ],
    plugins: [eventsService],
    callbacks: {
      onRender: () => {
        // get all events
        eventsService.getAll();
      },
    },
  });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}
