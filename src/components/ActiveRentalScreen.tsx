import {
  Coffee,
  Calendar,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";

interface ActiveRentalScreenProps {
  cupId: string;
  expiryDate: Date;
  onReturn: () => void;
  onBackToWelcome: () => void; 
}

export function ActiveRentalScreen({
  cupId,
  expiryDate,
  onReturn,
  onBackToWelcome,
}: ActiveRentalScreenProps) {
  const daysRemaining = Math.ceil(
    (expiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-[#D4C3E8]/10">
      <div className="p-6 bg-white border-b" style={{ borderColor: '#D4C3E8' }}>
        <div className="flex items-center gap-2 mb-2" style={{ color: '#723593' }}>
          <CheckCircle className="w-5 h-5" />
          <span>Active Rental</span>
        </div>
        <h2 className="text-slate-800">Enjoy Your Cup!</h2>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
        <div className="rounded-3xl p-8 text-white mb-6 shadow-xl" style={{ 
          background: 'linear-gradient(135deg, #723593 0%, #D4C3E8 100%)',
          boxShadow: '0 12px 32px rgba(94, 145, 133, 0.3)'
        }}>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg" style={{ 
              background: 'linear-gradient(135deg, #723593 0%, #D4C3E8 100%)',
              boxShadow: '0 8px 24px rgba(94, 145, 133, 0.2)'
            }}>
              <Coffee className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="mb-2" style={{ color: '#723593' }}>Cup ID</p>
            <p className="text-slate-800">{cupId}</p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-2xl p-4 backdrop-blur">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-600">Return By</span>
              <span className="text-slate-800">
                {expiryDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Days Remaining</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: '#723593' }} />
                <span className="text-slate-800">{daysRemaining} days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl p-6" style={{ 
            backgroundColor: 'rgba(197, 215, 217, 0.2)',
            border: '1px solid rgba(94, 145, 133, 0.2)'
          }}>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5" style={{ color: '#723593' }} />
              <h3 className="text-slate-800">Find Return Locations</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Drop off at any return box or partner café near you
            </p>
            <button className="underline hover:no-underline" style={{ color: '#723593' }}>
              View Locations
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 border-t" style={{ borderColor: '#D4C3E8' }}>
        <Button
          onClick={onBackToWelcome}
          className="w-full text-white h-14 rounded-2xl border-0"
          style={{ 
            background: '#723593',
            boxShadow: '0 8px 24px rgba(94, 145, 133, 0.3)'
          }}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
}