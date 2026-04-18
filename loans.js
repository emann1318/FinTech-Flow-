// In-memory data store
export const wallet = {
  balance: 5000, // Initial balance for demo
  currency: 'PKR',
  owner: 'Guest User' // Default generic owner
};

export const transactions = [
  {
    id: 'tx_1',
    type: 'credit',
    amount: 5000,
    timestamp: new Date().toISOString(),
    description: 'Initial Deposit'
  }
];

export const loans = [];
