const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`) 
  
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let timeout = 25000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Bahis oynamak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için miktar girmelisin (en fazla 80 💸)`))
 if(miktar > 8000) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`En fazla 8000 💸 bahis yatırabilirsin!`))   
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                              .setColor("RED")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`Bahis oynamak için cüzdanında ${para ? "sadece " + para + ' 💸 var!' : 'hiç paran yok!'}`))
        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = miktar        
      message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`Bahisi kaybettin ve cüzdanından ${kaybettin} 💸 eksildi!`));
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`para_${message.author.id}`, -kaybettin);   
        } else {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
          var kazandın = miktar*2
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`Bahisi kazandın ve cüzdanına ${kazandın} 💸 eklendi!`)
      message.channel.send(embed)     
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`para_${message.author.id}`, kazandın);
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        }}}
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: 'bahis',
};