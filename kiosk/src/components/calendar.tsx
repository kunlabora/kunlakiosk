import { type FunctionComponent, useEffect, useState } from "react";

type CalendarItem = {
  title: string;
  location: string;
  start: Date;
};

export const Calendar: FunctionComponent = () => {
  const [events, setEvents] = useState<CalendarItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/calendar`)
      .then((res) => res.json())
      .then((json) => setEvents(json.events));
  }, []);

  return (
    <div className="p-4 w-full h-full content-center">
      <div className="flex justify-between h-auto">
        {events.map((event, index) => {
          const date = new Date(event.start);
          const shortMonth = date
            .toLocaleString("default", {
              month: "short",
            })
            .toUpperCase();
          const dayIndex = date.getDate();
          const day = date.toLocaleString("default", {
            weekday: "short",
          });
          const year = date.getFullYear();
          return (
            <div
              key={index}
              className="block rounded-t rounded-b relative overflow-hidden bg-white text-center w-[10vw]"
            >
              <div className="bg-red text-white py-1">{shortMonth}</div>
              <div className="mb-9 pt-1 border-l border-r h-auto">
                <span className="text-4xl font-bold mb-2">{dayIndex}</span>
                <span className="font-bold block text-sm">{event.title}</span>
                <span className="font-light block text-xs">
                  {event.location.replaceAll("\\n", ", ")}
                </span>
              </div>
              <div className="absolute left-0 bottom-0 right-0 p-2 px-2 border-t flex justify-between">
                <span className="text-xs font-bold">{day}</span>
                <span className="text-xs font-bold">{year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
