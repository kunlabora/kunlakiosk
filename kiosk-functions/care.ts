import { Handler } from "@netlify/functions";
import { WebClient } from "@slack/web-api";

async function getLatestCareUpdate() {
  const client = new WebClient(process.env.SLACK_TOKEN);
  const history = await client.conversations.history({
    channel: process.env.CARE_CHANNEL_ID,
    limit: 100,
    // TODO: limit to one or two days ago with `oldest`
  });
  // TODO: fetch actual username
  // `${user /*(await client.users.profile.get({ user })).profile.display_name*/}: ${text}`,

  const { text, user } = history.messages.find(({ text }) =>
    text.includes("Care update"),
  );
  return { text, user };
}

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ care: await getLatestCareUpdate() }),
  };
};

export { handler };
