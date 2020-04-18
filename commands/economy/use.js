module.exports = {
    name: "use",
    category: "economy",
    description: "This command is used for a using items.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;


        if (args[0] == "quizbomb") {
        let vip = await db.fetch(`vip_${message.author.id}`)
        if(vip === true) vip = Math.floor(Math.random() * 250) + 50;
        if (vip === null) vip = Math.floor(Math.random() * 200) + 1;
        let author = await db.fetch(`quizbombs_${message.author.id}`)
    
        let Embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You don't have any quizbombs to use. What are you trying to do?`);
        if (author < 1) return message.channel.send(Embed)
     
    const quiz = require('./quiz.json');
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() ===  response.content.toLowerCase());
    
    };
    let quizcool = new RichEmbed()
    .setDescription(`^ Attention Everyone ${user.username} just used a quizbomb first person to get it right will get some Animebucks!`)
    .setColor("RANDOM")
    message.channel.send(quizcool)

    db.subtract(`quizbombs_${message.author.id}`, 1)

    message.channel.send(item.question).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            db.add(`animebucks_${message.author.id}`, vip)
            let currentwinbalance = db.fetch(`animebucks_${message.author.id}`)
            let correctanswer = new RichEmbed()
            .setDescription(`${collected.first().author} You've got the right answer congradulation you earned ${vip} Animebucks!\nYou now have ${currentwinbalance} Animebucks!`)
            .setFooter("Here's a tip if you own vip you will get more money if you get it right!")
            .setColor("RANDOM")
            message.channel.send(correctanswer)
        })
        .catch(collected => {
            let wronganswer = new RichEmbed()
            .setDescription(`Sorry, no one got the right answer on time everyone missed out on getting ${vip} Animebucks!`)
            .setColor("RANDOM")
            message.channel.send(wronganswer)
        });
    });
}
     

    if (args[0] == "animecard") {
        let animecard = await db.fetch(`animecard_${message.author.id}`)
        let Embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You don't have any animecard booster to use. What are you trying to do?`);
        if (animecard < 1) return message.channel.send(Embed)

    let animebooster = new RichEmbed()
    .setDescription(`${user.username} You've just used a perm animecard booster..`)
    .setColor("RANDOM")
    message.channel.send(animebooster)

    db.subtract(`animecard_${message.author.id}`, 1)
    db.set(`animeboostercard_${message.author.id}`, true)
    
}
    }
}
