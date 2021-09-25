
const { MessageEmbed } = require('discord.js');
exports.run = function(client, message, args) {

    var embed = new MessageEmbed()
    .setColor('#5555dd')
    .setTitle("PREMİUM AVANTAJLAR")
    .setDescription(`🃏 Mesaj başına eklenen puan sayısı **1**'den **2**'ye yükselir! \n🐿️${client.guilds.cache.get("811982172575105064").roles.cache.get("865860107380457483")} (\`${client.guilds.cache.get("811982172575105064").roles.cache.get("865860107380457483").name}\`) rolüne sahip olursun!`)    
 .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter("Ghost Development")
    return client.sendEmbed(message, [embed]);
  }

exports.config = {
    name: "pre-avantajlar",
    aliases: []
};