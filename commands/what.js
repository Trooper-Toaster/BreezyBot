const Discord = require("discord.js");
const Report = require("../models/what.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Troopers:fsxWOgZj94vaJiIk@hi-pn6gb.gcp.mongodb.net/HI?retryWrites=true&authSource=admin");


exports.run = (bot, message, args) => {
  let jUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
if(!jUser) return message.channel.send("Cant Find user");
let breason = args.join(" ").slice(22);
if(!message.member.hasPermission("BAN_MEMBERS")) return message.send("Nice Try")


  const report = new Report({
    
    _id: mongoose.Types.ObjectId(),
    username: jUser.user.username,
    userID: jUser.id,
    reason: breason,
    reportedBy: message.author.username,
    reportedId: message.author.id,
    time: message.createdAt
});
  report.save()
  .then(result => console.log(result))
  .catch(err => console.log(err));
  
  message.channel.send("User Reported")
}
  module.exports.help = {
  
  name: "report"
  
}
