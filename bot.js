require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js')

client.on('ready', () => {
    console.log('GGod Ready!');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');
    const channel2 = member.guild.channels.find(ch => ch.name === 'rules');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}! Check out our ${channel2} and enjoy!`);
    const attachment1 = new Attachment('https://i.imgur.com/8CwCrUN.jpg');
    channel.send(attachment1);
});

client.on('message', msg => {
    var msgArr = msg.content.split(' ');
    console.log(`${msg.member} [${msg.member.name}]: ` + msgArr);

    if (msg.content.startsWith(">")){
        if (msg.content.toLowerCase() === '>cmds') {
            msg.channel.send(`${msg.member}, Here the commands list: \n` + "``` **v1.0** \n >Cmds     -- commands list\n >Ann/..   -- new announcement\n >Invite   -- invete link```");
        }
        else if (msg.content.toLowerCase().startsWith(">ann/")) {
            if (msg.member.hasPermission('ADMINISTRATOR')) { 
                var msgArr2 = msg.content.split('/')
                msg.channel.send("```" + `${msgArr2[1]}` + "``` \n" + `@everyone`);
                const attachment2 = new Attachment('https://i.imgur.com/wt6A4eG.gif');
                msg.channel.send(attachment2);                
                msg.delete();
            }
            else
            {
                msg.channel.send(`${msg.member} You can't use this command!`);
            }
        }
        else if (msg.content.toLowerCase().startsWith('>invite')) {
            msg.channel.send(`${msg.member}, \n here your invite: https://discord.gg/BV6Rvxy`);
        }
        else {
            msg.channel.send(`${msg.member}, Invalid command! **>cmds**`);
        } 
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.Secret);
