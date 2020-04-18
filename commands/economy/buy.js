module.exports = {
    name: "buy",
    category: "economy",
    description: "This command is used for buying shop items.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = await db.fetch(`animebucks_${message.author.id}`)

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
        
        if (args[0] == 'moneycrate') {
         let moneycrate2 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You need 2125 Animebucks to purchase a Moneycrate.`);

        if (author < 2125) return message.channel.send(moneycrate2)
       
        await db.fetch(`moneycrate_${message.author.id}`)
              db.add(`moneycrate_${message.author.id}`, 1)

        let moneycrate3 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased Moneycrate! :briefcase: For 2125 Animebucks, to open the crate do ${customprefix}open moneycrate`);

        db.subtract(`animebucks_${message.author.id}`, 2125)
        message.channel.send(moneycrate3)
        } else if(args[0] == 'vip') {
     let vip1 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You need 35000 Animebucks to purchase VIP`);
        if (author < 35000) return message.channel.send(vip1)
        
    let vip2 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`You already owned vip you can't purchase it again.`)
    if(db.fetch(`vip_${message.author.id}`)) return message.channel.send(vip2)
        await db.fetch(`vip_${message.author.id}`);
        db.set(`vip_${message.author.id}`, true)

        let vip3 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased VIP <:Crown:679163396750442535> For 35000 Animebucks`);

        db.subtract(`animebucks_${message.author.id}`, 35000)
        message.channel.send(vip3)
        } else if (args[0] == 'quizbomb') {
            let quizbomb2 = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(`:x: You need 225 Animebucks to purchase a quizbomb.`);
    
            if (author < 225) return message.channel.send(quizbomb2)
           
            await db.fetch(`quizbombs_${message.author.id}`)
                  db.add(`quizbombs_${message.author.id}`, 1)
    
            let quizbomb3 = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(`:white_check_mark: Purchased QuizBomb! :pencil: For 225 Animebucks, to used the quizbomb do ${customprefix}use quizbomb`);
    
            db.subtract(`animebucks_${message.author.id}`, 225)
            message.channel.send(quizbomb3)
        }
        
    }
}
