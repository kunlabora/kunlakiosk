import { Handler } from "@netlify/functions";
import { WebClient } from "@slack/web-api";

async function getParkings() {
  const client = new WebClient();
  return [];
}

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ parkings: await getParkings() }),
  };
};

export { handler };
