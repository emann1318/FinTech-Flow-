import express from 'express';
import { transactions } from './data.js';

const router = express.Router();

// GET /api/transactions
router.get('/', (req, res) => {
  const { type } = req.query;
  let filtered = [...transactions];
  
  if (type === 'credit') {
    filtered = transactions.filter(t => t.type === 'credit');
  } else if (type === 'debit') {
    filtered = transactions.filter(t => t.type === 'debit');
  }
  
  res.json(filtered);
});

export default router;
