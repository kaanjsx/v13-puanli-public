
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
exports.run = function(client, message, args) {
  
   var ping = client.ws.ping;
  var puan = db.fetch(`puan_${message.author.id}`);
 
    var embed = new MessageEmbed()
    .setColor('#5555dd')
    .setTitle("İstatistikler")
    .setDescription(`<:djs:848522787564027915>  Senin puan'ın: **${puan || 0 }** \n <:fallen_leaf:858716086814769172> Aktiflik: **${client.uptime}**'sn \n <:time:851798352252633118> Ping:  **${ping}**'ms \n <:qrall:851798791618560020> Kaç kişinin mesajı sayılıyor: **605**`)   
    .setThumbnail('https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256')
    .setFooter("Ghost Development")
    return client.sendEmbed(message, [embed]);
  }

exports.config = {
    name: "i",
    aliases: ["stats", "istatistik"]
};