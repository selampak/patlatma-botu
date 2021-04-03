const Discord = require('discord.js');
const db = require('quick.db')
const kasalar = require('../kasalar/kasa1.json'); //bura bozuk aykü ab başka altyapı dur bi abababababababababab abababababab tm
exports.run = async (client, message, args) => {
  const kasaid = args[0];
  const bakiye = await db.fetch(`bakiyecdare-${message.author.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum-${message.guild.id}`);
  const kasasayisi = kasalar.length
  const kasaidembeds = new Discord.RichEmbed()
  .setTitle(`Bir kasa İD si girmelisin!`)
  .setFooter(`Kasa listesine bakmak için: !kasalar`)
  .setColor()
  if(!kasaid) return message.channel.send(kasaidembeds)
  if(kasaid > kasasayisi) return message.channel.send(kasaidembeds)
  if(isNaN(kasaid)) return message.channel.send(kasaidembeds)
  const kasafiyat = kasalar.filter(x => x.kasaid == kasaid).map(x => x.fiyat)
  if(bakiye < kasafiyat) return message.channel.send(`:warning: Paranız Yetersiz!`)
  message.channel.send(`Kasayı açmak istediğinize emin misiniz?\n Şu anda \`${bakiye} ${client.ekoayarlar.parabirimi}\` paran var kasayı açtıktan sonra \`${bakiye - kasafiyat}\` paran kalacak. \n\`Eğer açmak istiyorsan evet(e) istemiyorsan hayır(h) yazabilirsin.\``)
  
  
  let uwu = false;
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
    const choice = response.first().content
    if (choice == 'hayır' || choice == 'h') return message.channel.send('🚀 İşlem iptal edildi.')
    if (choice !== 'evet' && choice !== 'e') {
      message.channel.send('❓ Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin.')
    }
    if (choice == 'evet' || choice == 'e') uwu = true
  }
  if (uwu) {
    try {
      db.add(`bakiyecdare-${message.author.id}`, -kasafiyat)
      message.channel.send("Kasa Açılıyor.").then(async msg => {
        const icindekiler = require(`.././kasa${kasaid}`)
        setTimeout(() => {
          msg.edit("Kasa Açılıyor..");
        }, 1000);
        setTimeout(() => {
          msg.edit("Kasa Açılıyor...");
        }, 2000);
        setTimeout(() => {
          msg.edit("Kasa Açılıyor..");
        }, 3000);
        setTimeout(() => {
          msg.edit("Kasa Açılıyor.");
        }, 4000);
        setTimeout(() => {
          msg.edit("Kasa Açıldı!");
          msg.delete()
        }, 5000);
        setTimeout(() => {
          const icindeki = icindekiler[Math.floor(Math.random() * icindekiler.length)];
          message.channel.send(`Kasadan \`${icindeki}\` ${client.ekoayarlar.parabirimi} kazandın!`)
          db.add(`bakiyecdare-${message.author.id}`, icindeki)
        }, 7800)
      })
      //const activity = activitys[Math.floor(Math.random() * activitys.length)];
      } catch(e) {
        message.channel.send(':warning: Bir hata var!')
      }
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kasaaç'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'kasa-aç',
    description: 'Belirttiğiniz İD deki kasayı açarsınız.',
    usage: 'kasa-aç <Kasa-İD>'
}  