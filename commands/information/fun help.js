module.exports = {
    name: "funhelp", 
    category: "information",
    description: "Command used to show fun information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
        if (args[0] == "1") {
        let funhelpembed =  new RichEmbed()
        .setColor('RANDOM')
        .setDescription(`**Below are a list of commands used for fun. ${customprefix}(Command), To turn the page do ${customprefix}funhelp {Page}**`)
        .addField(`**8ball**`, 'Ask a question and you will get a answer.')
        .addField(`**Animal**`, 'This command will show you some cute animals.')
        .addField(`**Avatar**`, 'This command will grab the users avatar.')
        .addField(`**Coinflip**`, 'This command will flip a coin and it will land pretty simple.')
        .addField(`**Count**`, 'This command will start a counting game **Please note you can only count ONCE.**')
        .addField(`**Fortnite**`, 'This command will show you yours or someone else stats on fortnite.')
        .addField(`**Gif**`, 'This command will show you a gif you searched for.')
        .addField(`**Joke**`, 'This command will show you a funny or lame.')
        .addField(`**Love**`, 'This command is used to show how much love someone has for you.')
        .addField(`**Math**`, 'This command is used to calculate what you want.')
        .setFooter('Fun help page 1/2', message.author.displayAvatarURL)
        message.channel.send(funhelpembed)
        } else if (args[0] == "2") {
            let funhelpembed2 =  new RichEmbed()
            .setColor('RANDOM')
            .setDescription(`**Below are a list of commands used for fun. ${customprefix}(Command), To turn the page do ${customprefix}funhelp {Page}**`)
            .addField(`**Rate**`, 'This command will rate the person you @!')
            .addField(`**Rmemes**`, 'This command will show memes. ;)')
            .addField(`**Rps**`, 'Play a classic game of rock paper scissors!')
            .addField(`**Rroastme**`, 'This command will show you a image from reddit that you can roast.')
            .addField(`**Snipe**`, 'This command will snipe a recent deleted message.')
            .addField(`**Urban**`, 'This command will show you the meaning of something and the example.')
            .addField(`**Yomama**`, 'This command will show you funny insults of "YO MAMA"')
            .setFooter('Fun help page 2/2', message.author.displayAvatarURL)
            message.channel.send(funhelpembed2)
        }
        }
}
