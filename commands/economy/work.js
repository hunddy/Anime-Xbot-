module.exports = {
    name: "work",
    category: "economy",
    description: "This command is used for working.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const ms = require('parse-ms');
        const db = require('quick.db');
        let graduation = await db.fetch(`highschooldiplomass_${message.author.id}`);

        let customprefix = await db.fetch(`prefixs_${message.guild.id}`)
        if(customprefix === null) customprefix = "?"



        if (args[0] == 'regular') {

          let viptimeout = await db.fetch(`vip_${message.author.id}`)
          if(viptimeout === true) viptimeout = 150000;
          if (viptimeout === null) viptimeout = 300000;

      
        let worktimeout = await db.fetch(`worktimeout_${message.author.id}`)

        if (worktimeout !== null && viptimeout - (Date.now() - worktimeout) > 0) {
          let time = ms(viptimeout - (Date.now() - worktimeout));


        
          let timeEmbed = new RichEmbed()
          .setColor("0xFF4133")
          .setDescription(`:x: You've already worked recently\n\nYou can work again in ${time.minutes}m ${time.seconds}s.`)
          .setFooter('Owning vip will decrease your cooldown by half!')
          message.channel.send(timeEmbed)
        } else {
        let regularramount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like
        var regularrandom = ['Store clerk', 'Fast food worker', 'Photographer', 'Graphic designer', 'Restaurant staff member', 'Home Heath Aide', 'Pet Sitter', 'Baby Sitter', 'Entrepreneur'];
        let regularrandomm = (regularrandom[Math.floor(Math.random() *regularrandom.length)]);

        let regularembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You worked as a ${regularrandomm}, got paid ${regularramount}$ Animebucks!`)
        .setColor("RANDOM")
        .setFooter("Nice job mate.")


        message.channel.send(regularembed)
        db.add(`animebucks_${message.author.id}`, regularramount)
        db.set(`worktimeout_${message.author.id}`, Date.now())
    }
        } else
        if (args[0] == 'programmer') {
        let programmeramount = Math.floor(Math.random() * 2000) + 50; // 1-500 random number. whatever you'd like
        if (graduation === null) return message.channel.send(`:rofl: You are too stupid. You need a high school diploma to work here. (To get education use the command "${customprefix}School" then save up to graduate.)`)
        let viptimeout = await db.fetch(`vip_${message.author.id}`)
        if(viptimeout === true) viptimeout = 150000;
        if (viptimeout === null) viptimeout = 300000;
      
        let worktimeout = await db.fetch(`worktimeout_${message.author.id}`)
      
        if (worktimeout !== null && viptimeout - (Date.now() - worktimeout) > 0) {
          let time = ms(viptimeout - (Date.now() - worktimeout));


        
          let timeEmbed = new RichEmbed()
          .setColor("0xFF4133")
          .setDescription(`:x: You've already worked recently\n\nYou can work again in ${time.minutes}m ${time.seconds}s.`)
          .setFooter('Owning vip will decrease your cooldown by half!')
          message.channel.send(timeEmbed)
        } else {
        var programmerrandom = ['Epicgames', 'Google', 'Apple', 'Amazon', 'Ebay', 'Boeing', 'Discord', 'Facebook', 'Spotify', 'Instagram', 'Netflix'];
        let programmerrandomm = (programmerrandom[Math.floor(Math.random() *programmerrandom.length)]);

        let programmarembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You worked as a programmer for the company ${programmerrandomm}, and fixed thier bugs/errors and earned ${programmeramount}$ Animebucks!`)
        .setColor("RANDOM")
        .setFooter("Nice job mate.")


        message.channel.send(programmarembed)
        db.add(`animebucks_${message.author.id}`, programmeramount)
        db.set(`worktimeout_${message.author.id}`, Date.now())
    }
        } else if(args[0] == 'constructon') {
         let constructoramount = Math.floor(Math.random() * 1000) + 100; // 1-500 random number. whatever you'd like
         if (graduation === null) return message.channel.send(`:rofl: You are too stupid. You need a high school diploma to work here. (To get education use the command "${customprefix}School" then save up to graduate.)`)
         let viptimeout = await db.fetch(`vip_${message.author.id}`)
         if(viptimeout === true) viptimeout = 150000;
         if (viptimeout === null) viptimeout = 300000;
      
         let worktimeout = await db.fetch(`worktimeout_${message.author.id}`)
       
         if (worktimeout !== null && viptimeout - (Date.now() - worktimeout) > 0) {
           let time = ms(viptimeout - (Date.now() - worktimeout));
 
 
         
           let timeEmbed = new RichEmbed()
           .setColor("0xFF4133")
           .setDescription(`:x: You've already worked recently\n\nYou can work again in ${time.minutes}m ${time.seconds}s.`)
           .setFooter('Owning vip will decrease your cooldown by half!')
           message.channel.send(timeEmbed)
         } else {
         var constructorrandom = ['Hospital', 'Mcdonalds', 'Road', 'House', 'Store', 'Libary', 'Amusement park', 'Bridge', 'Mall', 'School'];
         let constructorrandomm = (constructorrandom[Math.floor(Math.random() *constructorrandom.length)]);
         let constructorembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You worked as a constructon worker & got payed ${constructoramount}$ Animebucks for building a ${constructorrandomm}!`)
        .setColor("RANDOM")


        message.channel.send(constructorembed)
        db.add(`animebucks_${message.author.id}`, constructoramount)
        db.set(`worktimeout_${message.author.id}`, Date.now())
        }
        } else if(args[0] == 'cooker') {
        let cookeramount = Math.floor(Math.random() * 1000) + 100;
        if (graduation === null) return message.channel.send(`:rofl: You are too stupid. You need a high school diploma to work here. (To get education use the command "${customprefix}School" then save up to graduate.)`)
        let viptimeout = await db.fetch(`vip_${message.author.id}`)
        if(viptimeout === true) viptimeout = 150000;
        if (viptimeout === null) viptimeout = 300000;
      
        let worktimeout = await db.fetch(`worktimeout_${message.author.id}`)
      
        if (worktimeout !== null && viptimeout - (Date.now() - worktimeout) > 0) {
          let time = ms(viptimeout - (Date.now() - worktimeout));


        
          let timeEmbed = new RichEmbed()
          .setColor("0xFF4133")
          .setDescription(`:x: You've already worked recently\n\nYou can work again in ${time.minutes}m ${time.seconds}s.`)
          .setFooter('Owning vip will decrease your cooldown by half!')
          message.channel.send(timeEmbed)
        } else {
        var cookerrrandom = ['Bill Gates', 'Gordon Ramsay', 'Donald Trump', 'Barack Obama', 'Tom Hanks', 'Brad Pitt', 'Will Smith', 'Russel Wilson', 'Tom Brady', 'Dwayne Johnson'];
        let cookerrrandomm = (cookerrrandom[Math.floor(Math.random() *cookerrrandom.length)]);
        let cookerembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, You worked as a cooker and cooked for ${cookerrrandomm} they loved it so much they paid you ${cookeramount}$ Animebucks!`)
        .setColor("RANDOM")
        message.channel.send(cookerembed)
        db.add(`animebucks_${message.author.id}`, cookeramount)
        db.set(`worktimeout_${message.author.id}`, Date.now())
    }
        } else if (args[0] == 'policemen') {
                   
        let policemenamount = Math.floor(Math.random() * 800) + 250;
        if (graduation === null) return message.channel.send(`:rofl: You are too stupid. You need a high school diploma to work here. (To get education use the command "${customprefix}School" then save up to graduate.)`)
        let viptimeout = await db.fetch(`vip_${message.author.id}`)
        if(viptimeout === true) viptimeout = 150000;
        if (viptimeout === null) viptimeout = 300000;
      
        let worktimeout = await db.fetch(`worktimeout_${message.author.id}`)
      
        if (worktimeout !== null && viptimeout - (Date.now() - worktimeout) > 0) {
          let time = ms(viptimeout - (Date.now() - worktimeout));


        
          let timeEmbed = new RichEmbed()
          .setColor("0xFF4133")
          .setDescription(`:x: You've already worked recently\n\nYou can work again in ${time.minutes}m ${time.seconds}s.`)
          .setFooter('Owning vip will decrease your cooldown by half!')
          message.channel.send(timeEmbed)
        } else {
        var policerandom = ['Giving somone a ticket', 'Saving a hostage', 'Arresting a fugitive', 'Stopped a robbery', 'Saving a person life'];
        let policerandomm = (policerandom[Math.floor(Math.random() *policerandom.length)]);
        let policemenembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, You worked as a policemen and got paid ${policemenamount}$ for ${policerandomm}!`) 
        .setColor("RANDOM")
        message.channel.send(policemenembed) 
        db.add(`animebucks_${message.author.id}`, policemenamount)
        db.set(`worktimeout_${message.author.id}`, Date.now())
    }
        }
        
    }
}
