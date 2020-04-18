module.exports = {
    name: "joke", 
    category: "Fun",
    description: "Command used for jokes.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const giveMeAJoke = require('give-me-a-joke');
        giveMeAJoke.getRandomDadJoke(function(joke){
            message.channel.send(joke)
        })
        }
}
