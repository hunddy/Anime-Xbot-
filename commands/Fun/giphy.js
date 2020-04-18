const {Client, RichEmbed, Collection} = require('discord.js')
var PREFIX = '?'
const giphy = require('giphy-api')("dR0w27Ahugv52eK35odxgoB5RYDYK2Ow")

module.exports = {
    name: "gif",
    category: "Fun",
    description: "This command is used for Gifs.",
    run: async (client, message, args) => {

        if (args.length === 0) {
            message.channel.send('**:x: Please enter something for me to search on giphy!**')
            return;
          }
          if (args.length === 1) {
            term = args.toString()
          } else {
            term = args.join(" ");
          }
          giphy.search(term).then(function (res) {
            // Res contains gif data!
            let id = res.data[0].id
            let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
            const embed = {
              "color": 3066993,
              "timestamp": new Date(),
              "footer": {
                "icon_url": "https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif",
                "text": "Powered by Giphy"
              },
              "image": {
                "url": msgurl
              },
              "fields": [
                {
                  "name": "Search Term",
                  "value": "`" + term + "`",
                  "inline": true
                },
                {
                  "name": "Page URL",
                  "value": "[Giphy](" + res.data[0].url + ")",
                  "inline": true
                }
              ]
            };
            message.channel.send({ embed });
        
          });
        
          message.delete();
    }
}