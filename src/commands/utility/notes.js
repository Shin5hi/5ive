import { SlashCommandBuilder } from 'discord.js';
import { createEmbed } from '../../utils/helpers.js';
import db from '../../utils/database.js';

export default {
  category: 'Utility',
  data: new SlashCommandBuilder()
    .setName('notes')
    .setDescription('Manage your personal notes')
    .addSubcommand(subcommand =>
      subcommand
        .setName('add')
        .setDescription('Add a new note')
        .addStringOption(option =>
          option
            .setName('note')
            .setDescription('The note content')
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('list')
        .setDescription('List all your notes')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('delete')
        .setDescription('Delete a note')
        .addIntegerOption(option =>
          option
            .setName('index')
            .setDescription('The note index to delete')
            .setRequired(true)
            .setMinValue(1)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('clear')
        .setDescription('Delete all your notes')
    ),

  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    const userId = interaction.user.id;
    const userNotes = db.get('notes', userId) || [];

    switch (subcommand) {
      case 'add': {
        const note = interaction.options.getString('note');
        userNotes.push({
          content: note,
          timestamp: Date.now()
        });
        db.set('notes', userId, userNotes);

        const embed = createEmbed('success', '📝 Note Added', `Your note has been saved! (Total: ${userNotes.length})`);
        await interaction.reply({ embeds: [embed], ephemeral: true });
        break;
      }

      case 'list': {
        if (userNotes.length === 0) {
          const embed = createEmbed('info', '📝 Your Notes', 'You have no notes saved.');
          return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        const notesList = userNotes
          .map((note, index) => `**${index + 1}.** ${note.content}\n*<t:${Math.floor(note.timestamp / 1000)}:R>*`)
          .join('\n\n');

        const embed = createEmbed('info', '📝 Your Notes')
          .setDescription(notesList);

        await interaction.reply({ embeds: [embed], ephemeral: true });
        break;
      }

      case 'delete': {
        const index = interaction.options.getInteger('index') - 1;

        if (index < 0 || index >= userNotes.length) {
          const embed = createEmbed('error', 'Error', 'Invalid note index.');
          return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        userNotes.splice(index, 1);
        db.set('notes', userId, userNotes);

        const embed = createEmbed('success', '🗑️ Note Deleted', `Note removed successfully! (Remaining: ${userNotes.length})`);
        await interaction.reply({ embeds: [embed], ephemeral: true });
        break;
      }

      case 'clear': {
        db.delete('notes', userId);
        const embed = createEmbed('success', '🗑️ Notes Cleared', 'All your notes have been deleted.');
        await interaction.reply({ embeds: [embed], ephemeral: true });
        break;
      }
    }
  },
};
