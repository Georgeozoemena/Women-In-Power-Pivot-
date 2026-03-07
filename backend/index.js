import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Women In Power Pivot API is running');
});

// Payment Verification Endpoint (SECURED)
app.post('/api/verify-payment', async (req, res) => {
    const { reference, expectedAmount } = req.body;
    const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

    if (!PAYSTACK_SECRET || PAYSTACK_SECRET === 'sk_test_placeholder') {
        return res.status(500).json({
            success: false,
            message: 'Paystack Secret Key is missing or incorrectly configured'
        });
    }

    console.log(`Verifying payment for reference: ${reference}`);

    try {
        const axios = (await import('axios')).default;
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET}`,
                'Content-Type': 'application/json'
            }
        });

        const transaction = response.data.data;

        // SECURITY CHECK: 
        // 1. Transaction status must be 'success'
        // 2. The amount paid must match what we expected (converted to kobo)
        if (transaction.status === 'success' && transaction.amount === expectedAmount * 100 * 1500) {
            // Note: 1500 is your current multiplier in Donate.jsx. 
            // In a production app, the 'expectedAmount' should be securely handled.

            res.status(200).json({
                success: true,
                message: 'Payment verified successfully',
                data: transaction
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Transaction verification failed: Invalid status or amount mismatch',
                data: transaction
            });
        }
    } catch (error) {
        console.error('Paystack Verification Error:', error.response?.data || error.message);
        res.status(500).json({
            success: false,
            message: 'Error verifying payment with Paystack',
            error: error.response?.data || error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
