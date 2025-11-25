// LoginScreen.tsx
import { AuthLayout } from './AuthLayout';
import { Button } from './ui/button';

interface LoginScreenProps {
  onBack: () => void;
  onLoggedIn: () => void;  
}
export function LoginScreen({ onBack, onLoggedIn }: LoginScreenProps) {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 今はログインAPIなしで、即遷移
    onLoggedIn();   // ← ★impact へ遷移
  };

  return (
    <AuthLayout
      title="Log in"
      subtitle="Access your Mug Buddies account and see your cup history."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Email</label>
          <input
            type="email"
            className="w-full h-10 rounded-xl border border-slate-200 px-3 text-sm bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#723593]/60"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Password</label>
          <input
            type="password"
            className="w-full h-10 rounded-xl border border-slate-200 px-3 text-sm bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#723593]/60"
            placeholder="••••••••"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-10 rounded-xl text-sm text-white border-0"
          style={{ background: '#723593' }}
        >
          Log in
        </Button>

        <Button
          type="button"
          variant="ghost"
          className="w-full h-8 rounded-xl text-xs text-slate-500 mt-2"
          onClick={onBack}
        >
          Back to welcome
        </Button>
      </form>
    </AuthLayout>
  );
}