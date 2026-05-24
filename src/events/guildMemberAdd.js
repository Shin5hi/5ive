import { Events } from 'discord.js';
import logger from '../utils/logger.js';

export default {
  name: Events.GuildMemberAdd,
  async execute(member) {
    logger.info(`New member joined: ${member.user.tag} in ${member.guild.name}`);

    // Find a welcome channel (customize as needed)
    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.name === 'welcome' || channel.name === 'general'
    );

    if (welcomeChannel) {
      try {
        await welcomeChannel.send(
          `Welcome to the server, ${member}! 🎉\nWe're glad to have you here!`
        );
      } catch (error) {
        logger.error('Failed to send welcome message:', error);
      }
    }

    // Auto-role assignment (optional)
    // const roleId = 'YOUR_ROLE_ID';
    // const role = member.guild.roles.cache.get(roleId);
    // if (role) {
    //   try {
    //     await member.roles.add(role);
    //     logger.info(`Assigned role ${role.name} to ${member.user.tag}`);
    //   } catch (error) {
    //     logger.error('Failed to assign role:', error);
    //   }
    // }
  },
};
