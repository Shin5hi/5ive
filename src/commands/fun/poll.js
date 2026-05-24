import { SlashCommandBuilder } from 'discord.js';
import { createEmbed } from '../../utils/helpers.js';

export default {
  category: 'Fun',
  cooldown: 3,
  data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('Create a poll')
    .addStringOption(option =>
      option
        .setName('question')
        .setDescription('The poll question')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('option1')
        .setDescription('First option')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('option2')
        .setDescription('Second option')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('option3')
        .setDescription('Third option')
        .setRequired(false)
    )
    .addStringOption(option =>
      option
        .setName('option4')
        .setDescription('Fourth option')
        .setRequired(false)
    ),

  async execute(interaction) {
    const question = interaction.options.getString('question');
    const options = [
      interaction.options.getString('option1'),
      interaction.options.getString('option2'),
      interaction.options.getString('option3'),
      interaction.options.getString('option4'),
    ].filter(Boolean);

    const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣'];

    const optionsText = options
      .map((opt, idx) => `${emojis[idx]} ${opt}`)
      .join('\n');

    const embed = createEmbed('info', `📊 ${question}`)
      .setDescription(optionsText)
      .setFooter({ text: `Poll created by ${interaction.user.tag}` });

    const message = await interaction.reply({ embeds: [embed], fetchReply: true });

    for (let i = 0; i < options.length; i++) {
      await message.react(emojis[i]);
    }
  },
};
