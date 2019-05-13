const Discord = require('discord.js');
//const logger = require('winston');
const auth = require('./auth.json');

//Loggers
// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
//   colorize: true
// });
//
// logger.level = "debug";

//Start bot
const client = new Discord.Client();
// var bot = new Discord.Client({
//   token: auth.token,
//   autorun: true
// });

client.on('ready', () => {
  console.log("Iamhere");
  // logger.info("Connected");
  // logger.info("Logged in as:");
  // logger.info(bot.username + "-(" + bot.id + ")");
});

client.on('message', msg=> {
  if (msg.content === '!hello') {
    msg.reply('pong');
  }
});

client.login(auth.token);

// bot.on("message", function(user, userID, channelID, message, evt) {
//   if (message.substring(0,1) =="!") {
//     var arg = message.substring(1).split(' ');
//     var cmd = args[0];
//
//     args = args.splice(1);
//     switch(cmd) {
//       case "jesus":
//         bot.sendMessage({
//           to: channelID,
//           message: "PONG!"
//         });
//       break;
//     }
//   }
// });
