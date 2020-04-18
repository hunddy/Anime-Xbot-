module.exports = {
    name: "userinfo",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const moment = require("moment");

        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        }
        let user = message.mentions.users.first() || message.author;
        
        let userinfo = {};
        userinfo.name = user.username;
        userinfo.discrim - `#${user.discriminator}`;
        userinfo.id = user.id;
        userinfo.status = user.presence.status;
        userinfo.registered = moment.utc(message.guild.members.get(user.id).user.createdAt).format("dddd, MMMM Do, YYYY");
        userinfo.joined = moment.utc(message.guild.members.get(user.id).joinedAt).format("dddd, MMMM Do, YYYY")

        const Uinfo = new RichEmbed()
        .setAuthor(user.tag, user.avatarURL)
        .setThumbnail(user.avatarURL)
        .addField(`**Username**`, userinfo.name, true)
        .addField(`**ID**`, userinfo.id, true)
        .addField(`**Status**`, userinfo.status, true)
        .addField(`**Registered**`, userinfo.registered)
        .addField(`**Joined**`, userinfo.joined)
        .setColor("RANDOM")


        return message.channel.send(Uinfo);
        }
}