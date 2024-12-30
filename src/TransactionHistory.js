import React, { useState } from 'react';
import axios from 'axios';
import { Table, Form, Button, Container } from 'react-bootstrap';

const TransactionHistory = () => {
    const [address, setAddress] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState('');

    const fetchTransactions = async () => {
        setError('');
        try {
            const response = await axios.get(`http://localhost:3001/transactions/${address}`);
            console.log('Response data:', response.data);
            console.log('Transactions:', response.data.transactions);
            setTransactions(response.data.transactions);
        } catch (err) {
            console.error('Error fetching transactions:', err);
            setError('Error fetching transactions. Please check the address or try again later.');
        }
    };
    
    return (
        <Container className="mt-5">
            <h2>Transaction History</h2>
            <Form className="mb-3">
                <Form.Group controlId="address">
                    <Form.Label>Enter Ethereum Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="0x..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={fetchTransactions}>
                    Get Transactions
                </Button>
            </Form>
            {error && <p className="text-danger">{error}</p>}
            {transactions.length > 0 && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hash</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Value (ETH)</th>
                            <th>Block Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((tx, index) => (
                            <tr key={tx.hash}>
                                <td>{index + 1}</td>
                                <td>{tx.hash}</td>
                                <td>{tx.from}</td>
                                <td>{tx.to}</td>
                                <td>{parseFloat(tx.value).toFixed(5)}</td>
                                <td>{tx.blockNum}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default TransactionHistory;
