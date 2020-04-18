module.exports = {
    name: "serverinfo", 
    category: "Fun",
    description: "Command used to show serverinfo",
    run: async (client, message, args) => {
        const moment = require("moment");
        const {Client, RichEmbed, Collection} = require('discord.js')
        const serverLevel = ["None", "Low", "Medium", "High", "Max"];

        const Sinfo = new RichEmbed()
        .addField(`**Owner**`, message.guild.owner.user.tag, true)
        .addField(`**ID**`, message.guild.id, true)
        .addField(`**Members**`, message.guild.memberCount, true)
        .addField(`**Bots**`, message.guild.members.filter(mem => mem.user.bot === true).size, true)
        .addField(`**Online**`, message.guild.members.filter(mem => mem.presence.status != "offline").size, true)
        .addField(`**Verification Level**`, serverLevel[message.guild.verificationLevel], true)
        .addField(`**Creation Date**`, moment.utc(message.guild.createdAt).format("dddd, MMMM, YYYY"), true)
        .addField('**Server Region**', `${message.guild.region}`, true)
        .setColor(0xEEEDE8)
    
        return message.channel.send(Sinfo);
        }
}
