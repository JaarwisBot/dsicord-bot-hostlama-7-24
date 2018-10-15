const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix


client.on('ready', () => {
  console.log(`[BOT]  ${client.user.tag}!ADI İLE GİRİŞ YAPTI `);
});

client.on('message', msg => {
  if (msg.content === 'SALAM') { 
    msg.channel.send( 'SUCUK!');
  }
  
   if (msg.content === 'sa') { 
    msg.reply(  'As güzel kardeşim hoş geldin 50 kr vermeyi unutma :D   ');
  }
  
  if (msg.content === '!hoşgeldinresim') { 
    msg.reply(  'en kısa zamanda eklenecek panpa ;D');
  }
  
  if (msg.content === 'ping') { 
    msg.channel.send( 'Pong ' +client.ping + 'ms');
  }
  
  if ( msg.content === prefix + 'avatarım') {
	  msg.channel.send(msg.author.avatarURL) ;
  }
  
  if (msg.content === prefix + 'reboot') {
  
  if (msg.author.id  === '397124991961006081') {
	msg.channel.send('[BOT] yeniden başlatılıyor!').then (msg => {
		console.log('[BOT] yeniden başlatılıyor!');
	process.exit(0);
	});
  }else {
  msg.channel.send('Bunu yapmana izin veremem!');
  }
  
  }
	
	 client.on("guildMemberAdd", member => {
	  
	  var channel = member.guild.channels.find("name","giren:white_check_mark:");
	  if (!channel) return;
	  
	  var role = member.guild.roles.find("name", "YENİ ÜYE");
	  if (!role) return;
	  
	  member.addRole(role);
	  
	  channel.send(member + " artık " + role + "rolü ile aramızda");
	  
	  member.send("Aramıza hoş geldin! Artık @YENİ ÜYE rolüne sahipsin!")
  
  
});

client.login(process.env.Bot_Token);
