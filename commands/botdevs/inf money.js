module.exports = {
    name: "infmoney",
    category: "botdevs",
    description: "This command is used for testing economy.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        if(message.author.id !== '306963871980191754') return message.reply("You are not a bot developer, nor a whitelisted user.")
        .then(msg => msg.delete(3600000));
        message.delete()
            let amount = Math.floor(Math.random() * 99999) + 1; // 1-500 random number. whatever you'd like
    
            let programmarembed = new RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
            .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount}$!`)
            .setColor("RANDOM")
    
    
            message.channel.send(programmarembed)
            db.add(`animebucks_${message.guild.id}_${message.author.id}`, amount)
            db.add(`education_${message.guild.id}_${message.author.id}`, amount)
            
        }
}