import { Coffee, Calendar, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

interface ConfirmScreenProps {
  cupId: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmScreen({ cupId, onConfirm, onCancel }: ConfirmScreenProps) {
  const expiryDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
  
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-[#D4C3E8]/10">
      <div className="p-6">
        <h2 className="text-center text-slate-800">Confirm Rental</h2>
      </div>

      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="rounded-3xl p-8 mb-6 shadow-sm" style={{ 
          backgroundColor: 'rgba(197, 215, 217, 0.2)',
          border: '1px solid rgba(94, 145, 133, 0.2)'
        }}>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg" style={{ 
              background: 'linear-gradient(135deg, #723593 0%, #D4C3E8 100%)',
              boxShadow: '0 8px 24px rgba(94, 145, 133, 0.2)'
            }}>
              <Coffee className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border shadow-sm" style={{ borderColor: '#D4C3E8' }}>
              <span className="text-slate-600">Cup ID</span>
              <span style={{ color: '#723593' }}>{cupId}</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border shadow-sm" style={{ borderColor: '#D4C3E8' }}>
              <span className="text-slate-600">Rental Period</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: '#723593' }} />
                <span style={{ color: '#723593' }}>14 days</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border shadow-sm" style={{ borderColor: '#D4C3E8' }}>
              <span className="text-slate-600">Return By</span>
              <span style={{ color: '#723593' }}>
                {expiryDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-2xl" style={{ 
          backgroundColor: 'rgba(197, 215, 217, 0.3)',
          border: '1px solid rgba(197, 215, 217, 0.5)'
        }}>
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#723593' }} />
          <p className="text-slate-700">
            By confirming, you'll have 14 days to enjoy your cup. Please return it to any drop-off location before the deadline.
          </p>
        </div>
      </div>

      <div className="p-8 space-y-3">
        <Button
          onClick={onConfirm}
          className="w-full text-white h-14 rounded-2xl border-0"
          style={{ 
            background: '#723593',
            boxShadow: '0 8px 24px rgba(94, 145, 133, 0.3)'
          }}
        >
          Confirm Rental
        </Button>
        <Button
          onClick={onCancel}
          variant="outline"
          className="w-full h-14 rounded-2xl border-2 text-slate-700 hover:bg-stone-50"
          style={{ borderColor: '#D4C3E8' }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}