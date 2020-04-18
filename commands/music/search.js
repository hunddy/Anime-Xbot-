const search = require('yt-search')

module.exports = {
    name: "search",
    category: "music",
    description: "This command is used for music.",
    run: async (client, message, args, ops) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        search(args.join(' '), function(err, res) {
           if (err) return message.channel.send('Something went wrong please retry this command.');

           let videos = res.videos.slice(0, 10);
           
           let resp = '';
           for (var i in videos) {
               resp += `\n\n__**[${parseInt(i)+1}]**__ **${videos[i].title}**`;
           }

           let searchembed = new RichEmbed()
           .setDescription(`${resp}`)
           .setColor("#0092E1")
           .setFooter(`Please choose a number between 1-${videos.length}`)

           message.channel.send(searchembed);

           const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

           const collector = message.channel.createMessageCollector(filter);

           collector.videos = videos;

           collector.once('collect', function(m) {
               let commandFile = require(`./play.js`);
               commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops)
           });
        });
}
}
