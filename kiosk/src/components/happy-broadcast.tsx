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
    <>
      <h1>Happy News</h1>
      {happyNews.map((news) => (
        <>
          <h2>{news.title}</h2>
          <p>{news.content}</p>
        </>
      ))}
    </>
  );
};
