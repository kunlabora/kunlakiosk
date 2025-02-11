import { Handler } from "@netlify/functions";
import Parser from "rss-parser";

async function getFeed() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://thehappybroadcast.com/feed");
  return feed.items.slice(0, 4).map(({ title, contentSnippet }) => ({
    title,
    content: contentSnippet.split("[…]")[0] + "...",
  }));
}

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ items: await getFeed() }),
  };
};

export { handler };
