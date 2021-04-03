const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

    
  
  for (var i = 0; i < 100; i++) {
 message.channel.send('@everyone patladınız desem ?')

}
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};


exports.help = {
  name: 'spam',
};
