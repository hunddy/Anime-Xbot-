module.exports = {
    name: "support",
    category: "botdevs",
    description: "This command is used for support.",
    run: async (client, message, args) => {
    const {Client, RichEmbed, Collection} = require('discord.js')
     
    let yesEmoji = '✅'
    let noEmoji = '❌'
    let serverInvite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let user = message.author;
    const supportmessage = args.join(" ");

    let supportmessage2 = new RichEmbed()
    .setDescription("Give us a reason on why you need our support, **Any troll message will be deleted**")
    .setColor("RANDOM")

    if(!supportmessage) return message.channel.send(supportmessage2)

   let supportembed = new RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(user.displayAvatarURL)
   .setDescription(`Support message from [${message.guild.name}](${serverInvite.url})`)
   .addField("User", user, true)
   .addField("User ID: ", user.id, true)
   .addField("Message: ", supportmessage)
   .setTimestamp()

    client.channels.get("691411503785574502").send(supportembed).then(message => {
        message.react(yesEmoji)
        .then(() => message.react(noEmoji))
    })

    let support = new RichEmbed()
    .setColor("RANDOM")
    .setDescription("__**Your support message has been sent, Our support team will try our best to reach out and help you if needed.**__")
    .setFooter("Thanks you for contacting with the AnimeX Support Server if we need to reach out to you then we will please turn on dms.")

    message.channel.send(support)
        
    }
};