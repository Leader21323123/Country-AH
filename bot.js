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
client.on('ready',  () => {
client.user.setUsername("Country - AH")
      })
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
client.on('message', message => {
if(message.content.startsWith("الرابط") || message.content.startsWith("رابط") || message.content.startsWith("روابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("Country - AH")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-تفضل ي عمري الرابط 
-ونورنا ياجميل :heart: 
------------------- **`)
        
      message.author.sendEmbed(Embed11)
    }
});
let rebel;
client.on("ready", async  => {
    let guild = client.guilds.get("415466107726462977");
  let users = guild.members.map(member => member.user.id);
  let i;
  rebel=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  rebel++;
}
}
client.channels.find('id', '472426060332531720').setName(" . "+rebel+" المتوآجدين بالرومآت الصوتيهه ");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("415466107726462977");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   rebel++;
client.channels.find('id', '472426060332531720').setName(" . "+rebel+" المتوآجدين بالرومآت الصوتيهه ");
} else if(newUserChannel === undefined){
  rebel--;
client.channels.find('id', '472426060332531720').setName(" . "+rebel+" المتوآجدين بالرومآت الصوتيهه ");
}
});
client.login(process.env.BOT_TOKEN);
