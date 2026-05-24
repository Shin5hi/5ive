import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import { pathToFileURL } from 'url';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import config from './config.js';
import logger from './utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class DiscordBot {
  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
      ],
    });

    this.client.commands = new Collection();
    this.client.cooldowns = new Collection();
  }

  async loadCommands() {
    const commandsPath = join(__dirname, 'commands');
    const commandFolders = readdirSync(commandsPath);

    for (const folder of commandFolders) {
      const folderPath = join(commandsPath, folder);
      const commandFiles = readdirSync(folderPath).filter(file => file.endsWith('.js'));

      for (const file of commandFiles) {
        const filePath = join(folderPath, file);
        const fileUrl = pathToFileURL(filePath).href;
        const command = await import(fileUrl);

        if ('data' in command.default && 'execute' in command.default) {
          this.client.commands.set(command.default.data.name, command.default);
          logger.info(`Loaded command: ${command.default.data.name}`);
        } else {
          logger.warn(`Command at ${filePath} is missing required "data" or "execute" property`);
        }
      }
    }
  }

  async loadEvents() {
    const eventsPath = join(__dirname, 'events');
    const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
      const filePath = join(eventsPath, file);
      const fileUrl = pathToFileURL(filePath).href;
      const event = await import(fileUrl);

      if (event.default.once) {
        this.client.once(event.default.name, (...args) => event.default.execute(...args));
      } else {
        this.client.on(event.default.name, (...args) => event.default.execute(...args));
      }
      logger.info(`Loaded event: ${event.default.name}`);
    }
  }

  async start() {
    try {
      await this.loadCommands();
      await this.loadEvents();
      await this.client.login(config.token);
    } catch (error) {
      logger.error('Failed to start bot:', error);
      process.exit(1);
    }
  }
}

const bot = new DiscordBot();
bot.start();

process.on('unhandledRejection', error => {
  logger.error('Unhandled promise rejection:', error);
});

process.on('SIGINT', () => {
  logger.info('Shutting down bot...');
  bot.client.destroy();
  process.exit(0);
});
