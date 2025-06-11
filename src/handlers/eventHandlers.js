const qrcode = require('qrcode-terminal');
const client = require('../config/client');

class EventHandler {
  constructor() {
    this.client = client;
  }

  initialize() {
    this.client.on('ready', () => {
      console.log('Client is ready!');
    });

    this.client.on('qr', (qr) => {
      console.log('Escaneie o QR Code abaixo com seu WhatsApp:');
      qrcode.generate(qr, { small: true });
    });

  }
}

module.exports = new EventHandler(); 