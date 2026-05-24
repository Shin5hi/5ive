import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Display all available commands and their descriptions'),

  async execute(interaction) {
    const commands = interaction.client.commands;

    // Group commands by category
    const categories = {};

    commands.forEach(command => {
      // Extract category from the command file path or default to 'General'
      const category = command.category || 'General';

      if (!categories[category]) {
        categories[category] = [];
      }

      categories[category].push({
        name: command.data.name,
        description: command.data.description
      });
    });

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('📚 Bot Commands')
      .setDescription('Here are all available commands:')
      .setTimestamp();

    // Add fields for each category
    for (const [category, cmds] of Object.entries(categories)) {
      const commandList = cmds
        .map(cmd => `\`/${cmd.name}\` - ${cmd.description}`)
        .join('\n');

      embed.addFields({ name: category, value: commandList });
    }

    await interaction.reply({ embeds: [embed] });
  },
};
