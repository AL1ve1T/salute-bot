// @uthor: Elnur Alimirzayev

require('dotenv').config();
const { Client, Collection, Intents } = require('discord.js');
const CommandNotFound = require('./errors/CommandNotFound.js');
const fs = require('node:fs');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Ready')
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName)
    try {
        if (command) {
            throw new CommandNotFound();
        }
        await command.execute(interaction);
    } catch (error) {
        switch (true) {
            case (error instanceof CommandNotFound): {
                console.log(error);
            }
            default: {
                await interaction.reply({ content: 'Error during execution', ephemeral: true });
            }
        }
    }
});

client.login(process.env.TOKEN);
