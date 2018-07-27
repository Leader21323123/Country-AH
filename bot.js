const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'a'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` Country AH.`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '472413819910750209').setName("W");
client.channels.find('id', '472413819910750209').setName("We");
client.channels.find('id', '472413819910750209').setName("Wel");
client.channels.find('id', '472413819910750209').setName("Welc");
client.channels.find('id', '472413819910750209').setName("Welco");
client.channels.find('id', '472413819910750209').setName("Welcom");
client.channels.find('id', '472413819910750209').setName("Welcome");
client.channels.find('id', '472413819910750209').setName("Welcome T");
client.channels.find('id', '472413819910750209').setName("Welcome To");
client.channels.find('id', '472413819910750209').setName("Welcome To C");
client.channels.find('id', '472413819910750209').setName("Welcome To Co");
client.channels.find('id', '472413819910750209').setName("Welcome To Cou");
client.channels.find('id', '472413819910750209').setName("Welcome To Coun");
client.channels.find('id', '472413819910750209').setName("Welcome To Count");
client.channels.find('id', '472413819910750209').setName("Welcome To Countr");
client.channels.find('id', '472413819910750209').setName("Welcome To Country");
client.channels.find('id', '472413819910750209').setName("Welcome To Country A");
client.channels.find('id', '472413819910750209').setName("Welcome To Country AH");
   }, 3000);
});
client.on("message", message => {
    var prefix = "a";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });
client.login(process.env.BOT_TOKEN);
