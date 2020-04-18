module.exports = {
    name: "animal",
    category: "Fun",
    description: "Used to see reddit animals.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const dhdhdhw = require('random-puppy');
        const randomPuppy = require('random-puppy');
        let reddit = [
            "aww",
        ]
    
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
        randomPuppy(subreddit).then(async url => {
        let img = await randomPuppy(subreddit);
        let redditembed = new RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`${subreddit}`)
        .setFooter('Reddit animals', message.author.displayAvatarURL)
        .setURL(`https://reddit.com/r/${subreddit}`);

    
        message.channel.send(redditembed)
    })       
        }
}