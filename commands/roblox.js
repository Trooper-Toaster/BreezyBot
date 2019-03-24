const Discord = require("discord.js");
const rbx = require("roblox-js");
let id = ".";
let groupname = "."
exports.run = (bot, message, args) => {
            
let person = args[0];
getid();
getgrouprank()

function getid(){
rbx.getIdFromUsername(person).then(foundId => {
            const ok = foundId
            
            id = ok
            
                               
});
};
 function getgrouprank(){
                       rbx.getRankNameInGroup(4666488, id).then(grouprank => {
            const fp = grouprank
            
            groupname = fp
                       });
            }
            
            

            
let robloxembed = new Discord.RichEmbed()
.setTitle("Roblox Player Info")
.addField("Player ID:", id)   
.addField("Rank In Group:", groupname);  

            message.channel.send(robloxembed);
            


}

module.exports.help = {
  
  name: "rblxsearch"
  
}
