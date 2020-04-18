module.exports = {
    name: "education",
    category: "economy",
    description: "This command is used to show education progress.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let education = await db.fetch(`educations_${message.author.id}`)

        let graduation = await db.fetch(`highschooldiplomass_${message.author.id}`)
        if(graduation === null) graduation = "Not yet graduated";
        if(graduation === true) graduation = "High school diploma";
        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"

        if (education === null) education = 0
        let educationhours = new RichEmbed()
        .setTitle('Education/school minutes')
        .addField('**TIP**', `Once, you have enough minutes of school you will be able to graduate and get a High school diploma. To graduate use the command ${customprefix}graduate`)
        .setDescription(`You have ${education} minutes of school. To go to school use the command "${customprefix}school"`)
        .addField('**Your graduation status is:**', graduation)
        .setColor("#0092E1")
        message.channel.send(educationhours)
        
        }
}
