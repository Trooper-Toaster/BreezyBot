const Discord = require("discord.js");
const rbx = require("roblox-js");


exports.run = (bot, message, args) => {
message.channel.send(args[0])

}


module.exports.help = {
  
  name: "rblxsearch"
  
}
