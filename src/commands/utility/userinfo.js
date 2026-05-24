import { SlashCommandBuilder } from 'discord.js';
import { createEmbed } from '../../utils/helpers.js';

export default {
  category: 'Utility',
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Get information about a user')
    .addUserOption(option =>
      option
        .setName('target')
        .setDescription('The user to get information about')
        .setRequired(false)
    ),

  async execute(interaction) {
    const target = interaction.options.getUser('target') || interaction.user;
    const member = await interaction.guild.members.fetch(target.id);

    const roles = member.roles.cache
      .filter(role => role.id !== interaction.guild.id)
      .sort((a, b) => b.position - a.position)
      .map(role => role.toString())
      .slice(0, 10);

    const embed = createEmbed('info', `👤 User Information - ${target.tag}`)
      .setThumbnail(target.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'ID', value: target.id, inline: true },
        { name: 'Nickname', value: member.nickname || 'None', inline: true },
        { name: 'Bot', value: target.bot ? 'Yes' : 'No', inline: true },
        {
          name: 'Account Created',
          value: `<t:${Math.floor(target.createdTimestamp / 1000)}:R>`,
          inline: true
        },
        {
          name: 'Joined Server',
          value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`,
          inline: true
        },
        {
          name: `Roles [${roles.length}]`,
          value: roles.length ? roles.join(', ') : 'None'
        }
      );

    await interaction.reply({ embeds: [embed] });
  },
};
