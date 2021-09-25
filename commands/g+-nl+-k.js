const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = function(client, message, args) {

 function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let times = db.fetch(`günlük_${message.author.id}`);
  let day = 86400000;
  if (times !== null && day - (Date.now() - times) > 0) {
    let time = ms(day - (Date.now() - times));
    message.channel.send({
      embeds: [
        new MessageEmbed()
                 .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({dynamic:true})
        )
        .setColor("#5555dd")
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true}))
        .setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")
        .setDescription(
          `:x: Günlük ödülünü almak için **${time.hours}** saat, **${time.minutes}** dakika, **${time.seconds}** saniye sonra tekrar dene!`
        )
      ]
    });
    return;
  }

  let moneys = rastgeleMiktar(1, 5);
  message.channel.send(
    {
      embeds: [
        new MessageEmbed()
                .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({dynamic:true})
        )
        .setColor("#5555dd")
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true}))
      .setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")
      .setDescription(
        `:tada: Günlük ödülünü topladın, cüzdanına **${moneys}** puan eklendi!`
      )
      ]
    }
  );
  db.set(`günlük_${message.author.id}`, Date.now());
  db.add(`puan_${message.author.id}`, moneys);
};

  exports.config = {
    name: "günlük",
    aliases: []
};