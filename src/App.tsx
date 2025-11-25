import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ScanScreen } from './components/ScanScreen';
import { ConfirmScreen } from './components/ConfirmScreen';
import { ActiveRentalScreen } from './components/ActiveRentalScreen';
import { ReturnScreen } from './components/ReturnScreen';
import { SuccessScreen } from './components/SuccessScreen';
import { LoginScreen } from './components/LoginScreen';
import { CreateAccountScreen } from './components/CreateAccountScreen';
import { GuestScreen } from './components/GuestScreen';
import { ImpactScreen } from './components/ImpactScreen';
import { ImpactScreen0 } from './components/ImpactScreen0';

export type Screen =
  | 'welcome'
  | 'login'
  | 'signup'
  | 'guest'
  | 'impact'
  | 'impact0'
  | 'scan'
  | 'confirm'
  | 'active'
  | 'return'
  | 'success';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const [rentalData, setRentalData] = useState({
    cupId: '',
    rentalDate: new Date(),
    expiryDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
  });

  // --- Rental flow ---

  const handleQRScanned = (cupId: string) => {
    setRentalData({
      cupId,
      rentalDate: new Date(),
      expiryDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    });
    setCurrentScreen('confirm');
  };

  const handleConfirmRental = () => {
    setCurrentScreen('active');
  };

  const handleReturnCup = () => {
    setCurrentScreen('return');
  };

  const handleReturnComplete = () => {
    setCurrentScreen('success');
  };

  const handleStartNew = () => {
    // とりあえず個人ダッシュボードに戻す感じ
    setCurrentScreen('impact');
  };
  const handleStart0 = () => {
    setCurrentScreen('impact0');
  };

  // --- Auth flow（ダミー認証：完了したら impact へ） ---

  const handleAuthCompleted = () => {
    setCurrentScreen('impact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C5D7D9]/30 via-[#BEAEDB]/20 to-stone-50 flex items-center justify-center p-4">
      <div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[667px] flex flex-col"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5D7D9' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onStart={() => setCurrentScreen('scan')}
            onReturn={() => setCurrentScreen('return')}
            onCreateAccount={() => setCurrentScreen('signup')}
            onLogin={() => setCurrentScreen('login')}
            onGuest={() => setCurrentScreen('guest')}
          />
        )}

        {currentScreen === 'login' && (
          <LoginScreen
            onBack={() => setCurrentScreen('welcome')}
            onLoggedIn={handleAuthCompleted}
          />
        )}

        {currentScreen === 'signup' && (
          <CreateAccountScreen
            onBack={() => setCurrentScreen('welcome')}
            onCreated={handleStart0}
          />
        )}

        {currentScreen === 'guest' && (
          <GuestScreen
            onBack={() => setCurrentScreen('welcome')}
            onContinue={handleAuthCompleted}
          />
        )}

        {currentScreen === 'impact' && (
          <ImpactScreen
            onBorrow={() => setCurrentScreen('scan')}
            onReturn={() => setCurrentScreen('return')}
            onBackToWelcome={() => setCurrentScreen('welcome')} 
          />
        )}
        {currentScreen === 'impact0' && (
          <ImpactScreen0
            onBorrow={() => setCurrentScreen('scan')}
            onReturn={() => setCurrentScreen('return')}
            onBackToWelcome={() => setCurrentScreen('welcome')} 
          />
        )}

        {currentScreen === 'scan' && (
          <ScanScreen
            onQRScanned={handleQRScanned}
            onBack={() => setCurrentScreen('welcome')}
          />
        )}

        {currentScreen === 'confirm' && (
          <ConfirmScreen
            cupId={rentalData.cupId}
            onConfirm={handleConfirmRental}
            onCancel={() => setCurrentScreen('scan')}
          />
        )}

        {currentScreen === 'active' && (
          <ActiveRentalScreen
            cupId={rentalData.cupId}
            expiryDate={rentalData.expiryDate}
            onReturn={handleReturnCup}
            onBackToWelcome={() => setCurrentScreen('welcome')} 
          />
        )}

        {currentScreen === 'return' && (
          <ReturnScreen
            onReturnComplete={handleReturnComplete}
            onBack={() => setCurrentScreen('active')}
          />
        )}

        {currentScreen === 'success' && (
          <SuccessScreen onStartNew={handleStartNew} />
        )}
      </div>
    </div>
  );
}