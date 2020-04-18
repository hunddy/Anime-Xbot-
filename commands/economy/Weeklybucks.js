module.exports = {
    name: "weeklybucks",
    category: "economy",
    aliases: ["weekly", "weeklybucks", "weeklybuck"],
    description: "This command is used for gaining money.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')

        let timeout = 604800000 // 1 week in milliseconds, change if you'd like.
         const db = require('quick.db');
         let user = message.author;
         let vip = await db.fetch(`vip_${message.author.id}`)
         if(vip === true) vip = 7000 + 1000;
         if (vip === null) vip = 7000 + 0;


        const ms = require('parse-ms');

      
        let weekly = await db.fetch(`weekly_${message.author.id}`);
      
        if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
          let time = ms(timeout - (Date.now() - weekly));
           let timeEmbed = new RichEmbed()
          .setColor(0xFF4133) //red
          .setDescription(`:x: You've already claimed your weekly reward recently\n\nYou wil be able to claim you daiybucks in again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s.`);
          message.channel.send(timeEmbed)
    } else {
    let embed = new RichEmbed()
    .setColor("#00e12d") // Green 
    .setTitle('Weekly rewards')
    .setDescription("Here's a **Tip** if you own **VIP** you will get a extra __**1000**__ Animebucks from daiy rewards which equal up to __**8000**__ Animebucks.")
    .addField('**Weekly reward collected!**', vip)

    message.channel.send(embed)
    db.add(`animebucks_${message.author.id}`, vip)
    db.set(`weekly_${message.author.id}`, Date.now())

    }
}
}
