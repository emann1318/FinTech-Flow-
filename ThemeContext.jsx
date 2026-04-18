import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <main className={`transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </main>
  );
}
