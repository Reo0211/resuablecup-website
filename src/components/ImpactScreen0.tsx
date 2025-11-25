// components/ImpactScreen.tsx
import {
  Coffee,
  Activity,
  User,
  CupSoda,
  RotateCcw,
  MapPin,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface ImpactScreenProps {
  onBorrow: () => void;
  onReturn: () => void;
}

export function ImpactScreen0({ onBorrow, onReturn }: ImpactScreenProps) {
  const individual = {
    cupsSaved: 0,
    co2Saved: 0,
    treesSaved: 0,
    waterSaved: 0,
  };

  const total = {
    cupsSaved: 0,
    co2Saved: 0,
  };

  const cupsHistory = [
    { day: 'Mon', cups: 0 },
    { day: 'Tue', cups: 0 },
    { day: 'Wed', cups: 0 },
    { day: 'Thu', cups: 0 },
    { day: 'Fri', cups: 0 },
    { day: 'Sat', cups: 0 },
    { day: 'Sun', cups: 0 },
  ];

  // ✅ 個人のマイルストーン用（例: 次のゴール 10 cups）
  const goalCups = 10;
  const completed = Math.min(individual.cupsSaved, goalCups);
  const remaining = Math.max(goalCups - individual.cupsSaved, 0);

  const progressData = [
    { name: 'Completed', value: completed },
    { name: 'Remaining', value: remaining },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-white to-[#D4C3E8]/10">
      {/* メイン */}
      <div className="flex-1 p-6 space-y-5 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-[#723593]" />
            <span
              className="text-xl text-slate-800"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.06em' }}
            >
              Mug Buddies
            </span>
          </div>
          <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center">
            <User className="w-4 h-4 text-slate-500" />
          </button>
        </header>

        {/* あなたのインパクト */}
        <section className="bg-white rounded-3xl shadow-md p-4 space-y-3">
          <p className="text-xs text-slate-500">Your impact so far</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] text-slate-500 mb-1">Cups saved</p>
              <p className="text-4xl font-semibold text-slate-800 leading-none">
                {individual.cupsSaved.toString().padStart(2, '0')}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-[11px]">
              <div className="flex items-center gap-1">
                <span className="text-slate-500">CO₂</span>
                <span className="font-semibold text-slate-800">
                  {individual.co2Saved} g
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500">Trees</span>
                <span className="font-semibold text-slate-800">
                  {individual.treesSaved}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-slate-500">Water</span>
                <span className="font-semibold text-slate-800">
                  {individual.waterSaved} gal
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ 個人のマイルストーン（円グラフ） */}
        <section className="bg-white rounded-3xl shadow-md p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-800">
              Next cup milestone
            </h2>
            <span className="text-[11px] text-slate-400">
              Goal: {goalCups} cups
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <PieChart width={260} height={220}>
              <Pie
                data={progressData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={95}
                paddingAngle={2}
              >
                {/* Completed */}
                <Cell fill="#723593" />
                {/* Remaining */}
                <Cell fill="#C9D6D5" />
              </Pie>
            </PieChart>

            {/* 中央下にテキストで進捗表示 */}
            <div className="mt-[-20px] mb-1 text-sm text-slate-800 font-semibold">
              {completed} / {goalCups} cups
            </div>

            {/* 凡例 */}
            <div className="flex justify-center gap-10 text-[12px]">
              <div className="flex items-center gap-2">
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ background: '#723593' }}
                />
                <span className="text-slate-700 font-medium">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ background: '#C9D6D5' }}
                />
                <span className="text-slate-700">To goal</span>
              </div>
            </div>
          </div>
        </section>

        {/* コミュニティインパクト（シンプル表示） */}
        {/* <section className="bg-white rounded-3xl shadow-md p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-800">
              Community impact
            </h2>
            <span className="text-[11px] text-slate-400">All users</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-500 mb-0.5">
                Cups saved
              </span>
              <span className="text-lg font-semibold text-slate-800">
                {total.cupsSaved.toString().padStart(2, '0')}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-500 mb-0.5">
                CO₂ saved
              </span>
              <span className="text-lg font-semibold text-slate-800">
                {total.co2Saved} g
              </span>
            </div>
          </div>
        </section> */}

        {/* 週間カップ数 */}
        <section className="bg-white rounded-3xl shadow-md p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-800">
              Weekly cups borrowed
            </h3>
            <span className="text-[11px] text-slate-400">Last 7 days</span>
          </div>

          <div className="flex justify-center">
            <BarChart
              width={260}
              height={150}
              data={cupsHistory}
              margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 10 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 10 }} />
              <Tooltip
                cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                contentStyle={{
                  borderRadius: 12,
                  border: 'none',
                  boxShadow: '0 8px 20px rgba(15,23,42,0.12)',
                  fontSize: 11,
                }}
              />
              <Bar dataKey="cups" radius={[6, 6, 0, 0]} fill="#723593" />
            </BarChart>
          </div>
        </section>

        <div className="h-2" />
      </div>

      {/* タブバー */}
      <nav className="h-16 bg-white border-t border-slate-200 flex items-center justify-around px-4">
        <button
          type="button"
          onClick={onBorrow}
          className="flex flex-col items-center gap-1 text-[11px] text-slate-500"
        >
          <CupSoda className="w-5 h-5" />
          <span>Borrow</span>
        </button>

        <button
          type="button"
          className="flex flex-col items-center gap-1 text-[11px] text-slate-400"
        >
          <MapPin className="w-5 h-5" />
          <span>Locations</span>
        </button>

        <button
          type="button"
          className="flex flex-col items-center gap-1 text-[11px] text-[#723593] font-semibold"
        >
          <Activity className="w-5 h-5" />
          <span>Impact</span>
        </button>

        <button
          type="button"
          onClick={onReturn}
          className="flex flex-col items-center gap-1 text-[11px] text-slate-500"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Return</span>
        </button>
      </nav>
    </div>
  );
}