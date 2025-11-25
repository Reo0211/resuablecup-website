import { Coffee } from 'lucide-react';
import type { ReactNode } from 'react';

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="flex-1 flex flex-col p-8 bg-gradient-to-b from-white to-[#D4C3E8]/10">
      <div className="flex-1 flex flex-col items-center">
        {/* Logo */}
        <div
          className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-xl mt-4"
          style={{
            background: 'linear-gradient(135deg, #723593 0%, #D4C3E8 100%)',
            boxShadow: '0 20px 40px rgba(94, 145, 133, 0.2)',
          }}
        >
          <Coffee className="w-12 h-12 text-white" />
        </div>

        {/* Title / Subtitle */}
        <h1
          className="text-slate-700 mb-2 text-center"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2rem',
            letterSpacing: '0.05em',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-500 text-sm mb-8 text-center max-w-xs">
            {subtitle}
          </p>
        )}

        {/* Card */}
        <div className="w-full max-w-sm bg-white/80 rounded-3xl shadow-lg p-6 backdrop-blur-sm border border-white/80">
          {children}
        </div>
      </div>

      <p className="text-[10px] text-slate-400 text-center mt-4">
        Mug Buddies • Borrow. Sip. Return.
      </p>
    </div>
  );
}