const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('suck')
    .setDescription('Replies with my balls'),
  async execute(interaction) {
    await interaction.reply('my balls');
  },
};