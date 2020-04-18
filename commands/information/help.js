module.exports = {
    name: "help",
    category: "information",
    description: "Command used to show help information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require('ms')
        let user = message.author;

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
            let helpembed = new RichEmbed()
            .setColor('#0092E1')
            .setAuthor(`AnimeX Help Commands`, client.user.displayAvatarURL)
            .setDescription(`**These are a list of help commands you can use.\nExample usages: ${customprefix}Economyhelp 1\n\n:robot: Current Bot Latency: ${client.ping} ms\n:pushpin: PREFIX: __${customprefix}__**`)
            .addField(`:moneybag: **Economy**`, 'This command will show you a list of economy commmands!\n')
            .addField(`:zany_face: **Fun**`, 'This command will show you a list of fun commands!\n')
            .addField(`:tools: **Utility**`, 'This command will show you a list of utiity/configuration commands!\n')
            .addField(`:police_officer: **Moderation**`, 'This command will show you a list of mod commands!\n\n**Need assistance or help with AnimeX?**\n[**Join our support server!**](https://discord.gg/aJxaFSP)\n\n**Want to add me to your server?**\n[**Click right here!**](https://top.gg/bot/606941704204845088)')
            .setFooter(`AnimeX Help Commands | Requested by ${user.username}`, client.user.displayAvatarURL)
            .setTimestamp()
            message.channel.send(helpembed)
        
        }
}
