const { MessageEmbed } = require('discord.js');

exports.run = function(client, message, args) {

  if(message.author.id !== "696407272145813505" && message.author.id !=="760421959556792320") return message.channel.send({
    embeds: [
      new MessageEmbed()
      .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({dynamic:true}))
      .setColor("BLURPLE")
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true}))
.setDescription(" :x: Sen bu komutu kullanamazsın!")
    ]
  });
    if(!args[0]) return message.channel.send({embeds: [new MessageEmbed()
      .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({dynamic:true}))
      .setColor("BLURPLE")
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL({dynamic:true}))
 .setDescription(":x: Lütfen geçerli bir kod belirt!")]});
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let s = (`\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(s)
    } catch(e) {
      let hata = (`\`\`\`js\n${e}\n\`\`\``);
      message.channel.send(hata);
    };
};
  exports.config = {
    name: "eval",
    aliases: []
};