module.exports = {
    name: "jobs 2",
    category: "economy",
    description: "This command is used for showing a list of jobs.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
               
        let jobembedp2 = new RichEmbed()
        .setTitle("**Jobs for this page is currently closed.**")
        .setDescription(`**To work at a place you like do ${customprefix}work <Job> To turn page do ${customprefix}jobs <Number>, Also note some jobs require school to use this command do "${customprefix}school"**`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter('Jobs Listing Page 2/2')
        message.channel.send(jobembedp2)
    }
}