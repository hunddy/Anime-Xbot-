const ytdl = require('ytdl-core')

module.exports = {
    name: "play",
    category: "music",
    description: "This command is used for music.",
    run: async (client, message, args, ops) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let active = client.music;

        if(!message.member.voiceChannel) return message.channel.send(':x: How do you expect me to play that while you are not in a voice channel lmao.');;


        if(!args[0]) return message.channel.send(':x: Input a url to start listening to music.');

        let validate = await ytdl.validateURL(args[0]);

        if (!validate) {

            let commandFile = require(`./search.js`)
            return commandFile.run(client, message, args, ops)
        }

        let info = await ytdl.getInfo(args[0]);

        let data = active.get(message.guild.id) || {};

        if(!data.connection) data.connection = await message.member.voiceChannel.join();
        if(!data.queue) data.queue = [];
        data.guildID = message.guild.id;

        data.queue.push({
            songTitle: info.title,
            requester: message.author.username,
            url: args[0],
            announceChannel: message.channel.id
        });

        if (!data.dispatcher) play(client, ops, data);
        else {
        
        let songaddedtoqueue = new RichEmbed()

        .setDescription(`**Song** __**${info.title}**__ :musical_note: **was succesfully added to the queue**`)
        .setColor('#0092E1')
        .setFooter(`This song was requested by ${message.author.username}!`)


        message.channel.send(songaddedtoqueue)

    }

    active.set(message.guild.id, data);
      
async function play(client, ops, data) {

 let nowplayingembed = new  RichEmbed()
 .setDescription(`**:musical_note: Now Playing:** __**${data.queue[0].songTitle}**__`)
 .setColor('#0092E1')
 .setFooter(`This song was requested by ${data.queue[0].requester}!`)
  
 client.channels.get(data.queue[0].announceChannel).send(nowplayingembed)

    data.dispatcher = data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly', quality: 'highestaudio',  highWaterMark: 1<<25 }), {highWaterMark: 1});

    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('end', function() {
        end(client, ops, this);
    });
function end(client, ops, dispatcher) {

    let fetched = active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queue.length > 0) {
        active.set(dispatcher.guildID, fetched);

    play(client, ops, fetched);
    } else {

        let musicfinishembed = new RichEmbed()
        .setDescription('The music has finished.\nI am leaving voice channel now.')

        active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if (vc) vc.leave();
        message.channel.send(musicfinishembed)
    }
}
}
}
}

