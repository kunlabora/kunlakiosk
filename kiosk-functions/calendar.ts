import { Handler } from "@netlify/functions";
import { icsCalendarToObject, VCalendar } from "ts-ics";

async function getNextEvents() {
  return fetch(process.env.CALENDAR_ID)
    .then((res) => res.text())
    .then((text) => parseNextFiveEvents(icsCalendarToObject(text)));
}

function parseNextFiveEvents(calendar: VCalendar) {
  return calendar.events
    .filter(({ start }) => start.date.getTime() > new Date().getTime())
    .sort((a, b) => a.start.date.getTime() - b.start.date.getTime())
    .slice(0, 5)
    .map(({ summary, start, location }) => ({
      title: summary,
      start: start.date,
      location,
    }));
}

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ events: await getNextEvents() }),
  };
};

export { handler };
