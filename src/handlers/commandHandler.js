const messageService = require('../services/messageService');
const client = require('../config/client');

class CommandHandler {
  constructor() {
    this.client = client;
    this.messageService = messageService;
    this.todosKeywords = ['!todos', '!all', '!everyone'];
  }
  initialize() {
    this.client.on('message', async (message) => {
      if (!message || !this.todosKeywords.includes(message.body.toLowerCase()))
        return;

      console.log(`Comando ${message.body} recebido`);
      await this.messageService.handleTodosCommand(message);
    });
  }
}

module.exports = new CommandHandler();
