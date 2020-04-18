module.exports = {
    name: "rate", 
    category: "Fun",
    description: "Command used to get rated.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let ratus = message.mentions.members.first();
        if(!ratus) return message.channel.send("Tag someone to rate them!");

        let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

        let result = Math.floor((Math.random() * rates.length));

        if(ratus.user.id === message.author.id) {
            return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10 <:Thonk:679160069472124929>`);
          } else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10 <:Thonk:679160069472124929>`);
        
        }
}
