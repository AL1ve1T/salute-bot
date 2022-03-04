// @uthor: Elnur Alimirzayev

const { SlashCommandBuilder } = require('@discordjs/builders');

const name = 'ping';
const description = 'Replies with Pong!';

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description),
    execute
}

async function execute(interaction) {
    await interaction.reply('Pong!');
}
