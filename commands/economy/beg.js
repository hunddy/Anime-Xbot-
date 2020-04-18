module.exports = {
    name: "beg",
    category: "economy",
    aliases: ["beg", "begs"],
    description: "This command is used for begging money POOR.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
         const db = require('quick.db');
         let user = message.author;
         let author = message.member.user.tag
         let vip = await db.fetch(`vip_${message.author.id}`)
         if(vip === true) vip = Math.floor(Math.random() * 250) + 100;
         if (vip === null) vip = Math.floor(Math.random() * 200) + 1;

         var beggingrandom = [
            `You were looking in the dumpster at microsoft trying find stuff you can sell Bill Gates came out of no where and handed you __**${vip}**__ Animebucks`,
            `You walked into the apple store with the sign asking for money luckily Steven Paul was there he handed you __**${vip}**__ Animebucks`,
            `As Barack Obama was driving by he spotted you on the street holding a sign asking for money, he feels bad for you so he gives you __**${vip}**__ Animebucks`,
            `A random dude was selling jewlery he asked you if you wanted to buy some. But once he looked at you and your condition he gave you __**${vip}**__ Animebucks`
        ];
        let begrandomm = (beggingrandom[Math.floor(Math.random() *beggingrandom.length)]);

        const ms = require('parse-ms');

        let viptimeout = await db.fetch(`vip_${message.author.id}`)
        if(viptimeout === true) viptimeout = 150000;
        if (viptimeout === null) viptimeout = 300000;
      
        let beg = await db.fetch(`beg_${message.author.id}`)
      
        if (beg !== null && viptimeout - (Date.now() - beg) > 0) {
          let time = ms(viptimeout - (Date.now() - beg));


        
          let timeEmbed = new RichEmbed()
          .setColor("0xFF4133")
          .setTitle('Cooldown...')
          .setDescription(`:x: You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s stop begging and get a job. <:Chickenwithknife:679400414663409674>`)
          .setFooter('Owning vip will decrease your cooldown by half!')
          message.channel.send(timeEmbed)
        } else {
          let moneyEmbed = new RichEmbed()
        .setColor("#00e12d")
        .setDescription("Here's a **Tip** if you own **VIP** you will get a extra __**100**__ Animebuck plus more chances to get more Animebucks.")
        .addField("**Situation**", begrandomm);
        message.channel.send(moneyEmbed)
        db.add(`animebucks_${message.author.id}`, vip)
        db.set(`beg_${message.author.id}`, Date.now())
      
      
        }
    }
}
