import { Events } from 'discord.js';
import logger from '../utils/logger.js';

export default {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    logger.info(`Bot is ready! Logged in as ${client.user.tag}`);
    logger.info(`Serving ${client.guilds.cache.size} guilds`);

    // Set bot presence
    client.user.setPresence({
      activities: [{ name: 'your server | /help' }],
      status: 'online',
    });
  },
};
