const ytdl = require('ytdl-core')

module.exports = {
    name: "queue",
    category: "music",
    description: "This command is used for music.",
    run: async (client, message, args, opss) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let active = client.music;

        let fetched = active.get(message.guild.id);
        if(!fetched) return message.channel.send('How am I suppose to look at queue when there is no music playing')

        let queue = fetched.queue;
        let nowPlaying = queue[0];
        

        let resp = `**Now Playing...**\n__**${nowPlaying.songTitle}**__**,**\n**The song was requested by ${nowPlaying.requester}**\n\n**The Queue is..**`

        for (var i =1; i <queue.length; i++) {
         resp+= `\n**${i}: ${queue[i].songTitle}** **Request By:** **${queue[i].requester}**\n`;

        }
        let queueemnbed = new RichEmbed()
        .setColor("#0092E1")
        .setDescription(`${resp}`)

        message.channel.send(queueemnbed);
}
}

