import { useState } from 'react';
import { MapPin, ArrowLeft, Navigation } from 'lucide-react';
import { Button } from './ui/button';
// 同じフォルダにある map.jpg をインポート
// (もしエラーが出る場合は、この行を消して src="/map.jpg" に戻してください)
import mapImage from './map.jpg'; 

interface ReturnScreenProps {
  onReturnComplete: () => void;
  onBack: () => void;
}

interface ReturnLocation {
  id: string;
  name: string;
  address: string;
  available: boolean;
  x: number; // 画像上の横位置 (0-100%)
  y: number; // 画像上の縦位置 (0-100%)
}

// 8つのロケーション座標 (微調整が必要な場合は x, y を変更してください)
const mockLocations: ReturnLocation[] = [
  {
    id: '1',
    name: 'Open lawn at UC',
    address: 'United College Area',
    available: true,
    x: 20, y: 25 
  },
  {
    id: '2',
    name: 'University Library',
    address: 'Central Campus',
    available: true,
    x: 45, y: 35
  },
  {
    id: '3',
    name: 'Franklin Building',
    address: 'Central Campus',
    available: true,
    x: 52, y: 42
  },
  {
    id: '4',
    name: 'Ho Sin-Hang Engineering',
    address: 'Central Campus',
    available: true,
    x: 60, y: 40
  },
  {
    id: '5',
    name: 'Pommerenke Student Centre',
    address: 'Pond Area',
    available: true,
    x: 58, y: 55
  },
  {
    id: '6',
    name: 'Yasumoto Int. Academic Park',
    address: 'YIA',
    available: true,
    x: 65, y: 65
  },
  {
    id: '7',
    name: 'Ho Tim Building',
    address: 'Chung Chi College',
    available: true,
    x: 55, y: 80
  },
  {
    id: '8',
    name: 'MTR Station Entrance',
    address: 'University Station',
    available: false,
    x: 82, y: 92
  },
];

export function ReturnScreen({ onReturnComplete, onBack }: ReturnScreenProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedLocation = mockLocations.find(loc => loc.id === selectedId);

  const handleReturn = () => {
    if (selectedId) {
      onReturnComplete();
    }
  };

  // ズーム倍率設定
  const ZOOM_SCALE = 2.5;

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-[#D4C3E8]/10">
      <div className="p-6 flex items-center">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </button>
        <h2 className="flex-1 text-center -ml-10 text-slate-800">Select Return Location</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          
          {/* Map Section */}
          <div 
            className="rounded-3xl h-64 mb-6 relative overflow-hidden border shadow-sm bg-stone-100 group" 
            style={{ borderColor: '#D4C3E8' }}
          >
            {/* Map Image Container with Transform */}
            <div 
              className="w-full h-full transition-transform duration-700 ease-in-out will-change-transform"
              style={{
                transformOrigin: 'center center',
                transform: selectedLocation
                  ? `scale(${ZOOM_SCALE}) translate(${50 - selectedLocation.x}%, ${50 - selectedLocation.y}%)`
                  : 'scale(1) translate(0, 0)'
              }}
            >
              <img
                src={mapImage}
                alt="Campus Map"
                className="w-full h-full object-cover"
              />
              
              {/* ピンの描画部分 */}
              {selectedLocation && (
                <div 
                  className="absolute"
                  style={{
                    left: `${selectedLocation.x}%`,
                    top: `${selectedLocation.y}%`,
                    // 地図の拡大(ZOOM_SCALE)に合わせて、ピンを縮小(1/ZOOM_SCALE)してサイズを維持
                    transform: `translate(-50%, -100%) scale(${1 / ZOOM_SCALE})`,
                    transformOrigin: 'bottom center', 
                    pointerEvents: 'none'
                  }}
                >
                  <div className="relative flex items-center justify-center w-12 h-12">
                    {/* ピン本体: 色を直接指定して黒化を防止 */}
                    <MapPin 
                      size={48} 
                      color="#723593" 
                      fill="#723593" 
                      className="drop-shadow-xl animate-bounce"
                    />
                    
                    {/* デザイン調整用の白い丸 */}
                    <div 
                      className="absolute bg-white rounded-full shadow-sm"
                      style={{
                        width: '14px',
                        height: '14px',
                        top: '14px',
                      }} 
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ナビボタン（選択リセット用） */}
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={() => setSelectedId(null)}
                className="bg-white p-3 rounded-full shadow-lg border hover:bg-stone-50 transition-colors" 
                style={{ borderColor: '#D4C3E8' }}
              >
                <Navigation className="w-5 h-5" style={{ color: selectedId ? '#723593' : '#94a3b8' }} />
              </button>
            </div>
          </div>

          <h3 className="text-slate-800 mb-4">Collection Points</h3>

          <div className="space-y-3">
            {mockLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => location.available && setSelectedId(location.id)}
                disabled={!location.available}
                className={`w-full p-4 rounded-2xl text-left transition-all shadow-sm ${
                  selectedId === location.id
                    ? 'text-white'
                    : location.available
                    ? 'bg-white hover:border-opacity-60'
                    : 'bg-stone-50 opacity-60'
                }`}
                style={
                  selectedId === location.id
                    ? { 
                        background: '#723593',
                        boxShadow: '0 8px 24px rgba(94, 145, 133, 0.3)',
                        border: 'none'
                      }
                    : { border: '2px solid #D4C3E8' }
                }
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3 flex-1">
                    <MapPin
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        selectedId === location.id
                          ? 'text-white'
                          : location.available
                          ? ''
                          : 'text-slate-400'
                      }`}
                      style={selectedId === location.id || !location.available ? {} : { color: '#723593' }}
                    />
                    <div className="flex-1">
                      <p
                        className={`mb-1 font-medium ${
                          selectedId === location.id
                            ? 'text-white'
                            : 'text-slate-800'
                        }`}
                      >
                        {location.name}
                      </p>
                      <p
                        className={`text-sm ${
                          selectedId === location.id
                            ? 'text-white/80'
                            : 'text-slate-500'
                        }`}
                      >
                        {location.address}
                      </p>
                    </div>
                  </div>
                </div>
                {!location.available && (
                  <p className="text-slate-400 text-sm mt-1 ml-8">Currently unavailable</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 bg-white border-t" style={{ borderColor: '#D4C3E8' }}>
        <Button
          onClick={handleReturn}
          disabled={!selectedId}
          className="w-full text-white h-14 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed border-0 font-semibold text-lg"
          style={{ 
            background: '#723593',
            boxShadow: '0 8px 24px rgba(94, 145, 133, 0.3)'
          }}
        >
          {selectedId ? 'Return at This Location' : 'Select a location'}
        </Button>
      </div>
    </div>
  );
}