import { AuthLayout } from './AuthLayout';
import { Button } from './ui/button';

interface GuestScreenProps {
  onBack: () => void;
  onContinue: () => void; // ゲストで続行
}

export function GuestScreen({ onBack, onContinue }: GuestScreenProps) {
  return (
    <AuthLayout
      title="Guest mode"
      subtitle="Borrow a cup without creating an account. Some features may be limited."
    >
      <div className="space-y-4 text-sm text-slate-600">
        <ul className="list-disc list-inside space-y-1">
          <li>No signup required</li>
          <li>Borrow & return cups as usual</li>
          <li>Impact data may not be saved across devices</li>
        </ul>

        <Button
          type="button"
          className="w-full h-10 rounded-xl text-sm text-white border-0"
          style={{ background: '#723593' }}
          onClick={onContinue}
        >
          Continue as guest
        </Button>

        <Button
          type="button"
          variant="ghost"
          className="w-full h-8 rounded-xl text-xs text-slate-500 mt-2"
          onClick={onBack}
        >
          Back to welcome
        </Button>
      </div>
    </AuthLayout>
  );
}