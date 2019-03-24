const Discord = require("discord.js");
const rbx = require("roblox-js");


exports.run = (bot, message, args) => {
let person = args[0]
let robloxembed = new Discord.RichEmbed()
.setTitle("Roblox Player Info")
const id = rbx.getIdFromUsername(person).then(foundId => {
            const id = foundId});
            robloxembed.addField("Player ID:", id)
                               


                              

            message.channel.send(robloxembed);
            


}

module.exports.help = {
  
  name: "rblxsearch"
  
}
