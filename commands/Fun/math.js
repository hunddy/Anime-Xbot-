const {Client, RichEmbed, Collection} = require('discord.js')
var PREFIX = '?'
const math = require('mathjs');

module.exports = {
    name: "math",
    category: "Fun",
    description: "This command is used for calculations.",
    run: async (client, message, args) => {

    if (!args[0]) return message.channel.send('Please input a calculation.');

    let resp;
    try{
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send('Sorry, please input a valid calculation.');
    }
    let mathembed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle('Calculator')
    .addField('Input', `\`\`\n${args.join('')}\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``)
    message.channel.send(mathembed)
    }
}