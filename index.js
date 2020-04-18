const {
    attachment
} = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const { config } = require("dotenv");

const {Client, RichEmbed, Collection} = require('discord.js')
const configeration = require('./config.json')
const Config = require("dotenv")
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');
const yomama = require('yo-mamma');
const math = require('mathjs');
const urban = require("urban");
const stripIndents = require("common-tags");
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
bot.snipes = new Map();
http.createServer().listen(port);
const leveling = require('discord-leveling')



let PREFIX = "?"
var version = 'Alpha 2.0.0';


var Cooldown = '**5 Seconds**';
var Examplesmute = '**?Mute @Mat_thew 10S**';
var Examplesclear = '**?Clear 10**';
var Examples8ball = "**?8ball Will this server grow?**";

var HTUMute = '**?Mute @[USER ID] [TIME]S/M/H]**';
var coinflipdis = '**------------**'
var HTUClear = '**?Clear [NUMBER]**';
varHTU8ball = '**?8ball [QUESTION]**';

const { GiveawayManager } = require('discord-giveaways')

const db = require('quick.db');

const moment = require("moment");

const cheerio = require('cheerio');

const request = require('request');

bot.music = new Map();

const usedCommandRecently = new Set();

const fs = require('fs');

bot.commands = new Collection();
bot.aliases = new Collection();

function emoji (id) {
    return bot.emojis.get(id).toString();
}
["command"].forEach(handler =>{
    require(`./handlers/${handler}`)(bot);
});


var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later"
];

var CoinFlip = [
    "Heads",
    "Tails"
];


bot.on('ready', () =>{
    console.log(`${bot.user.username} is succefully on! in ${bot.guilds.size} Servers and in ${bot.channels.size} channels.`)
    bot.user.setActivity(`${bot.users.size} Users, ${bot.guilds.size} Servers, ?Help`, { type: 'WATCHING'}).catch(console.error);

})

bot.on('error', err => {
    console.log(err);
})
//Logging
bot.on("messageUpdate", async(oldMessage, newMessage) =>{
    if(oldMessage.content === newMessage.content){
        return;
    }
        let logembed = new RichEmbed()
        .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
        .setThumbnail(oldMessage.author.avatarURL)
        .setColor("RANDOM")
        .setDescription("Message edited")
        .addField("Before", oldMessage.content, true)
        .addField("After", newMessage.content, true)
        .setTimestamp()
        .setFooter('Edited message logged.');

        let loggingchannel = newMessage.guild.channels.find(ch => ch.name === "logs")
        if(!loggingchannel) return;

        loggingchannel.send(logembed);

    
})

bot.on("messageDelete", async message =>{

        let logdeleteembed = new RichEmbed()
        .setTitle("Message deleted!")
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .addField("Deleted by", message.author.tag)
        .addField("Deleted in", message.channel)
        .addField("Deleted at", message.createdAt)
        .setFooter('Deleted message logged.');

        let loggingdeletedchannel = message.guild.channels.find(ch => ch.name === "logs")
        if(!loggingdeletedchannel) return;

        loggingdeletedchannel.send(logdeleteembed);

    
});

bot.on('messageDelete', async message => {
   bot.snipes.set(message.channel.id, {
       sender: message.author,
       content: message.content
   });
});

bot.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
        
        }
    }
    let channel = bot.channels.get(guild.systemChannelID || channelID);
    let botonjoinserverembed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('Thank, you for adding me to the server!')
    .setDescription("Hello! I'm AnimeX here at your service my default prefix is ``?`` You can change it just look at ?help for commands, I've a bunch of commands from laughing at memes to having fun playing with my economy system all the way to helping moderators moderate the chat!")
    .addField('**Important**', "I've a logging system, all you need to do is create a channel named ``logs`` this is optional, Also this is Important most of my commands need permission so please give me permission.")
    .addField('**Also**', 'I hope you enjoy my functional commands if you need help or support make sure to join my support server!')
    .addField('**Need assistance or help with AnimeX? Join our support server!**', '[Join our support server!](https://discord.gg/R5JXU5h)')

    channel.send(botonjoinserverembed)
})

bot.on('message', async message=>{

    //custom prefix 
let fetched = await db.fetch(`prefixs_${message.guild.id}`);
if (fetched === null) PREFIX = "?";
else PREFIX = fetched;
    

 
    
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(PREFIX)) return;
    

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(bot, message, args);

});


bot.login("NjA2OTQxNzA0MjA0ODQ1MDg4.XnES3w.rEpmQRqh-ZYn0NiwzxGbi3ZsKWU");
