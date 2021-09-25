const { MessageEmbed } = require('discord.js');
const discord = require("discord.js");
const db = require("quick.db");

exports.run = function(client, message, args) {
  var puan = db.all().filter(data => data.ID.startsWith('puan_')).sort((a, b) => b.data - a.data);
  puan.length = args[0] || 10;
  var sonuç = "";
  for (var i in puan) {
    sonuç += `**${puan.indexOf(puan[i])+1}. ${client.users.cache.get(puan[i].ID.replace("puan_", ""))} - ${puan[i].data} Puan!** (Premium: **${db.get( `pre_${puan[i].ID.replace("puan_", "")}`)|| "Kapalı"}**!)\n`;
  }
  const embed = new MessageEmbed()
  .setTitle('Puan Sıralaması')
  .addField('Geçerli sıralama aşağıda bulunmaktadır.', sonuç)
  .setColor('#5555dd')
  .setThumbnail(message.guild.iconURL({ dynamic:true }))
  .setFooter('Ghost Development');
  return client.sendEmbed(message, [embed]);
}
  
exports.config = {
    name: "sıralama",
    aliases: []
};