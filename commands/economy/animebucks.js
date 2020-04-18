module.exports = {
    name: "animebucks",
    category: "economy",
    aliases: ["animebuck", "animebucks", "currency", "money"],
    description: "This command is used to show currency.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = message.member.user.tag
               
        let animebucks = await db.fetch(`animebucks_${message.author.id}`)
        let bank = await db.fetch(`bank_${message.author.id}`)
        if (bank === null) bank = 0;
        let vip = await db.fetch(`vip_${message.author.id}`)
        if (vip === null) vip = "None"; 
        if(vip === true) vip = "VIP";
        let graduation = await db.fetch(`highschooldiplomass_${message.author.id}`)
        if(graduation === null) graduation = "Not yet graduated";
        if(graduation === true) graduation = "High school diploma";



        if (animebucks === null) animebucks = 0;
       
        let animebucksembed = new RichEmbed()
        .setTitle(`${user.username} Animebucks`)
        .addField('**You currently have a total of:**', '`'+animebucks+'` Animebucks.')
        .addField('**You also have a total of:**', '`'+bank+'` Animebucks in your bank account.')
        .addField('**Your Vip status is:**', vip)
        .addField('**Your graduation status is:**', graduation)
        .setColor("#0092E1")
        message.channel.send(animebucksembed)
        
        }
}
