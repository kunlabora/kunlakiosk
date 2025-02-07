import { type FunctionComponent, useEffect, useState } from "react";
import { BACKEND_URL } from "../env.ts";

type CalendarItem = {
  title: string;
  location: string;
  start: Date;
};

export const Calendar: FunctionComponent = () => {
  const [events, setEvents] = useState<CalendarItem[]>([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/calendar`)
      .then((res) => res.json())
      .then((json) => setEvents(json.events));
  }, []);
  return (
    <div className="p-2 w-full h-full">
      <h1 className="mb-2 font-sans font-bold text-3xl text-black block">
        Calendar
      </h1>
      <div className="flex justify-between h-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="block rounded-t rounded-b overflow-hidden bg-white text-center w-[10vw]"
          >
            <div className="bg-red text-white py-1">Feb</div>
            <div className="pt-1 border-l border-r h-[10vh]">
              <span className="text-4xl font-bold mb-2">9</span>
              <span className="font-bold block">{event.title}</span>
              <span className="font-light block">{event.location}</span>
            </div>
            <div className="mt-2 pb-2 px-2 border-l border-r border-b rounded-b flex justify-between">
              <span className="text-xs font-bold">Fri</span>
              <span className="text-xs font-bold">2018</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
