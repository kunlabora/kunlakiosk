import { Handler } from "@netlify/functions";
import { WebClient } from "@slack/web-api";

async function getParkings() {
  const client = new WebClient(process.env.SLACK_TOKEN);
  // await client.chat.postMessage({
  //   channel: parkingChannelId,
  //   text: "<@U05L8CRQM6G> list tomorrow",
  //   link_names: true,
  // });
  // await sleep(5);
  const history = await client.conversations.history({
    channel: process.env.PARKING_CHANNEL_ID,
    limit: 1,
  });
  console.log(history.messages[0].text);
  // const tomorrowStatus = history.messages[0].text
  const tomorrowStatus = `parking availability for tomorrow \n :red_circle: \"-1 34\" is claimed by <@U055QD2Q02Z> \n :red_circle: \"-1 35\" is claimed by <@U92N0HC9E> \n :red_circle: \"-1 36\" is claimed by <@UHQGEHV9B> \n :red_circle: \"-2\" is claimed by <@U05DRCR27V0>`;
  return [];
}

async function sleep(seconds: number) {
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ parkings: await getParkings() }),
  };
};

export { handler };
