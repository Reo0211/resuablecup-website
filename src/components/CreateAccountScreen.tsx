import { FormEvent } from 'react';
import { AuthLayout } from './AuthLayout';
import { Button } from './ui/button';

interface CreateAccountScreenProps {
  onBack: () => void;
  onCreated: () => void; // ダミー：作成完了扱い
}

export function CreateAccountScreen({
  onBack,
  onCreated,
}: CreateAccountScreenProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreated();
  };

  return (
    <AuthLayout
      title="Create account"
      subtitle="Save your favourite cafés and track your environmental impact."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">
            Full name
          </label>
          <input
            type="text"
            required
            className="w-full h-10 rounded-xl border border-slate-200 px-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#723593]/60"
            placeholder="Jane Doe"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Email</label>
          <input
            type="email"
            required
            className="w-full h-10 rounded-xl border border-slate-200 px-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#723593]/60"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-600">Password</label>
          <input
            type="password"
            required
            className="w-full h-10 rounded-xl border border-slate-200 px-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#723593]/60"
            placeholder="At least 8 characters"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-10 rounded-xl text-sm text-white border-0"
          style={{ background: '#723593' }}
        >
          Create account
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