const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.send("Proper Format Please");
    
    let pollEmbed = new Discord.RichEmbed()
    .setColor('#77f442')
    .setTitle("Suggestion!")
    .setFooter(`Suggestion Asked By ${message.author.username}`)
    .setDescription(args.join(' '));
    
    
    let pollchannel = message.guild.channels.find(`name`, "responses");
    
    let send = await pollchannel.send(pollEmbed);
  
    
    send.react('✅');
    send.react('🚫');
}


module.exports.help = {
  
  name: "suggest"
  
}
