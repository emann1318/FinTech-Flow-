import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

// Pages
import WalletDashboard from './pages/WalletDashboard';
import TransactionHistory from './pages/TransactionHistory';
import LoanApplication from './pages/LoanApplication';
import LoanStatusViewer from './pages/LoanStatusViewer';
import EMICalculator from './pages/EMICalculator';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <div className="flex flex-col md:flex-row min-h-screen bg-bg-light dark:bg-slate-950 text-text-main dark:text-slate-100 transition-colors">
            <Navbar />
            <div className="flex-1 overflow-auto">
              <Layout>
                <Routes>
                  <Route path="/" element={<WalletDashboard />} />
                  <Route path="/history" element={<TransactionHistory />} />
                  <Route path="/apply" element={<LoanApplication />} />
                  <Route path="/status" element={<LoanStatusViewer />} />
                  <Route path="/emi" element={<EMICalculator />} />
                </Routes>
              </Layout>
            </div>
          </div>
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}
