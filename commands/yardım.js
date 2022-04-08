const { MessageEmbed, MessageButton,MessageActionRow } = require('discord.js');

exports.run = function(client, message, args) { 

 var embed = new MessageEmbed()
    .setColor('#5555dd')
    .setTitle("Yardım Menüsü")
    .setDescription(` > <:mod:851798497468350474> **Genel Komutlar** \n\n > <:fallen_leaf:858716086814769172> yardım, profil, satın-al, sıralama, günlük, promosyon, premium, puan-yolla, istatistik \n\n > <:dev:851798404057399316> **Yetkili Komutları** \n\n > <:fallen_leaf:858716086814769172> puan-ekle, puan-sil`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter("Ghost Development")
    .setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")
    .setTimestamp ()

  var button = new MessageButton()
  .setStyle('LINK') 
  .setURL('https://discord.gg/3GW335E6uR')
  .setEmoji('👻')

  
  var row = new MessageActionRow()
    .addComponents([ button ])
  
  return client.sendEmbed(message, [embed], [row])

}  
exports.config = {
    name: "yardım",
    aliases: []
};
