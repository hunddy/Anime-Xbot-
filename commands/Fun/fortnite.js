const {Client, RichEmbed, Collection} = require('discord.js')
const { stripIndents } = require("common-tags");
const fortnite = require("simple-fortnite-api"), stats = new fortnite("70630d17-6d56-472a-8112-29f34fe55110");



module.exports = {
    name: "fortnite",
    category: "Fun",
    description: "A fun command to check your fortnite stats.",
    run: async (client, message, args) => {
                const db = require('quick.db');

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"
        if(!args[0]) return message.channel.send("Please specify a username.");
        if(args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) return message.channel.send(`**${customprefix}fortnite <username> you can also do the game type solo, duos, squads**`);
        let gametype = args[1] ? args[1].toLowerCase() : "lifetime";

        let data = await stats.find(args[0])
        if(data && data.code === 404) return message.channel.send("I'm sorry but I can't find that user.")
            const { url, username } = data;
            const { scorePerMin, winPercent, kills, score, wins, kd, matches } = data[gametype]

                const embed = new RichEmbed()
                    .setColor("RANDOM")
                    .setAuthor(`Epic Games (Fortnite) | ${username}`)
                    .setDescription(stripIndents`**Gamemode:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
                    **Kills:** ${kills || 0}
                    **Score:** ${score || 0}
                    **Score Per Min:** ${scorePerMin || 0}
                    **Wins:** ${wins || 0}
                    **Win Ratio:** ${winPercent || "0%"}
                    **Kill/Death Ratio:** ${kd || 0}
                    **Matches Played:** ${matches || 0}
                    **Link:** [link to profile](${url})`)
                    .setTimestamp()

                    message.channel.send(embed)
        }
    
    

}