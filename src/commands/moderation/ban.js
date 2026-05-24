import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { createEmbed } from '../../utils/helpers.js';

export default {
  category: 'Moderation',
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a member from the server')
    .addUserOption(option =>
      option
        .setName('target')
        .setDescription('The member to ban')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('reason')
        .setDescription('The reason for banning')
        .setRequired(false)
    )
    .addIntegerOption(option =>
      option
        .setName('delete-messages')
        .setDescription('Delete messages from the past X days (0-7)')
        .setMinValue(0)
        .setMaxValue(7)
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .setDMPermission(false),

  async execute(interaction) {
    const target = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason') || 'No reason provided';
    const deleteMessageDays = interaction.options.getInteger('delete-messages') || 0;

    if (!target) {
      const embed = createEmbed('error', 'Error', 'User not found in this server');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    if (!target.bannable) {
      const embed = createEmbed('error', 'Error', 'I cannot ban this user');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    if (target.id === interaction.user.id) {
      const embed = createEmbed('error', 'Error', 'You cannot ban yourself');
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }

    try {
      await target.ban({
        deleteMessageSeconds: deleteMessageDays * 24 * 60 * 60,
        reason: `${reason} | Moderator: ${interaction.user.tag}`
      });

      const embed = createEmbed('success', '🔨 Member Banned')
        .addFields(
          { name: 'User', value: `${target.user.tag}`, inline: true },
          { name: 'Moderator', value: `${interaction.user.tag}`, inline: true },
          { name: 'Reason', value: reason },
          { name: 'Messages Deleted', value: `${deleteMessageDays} days`, inline: true }
        );

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      const embed = createEmbed('error', 'Error', 'Failed to ban the member');
      await interaction.reply({ embeds: [embed], ephemeral: true });
    }
  },
};
