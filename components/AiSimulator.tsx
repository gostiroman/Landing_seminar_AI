import React, { useState } from 'react';
import { Clock, AlertTriangle, Coffee, TrendingUp, ShieldCheck } from 'lucide-react';

export const AiSimulator: React.FC = () => {
  const [level, setLevel] = useState(0);

  // Helper to interpolate values
  const getValue = (start: number, end: number) => {
    return Math.round(start + (end - start) * (level / 100));
  };

  const timeSpent = getValue(25, 2); // Hours per week on routine
  const errorRisk = getValue(15, 0.1); // Percent risk
  const efficiency = getValue(40, 98); // Efficiency score

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
      <div className="bg-slate-900 p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
          <TrendingUp className="text-teal-400" />
          Симулятор Эффективности Отделения
        </h3>
        <p className="text-slate-400 text-sm">Передвиньте ползунок, чтобы увидеть эффект внедрения ИИ</p>
      </div>

      <div className="p-8">
        {/* Slider Section */}
        <div className="mb-10">
          <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            <span>Ручное управление</span>
            <span className={level > 50 ? 'text-teal-600' : ''}>ИИ-Ассистенты</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-medical-600 transition-all"
          />
          <div className="mt-2 text-center font-medium text-medical-600">
            Уровень автоматизации: {level}%
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Metric 1: Time */}
          <div className={`p-4 rounded-2xl border transition-all duration-500 ${level > 50 ? 'bg-teal-50 border-teal-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-center gap-3 mb-3">
              <Clock className={`w-6 h-6 ${level > 50 ? 'text-teal-600' : 'text-red-500'}`} />
              <span className="text-slate-600 font-medium text-sm">Часов на отчеты (нед)</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">
              {timeSpent} ч.
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {level > 50 ? 'Вы освободили 20+ часов!' : 'Рутина съедает время'}
            </div>
          </div>

          {/* Metric 2: Risk */}
          <div className={`p-4 rounded-2xl border transition-all duration-500 ${level > 80 ? 'bg-teal-50 border-teal-200' : 'bg-orange-50 border-orange-200'}`}>
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className={`w-6 h-6 ${level > 80 ? 'text-teal-600' : 'text-orange-500'}`} />
              <span className="text-slate-600 font-medium text-sm">Риск ошибок</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">
              {errorRisk}%
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {level > 80 ? 'Человеческий фактор исключен' : 'Высокий риск штрафов'}
            </div>
          </div>

           {/* Metric 3: Zen */}
           <div className={`p-4 rounded-2xl border transition-all duration-500 bg-slate-50 border-slate-200`}>
            <div className="flex items-center gap-3 mb-3">
              {level > 60 ? <ShieldCheck className="w-6 h-6 text-medical-600" /> : <Coffee className="w-6 h-6 text-slate-400" />}
              <span className="text-slate-600 font-medium text-sm">Контроль процессов</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">
              {efficiency}%
            </div>
            
            {/* Visual Bar */}
            <div className="w-full h-2 bg-slate-200 rounded-full mt-3 overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-medical-400 to-teal-500 transition-all duration-300"
                    style={{ width: `${efficiency}%` }}
                ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
