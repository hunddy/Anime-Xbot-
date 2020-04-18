module.exports = {
    name: "urban",
    category: "Fun",
    description: "Fun command used for searching up in urban legends.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const urban = require("urban");
        const { stripIndents } = require("common-tags");
                const db = require('quick.db');

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"

        if(args < 1 || !["search", "random"].includes(args[0])) return message.channel.send(`${customprefix}urban <search|random> <Subject> **Example ?urban search Hey**`)
        let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random()
        try {
            search.first(res => {
                if(!res) return message.channel.send("No results showed up.")
                let { word, definition, example, thumbs_up, thumbs_down, permalink, author} = res

                let urbanembed = new RichEmbed()
                .setColor("RANDOM")
                .setAuthor(`Urban Disctionary | ${word}`)
                .setDescription(stripIndents`**Defintion:** ${definition || "No definition"}
                **Example:** ${example || "no Example"}
                **:thumbsup:** ${thumbs_up || 0}
                **:thumbsdown:** ${thumbs_down || 0}
                **Link:** [link to ${word}](${permalink || "https://www.urbandictionary.com/"})`)
                .setTimestamp()
                .setFooter(`Written by ${author || "unkown"}`);
                message.channel.send(urbanembed)
            })
        } catch(e) {
          return message.channel.send("Something went wrong please try again.")
        }
        
        }
}