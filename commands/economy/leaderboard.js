module.exports = {
    name: "jkldsjkfejksfdjkfdsjkfdsajkfdjddwepfok2904958940392idkvoekenikfj",
    category: "economy",
    description: "This command is used for seeing other people economy status.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let un = message.author;

        let ab = db.all().filter(data => data.ID.startsWith(`animebucks_`)).sort((a, b) => b.data - a.data);
        let content = "";
          for(let i = 0; i < ab.length; i++) {
            let user = client.users.get(ab[i].ID.split('_')[2]).username

            content += `${i+1}. ${user} ~ ${ab[i].data}\n`
    }
        let leaderboardembed = new RichEmbed()
        .setDescription(`**AnimeX Animebucks Leaderboard**\n\n${content}`)
        .setColor('#0092E1')
        .setFooter(`AnimeX Help Commands | Requested by ${un.username}`, client.user.displayAvatarURL)
        .setTimestamp()
      message.channel.send(leaderboardembed)
    }
}
