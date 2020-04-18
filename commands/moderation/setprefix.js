module.exports = {
    name: "setprefix",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
       const db = require('quick.db');
        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        } else 
        if (args.length === 0) {
            message.channel.send('**:x: Please input a prefix for me to changed to.**')
            return;
          }
         message.channel.send('**:white_check_mark: The prefix has been successfully changed, please inform your server about the prefix changes so they know.**')
        db.set(`prefixs_${message.guild.id}`, args.join(' '))
        }
}