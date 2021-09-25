  
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
exports.run = function(client, message, args) {
  
  var puan = db.fetch(`puan_${message.author.id}`);
    var embed = new MessageEmbed()
    .setColor('#5555dd')
    .setTitle("MARKET")
    .setDescription(`**:shopping_cart: Markette Olan Eşyalar** \n\n :palm_tree:  Satın Almak İçin !eşya örn: !butonlu-müzik \n\n:rocket: Coder Rolü **2000** Puan Satın Almak İçin **!coder** \n\n :rocket: Premium **200** Puan Satın Almak İçin **!premium**  Avantajları İçin **!pre-avantajlar** \n\n :fire:  Sende olan puanı öğrenmek için profil komutunu kullan.`)    
   .setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")
    .setFooter("Ghost Development")
    .setTimestamp()
    return client.sendEmbed(message, [embed]);
  }

  
exports.config = {
    name: "satın-al",
    aliases: []
};