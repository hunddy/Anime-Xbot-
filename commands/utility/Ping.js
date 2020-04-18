module.exports = {
    name: "ping",
    category: "Fun",
    description: "A fun command to check your ping.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const msg = await message.channel.send(`Pinging..`)

        msg.edit(`Pong!\nLatency: ${Math.floor(msg.createdAt - message.createdAt)}Ms\nBot Latency: ${Math.round(client.ping)}Ms`)
        } 
}