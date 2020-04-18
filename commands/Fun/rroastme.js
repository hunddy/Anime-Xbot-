module.exports = {
    name: "rroastme",
    category: "name",
    description: "description",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const randomPuppy = require('random-puppy');
        let reddit = [
            "RoastMe",
        ]
    
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
        randomPuppy(subreddit).then(async url => {
        let img = await randomPuppy(subreddit);
        let rroastmereddit = new RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`);
    
        message.channel.send(rroastmereddit)
    })
        }
}
