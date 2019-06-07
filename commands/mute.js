const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
 let mUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
if(!mUser) return message.channel.send("Cant Find user");

if(!message.member.hasPermission("BAN_MEMBERS")) return message.send("Nice Try")
if(mUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Can't mute other Mods")
let muterole = message.guild.roles.find(`name`, "muted");
let reason = args[2]
let mutetime = args[1]
if(!mutetime) return message.reply("You didn't specify a time!");
await(mUser.addRole(muterole.id));

let muteembed = new Discord.RichEmbed()
.setDescription(`🔨**Muted** User: ${mUser} \n 📄**Reason**: ${reason}`)
.setColor("#e09d0e")
  .setThumbnail(mUser.displayAvatarURL)
  .setTimestamp()
  .setFooter("Breezy Moderation Bot!", bot.user.displayAvatarURL)
.asetAuthor(message.author.username);


let kickChannel = message.guild.channels.find(`name`, "modlog")
if(!kickChannel) return message.channel.send("Cant Find the ModLog")


kickChannel.send(muteembed);
mUser.sendMessage(`You have been muted for ${breason} you will be unmuted in ${mutetime}`);

setTimeout(function(){
mUser.removeRole(muteroles.id);
message.channel.sendMessage("User Unmuted");
}


module.exports.help = {
  
  name: "mute"
  

}
