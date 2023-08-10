import TelegramBot from 'node-telegram-bot-api';
import db from './db.js'
import 'dotenv/config';
import config from './poh.config.js';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
const { humangram: humangramConfig} = config.validator;

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


bot.on('callback_query', async (query) => {
    if (query.data === 'number') {
        const keyboard = {
            keyboard: [
            [
                { text: '📞Share your phone number', request_contact: true },
            ],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        };
        const message = `📱 *Share your phone number* to complete this task.
        
You'll *earn ${humangramConfig.phoneNumberScore} points*.
`;
        await bot.sendMessage(query.message.chat.id, message, {
        parse_mode: 'Markdown',
        reply_markup: keyboard,
        });
        await bot.answerCallbackQuery(query.id);
        return; // Stop propagation
    }
  
    if (query.data === 'forward') {
        const message = `🔒 *Forward an old message* of yours to prove you had this account for a long time.

🎉 You'll *earn a point* for each ${humangramConfig.scorePointPerXDays} days.

📆 For example, if the message was originally sent ${humangramConfig.scorePointPerXDays * 2} days ago, you'll *earn 2 points*.`;        
      await bot.sendMessage(query.message.chat.id, message, { parse_mode: 'Markdown' });
      await bot.answerCallbackQuery(query.id);
      return; // Stop propagation
    }
  
    if (query.data === 'channel') {
      try {
        const message = `1. ➕ Add this bot to a channel you own (*no permission required*)

2. 📌 Post this verification code to the channel: \`humangram:${query.from.id}\`

3. ✅ You'll receive a verification success message from the bot shortly

4. 🗑️ You can delete the post and remove the bot
`;
        await bot.sendMessage(query.message.chat.id, message, { parse_mode: 'Markdown' });
      } catch (error) {
        // button is not clicked by a user inside the bot
        // Handle any errors that might occur during sending the message
        console.error(error);
      }
      await bot.answerCallbackQuery(query.id);
      return;
    }

    if (query.data === 'voucher') {
        try {
            const message = `
🤝 *Get vouched for humanity* by asking others to send this code directly to the bot:
\`vouch:${query.from.id}\`

🔔 You'll be notified when someone vouches for you.`;
          await bot.sendMessage(query.message.chat.id, message, { parse_mode: 'Markdown' });
        } catch (error) {
          // button is not clicked by a user inside the bot
          // Handle any errors that might occur during sending the message
          console.error(error);
        }
        await bot.answerCallbackQuery(query.id);
        return;
      }
  
});
  

