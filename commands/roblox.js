const Discord = require("discord.js");
const rbx = require("roblox-js");
let id = "id";
let groupname = "name"
exports.run = (bot, message, args) => {
            
let person = args[0];
getid()


function getid(){
rbx.getIdFromUsername(person).then(foundId => {
            const ok = foundId
            
            id = ok
            
                               
});
};
            

            
let robloxembed = new Discord.RichEmbed()
.setTitle("Roblox Player Info")
.addField("Player ID:", id);

            message.channel.send(robloxembed);
            


}

module.exports.help = {
  
  name: "rblxsearch"
  
}
