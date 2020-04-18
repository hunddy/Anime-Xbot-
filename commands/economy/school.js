module.exports = {
    name: "school",
    category: "economy",
    description: "This command is used for education growth(amount of school hours.)",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require('parse-ms');
        
        
     let Embed3 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`You already have a high school diploma you don't need no more school.`)
    if(db.fetch(`highschooldiplomas_${message.author.id}`)) return message.channel.send(Embed3)
               
        let amount = Math.floor(Math.random() * 100) + 1;

        let viptimeout = await db.fetch(`vip_${message.author.id}`)
        if(viptimeout === true) viptimeout = 150000;
        if (viptimeout === null) viptimeout = 300000;

    
    
        let schooldaily = await db.fetch(`schooldailys_${message.author.id}`)
      
        if (schooldaily !== null && viptimeout - (Date.now() - schooldaily) > 0) {
          let time = ms(viptimeout - (Date.now() - schooldaily));
            
          let timeEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: You've already went to school recently\n\nGo to school again in again in ${time.minutes}m ${time.seconds}s.`)
          .setFooter('Owning vip will decrease your cooldown by half!')
          message.channel.send(timeEmbed)
        } else {
        let schoolembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, You've went to the school and study for ${amount} minutes.`) 
        .setColor("RANDOM")
        message.channel.send(schoolembed) 
        db.add(`educations_${message.author.id}`, amount)
        db.set(`schooldailys_${message.author.id}`, Date.now())
        }
    }
}
