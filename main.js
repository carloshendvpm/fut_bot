const client = require('./src/config/client');
const eventHandler = require('./src/handlers/eventHandlers');
const commandHandler = require('./src/handlers/commandHandler');

eventHandler.initialize();
commandHandler.initialize();

client.initialize();
