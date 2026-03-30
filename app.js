const express = require('express');
const qrcode = require('qrcode');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Function to generate a pairing code
function generatePairingCode() {
    return 'PAIRING_CODE_' + Math.random().toString(36).substring(2, 15);
}

// Endpoint to generate and return pairing code with QR code
app.get('/pairing-code', async (req, res) => {
    try {
        const pairingCode = generatePairingCode();
        const qrCodeDataUrl = await qrcode.toDataURL(pairingCode);
        res.json({ pairingCode, qrCode: qrCodeDataUrl });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate pairing code and QR code' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});