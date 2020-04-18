module.exports = {
    name: "roulette",
    category: "economy",
    aliases: ["roulette", "roulettes"],
    description: "This command is used for rouette .",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require("parse-ms");


        let user = message.author;

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"

  function isOdd(num) { 
    if ((num % 2) == 0) return false;
    else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`animebucks_${message.author.id}`)

let vip = await db.fetch(`vip_${message.author.id}`)
if(vip === true) vip = Math.floor(Math.random() * 100);
if (vip === null) vip = Math.floor(Math.random() * 70);  


let moneyhelp = new RichEmbed()
.setColor("RANDOM")
.setDescription(`:x: Please specify a color or amount to gamble. Usage: ${customprefix}roulette <Color> <Amount>`);

let moneymore = new RichEmbed()
.setColor("RANDOM")
.setDescription(`:x: You are betting more than you have.`);
let colorbad = new RichEmbed()
.setColor("RANDOM")
.setDescription(`:x: Specify a color for the multiplier Red [2.5x] Black [3.5x] Green [5.5x]`);
 let bal = await db.fetch(`animebucks_${message.author.id}`)
 let negativemoneynono = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: You can't gamble negative money what are you trying do glitch?`);

  if (message.content.includes('-')) return message.channel.send(negativemoneynono)


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (vip == 0 && colour == 2) { // Green
        money *= 5.5
        db.add(`animebucks_${message.author.id}`, money)
        let currentwinbalancegreen = db.fetch(`animebucks_${message.author.id}`)
        let moneyEmbed1 = new RichEmbed()
        .setTitle(`<:roulette:679401857122172928> ${user.username} roulette Machine...`)
        .setColor("RANDOM")
        .setDescription(`You won __**${money}**__ Animebucks\n\nYour current multiplier is __**5.5x**__\nYour chances of winning was **${vip}%**\n\nYou now have **${currentwinbalancegreen}** Animebucks!`)
        .setFooter("Nice job you won mate.")
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Won ${money} on green`)
    } else if (isOdd(vip) && colour == 1) { // Red
        money = parseInt(money * 2.5)
        db.add(`animebucks_${message.author.id}`, money)
        let currentwinbalancered = db.fetch(`animebucks_${message.author.id}`)
        let moneyEmbed2 = new RichEmbed()
        .setTitle(`<:roulette:679401857122172928> ${user.username} roulette Machine...`)
        .setColor("RANDOM")
        .setDescription(`You won __**${money}**__ Animebucks\n\nYour current multiplier is __**2.5x**__\nYour chances of winning was **${vip}%**\n\nYou now have **${currentwinbalancered}** Animebucks!`)
        .setFooter("Nice job you won mate.")
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(vip) && colour == 0) { // Black
        money = parseInt(money * 3.5)
        db.add(`animebucks_${message.author.id}`, money)
        let currentwinbalanceblack = db.fetch(`animebucks_${message.author.id}`)
        let moneyEmbed3 = new RichEmbed()
        .setTitle(`<:roulette:679401857122172928> ${user.username} roulette Machine...`)
        .setColor("RANDOM")
        .setDescription(`You won __**${money}**__ Animebucks\n\nYour current multiplier is __**3.5x**__\nYour chances of winning was **${vip}%**\n\nYou now have **${currentwinbalanceblack}** Animebucks!`)
        .setFooter("Nice job you won mate.")
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`animebucks_${message.author.id}`, money)
        let currentwinbalancelose = db.fetch(`animebucks_${message.author.id}`)
        let moneyEmbed4 = new RichEmbed()
        .setTitle(`<:roulette:679401857122172928> ${user.username} roulette Machine...`)
        .setColor("RANDOM")
        .setDescription(`You lost __**${money}**__ Animebucks\n\nYour current multiplier is __**0x**__\n\nYou now have **${currentwinbalancelose}** Animebucks!`)
        .setFooter("You loose that's tuff.")
        message.channel.send(moneyEmbed4)
    }
    }
}
