import { type FunctionComponent, useEffect, useState } from "react";
import { BACKEND_URL } from "../env.ts";

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
    <div className="p-2 flex flex-col justify-between h-full">
      <h1 className="font-sans font-bold text-3xl text-fuchsia-900 block">
        Happy News
      </h1>
      {happyNews.map((news, index) => (
        <div
          key={index}
          className="bg-white opacity-90 rounded-lg border border-gray-200 shadow-md"
        >
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {news.title}
            </h5>
            <p className="mb-3 justify-self-center font-normal text-gray-700">
              {news.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
