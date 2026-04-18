@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #2563eb;
  --color-success: #16a34a;
  --color-danger: #dc2626;
  --color-bg-light: #f3f4f6;
  --color-border-custom: #d1d5db;
  --color-text-main: #1f2937;
  
  --font-sans: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  --animate-slide-in-right: slideInRight 0.3s ease-out;
  --animate-shake: shake 0.4s ease-in-out;
  --animate-scale-pulse: scalePulse 0.4s ease-in-out;
  --animate-pulsing-glow: pulsingGlow 2s infinite;
  --animate-fade-in: fadeIn 0.5s ease-out;

  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-8px); }
  }

  @keyframes scalePulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes pulsingGlow {
    0% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(234, 179, 8, 0); }
    100% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
}

@layer base {
  body {
    @apply antialiased transition-colors duration-300 bg-bg-light text-text-main;
  }

  .dark body {
    @apply bg-slate-950 text-slate-100;
  }
  
  .card-beginner {
    @apply bg-white dark:bg-slate-900 border-2 border-[#d1d5db] dark:border-slate-800 rounded-xl p-6;
    box-shadow: 4px 4px 0px rgba(0,0,0,0.05);
  }

  button {
    @apply px-4 py-2 font-bold rounded-md transition-all active:scale-95;
    border: 2px solid #1f2937;
  }

  button.primary-btn {
    @apply bg-[#2563eb] text-white border-none;
  }
}

/* Flip Card Styles */
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 0.75rem;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* Staggered load animation helper */
.staggered-load > * {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

