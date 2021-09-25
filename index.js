const { Client, MessageEmbed, Collection, Intents, ContextMenuInteraction } = require("discord.js");
// BU ALTYAPI GHOST DEVELOPMENTE AİTTİR ÇALINMASI KATİYYEN YASAKTIR kaan#1337 https://discord.gg/3GW335E6uR

const { readdir } = require("fs");
const db = require("quick.db")

const client = new Client({
  intents: [
    'GUILDS',
    'GUILD_MEMBERS',
    'GUILD_BANS',
    'GUILD_EMOJIS_AND_STICKERS',
    'GUILD_INTEGRATIONS',
    'GUILD_WEBHOOKS',
    'GUILD_INVITES',
    'GUILD_VOICE_STATES',
    'GUILD_PRESENCES',
    'GUILD_MESSAGES',
    'GUILD_MESSAGE_REACTIONS',
    'GUILD_MESSAGE_TYPING',
    'DIRECT_MESSAGES',
    'DIRECT_MESSAGE_REACTIONS',
    'DIRECT_MESSAGE_TYPING',
  ]
});
client.commands = new Collection();
client.aliases = new Collection();
client.sendEmbed = (m, embedArray, rowArray) => {
  if (embedArray || m || rowArray) {
    return m.channel.send({ embeds: embedArray, components: rowArray });
  } else throw new Error('Embed tanımları belirt.');
};

readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  console.log(`[BOT]: ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`[BOT]: ${props.config.name} komutu yüklendi.`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) {
    return;
  } else {
    var pre = db.fetch(`pre_${message.author.id}`);
    if (!pre) {
      db.add(`puan_${message.author.id}`, 1);
    } else if (pre == "Açık") {
      db.add(`puan_${message.author.id}`, 2)
    }
  };
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.author.id !== "696407272145813505" && message.author.id !== "760421959556792320") {
  } else {
    var args = message.content.split(" ");
    if (args[0] == "!puan-ekle") {
      var user = message.mentions.users.first();
      if (!user) return message.channel.send("Lütfen bir kullanıcı etiketle!");
      var pun = args[2];
      if (!pun) return message.channel.send("Lütfen bir miktar gir!");
      return message.react("👍").then(async () => { db.add(`puan_${user.id}`, pun) });
    } else if (args[0] == "!puan-sil") {
      var user = message.mentions.users.first();
      if (!user) return message.channel.send("Lütfen bir kullanıcı etiketle!");
      var pun = args[2];
      if (!pun) return message.channel.send("Lütfen bir miktar gir!");
      return message.react("👍").then(async () => { db.subtract(`puan_${user.id}`, pun) });
    }
  }
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  var args = message.content.split(" ");
  if (args[0] == "!puan-yolla") {
    var user = message.mentions.users.first();
    if (!user) return message.channel.send("Lütfen bir kullanıcı etiketle!");
    if (user.id == message.author.id) return message.channel.send("Lütfen bir kullanıcı etiketle!");
    var miktar = args[2];
    if (!miktar) return message.channel.send("Lütfen bir miktar gir!");
    if (isNaN(miktar)) return message.channel.send("Lütfen bir miktar gir!");
    if (miktar > 15) return message.channel.send("Lütfen 15'den az bir miktar gir!");
    return message.react("👍").then(async () => {
      db.subtract(`puan_${message.author.id}`, miktar),
      db.add(`puan_${user.id}`, miktar)
    });
  };
});

client.on('messageCreate', async (message) => {
  var prefix = "!";
  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift();
  var cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  if (command == "puan-yolla" || command == "puan-ekle" || command == "puan-sil" || !cmd) return;
  cmd.run(client, message, args);
});

/**
 * @params { ContextMenuInteraction } interaction
 */

client.on('interactionCreate', async (interaction) => {

});

client.on('ready', async (message) => {
console.log("hazırım!")
})


client.login(process.env.token);