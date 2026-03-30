// Updated code to fetch pairing codes from Onrender.com API

const fetchPairingCodes = async () => {
    try {
        const response = await fetch('https://api.onrender.com/pairing-codes');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Pairing Codes:', data);
        // Handle the pairing codes as needed
    } catch (error) {
        console.error('Error fetching pairing codes:', error);
    }
};

// Call the function
fetchPairingCodes();
