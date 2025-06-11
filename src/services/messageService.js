class MessageService {
  async handleTodosCommand(message) {
    try {
      const chat = await message.getChat();
      
      if (!chat.isGroup) {
        await message.reply('Este comando só pode ser usado em grupos!');
        return;
      }

      const allParticipants = chat.participants.map(p => p.id._serialized);
      await message.reply('Convocando todos! 🫵🏼', chat.id._serialized, {
        mentions: allParticipants,
      });
      await message.react('⚠️');
    } catch (error) {
      console.error('Erro ao processar comando !todos:', error);
      await message.react('❌');
      await message.reply('Erro ao processar o comando!');
    }
  }
}

module.exports = new MessageService(); 