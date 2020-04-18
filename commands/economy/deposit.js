module.exports = {
    name: "deposit",
    category: "economy",
    aliases: ["deposit", "dep", "deposits"],
    description: "This command is used for depositing money.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require("parse-ms");

  let user = message.author;

  let member = await db.fetch(`animebucks_${message.author.id}`)
  let member2 = await db.fetch(`bank_${message.author.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`animebucks_${message.author.id}`)
    let bank = await db.fetch(`bank_${message.author.id}`)

    let embedbank = new RichEmbed()
    .setColor('RANDOM')
    .setDescription(":x: You don't have any money to deposit")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.author.id}`, money)
    db.subtract(`animebucks_${message.author.id}`, money)
    let newbank = await db.fetch(`bank_${message.author.id}`)
    let embed5 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: You have successfully deposited **${money}** Animebucks into your bank.\n\nYour bank now currently holds **${newbank}** Animebucks.`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: You can't deposit negative money what are you trying do glitch?`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: You don't have that much money`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }
  db.add(`bank_${message.author.id}`, args[0])
  db.subtract(`animebucks_${message.author.id}`, args[0])
  let newbank2 = await db.fetch(`bank_${message.author.id}`)
  let embed5 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: You have successfully deposited **${args[0]}** Animebucks into your bank.\n\nYour bank now currently holds **${newbank2}** Animebucks`);

  message.channel.send(embed5)

  }
    }
}
