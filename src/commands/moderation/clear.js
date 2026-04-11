import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { createEmbed } from '../../utils/helpers.js';

export default {
  category: 'Moderation',
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Delete multiple messages at once')
    .addIntegerOption(option =>
      option
        .setName('amount')
        .setDescription('Number of messages to delete (1-100)')
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)
    )
    .addUserOption(option =>
      option
        .setName('target')
        .setDescription('Only delete messages from this user')
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .setDMPermission(false),

  async execute(interaction) {
    const amount = interaction.options.getInteger('amount');
    const target = interaction.options.getUser('target');

    await interaction.deferReply({ ephemeral: true });

    try {
      let messages = await interaction.channel.messages.fetch({ limit: amount + 1 });

      if (target) {
        messages = messages.filter(msg => msg.author.id === target.id);
      }

      // Filter out messages older than 14 days (Discord limitation)
      const twoWeeksAgo = Date.now() - 14 * 24 * 60 * 60 * 1000;
      messages = messages.filter(msg => msg.createdTimestamp > twoWeeksAgo);

      const deleted = await interaction.channel.bulkDelete(messages, true);

      const embed = createEmbed(
        'success',
        '🗑️ Messages Cleared',
        `Successfully deleted ${deleted.size} message(s)${target ? ` from ${target.tag}` : ''}`
      );

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      const embed = createEmbed('error', 'Error', 'Failed to delete messages');
      await interaction.editReply({ embeds: [embed] });
    }
  },
};
