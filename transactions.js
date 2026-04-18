import express from 'express';
import { loans } from './data.js';

const router = express.Router();

// POST /api/loans/apply
router.post('/apply', (req, res) => {
  const { applicant, amount, purpose, tenure } = req.body;

  if (!applicant || !amount || !purpose || !tenure) {
    return res.status(400).json({ error: 'All fields (applicant, amount, purpose, tenure) are required.' });
  }

  const numAmount = parseFloat(amount);
  const numTenure = parseInt(tenure);

  // Validation according to quiz requirements
  if (numAmount < 5000 || numAmount > 5000000) {
    return res.status(400).json({ error: 'Loan amount must be between PKR 5,000 and PKR 5,000,000.' });
  }
  if (numTenure < 3 || numTenure > 60) {
    return res.status(400).json({ error: 'Tenure must be between 3 and 60 months.' });
  }

  const newLoan = {
    id: `loan_${Date.now()}`,
    applicant,
    amount: numAmount,
    purpose,
    tenure: numTenure,
    status: 'pending',
    timestamp: new Date().toISOString()
  };

  loans.push(newLoan);
  res.status(201).json(newLoan);
});

// GET /api/loans
router.get('/', (req, res) => {
  res.json(loans);
});

// PATCH /api/loans/:id/status
router.patch('/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Must be "approved" or "rejected".' });
  }

  const loanIndex = loans.findIndex(l => l.id === id);
  if (loanIndex === -1) {
    return res.status(404).json({ error: 'Loan application not found.' });
  }

  loans[loanIndex].status = status;
  res.json(loans[loanIndex]);
});

export default router;
