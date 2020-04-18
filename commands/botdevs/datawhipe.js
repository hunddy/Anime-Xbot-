module.exports = {
    name: "datawipe",
    category: "economy",
    description: "This command is used for data wipe",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        
        // check if the command caller has permission to use the command
        if(message.author.id !== '306963871980191754') return message.reply("You are not a bot developer, nor a whitelisted user.")
        .then(msg => msg.delete(3600000)); 
      
        let user = message.mentions.members.first() || message.author;
          
          let bal = await db.fetch(`animebucks_${message.author.id}`)
          let edu = await db.fetch(`educations_${message.author.id}`)
          let mc = await db.fetch(`educations_${message.author.id}`)

          db.subtract(`animebucks_${user.id}`, bal)
          db.subtract(`educations_${user.id}`, edu)
          db.subtract(`moneycrate_${user.id}`, mc)
          
          let education = await db.fetch(`education_${message.author.id}`)
          let moneycrate = await db.fetch(`moneycrate_${message.author.id}`)
          let balanime = await db.fetch(`animebucks_${message.author.id}`)
      
          let moneyEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:white_check_mark: ${user.username} Data has been successfully wiped.\n\n${user.username} New Balance: ${balanime}\nNew education: ${education}\nNew moneycrate amount: ${moneycrate}`);
          message.channel.send(moneyEmbed)
          message.delete()
      
      
}
}
