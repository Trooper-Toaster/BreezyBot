const Discord = require("discord.js");
const rbx = require("roblox-js");
let id = "id";

exports.run = (bot, message, args) => {
            
let person = args[0];



function getid(){
rbx.getIdFromUsername(person).then(foundId => {
            const ok = foundId
            
            id = ok
            
                               
});
};
   getid()         

            
let robloxembed = new Discord.RichEmbed()
.setTitle("Roblox Player Info")
.addField("Player ID:", id);

            message.channel.send(robloxembed);
            


}

module.exports.help = {
  
  name: "rblxsearch"
  
}
