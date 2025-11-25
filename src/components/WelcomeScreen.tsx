import { Coffee, Leaf, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomeScreenProps {
  onStart: () => void;
  onReturn: () => void;
  onCreateAccount: () => void;
  onLogin: () => void;
  onGuest: () => void;
}

export function WelcomeScreen({
  onStart,
  onReturn,
  onCreateAccount,
  onLogin,
  onGuest,
}: WelcomeScreenProps) {
  return (
    <div className="flex flex-col h-full p-8 justify-between bg-gradient-to-b from-white to-[#D4C3E8]/10">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Logo */}
        <div
          className="w-32 h-32 rounded-3xl flex items-center justify-center mb-8 shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #723593 0%, #D4C3E8 100%)',
            boxShadow: '0 20px 40px rgba(94, 145, 133, 0.2)',
          }}
        >
          <Coffee className="w-16 h-16 text-white" />
        </div>

        {/* Brand Name */}
        <h1
          className="text-slate-700 mb-4 whitespace-nowrap"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2.5rem',
            letterSpacing: '0.05em',
          }}
        >
          Mug Buddies
        </h1>

        {/* Tagline */}
        <p
          className="mb-12 whitespace-nowrap"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.5rem',
            letterSpacing: '0.1em',
            color: '#723593',
          }}
        >
          Borrow. Sip. Return.
        </p>

        {/* Borrow / Return Buttons */}
        <div className="w-full max-w-xs space-y-4 mb-8">
          <Button
            onClick={onStart}
            className="w-full text-white h-16 rounded-2xl shadow-lg text-lg border-0"
            style={{
              background: '#723593',
              boxShadow: '0 8px 24px rgba(94, 145, 133, 0.3)',
            }}
          >
            Borrow a Cup
          </Button>

          <Button
            onClick={onReturn}
            className="w-full text-white h-16 rounded-2xl shadow-lg text-lg border-0"
            style={{
              background: '#723593',
              boxShadow: '0 8px 24px rgba(94, 145, 133, 0.3)',
            }}
          >
            Return a Cup
          </Button>
        </div>
      </div>

      {/* Bottom Auth Buttons (Icon style kept as-is) */}
      <div
        className="flex items-center justify-around pt-6 border-t"
        style={{ borderColor: '#D4C3E8' }}
      >
        {/* Log in */}
        <button
          onClick={onLogin}
          className="flex flex-col items-center gap-2 appearance-none bg-transparent border-0 p-0"
        >
          <Coffee className="w-5 h-5" style={{ color: '#723593' }} />
          <span className="text-slate-600 text-xs">Log in</span>
        </button>

        {/* Create Account */}
        <button
          onClick={onCreateAccount}
          className="flex flex-col items-center gap-2 appearance-none bg-transparent border-0 p-0"
        >
          <Leaf className="w-5 h-5" style={{ color: '#723593' }} />
          <span className="text-slate-600 text-xs">Create account</span>
        </button>

        {/* Guest Mode */}
        {/* <button
          onClick={onGuest}
          className="flex flex-col items-center gap-2 appearance-none bg-transparent border-0 p-0"
        >
          <RotateCcw className="w-5 h-5" style={{ color: '#723593' }} />
          <span className="text-slate-600 text-xs">Guest mode</span>
        </button> */}
      </div>
    </div>
  );
}