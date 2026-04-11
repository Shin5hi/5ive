import { EmbedBuilder } from 'discord.js';
import config from '../config.js';

export function createEmbed(type = 'info', title, description) {
  const embed = new EmbedBuilder()
    .setColor(config.colors[type] || config.colors.info)
    .setTimestamp();

  if (title) embed.setTitle(title);
  if (description) embed.setDescription(description);

  return embed;
}

export function formatUptime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours % 24 > 0) parts.push(`${hours % 24}h`);
  if (minutes % 60 > 0) parts.push(`${minutes % 60}m`);
  if (seconds % 60 > 0) parts.push(`${seconds % 60}s`);

  return parts.join(' ') || '0s';
}

export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 2000);
}

export async function hasPermission(member, permissions) {
  if (!member || !member.permissions) return false;
  return member.permissions.has(permissions);
}
