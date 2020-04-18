module.exports = {
    name: "utilityhelp", 
    category: "information",
    description: "Command used to show utility information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')

        const db = require('quick.db');

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
        if (args[0] == "1") {
        let utilityembed =  new RichEmbed()
        .setColor('RANDOM')
        .setDescription(`**Below are a list of commands used for Utility. ${customprefix}(Command), To turn the page do ${customprefix}utilityhelp {Page}**`)
        .addField(`**Invite**`, 'This command will get you a invite to our support server, and also our bot invite so you can invite our bot to your server.')
        .addField(`**Ping**`, 'This command will show your ping.')
        .addField(`**Serverinfo**`, 'This command will show you the server information.')
        .addField(`**Support**`, 'This command will give you a option to send a message to the support server.')
        .addField(`**Setprefix**`, 'This command is used to set a prefix you want.')
        .setFooter('Utility help page 1/1', message.author.displayAvatarURL)
        message.channel.send(utilityembed)
    }
        }
}
