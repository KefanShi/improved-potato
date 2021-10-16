const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("messageCreate", message => {
    console.log("asda");
    // if (message.content.toLowerCase() === 'Hello') {
        message.channel.send("**Hey! What's Up?**")
    // }
})

client.login('ODk5MDQ2MTkwNTA1NjY0NTQy.YWtEAw.yyeROwrSFLwJBmXqvxSnXrJ5kTo');