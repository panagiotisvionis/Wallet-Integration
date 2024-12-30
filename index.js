const express = require('express');
const { Alchemy, Network } = require('alchemy-sdk');
require('dotenv').config();

const app = express();
const port = 3001;

// Alchemy configuration
const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_SEPOLIA, // Use 'ETH_GOERLI' for testnet
};

const alchemy = new Alchemy(settings);

// Dynamic endpoint for balance fetching
app.get('/balance/:address', async (req, res) => {
    const { address } = req.params;
    try {
        // Validate Ethereum address
        if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
            return res.status(400).json({ error: 'Invalid Ethereum address' });
        }

        const balance = await alchemy.core.getBalance(address);
        res.json({ address, balance: balance.toString() });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching balance', details: error.message });
    }
});

app.get('/transactions/:address', async (req, res) => {
    const { address } = req.params;

    try {
        // Validate Ethereum address
        if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
            return res.status(400).json({ error: 'Invalid Ethereum address' });
        }

        // Fetch transaction history
        const transfers = await alchemy.core.getAssetTransfers({
            fromAddress: address,
            category: ['external', 'erc20', 'erc721', 'erc1155'],
            order: 'desc', // Order by most recent first
        });

        res.json({ address, transactions: transfers.transfers });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching transaction history', details: error.message });
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
