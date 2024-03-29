const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides information about the user.'),
    async execute(interaction) {
        await interaction.reply({ embeds: [
            new EmbedBuilder()
            .setTitle('')
            .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarUrl()})
        ]});
    },
};