module.exports = {
    name: "setp",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
       const db = require('quick.db');
        // check if the command caller has permission to use the command
        // check if the command caller has permission to use the command
        if(message.author.id !== '306963871980191754') return message.reply("You are not a bot developer, nor a whitelisted user.")
        .then(msg => msg.delete(3600000));
         
        if (args.length === 0) {
            message.channel.send('**:x: Please input a prefix for me to changed to.**')
            return;
          }
         message.channel.send('**:white_check_mark: The prefix has been successfully changed, please inform your server about the prefix changes so they know.**')
        db.set(`prefixs_${message.guild.id}`, args.join(' '))
        }
}