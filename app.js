'use strict';

require('dotenv-safe').config();
const { App } = require('@slack/bolt');

console.log('---------------');
console.log(process.env.SLACK_BOT_TOKEN);
console.log('---------------');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});



// All the room in the world for your code



(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();