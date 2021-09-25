const { MessageEmbed } = require('discord.js');
const db = require("quick.db");

exports.run = function(client, message, args) {
  var puan = db.fetch(`puan_${message.author.id}`);
  var pre = db.fetch(`pre_${message.author.id}`);
  if (pre) {
    return message.channel.send({
      embeds: [
        new MessageEmbed().setColor("#5555dd").setTitle(":x: ERROR 404").setDescription("Senin zaten premiumun var!").setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")
      ]
    });
  } else {
    if (!puan) {
      return message.channel.send({
        embeds: [
          new MessageEmbed().setColor("#5555dd").setTitle(":x: ERROR 404").setDescription("Yeterli puanın yok!").setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")
        ]
      });
    } else if (puan < 200) {
      return message.channel.send({
        embeds: [
          new MessageEmbed().setColor("#5555dd").setTitle(":x: ERROR 404").setDescription("Yeterli puanın yok!").setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")
        ]
      });
    } 
    return message.channel.send({
      embeds: [
        new MessageEmbed().setColor("#5555dd").setTitle(":white_check_mark: BAŞARILI").setDescription(`**200** kadar puan hesabından silindi. Premiumun aktif edildi!`).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")
      ]
    }).then(async () => {
      db.subtract(`puan_${message.author.id}`, 200),
      db.set(`pre_${message.author.id}`, 'Açık'),
      client.channels.cache.get("865857141180858420").send({
        embeds: [
          new MessageEmbed().setTitle(":tools: Premium").setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256").setDescription(`**${message.author.tag}** adlı kullanıcı premium satın aldı ve otomatik aktif oldu!`).setColor("#5555dd")
        ]
      }),
      message.member.roles.add("865860107380457483")
    });
  }
};

 exports.config = {
    name: "premium",
    aliases: ["pre","prem"]
};

