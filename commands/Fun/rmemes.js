module.exports = {
    name: "rmemes",
    category: "Fun",
    description: "Used to see reddit memes.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const randomPuppy = require('random-puppy');
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "meirl",
            "me_irl"
        ]
    
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
        randomPuppy(subreddit).then(async url => {
        let img = await randomPuppy(subreddit);
        let redditembed = new RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`${subreddit}`)
        .setFooter('Reddit memes', message.author.displayAvatarURL)
        .setURL(`https://reddit.com/r/${subreddit}`);

    
        message.channel.send(redditembed)
    })       
        }
}