const Discord = require("discord.js");
const mongoose = require("mongoose");
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

const Money = require("./models/money.js");
mongoose.connect("mongodb+srv://Troopers:fsxWOgZj94vaJiIk@hi-pn6gb.gcp.mongodb.net/HI?retryWrites=true&authSource=admin");
const fs = require("fs");
const serverStats = {
  guildID: '534061084693495808',
  totalUsersID: '547028120159649792',
  memberCountID: '547028183795499019',
  botCountID: '547028232583512066'
};
  
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => { 

  
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  
  if(jsfile.length <= 0){
    console.log("Cant find any commands");
    return;
}
  
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
});
});
bot.on('ready', () => {
       
       wait(1000);

  // Load all invites for all guilds and save them to the cache.
  bot.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
       
  console.log(`${bot.user.username} is online in ${bot.guilds.size} servers`);
  bot.user.setActivity('SortaScript', { type: 'LISTENING' });
  
 
});
bot.commands = new Discord.Collection();






 
bot.on("message", async message=> {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "/";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
if (message.content.startsWith(prefix)) {
  
} else {
  let coinstoadd = Math.ceil(Math.random() * 25) + 15;
  console.log(coinstoadd + " coins");
  Money.findOne({
    userID: message.author.id,
    serverID: message.guild.id
  }, (err, money) => {
    if(err) console.log(err);
    if(!money){
      const newMoney = new Money({
        _id: mongoose.Types.ObjectId(),
        userID: message.author.id,
        serverID:message.guild.id,
        money: coinstoadd
      })
      newMoney.save().catch(err => console.log(err))
    }else{
      money.money = money.money + coinstoadd;
      money.save().catch(err => console.log(err));
    }
  })
  
};

if(cmd === "toaster"){
message.channel.send("is the best scripter")

  return;
}
   let blacklisted = ["nigg"] //words put , after the word
   
     let foundInText = false;
  for (var i in blacklisted) { // loops through the blacklisted list
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
 
    if (foundInText) {
      message.delete();
      message.channel.sendMessage('Hey!!')
  }


if(cmd === "bangles"){
message.channel.send("is the best begger")

  return;
}
});


bot.on('guildMemberAdd', member => {
  console.log('User' + member.user.tag + 'has joined the server!');

  var roles = member.guild.roles.find('name', 'unverified');
  member.addRole(roles);
  member.sendMessage("Thanks for joing the Breezy Discord!");
  member.guild.fetchInvites().then(guildInvites => {
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = bot.users.get(invite.inviter.id);
    // Get the log channel (change to your liking)
    const logChannel = member.guild.channels.find(channel => channel.name === "invitetest");
    // A real basic message with the information we need. 
    
    let invitee = new Discord.RichEmbed()
    .setDescription("User Invited")
    .addField("Code Used:", invite.code)
    .addField("Code uses:", invite.uses)
    .addField("Inviter:", inviter.tag)
    .setTitle(`${member.user.tag} has joined`)  
    logChannel.send(invitee);
  });
  if(member.guild.id !== serverStats.guildID) return;
  
  
  bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`Total Members: ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
   let channelss= member.guild.channels.find(`name`, "welcome");
  let channelssf= member.guild.channels.find(`name`, "general");
   
  
   channelss.send(`${member} has joined`);
  channelss.send(`${member} please verify by saying "/verify"`);
  channelssf.send(`${member} has joined`);
  
 
  
});


bot.on('guildMemberRemove', member => {
  member.sendMessage("Thanks for leaving the Breezy Discord!");
  bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`Total Members: ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
     let channelsss= member.guild.channels.find(`name`, "general")
   
   channelsss.send(`${member} has left the server`);
  
});

bot.on('messageDelete', message => {
  
  
  
  let deleteEmbed = new Discord.RichEmbed()
.setDescription("Message Deleted")
.setColor("#f4c542")
  .setThumbnail(message.author.displayAvatarURL)
  .setAuthor("Breezy Bot")
.addField("Message Content", message.content)
  .addField("Message Deleted By", message.author.username)
  .setTimestamp()
  .setFooter("Breezy Moderation Bot!", bot.displayAvatarURL)
  .addField("In Channel", message.channel.name);
  
message.guild.channels.find(`name`, "modlog").send(deleteEmbed);
});

  
  

bot.login(process.env.BOT_TOKEN);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 50000);
