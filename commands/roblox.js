const Discord = require("discord.js");
const rbx = require("roblox-js");


exports.run = (bot, message, args) => {
let person = args[0]

rbx.getIdFromUsername(person).then(foundId => {
            const Id = foundId
            
            message.channel.send(Id)

}


module.exports.help = {
  
  name: "rblxsearch"
  
}
