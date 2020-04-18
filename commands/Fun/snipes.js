

module.exports = {
    name: "snipe",
    category: "Fun",
    description: "Fun command to snipe deleted messages",
    run: async (client, message, args, func) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        
        const channel = message.mentions.channels.first() || message.channel;

        let SnipedMessage = client.snipes.get(channel.id);
        if (!SnipedMessage) return message.channel.send(`There where no deleted message inside ${channel}`);
        let snipedembed = new RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Sniped Message')
        .addField('**Message sent by:**', SnipedMessage.sender.tag)
        .addField('**Message Sniped:**', SnipedMessage.content)
        .addField('**Channel Sniped:**', channel)
        message.channel.send(snipedembed)

        }
}
