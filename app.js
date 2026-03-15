const express = require('express');
const qrcode = require('qrcode');
const app = express();
const PORT = 3000;

// Example pairing code
let pairingCode = 'Your-Pairing-Code';

// Endpoint to return current pairing code and QR code
app.get('/pairing-code', async (req, res) => {
    try {
        const qrCodeDataUrl = await qrcode.toDataURL(pairingCode);
        res.json({ pairingCode, qrCode: qrCodeDataUrl });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});