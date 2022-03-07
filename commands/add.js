// @uthor: Elnur Alimirzayev

const { SlashCommandBuilder } = require('@discordjs/builders');
const DB = require('../db/db.js');
const config = require("../config.json");
const User = require('../db/user.js');

const name = 'add';
const description = 'Adds audio to salute.';

module.exports = {
    data: new SlashCommandBuilder()
        .setName(name)
        .setDescription(description),
    execute
}

async function execute(interaction) {
    const answer = 'Great! Now send me audio (*.mp4, max = 10 Sec).';

    new DB(config.db_connection).then(() => {
        const user = User.findOne({ 'discord_id': interaction.user.id })
            .then((doc) => console.log(doc))
            .catch((err) => console.log(doc));
    });
    await interaction.reply(answer);
}
