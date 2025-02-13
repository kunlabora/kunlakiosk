import { type FunctionComponent, useEffect, useState } from "react";
import happyBroadcastLogo from "../assets/happy-broadcast-logo.png";

type HappyNewsItem = {
  title: string;
  content: string;
};

export const HappyBroadcast: FunctionComponent = () => {
  const [happyNews, setHappyNews] = useState<HappyNewsItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/happy-broadcast`)
      .then((res) => res.json())
      .then((json) => setHappyNews(json.items));
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <img
        src={happyBroadcastLogo.src}
        alt="The Happy Broadcast logo"
        className="h-auto w-auto mb-5"
      />
      {happyNews.map((news, index) => (
        <div
          key={index}
          className="mb-5 opacity-90 rounded-[2rem] shadow-md justify-between"
          style={{
            background:
              "linear-gradient(124deg, #ff3e26, #ffaf27, #F9D435, #91da7e, #55cfc8, #39bce9, #2c70cb)",
          }}
        >
          <div className="p-5">
            <h5 className="text-2xl font-medium tracking-tight text-white">
              {news.title}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};
