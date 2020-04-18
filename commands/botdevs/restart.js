module.exports = {
    name: "restart",
    category: "botdevs",
    description: "This command is used to reset the bot.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        if(message.author.id !== '306963871980191754') return message.reply("You are not a bot developer, nor a whitelisted user.");
        message.channel.send("🕙 | Reboot in progress...").then(async msg => {
            msg.edit("🕙 | Reboot in progress..")
            client.destroy();
            await client.login("NjA2OTQxNzA0MjA0ODQ1MDg4.XnES3w.rEpmQRqh-ZYn0NiwzxGbi3ZsKWU");
            await msg.edit("🕙 | Reboot in progress...")
            msg.edit("☑️ | Successfully  Rebooted!")
            message.delete()
        })
        }
}