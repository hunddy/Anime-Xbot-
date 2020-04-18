module.exports = {
    name: "economyhelp",
    category: "information",
    description: "Command used to show information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
        if (args[0] == "1") {
        let economyhelpembed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription(`**Below are a list of commands used for economy. ${customprefix}(Command), To turn the page do ${customprefix}economyhelp {Page}**`)
        .addField(`**Animebucks**`, 'This command will show you the amount of cash you have.')
        .addField(`**Beg**`, 'This command is used to beg people for money lol.')
        .addField(`**Dailybucks**`, 'This command will give you some daily cash. (Animebucks)')
        .addField(`**Deposit**`, 'This command will deposit money into your bank.')
        .addField(`**Eprofile**`, 'This command will show you your economy status Vip, Shoes, etc.')
        .addField(`**Education**`, 'This command will show you the hours of education you have. (Used to help get a job)')
        .setFooter('Economy help page 1/2', message.author.displayAvatarURL)
        message.channel.send(economyhelpembed)
        } else if (args[0] == "2") {
        let economyhelpembed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription(`**Below are a list of commands used for economy. ${customprefix}(Command), To turn the page do ${customprefix}economyhelp {Page}**`)
        .addField(`**Jobs**`, 'This command will show you a list of jobs you can work at to get money.')
        .addField(`**Rob**`, 'This command will rob the person for animebucks.')
        .addField(`**Roulette**`, 'This command is what it sounds like bet money gain or lose.')
        .addField(`**School**`, 'This command will help you get a education to help you towards a job.')
        .addField(`**Shop**`, 'This command will show you a list of items you can buy.')
        .addField(`**Slot**`, 'This command is what it sounds like, earn money or lose it.')
        .addField(`**Weeklybucks`, `This command willl give you some weekly cash. (Animebucks)`)
        .addField(`**Withdraw**`, 'This command will withdraw money from your bank.')
        .addField(`**Work regular**`, 'This command will allow  you to work but you will get less money then working at a certin job.')
        .setFooter('Economy help page 2/2', message.author.displayAvatarURL)
        message.channel.send(economyhelpembed)
    }
        }
}
