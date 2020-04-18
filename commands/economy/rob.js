module.exports = {
    name: "rob",
    category: "economy",
    description: "This command is used for robbing people.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require('parse-ms');
               

        let user = message.mentions.users.first()
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let targetuser = await db.fetch(`animebucks_${user.id}`)
        let author = db.fetch(`animebucks_${message.author.id}`)
        let author2 = await db.fetch(`animebucks_${user.id}`)
        if (!target) return message.reply(':x: Please specify a user to rob!');
        
        let viptimeout = await db.fetch(`vip_${message.author.id}`)
        if(viptimeout === true) viptimeout = 150000;
        if (viptimeout === null) viptimeout = 300000;
      
        let rob = await db.fetch(`rob_${message.author.id}`)
      
        if (rob !== null && viptimeout - (Date.now() - rob) > 0) {
          let time = ms(viptimeout - (Date.now() - rob));
        
            let timeEmbed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(`:x: You have already robbed someone recently\n\nYou can rob someone again in ${time.minutes}m ${time.seconds}s `)
            .setFooter('Owning vip will decrease your cooldown by half!')
            message.channel.send(timeEmbed)
          } else {
        
        let moneyEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: You need atleast 500 Animebucks to rob someone what are you trying to do?.`);
        
        if (author < 500) {
            return message.channel.send(moneyEmbed)
        
        } 
          let cantrobyourselfembed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(":x: You can't rob yourself what are you trying to do?")
          if (user.id === message.author.id) {
              return message.channel.send(cantrobyourselfembed)
          } 
        
        let moneyEmbed2 = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: ${user.username} does not have anything you can rob what are you trying to do?`);
        if (targetuser < 0) {
            return message.channel.send(moneyEmbed2)
        }

        let vip = await db.fetch(`vip_${message.author.id}`)
        if(vip === true) vip = Math.floor(Math.random() * 250) + 100;
        if (vip === null) vip = Math.floor(Math.random() * 200) + 1;
        let currentwinbalance = db.fetch(`animebucks_${message.author.id}`)
        db.add(`animebucks_${message.author.id}`, vip)
        db.subtract(`animebucks_${user.id}`, vip)
        db.set(`rob_${message.author.id}`, Date.now())
        
        let embed = new RichEmbed()
        .setDescription(`:white_check_mark: You robbed ${user} and got away with ${vip} Animebucks\nYou now have ${currentwinbalance} Animebucks!`)
        .setFooter('Owning VIP will increase the amount of animebucks you get when robbing someone.')
        .setColor("RANDOM")

        message.channel.send(embed)
          
        };
    }
}
