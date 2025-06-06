const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
  console.log('Client is ready!');
})

client.on('qr', qr => { 
  qrcode.generate(qr, { small: true }, (qrcode) => {
    console.log('QR Code received, scan it with your WhatsApp app.');
    console.log(qrcode);
  });
})

client.initialize()