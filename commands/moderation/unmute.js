module.exports = {
    name: "unmute", 
    category: "moderation",
    description: "Command used to unmute a user",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')

        // check if the command caller has permission to use the command
        if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) {
            return message.reply(":x: You don't have permission to use this command.")
            .then(msg => msg.delete(5000));
        }

                let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  //define the reason and unmutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please supply a user to be muted!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

//define mute role and if the mute role doesnt exist then send a message
let muterole = message.guild.roles.find(r => r.name === "Muted")
if(!muterole) return message.channel.send("There is no mute role to remove!")

//remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
mutee.removeRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`**Hello, you have been unmuted in ${message.guild.name} for: ${reason}**`).catch(err => console.log(err))
    message.channel.send(`**${mutee.user.username} was unmuted! :dove:**`)
})

//send an embed to the modlogs channel
let embed = new RichEmbed()
.setColor("RANDOM")
.setThumbnail(target.user.avatarURL)
.addField('**Unmuted Member:** :dove:', `${target.user.username} with an ID: ${target.user.id}`)
.addField('**Muted By:**', `${message.author.username} with an ID: ${message.author.id}`)
.addField('**Muted Time:**', message.createdAt)
.addField('**Muted At:**', message.channel)
.addField("**Reason:**", reason)
.setFooter('Mute user information', target.user.displayAvatarURL);

let sChannel = message.guild.channels.find(c => c.name === "logs")
sChannel.send(embed)
}


        }

