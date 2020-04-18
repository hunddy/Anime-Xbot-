module.exports = {
    name: "avatar",
    category: "Fun",
    description: "Fun command to get someone avatar.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("RANDOM")
        .setTitle("Avatar")
        .setFooter("Searched by " + message.author.tag)
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();

        }
}