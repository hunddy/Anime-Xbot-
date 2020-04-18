module.exports = {
    name: "eprofile",
    category: "economy",
    aliases: ["eprofile", "economyprofile", "inventory"],
    description: "This command is used for seeing other economy status.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        let user = message.author;
      
        //let shoes = await db.fetch(`jordans_${message.author.id}`)
        //if(shoes === null) shoes = '0' // Rre item from released.
        let moneycrate = await db.fetch(`moneycrate_${message.author.id}`)
        if(moneycrate === null) moneycrate = 'None'
        let quizbombs = await db.fetch(`quizbombs_${message.author.id}`)
        if(quizbombs === null) quizbombs = 'None'
      
        let moneyEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**${user}'s Profile**\n\n**Inventory**\n\nMoneycrates: **${moneycrate}**\n\nQuizBombs: **${quizbombs}**`);
        message.channel.send(moneyEmbed)
      
    }
}
