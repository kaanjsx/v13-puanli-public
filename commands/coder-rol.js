const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
exports.run = function(client, message, args) {
      var puan = db.fetch(`puan_${message.author.id}`);
    if (!puan) {
      return message.channel.send({embeds:[new MessageEmbed().setColor("#5555dd").setTitle(":x: ERROR 404").setDescription("Yeterli puanın yok!").setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")]});
    } else if (puan < 2000) {
      return message.channel.send({embeds: [new MessageEmbed().setColor("#5555dd").setTitle(":x: ERROR 404").setDescription("Yeterli puanın yok!").setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")]});
    } 
    return message.channel.send({ embeds: [new MessageEmbed().setColor("#5555dd").setTitle(":white_check_mark: BAŞARILI").setDescription(`**2000** kadar puan hesabından silindi. Rolün hesabına eklendi!`).setThumbnail("https://cdn.discordapp.com/avatars/864850931119554592/cb5a744cfbc4da16eec11326545ec516.png?size=256")]}).then(async () => {
        db.subtract(`puan_${message.author.id}`, 2000),
        message.member.roles.add('864855966319509575')
    });
  };

 exports.config = {
    name: "coder",
    aliases: []
};