const countGame = new Set();
const {Client, RichEmbed, Collection} = require('discord.js')
var PREFIX = '?'

module.exports = {
    name: "count",
    category: "Fun",
    description: "This command is used for fun counting.",
    run: async (client, message, args) => {
        
        let num = parseInt(args[0]);
        console.log(countGame.size);


        if (countGame.size === 0) {
            if (num !== 1) return message.channel.send(`The game must start at **1**!`);
            await countGame.add(message.author.id);
            return message.channel.send(`**${message.member.user.tag}** has started a game! Current count is at **${countGame.size}**`);
            
        } else if (num !== countGame.size + 1) {
            countGame.clear();
            return message.channel.send(`${message.member.user.tag}** has ended the game at **${num}**.`);
        } else {
            await countGame.add(message.author.id);
            return message.channel.send(`**${message.member.user.tag}** has counted! game is now at **${countGame.size}**.`);
        }
    }
};