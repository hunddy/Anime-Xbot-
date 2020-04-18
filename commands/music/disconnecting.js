const ytdl = require('ytdl-core')

module.exports = {
    name: "disconnect",
    category: "music",
    description: "This command is used for music.",
    run: async (client, message, args, ops) => {
        const {Client, RichEmbed, Collection} = require('discord.js')

        if(!message.member.voiceChannel) return message.channel.send(':x: How do you expect me to disconnect when you are not in a voice channel.');

        if(!message.guild.me.voiceChannel) return message.channel.send(':x: The bot is not in a voice channel.');

        if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(':x: Sorry you and the bot are not in the same voice channel.');

        message.guild.me.voiceChannel.leave();

        let leaveembed = new RichEmbed()
        .setDescription(`The bot has successfully disconnected from the voice channel.`)
        .setColor('#00e12d')

        message.channel.send(leaveembed)
        
      
      
}
}
