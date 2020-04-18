module.exports = {
    name: "redeem",
    category: "economy",
    aliases: ["redeem", "redeems"],
    description: "This command is used for redeeming codes.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
         const db = require('quick.db');
         let user = message.author;
         let animebucks = await db.fetch(`animebucks_${message.author.id}`)


         
        if (args[0] == "freemoneycrate") {
        const ms = require('parse-ms');

        let timeout = 9999999999999999999999999999999;
      
        let codereedemfreemoneycrate = await db.fetch(`freemoneycratecodereedem1_${message.author.id}`)
      
        if (codereedemfreemoneycrate !== null && timeout - (Date.now() - codereedemfreemoneycrate) > 0) {
          let time = ms(timeout - (Date.now() - codereedemfreemoneycrate));


        
          let timeEmbed = new RichEmbed()
          .setColor("0xFF4133")
          .setDescription(`:x: You've already redeemed this code what are you trying to do?`)
          message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new RichEmbed()
            .setColor("#00e12d")
            .setDescription(`${user.username} You've successfully redeemed the following code __**freemoneycrate**__ and recived __X3__ Moneycrate!`)
            message.channel.send(moneyEmbed)
            db.fetch(`moneycrate_${message.author.id}`)
            db.add(`moneycrate_${message.author.id}`, 3)
            db.set(`freemoneycratecodereedem1_${message.author.id}`, Date.now()) 
        }
    }
    }
}
