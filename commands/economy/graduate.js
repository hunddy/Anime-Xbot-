module.exports = {
    name: "graduate",
    category: "economy",
     aliases: ["graduate", "graduation"],
    description: "This command is used for graduating.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = await db.fetch(`educations_${message.author.id}`)

     
        
         let Embed3 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`You already have a high school diploma what are you trying do?`)
    if(db.fetch(`highschooldiplomass_${message.author.id}`)) return message.channel.send(Embed3)
    
        let Embed = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You need 1000 Minutes of school/education in order to graduate high school.`);
        if (author < 1000) return message.channel.send(Embed)
        

        
        await db.fetch(`highschooldiplomass_${message.author.id}`);
        await db.set(`highschooldiplomass_${message.author.id}`, true)

        let Embed2 = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} Graduation`)
        .setDescription(`As you walked down the aisle for your high school diploma the graduation march music started playing, you looked around remembering all the good times and bad times you had at the school all the hard work you putted into getting the diploma has finally paid off.`)
        .addField('Quote', `"Your life is your story, and the adventure ahead of you is the journey to fulfill your own purpose and potential." -Kerry washington`)

        db.subtract(`educations_${message.author.id}`, 3500)
        message.channel.send(Embed2)
    
    }
}
