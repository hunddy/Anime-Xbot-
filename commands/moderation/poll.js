module.exports = {
    name: "poll",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        }
        
        let yesEmoji = '✅'
        let noEmoji = '❌'
        let prefix = '?'
        const input = message.content.split(`${prefix}poll `)

        let polll = new RichEmbed()
        .setTitle('POLL')
        .setColor("RANDOM")
        .addField(`React with :white_check_mark: or :x: to vote`, input, true)
        .setTimestamp()

        if (args.length === 0) {
            message.channel.send('You need to specify what goes in the poll.')
        } else {
            message.delete()
            message.channel.send(polll).then(message => {
                message.react(yesEmoji)
                .then(() => message.react(noEmoji))
            })
        }

    
        }
}