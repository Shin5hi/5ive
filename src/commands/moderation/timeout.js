import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { createEmbed } from '../../utils/helpers.js';

export default {
  category: 'Moderation',
  data: new SlashCommandBuilder()
    .setName('timeout')
    .setDescription('Timeout a member')
    .addUserOption(option =>
      option
        .setName('target')
        .setDescription('The member to timeout')
        .setRequired(true)
    )
    .addIntegerOption(option =>
      option
        .setName('duration')
        .setDescription('Timeout duration in minutes')
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(40320) // 28 days max
    )
    .addStringOption(option =>
      option
        .setName('reason')
        .setDescription('The reason for the timeout')
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .setDMPermission(false),

  async execute(interaction) {
    const target = interaction.options.getMember('target');
    const duration = interaction.options.getInteger('duration');
    const reason = interaction.options.getString('reason') || 'No reason provided';

    if (!target) {
      const embed = createEmbed('error', 'Error', 'User not found in this server');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    if (!target.moderatable) {
      const embed = createEmbed('error', 'Error', 'I cannot timeout this user');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    if (target.id === interaction.user.id) {
      const embed = createEmbed('error', 'Error', 'You cannot timeout yourself');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    try {
      await target.timeout(duration * 60 * 1000, reason);

      const embed = createEmbed('success', '⏱️ Member Timed Out')
        .addFields(
          { name: 'User', value: `${target.user.tag}`, inline: true },
          { name: 'Moderator', value: `${interaction.user.tag}`, inline: true },
          { name: 'Duration', value: `${duration} minute(s)`, inline: true },
          { name: 'Reason', value: reason }
        );

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      const embed = createEmbed('error', 'Error', 'Failed to timeout the member');
      await interaction.reply({ embeds: [embed], ephemeral: true });
    }
  },
};
