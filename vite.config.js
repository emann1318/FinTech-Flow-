import express from 'express';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

// Routes
import walletRouter from './routes/wallet.js';
import loansRouter from './routes/loans.js';
import transactionsRouter from './routes/transactions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cors());

  // API Routes
  app.use('/api/wallet', walletRouter);
  app.use('/api/loans', loansRouter);
  app.use('/api/transactions', transactionsRouter);

  app.get('/api/emi-calculator', (req, res) => {
    const { principal, annualRate, months } = req.query;
    
    if (!principal || !annualRate || !months) {
      return res.status(400).json({ error: 'Missing mandatory fields: principal, annualRate, months' });
    }

    const P = parseFloat(principal);
    const annualR = parseFloat(annualRate);
    const n = parseInt(months);

    if (isNaN(P) || isNaN(annualR) || isNaN(n)) {
      return res.status(400).json({ error: 'Invalid input types. Numbers required.' });
    }

    const r = annualR / 100 / 12;
    // EMI formula: [P × r × (1+r)^n] / [(1+r)^n – 1]
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    const totalPayable = emi * n;
    const totalInterest = totalPayable - P;

    res.json({
      emi: Math.round(emi * 100) / 100,
      totalPayable: Math.round(totalPayable * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
