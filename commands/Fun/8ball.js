module.exports = {
    name: "8ball",
    category: "Fun",
    description: "Fun command to ask 8ball",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        var fortunes = [
            "Yes",
            "No",
            "Maybe",
            "Ask again later"
        ];
        if (!args[2]) return message.reply("Please ask a full question!")
        let replies = ["Yes", "No", "I don't know", "Ask again later"];

        let result8ball = (fortunes[Math.floor(Math.random() *fortunes.length)]);
        let question = args.slice(0).join(" ");

        let ballembed = new RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("RANDOM")
        .setTitle("**8ball!**")
        .addField("**Question**", question)
        .addField("**8ball has answered with...**", result8ball);
        message.channel.send(ballembed)
        }
}