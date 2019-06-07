const Discord = require("discord.js");
const ms = require("ms");


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
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
    mUser.removeRole(muterole.id);
    message.channel.send(`<@${mUser.id}> has been unmuted!`);
  }, ms(mutetime));



module.exports.help = {
  
  name: "mute"
  

}
