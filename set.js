
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rFGLmJSERHDKII0iJeUHRjHkoooJRbVxWtMOG/b2B3T8/D7mzvC1EkRebJc07mT1CUmCIHNUD7CSqCXyFD3ZE1FQIaGNdxjAjogQgyCDRwmTv8qg2dNkRltdslFzvTTxtPPGQp4X1zyyeGuyp82g/oE7j3QFWfMhz+IeHJWu5STOVAQvz8eJWZ4MQ701pw837ouvZxuDvNXKq3g7P9BO5dRogJLpJplaIcEZg5qPEgJl+DP3ONCMuKsL+qbp5fea9RXurw4iO36OdUZe1g5vaZVEB/+jX4qufNB9yLPF0uzsGhZqWT5DI6pbfn9SHPTxuuNks/4xXq62/wKU4KFNkRKhhmzZd5V5zKurTm9FIu95GFDXEyxrouorNxyZvzoTzTvsgZ6+lECL8GfDCT4sxZ75/b0GpbfjY21ISXb+Uqum7tmZ2rZ/FYCurVMZPfgXvkwyuX/8O7PMXMHN1OpMGRkq3SOL2VDrfMQm7C0yBpFBP78Za3lqL6NfjPfpLt5jTZC9NLThI4nY3GommyWOdwFliCOhqbUm0ksXD4hA9ZTf6E8oaD4nhc8G0Yzwtpb/upjovIzPdKtZ9OyLFVn41KPkBi+krzgv1jUOtesRvsVcsfL4tiu7hM7Atz0vGr9Do4RM22vCbXp0dHF9TYEdCEew8QlGDKCGS4LLrYUO0BGL1uUEgQe7ALKoGFqqngHbc8lXm+SobWnMVs3Izdhq6kdOGt8Mlo0FWXn0APVKQMEaUosjBlJWkWiFKYIAq0v370QIFu7E23rpok9ECMCWV+UVdZCaMPUT8+wjAs64JtmiI0ugMiQOM/w4gxXCS0o7EuIAlT/IqMFDIKtBhmFP1qEBEUAY2RGv0aWqOMOt6Pe8ngh88+6IH8oQeOgAZESVb54UARZFFWtcF3+u3apYVV9a1ADPRAAbvbwCNljGjZ6ZY9fhQUVRWHotg9h4KiDb538fsvyF2FCDGIMwo0YDhBNqptY+q9nGRqz2b6ItGNRAefLX5Y5U2L/jBZXnmR+sGZsOWRDy+841qDOOPGrRw7fh41ymRyToWEf/qHJF2/vLU8Vot+RpaHtRHEkEj13hgZaKNnqpFMJUNuNk0qGkF7cIJt/3RjjODhjK6yQ9xft+2GpTp08xvmS31T7Fi/sfTOVz0QoVccot+LLUa3fshZ5pKxabBSWanOvC3ppzGNX9rRWvZtw/Iv1lGUgvnp7Mk2PqpRgOncw/xWynazuR/7ciYapE+pss+VhkPn5M3EjyHK3pcXfvirE697jTF67IJ3kf5TzDfgnef4e++3HO/b5V8mdBxz8oS6LjFNWRlu88iau8Z5zQWDOAk5q8nmRVgnV1mODi6433/0QJVBFpckBxqg+QmCHiBl3TnYLuLyD5UM3bf197YzSJn+ORVbnCPKYF4BTRgOeEWSRqrydssjZWVBmgINSInnzy/g/jcM7Yv9YgcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "2349135600014", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348075614248", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💞", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "inbox", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
