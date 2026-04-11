import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { createEmbed } from '../../utils/helpers.js';

export default {
  category: 'Moderation',
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a member from the server')
    .addUserOption(option =>
      option
        .setName('target')
        .setDescription('The member to kick')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('reason')
        .setDescription('The reason for kicking')
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .setDMPermission(false),

  async execute(interaction) {
    const target = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason') || 'No reason provided';

    if (!target) {
      const embed = createEmbed('error', 'Error', 'User not found in this server');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    if (!target.kickable) {
      const embed = createEmbed('error', 'Error', 'I cannot kick this user');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    if (target.id === interaction.user.id) {
      const embed = createEmbed('error', 'Error', 'You cannot kick yourself');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    try {
      await target.kick(reason);

      const embed = createEmbed('success', '✅ Member Kicked')
        .addFields(
          { name: 'User', value: `${target.user.tag}`, inline: true },
          { name: 'Moderator', value: `${interaction.user.tag}`, inline: true },
          { name: 'Reason', value: reason }
        );

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      const embed = createEmbed('error', 'Error', 'Failed to kick the member');
      await interaction.reply({ embeds: [embed], ephemeral: true });
    }
  },
};
