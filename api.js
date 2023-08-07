import express from 'express';
import cors from 'cors';
import worldcoin from './worldcoin.js';
import humangram from './humangram.js';
import biometrics from './biometrics.js';
import ledger from './ledger.js';

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint for Proof of Humanity
app.get('/', (req, res) => {
    res.json({ message: 'Proof of Humanity' });
});

// Endpoint for generating a proof using Worldcoin validator
app.post('/worldcoin/proof', async (req, res) => {
  try {
    const { data, worldcoinProof } = req.body;
    console.log("data - " + data)
    const proof = await worldcoin.generateProof(data, worldcoinProof);
    res.json({ proof });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while generating the proof.' });
  }
});

// Endpoint for generating a proof using Humangram validator
app.post('/humangram/proof', async (req, res) => {
  try {
    const { data, humangramProof } = req.body;
    const proof = await humangram.generateProof(data, humangramProof);
    res.json({ proof });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while generating the proof.' });
  }
});

// Endpoint for generating a proof using Biometrics validator
app.post('/biometrics/proof', async (req, res) => {
  try {
    const { data, authToken } = req.body;
    const proof = await biometrics.generateProof(data, authToken);
    res.json({ proof });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while generating the proof.' });
  }
});

// Endpoint for generating a proof using Ledger validator
app.post('/ledger/proof', async (req, res) => {
  try {
    const { data, ledgerProof } = req.body;
    const proof = await ledger.generateProof(data, ledgerProof);
    res.json({ proof });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while generating the proof.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

export default app;
