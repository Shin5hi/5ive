import { SlashCommandBuilder, version as djsVersion } from 'discord.js';
import { createEmbed, formatUptime } from '../../utils/helpers.js';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Display bot information and statistics'),

  async execute(interaction) {
    const pkg = JSON.parse(
      readFileSync(join(__dirname, '../../../package.json'), 'utf-8')
    );

    const embed = createEmbed('info', '🤖 Bot Information')
      .addFields(
        { name: 'Bot Version', value: pkg.version, inline: true },
        { name: 'Discord.js', value: `v${djsVersion}`, inline: true },
        { name: 'Node.js', value: process.version, inline: true },
        { name: 'Servers', value: `${interaction.client.guilds.cache.size}`, inline: true },
        { name: 'Users', value: `${interaction.client.users.cache.size}`, inline: true },
        { name: 'Uptime', value: formatUptime(interaction.client.uptime), inline: true },
        { name: 'Memory', value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, inline: true }
      );

    await interaction.reply({ embeds: [embed] });
  },
};
