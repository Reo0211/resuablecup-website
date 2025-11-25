import { useState, useEffect } from 'react';
import { QrCode, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface ScanScreenProps {
  onQRScanned: (cupId: string) => void;
  onBack: () => void;
}

export function ScanScreen({ onQRScanned, onBack }: ScanScreenProps) {
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    // Simulation: automatically scan QR code after 3 seconds
    if (isScanning) {
      const timer = setTimeout(() => {
        const mockCupId = `CUP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        onQRScanned(mockCupId);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isScanning, onQRScanned]);

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-[#D4C3E8]/10">
      <div className="p-6 flex items-center">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </button>
        <h2 className="flex-1 text-center -ml-10 text-slate-800">Scan QR Code</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="relative w-64 h-64 mb-8">
          {/* Scan area */}
          <div className="absolute inset-0 border-4 rounded-3xl" style={{ 
            borderColor: '#723593',
            boxShadow: '0 8px 24px rgba(94, 145, 133, 0.2)'
          }}>
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 rounded-tl-3xl" style={{ borderColor: '#723593' }} />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 rounded-tr-3xl" style={{ borderColor: '#723593' }} />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 rounded-bl-3xl" style={{ borderColor: '#723593' }} />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 rounded-br-3xl" style={{ borderColor: '#723593' }} />
          </div>

          {/* Scan animation */}
          {isScanning && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-1 animate-pulse" style={{ 
                background: '#723593',
                boxShadow: '0 0 16px rgba(94, 145, 133, 0.5)',
                animation: 'scan 2s ease-in-out infinite' 
              }} />
            </div>
          )}

          {/* QR code icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <QrCode className={`w-24 h-24 ${isScanning ? '' : 'text-slate-300'}`} style={isScanning ? { color: '#723593' } : {}} />
          </div>
        </div>

        {isScanning ? (
          <div className="text-center">
            <p className="mb-2" style={{ color: '#723593' }}>Scanning...</p>
            <p className="text-slate-500">Align the QR code within the frame</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-slate-700 mb-2">Scan the cup's QR code</p>
            <p className="text-slate-500">to start your rental</p>
          </div>
        )}
      </div>

      <div className="p-8">
        <Button
          onClick={() => setIsScanning(true)}
          disabled={isScanning}
          className="w-full text-white h-14 rounded-2xl disabled:opacity-50 border-0"
          style={{ 
            background: '#723593',
            boxShadow: '0 8px 24px rgba(94, 145, 133, 0.3)'
          }}
        >
          {isScanning ? 'Scanning...' : 'Start Scan'}
        </Button>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% {
            top: 0;
          }
          50% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
}