
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
exports.run = function(client, message, args) {
  
   var ping = client.ws.ping;
   var puan = db.fetch(`puan_${message.author.id}`);
 
    var embed = new MessageEmbed()
    .setColor('#5555dd')
    .setTitle("İstatistikler")
    .setDescription(`:sushi: Senin puan'ın: **${puan || 0 }** \n :pizza: Aktiflik: **${client.uptime}**'sn \n <:time:851798352252633118> Ping:  **${ping}**'ms \n :coconut: Kaç kişinin mesajı sayılıyor: **${message.guild.memberCount}**`)   
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setFooter("Summer Developers & Ghost Development")
    .setTimestamp()
    return client.sendEmbed(message, [embed]);
  }

exports.config = {
    name: "i",
    aliases: ["stats", "istatistik"]
};
