const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('BLACK')
    .addField(`!günlük-para : Günlük Para`,`24 Saatte Bir Kullanılabilirsiniz !`)
    .addField(`!hesap-aç : Banka Hesabı Açar`,`+20 Lira Verir`)
    .addField(`!hesabımı-sil`,`Banka Hesabınızı Siler`)
    .addField(`!hesap`,`Banka Hesabınız Hakkında Bilgi Verir`)
    .addField(`!para-gönder`,`Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir`)
    .addField(`!para`,`Bankadaki Paranızı Belirtir`)
    .addField(`!market`,`Marketi Gösterir`)
    .addField(`!istatistik`,`Botunuzun İstatistiklerini Gösterir`)
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    //Sitrey
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y'],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};
//Sitrey