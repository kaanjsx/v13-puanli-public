const { MessageEmbed } = require('discord.js');
const db = require("quick.db")

exports.run = function(client, message, args) {

  let miktar = "10";
  let arg = args[0];
  if(!arg) return message.channel.send({
    embeds: [
      new MessageEmbed().setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256").setDescription(":x: Lütfen bir seçenek belirt: `kullan`, `bilgi`").setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true})).setColor("#5555dd").setTimestamp()
    ]
  });
  if(arg == "kullan") {
    let kod = args[1];
    if(!kod) return message.channel.send({
      embeds: [
        new MessageEmbed().setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256").setDescription(":x: Lütfen çalışan bir promosyon kodu belirt: `bayram` \n\n :grey_question: Biliyor Muydun: Her bir mesaj başına profiline **1** puan eklenir.").setColor("#5555dd").setTimestamp()
      ]
    });
    if(kod == "bayram") {
      if(db.fetch('kullanim2') == "15") {
        return message.channel.send({
          embeds: [
            new MessageEmbed().setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256").setDescription(":x: Bu promosyon kodunun kullanım sayısı tükenmiş! \n\n :grey_question:  Biliyor Muydun: **yardım** komutunu kullanarak daha detaylı bilgi alabilirsin.").setColor("#5555dd").setTimestamp()
          ]
        });
      };
      if(db.fetch(`kullanim4_${message.author.id}`) == 'yes') {
        return message.channel.send({
          embeds: [
            new MessageEmbed().setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256").setDescription(":x: Bu promosyon kodunu zaten kullanmışsın! \n\n :grey_question: Biliyor Muydun: Chatleşerek altyapı kazanabilirsin.").setColor("#5555dd").setTimestamp()
          ]
        });
      };
      db.add(`puan_${message.author.id}`, miktar);
      db.set(`kullanim4_${message.author.id}`, 'yes');
      db.push('kullanim2', { user: message.author.id, kod: 'bayram' });
      return message.channel.send({
        embeds: [
          new MessageEmbed().setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256").setDescription(":white_check_mark: `bayram` adlı promosyon kodunu kullanarak **"+miktar+"** puan kazandın! :tada: \n\n :grey_question: Biliyor Muydun: Ghost Bot <t:1610276686:d> tarihinde kullanıma açıldı.").setColor("#5555dd").setTimestamp()
        ]
      });
    };
  } else if(arg == "bilgi") {
    let kod = args[1];
    if(!kod) return message.channel.send({
      embeds: [
        new MessageEmbed().setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256").setDescription(":x: Lütfen çalışan bir promosyon kodu belirt: `bayram` \n\n :grey_question: Biliyor Muydun: **Ghost Development** 2019'dan beri aktif.").setColor("#5555dd").setTimestamp()
      ]
    });
    if(kod == "bayram") {
      return message.channel.send({
        embeds: [
          new MessageEmbed().setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true})).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256").setDescription(":question: - Verdiği puan: **"+miktar+"**\n:question: - Bitiş tarihi: **24 Temmuz 2021 23:59**\n:question: - Kodu oluşturan: **kaan#1337**").setColor("#5555dd").setTimestamp()
        ]
      });
    };
  };
};

exports.config = {
    name: "promosyon",
    aliases: []
};