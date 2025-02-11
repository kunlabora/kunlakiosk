import { type FunctionComponent, useEffect, useState } from "react";
import { BACKEND_URL } from "../env.ts";
import happyBroadcastLogo from "../assets/happy-broadcast-logo.png";

type HappyNewsItem = {
  title: string;
  content: string;
};

export const HappyBroadcast: FunctionComponent = () => {
  const [happyNews, setHappyNews] = useState<HappyNewsItem[]>([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/happy-broadcast`)
      .then((res) => res.json())
      .then((json) => setHappyNews(json.items));
  }, []);
  return (
    <div className="p-2 flex flex-col justify-between">
      <img
        src={happyBroadcastLogo.src}
        alt="The Happy Broadcast logo"
        className="h-auto w-auto mb-5"
      />
      {happyNews.map((news, index) => (
        <div
          key={index}
          className="mb-5 bg-white opacity-90 rounded-3xl border border-gray-200 shadow-md justify-between"
        >
          <div className="p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {news.title}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};
