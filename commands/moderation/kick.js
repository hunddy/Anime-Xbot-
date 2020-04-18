module.exports = {
    name: "kick",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let reasonkick = args.slice(1).join(' ');
        
        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        }

        if (!target) return message.reply('please specify a member to kick!');
        if(!reasonkick) reasonkick = "No reason given"
        let loggingkickchannel = message.guild.channels.find(ch => ch.name === "logs") 
            if(!loggingkickchannel) return message.channel.send('Please create a logging channel name "logs" in order for the bot to kick.');
        if(loggingkickchannel){
        let kickembed = new RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(target.user.avatarURL)
            .addField('**Kicked Member:** :wrench:', `${target.user.username} with an ID: ${target.user.id}`)
            .addField('**Kicked By:**', `${message.author.username} with an ID: ${message.author.id}`)
            .addField('**Kicked Time:**', message.createdAt)
            .addField('**Kicked At:**', message.channel)
            .addField('**Kicked Reason:**', reasonkick)
            .setFooter('Kicked user information', target.user.displayAvatarURL);
            loggingkickchannel.send(kickembed);
        }
        message.delete()
        message.channel.send(`${target.user.username} was kicked :wrench:`)
        target.send(`**Hello, you've been kicked from ${message.guild.name} for ${reasonkick}**`)
        message.guild.member(target).kick(reasonkick);
    
        }
}