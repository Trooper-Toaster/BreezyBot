const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Cant Find user");
let kreason = args.join(" ").slice(22);
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Nope");

  
  
  let verifiedRole = message.guild.roles.find(r => r.name === "Member")
   if (message.member.roles.has(verifiedRole)) return message.channel.send("They already are verified.")

    let rolew = message.guild.roles.find(r => r.name === "unverified");
                                    kUser.removeRole(rolew);
  let roflew = message.guild.roles.find(r => r.name === "Member");
                                    kUser.addRole(roflew);
  message.channel.send("Done!");
}


module.exports.help = {
  
  name: "member"
  
}
