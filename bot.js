import TelegramBot from 'node-telegram-bot-api';
import db from './db.js'
import 'dotenv/config';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Register the '/start' command using setCommand
bot.setMyCommands([
    { command: 'start', description: 'Start human verification' },
  ]);
  

/**
 * Handle the /start command.
 *
 * @param {Object} msg - The Telegram message object.
 */
bot.onText(/\/start/, async (msg) => {
  if (msg.chat.type === 'private') {
    const userId = msg.from.id;
    const joinTime = new Date();
    let score = 0;
    let maxMembers = 0;
    let oldestMessage = 0;
    let phoneNumber = null;
    let vouchedFor = 0;

    // Format the date and time
    const readableJoinTime = joinTime.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Database integrations:
    // The following code should be implemented for database interactions.
    // Uncomment and fill in the necessary code to interact with the database.
    // This section is responsible for fetching or inserting user data from/to the database.
    // Make sure to handle errors and closing the database connection properly.

    // const conn = await db.getConnection(config.db_url);
    // const botUser = await db.getUserById(conn, userId);
    // if (botUser === null) {
    //   await db.insertUser(conn, userId);
    // } else {
    //   joinTime = botUser.join_time || joinTime;
    //   score = botUser.score || score;
    //   maxMembers = botUser.max_members || maxMembers;
    //   oldestMessage = botUser.oldest_message || oldestMessage;
    //   phoneNumber = botUser.phone_number || phoneNumber;
    //   vouchedFor = botUser.vouched_for || vouchedFor;
    // }
    // db.closeConnection(conn);

    const keyboard = {
      inline_keyboard: [
        [
          { text: 'Share your phone number', callback_data: 'number' },
          { text: 'Forward an old message', callback_data: 'forward' }
        ],
        [
          { text: 'Verify channel ownership', callback_data: 'channel' },
          { text: 'Get vouched for by others', callback_data: 'voucher' }
        ]
      ]
    };

    const displayName = msg.from.username ? `@${msg.from.username}` : `${msg.from.first_name}`;

    const message = `*Welcome ${displayName}!*
Use this bot to prove you are a human. Your current stats:

*Humanity proof score*: ${score}
*Phone number*: ${phoneNumber ? phoneNumber : 'N/A'}
*Oldest message*: ${oldestMessage} days ago
*Highest members in your channels*: ${maxMembers}
*People vouched for your humanity*: ${vouchedFor}
*First seen here*: ${readableJoinTime}

Check your score anytime by sending /start here.

Increase your humanity proof score by completing tasks:`;

    await bot.sendMessage(msg.chat.id, message, {
        parse_mode: 'Markdown',
        reply_markup: keyboard
      });

  } else {
    await bot.sendMessage(msg.chat.id, 'Please start the bot in a private chat.');
  }
});
