// @uthor: Elnur Alimirzayev

require('dotenv').config();
const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

rest.put(Routes.applicationCommands(process.env.APP_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
