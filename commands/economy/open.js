module.exports = {
    name: "open",
    category: "economy",
    description: "This command is used for opening crates.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;

        if(args[0] === 'moneycrate') {
        let author = await db.fetch(`moneycrate_${message.author.id}`)
        let amount = Math.floor(Math.random() * 2500) + 1; // 1-500 random number. whatever you'd like
        
        let Embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You don't have any moneycrates to open what are you trying to do?`);
        if (author < 1) return message.channel.send(Embed)
    
        let moneycaseembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You opened a money crate and receive some Animebucks __**${amount}$**__:money_with_wings:`)
        .setColor("RANDOM")


        message.channel.send(moneycaseembed)
        db.subtract(`moneycrate_${message.author.id}`, 1)
        db.add(`animebucks_${message.author.id}`, amount)
        }
    }
}
