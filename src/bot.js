const TelegramBot = require('node-telegram-bot-api');

const token = '7393065097:AAE7O9-9w4Sn9tVTttW5dwqdBrzlu6LoUR8';
const webAppUrl = 'https://starlit-beijinho-548248.netlify.app/';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, `Welcome to the bot!`, {
        reply_markup: {
            inline_keyboard: [
            [{text: 'Open Web App', url: webAppUrl}]
            ]
        }
    });
  }
});