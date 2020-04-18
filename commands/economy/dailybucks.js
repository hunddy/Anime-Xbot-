module.exports = {
    name: "dailybucks",
    category: "economy",
    aliases: ["daily", "dailybucks", "dailybuck"],
    description: "This command is used for gaining money.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')

        let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
         const db = require('quick.db');
         let user = message.author;
         let vip = await db.fetch(`vip_${message.author.id}`)
         if(vip === true) vip = 1000 + 500;
         if (vip === null) vip = 1000 + 0;


        const ms = require('parse-ms');

      
        let daily = await db.fetch(`daily_${message.author.id}`);
      
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
          let time = ms(timeout - (Date.now() - daily));
           let timeEmbed = new RichEmbed()
          .setColor(0xFF4133) //red
          .setDescription(`:x: You've already claimed your daily reward recently\n\nYou wil be able to claim you daiybucks in again in ${time.hours}h ${time.minutes}m ${time.seconds}s.`);
          message.channel.send(timeEmbed)
    } else {
    let embed = new RichEmbed()
    .setColor("#00e12d") // Green 
    .setTitle('Daily rewards')
    .setDescription("Here's a **Tip** if you own **VIP** you will get a extra __**500**__ Animebucks from daiy rewards which equal up to __**1500**__ Animebucks.")
    .addField('**Daily reward collected!**', vip)

    message.channel.send(embed)
    db.add(`animebucks_${message.author.id}`, vip)
    db.set(`daily_${message.author.id}`, Date.now())

    }
}
}
