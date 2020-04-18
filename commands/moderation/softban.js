module.exports = {
    name: "softban",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        
        let banMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.slice(1).join(' ');

        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        }

    if (!banMember) return message.reply('please specify a member to ban!');
    if(!reason) reason = "No reason given"
    let loggingbanchannel = message.guild.channels.find(ch => ch.name === "logs")
        if(!loggingbanchannel) return  message.channel.send('Please create a logging channel name "logs" in order for the bot to softban.');
    if(loggingbanchannel){
    let banembed = new RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(banMember.user.avatarURL)
        .addField('**Soft Banned Member** :dash::hammer:', `${banMember.user.username} with an ID: ${banMember.user.id}`)
        .addField('**Banned By**', `${message.author.username} with an ID: ${message.author.id}`)
        .addField('**Banned Time**', message.createdAt)
        .addField('**Banned At**', message.channel)
        .addField('**Banned Reason**', reason)
        .setFooter('Banned user information', banMember.user.displayAvatarURL);
        loggingbanchannel.send(banembed)
    }
    message.delete()
    message.channel.send(`**${banMember.user.username} was SoftBanned :dash::hammer:**`)
    banMember.send(`**Hello, you've been softbanned from ${message.guild.name} for ${reason}**`).then(() =>
    message.guild.ban(banMember, { days: 1, reason: reason})).then(() => message.guild.unban(banMember.id, { reason: "Softban"})).catch(err => console.log(err)) 


        }
}