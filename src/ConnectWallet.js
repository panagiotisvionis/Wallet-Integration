import React, { useState } from 'react';

const ConnectWallet = () => {
    const [account, setAccount] = useState(null);

    // Function to connect MetaMask
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                console.log('Connected account:', accounts[0]);
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to use this feature.');
        }
    };

    return (
        <div>
            {account ? (
                <p>Connected account: {account}</p>
            ) : (
                <button onClick={connectWallet}>Connect MetaMask</button>
            )}
        </div>
    );
};

export default ConnectWallet;
