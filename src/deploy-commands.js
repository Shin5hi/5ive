import { REST, Routes } from 'discord.js';
import { readdirSync } from 'fs';
import { pathToFileURL } from 'url';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const commands = [];
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
      commands.push(command.default.data.toJSON());
    }
  }
}

const rest = new REST().setToken(config.token);

try {
  console.log(`Started refreshing ${commands.length} application (/) commands.`);

  // Deploy commands globally or to a specific guild
  const data = config.guildId
    ? await rest.put(
        Routes.applicationGuildCommands(config.clientId, config.guildId),
        { body: commands }
      )
    : await rest.put(
        Routes.applicationCommands(config.clientId),
        { body: commands }
      );

  console.log(`Successfully reloaded ${data.length} application (/) commands.`);
} catch (error) {
  console.error('Error deploying commands:', error);
}
