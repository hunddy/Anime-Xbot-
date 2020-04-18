module.exports = {
    name: "jobs",
    category: "economy",
    description: "This command is used for showing a list of jobs.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
               
        let jobembed = new RichEmbed()
        .setTitle("**Jobs that are opened!**")
        .setDescription(`**To work at a place you like do ${customprefix}work<Job> To turn the page do ${customprefix}jobs <Number>, Also note some jobs require school to use this command do "${customprefix}school"**`)
        .setColor("RANDOM")
        .addField(`**:man_cook: Cooker**`, 'Have you ever wanted to cook for famous people in the world? What if I told you it is possible with this job you can earn `100-1000$`\nfor it!')
        .addField(`**:construction_worker: constructon**`, 'Have you ever wanted to build cool structure? Then this job is for you get paid around `100-1000$`\nto build cool stuff!')
        .addField(`**:police_officer: Policemen**`, 'Do you want to arrest people and give out tickets to earn money? If so then this job is for you! Get paid `250-800$`\nto do things you enjoy who does not wnat that?')
        .addField(`**:man_technologist: Programmer**`, 'Are you smart and know how to create code? Then this job is for you! Code for big companys and get paid a lot of money around `50-2000$`\nfor it!')
        .setTimestamp()
        .setFooter('Jobs listing Page 1/1');

        message.channel.send(jobembed)
    }
}