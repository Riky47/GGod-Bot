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
    const attachment = new Attachment('https://i.imgur.com/8CwCrUN.jpg');
    channel.send(attachment);
});

client.on('message', msg => {
    var msgArr = msg.content.split(' ');
    console.log(`${msg.member} [${msg.member.name}]: ` + msgArr);

    if (msg.content.startsWith(">")){
        if (msg.content.toLowerCase() === '>cmds') {
            msg.channel.send(`${msg.member}, Here the commands list: \n` + "``` >Cmds \n >Announcement \n >Invite```");
        }
        else if (msg.content.toLowerCase() === '>announcement') {
            if (msg.member.hasPermission('ADMINISTRATOR')) { 
                msg.channel.send("```" + `${msg}` + "``` \n\n /spoiler " + `${msg.mentions.everyone}`);
                msg.delete();
            }
            else
            {
                msg.channel.send(`${msg.member} You can't use this command!`);
            }
        }
        else if (msg.content.toLowerCase().startsWith('>invite')) {
            msg.channel.send(`${msg.member}, \n here your invite: https://discord.gg/V6qjthw`);
        }
        else {
            msg.channel.send(`${msg.member}, Invalid command! **>cmds**`);
        } 
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.Secret);
