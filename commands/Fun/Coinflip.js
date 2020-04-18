module.exports = {
    name: "coinflip",
    category: "Fun",
    description: "Coinflip command used for fun",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        if (!args[0]) return message.reply("Please state heads or tails!")
        var CoinFlip = [
            "Heads",
            "Tails"
        ];
        var coinflipdis = [
            "Waiting..."
        ]
        
        let replies = ["Yes", "No", "I don't know", "Ask again later"];

        let resultcoinflip = (CoinFlip[Math.floor(Math.random() *CoinFlip.length)]);
        let coinflip1 = args.slice(0).join(" ");

        let ballembed = new RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("RANDOM")
        .setTitle("**Coinflip!**")
        .addField("**The coin has been fliped in the air**",coinflipdis)
        .addField("**You have called**", coinflip1)
        .addField("**The coin has landed on...**", resultcoinflip);
        message.channel.send(ballembed)
        }
}