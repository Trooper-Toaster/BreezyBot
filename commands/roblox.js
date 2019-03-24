const Discord = require("discord.js");
const rbx = require("roblox-js");


exports.run = (bot, message, args) => {
let person = args[0]

const what = rbx.getIdFromUsername(person)
            
            message.channel.send(what)

});
}

module.exports.help = {
  
  name: "rblxsearch"
  
}
