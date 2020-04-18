const search = require('yt-search')

module.exports = {
    name: "skip",
    category: "music",
    description: "This command is used for music.",
    run: async (client, message, args, ops) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let active = client.music;

        
        let fetched = active.get(message.guild.id);
        if(!fetched) return message.channel.send('How am I suppose to skip the song when there is no music playing')
        let queue = fetched.queue;
        let nowPlaying = queue[0];

        if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':x: How do you expect me to skip the song when you are not in the same voice channel as the bot.');
     let userCount = message.member.voiceChannel.members.size;

     let required = Math.ceil(userCount/2);
    
     if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

     if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you have already voted previously so you can not vote again. ${fetched.queue[0].voteSkips.length}/${required} Required votes.`)

     fetched.queue[0].voteSkips.push(message.member.id);
     
     active.set(message.guild.id, fetched);

     if (fetched.queue[0].voteSkips.length >= required) {
         let skipembed = new RichEmbed()
        .setDescription(`**:arrow_right: Successfully skiped the song...**`)
        .setColor('#00e12d') //green embed
         message.channel.send(skipembed)
         return fetched.dispatcher.emit('end');
     }
     let successvoted = new RichEmbed()
     .setDescription(`**You have successfully voted to skip, ${fetched.queue[0].voteSkips.length}/${required} more votes required to skip the song.**`)
     .setColor('#00e12d')
     message.channel.send(successvoted)
    }
}
