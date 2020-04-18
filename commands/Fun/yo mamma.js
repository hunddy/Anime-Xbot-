module.exports = {
    name: "yomama", 
    category: "Fun",
    description: "Command used for fun insults./roast",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const yoMamma = require('yo-mamma').default;
        let insult;

        insult = yoMamma();
      
        let yo = new RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Yomama')
        .addField('**Insult:**', insult)
        message.channel.send(yo)
        }
}
