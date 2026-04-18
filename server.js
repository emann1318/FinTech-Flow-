# FintechFlow — Personal Finance Management Application

FintechFlow is a comprehensive full-stack web application designed for personal finance management. It allows users to manage a digital wallet, track transaction history with detailed analytics, apply for micro-loans, and calculate loan EMIs with full amortization schedules. The application features a "Clean Minimalism" design theme, supporting both light and dark modes with a professional sidebar navigation.

## Features
- **Wallet Dashboard:** Real-time balance updates with animated count-up effects and profile name customization.
- **Transaction History:** Searchable and filterable record of all credits and debits with visual flow summaries.
- **Loan Management:** Multi-step loan application form with validation and a 3D flip-card status viewer for tracking applications.
- **EMI Calculator:** Advanced financial tool that computes monthly installments and provides a month-by-month principal/interest breakdown.
- **Responsive Theme:** Fully mobile-responsive UI with persistent dark/light mode states.

---

## How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (installed automatically with Node.js)

### Installation Steps
1. **Clone the repository** (or download the project files).
2. **Navigate to the project directory:**
   ```bash
   cd fintech-flow
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Access the application:**
   Open your browser and go to `http://localhost:3000`.

---

## API Documentation

The backend is built with Express.js and uses in-memory storage for rapid prototyping.

### Wallet Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/wallet` | Retrieves the current wallet balance, currency, and owner name. |
| `POST` | `/api/wallet/deposit` | Deposits a specified amount into the wallet. |
| `POST` | `/api/wallet/withdraw` | Withdraws a specified amount if funds are sufficient. |
| `PATCH` | `/api/wallet/profile` | Updates the owner's profile name. |
| `GET` | `/api/wallet/transactions` | Fetches the full list of previous transactions. |

### Loan & Utility Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/loans/apply` | Submits a new micro-loan application. |
| `GET` | `/api/loans` | Retrieves all submitted loan applications. |
| `PATCH` | `/api/loans/:id/status` | Updates the status of a loan (Approved/Rejected). |
| `GET` | `/api/emi-calculator` | Calculates EMI based on principal, rate, and tenure. |

---

## Author Information
- **Name:** Eman Faris
- **Roll Number:** 23i-5572

---
*Note: This application uses in-memory data storage. Refreshing the server will reset all transactions and loan data to their default states.*
