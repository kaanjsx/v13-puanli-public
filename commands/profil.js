
const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
const { discordBanners } = require('discord-banners');


exports.run = function(client, message, args) {

  var user = message.mentions.users.first() || message.author;
  
  var puan = db.fetch(`puan_${user.id}`);
  var pre = db.fetch(`pre_${user.id}`);

  var embed = new MessageEmbed()
    .setColor('#5555dd')
    .setTitle("PUAN'IN")
    .setDescription(`⭐  **<@${user.id}>** İşte puanın: ${puan || 0}  \n\n :blush: Unutma her kelime veya item yazdığında 1 puan eklenmektedir. \n\n :star2:  User Profile: \n ID: **${user.id}** \n Nick: **${user.tag}**  \n Premium: **${pre || "Kapalı"}** `)    
 .setThumbnail(user.avatarURL({ dynamic: true }))
          
    .setFooter("Ghost Development")
    return client.sendEmbed(message, [embed]);
  }

exports.config = {
    name: "profil",
    aliases: ["puanım", "puan"]
};