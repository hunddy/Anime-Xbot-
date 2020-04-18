module.exports = {
    name: "clear",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        
        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        }
    
            if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
                return message.reply("That is not a number, also I can't delete 0 messages.") 
            }
    
            let deleteamount;
    
            if (parseInt(args[0]) > 100) {
                deleteamount = 100;
                
            } else {
                deleteamount = parseInt(args[0]);
            }
            
            message.delete()
            message.channel.bulkDelete(deleteamount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` message.`))
            .catch(err => message.reply(`Something went wrong... ${err}`));
       
    
        }
}