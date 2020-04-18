const {Client, RichEmbed, Collection} = require('discord.js')
const { promptMessage } = require("../../functions.js");



module.exports = {
    name: "rps",
    category: "fun",
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",

    run: async (client, message, args) => {
      const db = require('quick.db');

      let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
      if(customprefix === null) customprefix = "?"
        const input = args[0]
        if (input == 'rock' || input == 'paper' || input == 'scissors') {
          const result = [
            'rock',
            'paper',
            'scissors'
          ]
      
          const picker = Math.floor(Math.random() * result.length)
          if (input == 'rock' && result[picker] == 'rock') {
            message.channel.send('I chose :mount_fuji: too!\n**It was a tie**!')
          } else if (input == 'paper' && result[picker] == 'paper') {
            message.channel.send('I chose :newspaper: too!\n**It was a tie**!')
          } else if (input == 'scissors' && result[picker] == 'scissors') {
            message.channel.send('I chose :scissors: too!\n**It was a tie**!')
          }
      
          // If bot wins
      
          else if (input == 'scissors' && result[picker] == 'rock') {
            message.channel.send('I chose :mount_fuji:\n**I win**!')
          } else if (input == 'rock' && result[picker] == 'paper') {
            message.channel.send('I chose :newspaper:\n**I win**!')
          } else if (input == 'paper' && result[picker] == 'scissors') {
            message.channel.send('I chose :scissors:\n**I win**!')
          }
      
          // If bot loses
      
          else if (input == 'rock' && result[picker] == 'scissors') {
            message.channel.send('I chose :scissors:\n**You win**!')
          } else if (input == 'paper' && result[picker] == 'rock') {
            message.channel.send('I chose :mount_fuji:\n**You win**!')
          } else if (input == 'scissors' && result[picker] == 'paper') {
            message.channel.send('I chose :newspaper:\n**You win**!')
          }
        } else {
          message.channel.send(`**Please follow the correct format..** ${customprefix}rps [rock/paper/scissors]`)
        }
    }
}