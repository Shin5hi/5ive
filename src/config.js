import 'dotenv/config';

export default {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  prefix: process.env.PREFIX || '!',
  ownerId: process.env.OWNER_ID,
  logLevel: process.env.LOG_LEVEL || 'info',

  colors: {
    success: 0x00ff00,
    error: 0xff0000,
    info: 0x0099ff,
    warning: 0xffaa00
  }
};
