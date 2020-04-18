module.exports = {
    name: "ban",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reasonban = args.slice(1).join(' ');
    
        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        }

        if (!target) return message.reply('please specify a member to ban!');
        if(!reasonban) reasonban = "No reason given"
        let loggingbanchannel = message.guild.channels.find(ch => ch.name === "logs")
            if(!loggingbanchannel) return  message.channel.send('Please create a logging channel name "logs" in order for the bot to ban.');
        if(loggingbanchannel){
        let banembed = new RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(target.user.avatarURL)
            .addField('**Banned Member** :hammer:', `${target.user.username} with an ID: ${target.user.id}`)
            .addField('**Banned By**', `${message.author.username} with an ID: ${message.author.id}`)
            .addField('**Banned Time**', message.createdAt)
            .addField('**Banned At**', message.channel)
            .addField('**Banned Reason**', reasonban)
            .setFooter('Banned user information', target.user.displayAvatarURL);
            loggingbanchannel.send(banembed)
        }
        message.delete()
        message.channel.send(`**${target.user.username} was Banned :hammer:**`)
        target.send(`**Hello, you've been banned from ${message.guild.name} for ${reasonban}**`)
        message.guild.member(target).ban(reasonban);   
    
        }
}