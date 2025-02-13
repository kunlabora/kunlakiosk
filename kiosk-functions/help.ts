import { Handler } from "@netlify/functions";
import { WebClient } from "@slack/web-api";

async function getTodaysLatestRequestForHelp() {
  const client = new WebClient(process.env.SLACK_TOKEN);
  const history = await client.conversations.history({
    channel: process.env.REQUEST_FOR_HELP_CHANNEL_ID,
    limit: 1,
    // TODO: limit to one or two days ago with `oldest`
  });
  // TODO: fetch actual username
  // `${user /*(await client.users.profile.get({ user })).profile.display_name*/}: ${text}`,
  return Promise.all(
    history.messages.map(async ({ user, text }) => ({
      user,
      text,
    })),
  );
}

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ messages: await getTodaysLatestRequestForHelp() }),
  };
};

export { handler };
