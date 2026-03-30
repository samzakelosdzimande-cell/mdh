// Forward pairing codes to Onrender.com API

const axios = require('axios');

async function forwardPairingCode(pairingCode) {
    try {
        const response = await axios.post('https://api.onrender.com/forward', { code: pairingCode });
        console.log('Pairing code forwarded:', response.data);
    } catch (error) {
        console.error('Error forwarding pairing code:', error);
    }
}

module.exports = { forwardPairingCode };