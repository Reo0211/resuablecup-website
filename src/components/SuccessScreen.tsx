import { CheckCircle, Leaf, Coffee } from 'lucide-react';
import { Button } from './ui/button';

interface SuccessScreenProps {
  onStartNew: () => void;
}

export function SuccessScreen({ onStartNew }: SuccessScreenProps) {
  return (
    <div className="flex flex-col h-full p-8 justify-between bg-gradient-to-b from-white to-[#D4C3E8]/10">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-xl" style={{ 
            background: 'linear-gradient(135deg, #723593 0%, #D4C3E8 100%)',
            boxShadow: '0 12px 32px rgba(94, 145, 133, 0.3)'
          }}>
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ 
            background: '#723593',
            boxShadow: '0 6px 16px rgba(94, 145, 133, 0.3)'
          }}>
            <Leaf className="w-6 h-6 text-white" />
          </div>
        </div>

        <h1 className="mb-4 text-slate-800">Return Complete!</h1>
        <p className="text-slate-600 mb-8">
          Thank you for choosing sustainability.
          <br />
          Your cup will be cleaned and reused.
        </p>

        <div className="rounded-3xl p-8 w-full shadow-sm" style={{ 
          backgroundColor: 'rgba(197, 215, 217, 0.2)',
          border: '1px solid rgba(94, 145, 133, 0.2)'
        }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-8 h-8" style={{ color: '#723593' }} />
            <h2 className="text-slate-800">Your Impact</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 border shadow-sm" style={{ borderColor: '#D4C3E8' }}>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">CO₂ Reduced</span>
                <span style={{ color: '#723593' }}>~50g</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border shadow-sm" style={{ borderColor: '#D4C3E8' }}>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Resources Saved</span>
                <span style={{ color: '#723593' }}>1 disposable cup</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border shadow-sm" style={{ borderColor: '#D4C3E8' }}>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Rental Duration</span>
                <span style={{ color: '#723593' }}>2 days</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl" style={{ 
            backgroundColor: 'rgba(197, 215, 217, 0.4)',
            border: '1px solid rgba(197, 215, 217, 0.6)'
          }}>
            <p className="text-center" style={{ color: '#723593' }}>
              🌍 Thank you for caring for our planet!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-8">
        <Button
          onClick={onStartNew}
          className="w-full text-white h-14 rounded-2xl border-0"
          style={{ 
            background: '#723593',
            boxShadow: '0 8px 24px rgba(94, 145, 133, 0.3)'
          }}
        >
          <Coffee className="w-5 h-5 mr-2" />
          Borrow Another Cup
        </Button>
        <Button
          onClick={onStartNew}
          variant="outline"
          className="w-full h-14 rounded-2xl border-2 text-slate-700 hover:bg-stone-50"
          style={{ borderColor: '#D4C3E8' }}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}