module.exports = {
    name: "shop",
    category: "economy",
    description: "This command is used for showing the shop.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
        let storeembed = new RichEmbed()
        .setTitle("**Anime shop! [**Easter sale!**]\n__Sale ends at 4/15/20 at 12:00 PM PST__**")
        .setDescription(`**To buy a item do ${customprefix}buy<item>(Lowercase)\nExample ${customprefix}buy vip**`)
        .setColor("RANDOM")
        .addField(`<:Crown:679163396750442535> **Vip**`, '`35000$` [**30% OFF!**](https://top.gg/bot/606941704204845088)\nWith Vip you will be able to get extra money from daily rewards and weekly rewards also begging plus robbing more to come soon!')
        .addField(`:briefcase: :money_with_wings:**Moneycrate**`, '`2125$` [**15% OFF!**](https://top.gg/bot/606941704204845088)\nGives you a money crate that opens into a random amout of cash the luck is the key.')
        .addField(`:pencil: **QuizBomb**`, '`225$` [**10% OFF!**](https://top.gg/bot/606941704204845088)\nGive you a quizbomb that once you used it will send a random quiz message and the first person to get it right on time will get Animebucks!')
        .setTimestamp()
        .setFooter('Shop items Page 1/1 | No refunds will be provided | (There was gonna be more stuff to added to the easter sale but I ran out of time to add it.)')
        message.channel.send(storeembed)  
    }
}