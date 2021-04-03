const { ShardingManager } = require ('discord.js')
const ayarlar = require ('./ayarlar.json')

const shards = new ShardingManager ('./selampak.js', {

token : ayarlar.token,

totalShards : 2 

});

shards.on('launch', shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});

shards.on('message', (shard, msg) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id} | ${msg._eval} | ${msg._result}`);
});


shards.spawn()