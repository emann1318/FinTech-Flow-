import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Wallet, History, FileText, CheckSquare, Calculator, LogOut, Settings } from 'lucide-react';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const links = [
    { to: '/', label: 'Dashboard', icon: Wallet },
    { to: '/history', label: 'Transactions', icon: History },
    { to: '/apply', label: 'Apply for Loan', icon: FileText },
    { to: '/status', label: 'Loan Status', icon: CheckSquare },
    { to: '/emi', label: 'EMI Calculator', icon: Calculator },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-[240px] bg-[#111827] text-slate-400 p-6 border-r border-slate-700 min-h-screen sticky top-0">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-[#2563eb] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg ring-2 ring-blue-400/20">
            F
          </div>
          <span className="text-xl font-bold text-[#60a5fa]">
            FintechFlow
          </span>
        </div>

        <div className="flex-1 space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#2563eb] text-white shadow-lg'
                    : 'hover:bg-slate-800/50 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-800 space-y-2">
          <button 
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-slate-800/50 transition-all border-none"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-red-400 transition-all border-none">
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </nav>

      {/* Mobile Top Nav */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-[#111827] text-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2563eb] rounded flex items-center justify-center font-bold">F</div>
          <span className="font-bold text-[#60a5fa]">FintechFlow</span>
        </div>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-md bg-slate-800 border-none"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111827] border-t border-slate-800 flex justify-around items-center px-2 py-3">
        {links.map(({ to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `p-2 rounded-xl transition-all ${
                isActive ? 'bg-[#2563eb] text-white shadow-lg' : 'text-slate-500'
              }`
            }
          >
            <Icon size={24} />
          </NavLink>
        ))}
      </nav>
    </>
  );
}
