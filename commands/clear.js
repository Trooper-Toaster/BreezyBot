const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Nope");
if(!args[0]) return message.channel.send("Specify a Number").then(msg => msg.delete(5000));

message.channel.bulkDelete(args[0]).then(() => {

  let clearembed = new Discord.RichEmbed()
  .setDescription("Clear")
  .setColor("#e09d0e")
  
  .addField("Cleared by", message.author)
  .addField("Cleared", args[0])
  .setTimestamp()
  .setFooter("Breezy Moderation Bot!", bot.user.displayAvatarURL);



  message.channel.send("10-4").then(msg => msg.delete(5000));
  message.guild.channels.find(`name`, "modlog").send(clearembed);
})

}


module.exports.help = {
  
  name: "clear"
  
}
