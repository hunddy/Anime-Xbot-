const ytdl = require('ytdl-core')

module.exports = {
    name: "setvolume",
    category: "music",
    description: "This command is used for music.",
    run: async (client, message, args, opss) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let active = client.music;

        let fetched = active.get(message.guild.id);
        if(!fetched) return message.channel.send('How am I suppose to turn the music up when there is no music playing')

        if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':x: How do you expect me to turn the volume up when you are not in the same voice channel as the bot.');
        
        if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send(':x: Input a number between 0-200')

        fetched.dispatcher.setVolume(args[0]/100);
    
        let volumeEmbed = new RichEmbed()
        .setDescription(`:sound: The volume has successfully been set to __**${args[0]}**__ Happy jamming!`)
        .setColor('#00e12d')

        message.channel.send(volumeEmbed)
}
}

