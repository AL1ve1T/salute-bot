// @uthor: Elnur Alimirzayev

const { SlashCommandBuilder } = require('@discordjs/builders');

const name = 'set';
const description = 'Sets current salute.';

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description),
    execute
}

async function execute(interaction) {
    await interaction.reply('Pong!');
}
