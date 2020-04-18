module.exports = {
    name: "invite",
    category: "information",
    description: "Command used to show help information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let inviteembed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription("**Here's a list of our invites where you can invite our bot or join our support server!**")
        .addField('**Need assistance or help with AnimeX? Join our support server!**', '[**Join our support server!**](https://discord.gg/5jYqNz2)')
        .addField('**Invite me to your server!**', '[**Click right here!**](https://top.gg/bot/606941704204845088)')
        message.channel.send(inviteembed)
        }
}

