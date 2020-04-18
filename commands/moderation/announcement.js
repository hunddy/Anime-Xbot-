module.exports = {
    name: "announcement",
    category: "moderation",
    description: "commands use for mods/admins.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        }
        const announcementembed = new RichEmbed()
        .setTitle("**Announcement**")
        .setColor(0xEEEDE8)
        .setDescription(args.join(" "))
        message.channel.send("@everyone")	
        message.channel.send(announcementembed)
        message.delete()
        }
}