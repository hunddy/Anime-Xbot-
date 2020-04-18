module.exports = {
    name: "slot",
    category: "economy",
    aliases: ["slots", "slot"],
    description: "This command is used for a slot game.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
     let moneydb = await db.fetch(`animebucks_${message.author.id}`)
    let win = false;
     let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
     if(customprefix === null) customprefix = "?"
        let user = message.author;
               
        const slotItems = ["<:Cherry:679163236477829122>", "<:Strawberry:679163190474440714>", "<:Watermelon:679162888732016650>", "<:Orange:679162956881199125>", "<:Grape:679162310362660864>", "<:Bigwin:679163822191149066>"] 
        if (args[0] == 'all') {
            let money = await db.fetch(`animebucks_${message.author.id}`)
        
            let embedbank = new RichEmbed()
            .setColor('RANDOM')
            .setDescription(":x: You don't have any money to gamble.")
        
            if(money === 0) return message.channel.send(embedbank)

            let negativemoneynono = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(`:x: You can't gamble negative money what are you trying do glitch?`);
          
            if (message.content.includes('-')) return message.channel.send(negativemoneynono)
        
            let number = []
            for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }
        
            if (number[0] == number[1] && number[1] == number[2]) { 
                money *= 5
                multiplier = "5"
                win = true;
            } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
                money *= 2
                multiplier = "2"
                win = true;
            }
            if (win) {
                db.add(`animebucks_${message.author.id}`, money)
                let currentwinbalance = db.fetch(`animebucks_${message.author.id}`)
                let slotsEmbed1 = new RichEmbed()
                    .setTitle(`<:Slots:679382050930819082> ${user.username} slot machine...`)
                    .setDescription(`>${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} <\n\nYou won __**${money}**__ Animebucks!\n\nYour current multiplier is __**${multiplier}X**__\n\nYou now have **${currentwinbalance}** Animebucks!`)
                     .setFooter("Nice job you won mate.")
                    .setColor("RANDOM")
                message.channel.send(slotsEmbed1)
        
            } else {
                db.subtract(`animebucks_${message.author.id}`, money)
                let currentlosebalance = db.fetch(`animebucks_${message.author.id}`)
                let slotsEmbed = new RichEmbed()
                    .setTitle(`<:Slots:679382050930819082> ${user.username} slot machine...`)
                    .setDescription(`>${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} <\n\nYou lost __**${money}**__ Animebucks!\n\nYour current multiplier is: __**0X**__\n\nYou now have **${currentlosebalance}** Animebucks!`)
                    .setColor("RANDOM")
                    .setFooter("You loose that's tuff.")
                message.channel.send(slotsEmbed)
        
            }
          
          } else {

    let money = parseInt(args[0]);

    let bal = await db.fetch(`animebucks_${message.author.id}`)
 


    let author = message.member.user.tag
    let moneymore = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You are betting more than you have.`);
    
    let moneyhelp = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: Please specify an amount to gamble on. Usage ${customprefix}slot <Amount>`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);
    let negativemoneynono = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You can't gamble negative money what are you trying do glitch?`);
  
    if (message.content.includes('-')) return message.channel.send(negativemoneynono)
 
    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 5
        multiplier = "5"
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        multiplier = "2"
        win = true;
    }
    if (win) {
        db.add(`animebucks_${message.author.id}`, money)
        let currentwinbalance = db.fetch(`animebucks_${message.author.id}`)
        let slotsEmbed1 = new RichEmbed()
            .setTitle(`<:Slots:679382050930819082> ${user.username} slot machine...`)
            .setDescription(`>${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} <\n\nYou won __**${money}**__ Animebucks!\n\nYour current multiplier is __**${multiplier}X**__\n\nYou now have **${currentwinbalance}** Animebucks!`)
             .setFooter("Nice job you won mate.")
            .setColor("RANDOM")
        message.channel.send(slotsEmbed1)

    } else {
        db.subtract(`animebucks_${message.author.id}`, money)
        let currentlosebalance = db.fetch(`animebucks_${message.author.id}`)
        let slotsEmbed = new RichEmbed()
            .setTitle(`<:Slots:679382050930819082> ${user.username} slot machine...`)
            .setDescription(`>${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} <\n\nYou lost __**${money}**__ Animebucks!\n\nYour current multiplier is: __**0X**__\n\nYou now have **${currentlosebalance}** Animebucks!`)
            .setColor("RANDOM")
            .setFooter("You loose that's tuff.")
        message.channel.send(slotsEmbed)
    }
    }
    }
}
