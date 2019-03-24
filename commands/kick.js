 const Discord = require("discord.js");
const fs = require("fs");
let kicks = JSON.parse(fs.readFileSync("./kicks.json", "utf8"));

module.exports.run = async (bot, message, args) => {
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Cant Find user");
let kreason = args.join(" ").slice(22);
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Nope")
if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Cant Kick other Mods")
if(!kicks[kUser.id]) kicks[kUser.id] = {
    warns: 0
  };

  warns[kUser.id].warns++;
   fs.writeFile("./kicks.json", JSON.stringify(kicks), (err) => {
    if (err) console.log(err)
  });
let kickEmbed = new Discord.RichEmbed()
.setDescription(`👢**Kicked** User: ${kUser} \n 📄**Reason**: ${kreason} \n 📋**Kicks**: ${kicks[kUser.id].kicks}`)
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .setThumbnail(kUser.Avatar)
 .setFooter("Breezy Bot", bot.user.displayAvatarURL)

let kickChannel = message.guild.channels.find(`name`, "modlog");
if(!kickChannel) return message.channel.send("Cant Find the ModLog");

message.guild.member(kUser).kick(kreason);
  message.channel.send(kickEmbed);
kickChannel.send(kickEmbed);
  console.log(`${kUser} was kicked by ${message.author}`)
kUser.sendMessage(`You have been kicked for ${kreason}`);

    if(kicks[kUser.id].kicks == 3){
    message.guild.member(kUser).ban(kreason);
    message.reply(`<@${kUser.id}> has been banned.`);
    kicks[kUser.id] = {
    kicks: 0
  };
  }

  return;
}


module.exports.help = {
  
  name: "kick"
  
}
