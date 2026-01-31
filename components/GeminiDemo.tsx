import React, { useState } from 'react';
import { generateHealthcareResponse } from '../services/geminiService';
import { Sparkles, FileText, Activity, Calculator, Send, Loader2 } from 'lucide-react';
import { DemoPreset } from '../types';

const PRESETS: DemoPreset[] = [
  {
    id: 'email',
    label: 'Письмо в департамент',
    prompt: 'Напиши официальное письмо в Департамент здравоохранения о необходимости закупки нового оборудования для отделения реанимации. Укажи на рост потока пациентов на 15% за последний квартал.',
    icon: <FileText className="w-4 h-4" />
  },
  {
    id: 'excel',
    label: 'Формула Excel',
    prompt: 'Мне нужна формула Excel. У меня есть столбец A с датой поступления и столбец B с датой выписки. Как посчитать количество койко-дней, исключая выходные?',
    icon: <Calculator className="w-4 h-4" />
  },
  {
    id: 'summary',
    label: 'Анализ текста',
    prompt: 'Сделай краткую выжимку (summary) следующего текста для главврача: "В ходе проверки санитарного состояния пищеблока были выявлены незначительные нарушения температурного режима хранения молочной продукции. Ответственные лица получили выговор, оборудование отправлено на техобслуживание. Рисков для пациентов не обнаружено."',
    icon: <Activity className="w-4 h-4" />
  }
];

export const GeminiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (promptText: string) => {
    if (!promptText.trim()) return;
    
    setIsLoading(true);
    setResponse('');
    setInput(promptText); // Sync input if clicked from preset

    const result = await generateHealthcareResponse(promptText);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="bg-gradient-to-r from-medical-700 to-medical-900 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse-slow" />
          <h3 className="text-xl font-bold">Демо: Ваш ИИ-Ассистент</h3>
        </div>
        <p className="text-medical-100 text-sm">
          Попробуйте прямо сейчас. Это работает на базе Gemini 2.5 Flash.
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Presets */}
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleGenerate(preset.prompt)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-full bg-slate-100 text-slate-700 hover:bg-medical-100 hover:text-medical-700 transition-colors border border-slate-200"
            >
              {preset.icon}
              {preset.label}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите запрос здесь или выберите пример выше..."
            className="w-full p-4 pr-12 rounded-xl bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none resize-none h-32 text-sm text-slate-800"
          />
          <button
            onClick={() => handleGenerate(input)}
            disabled={isLoading || !input}
            className="absolute bottom-3 right-3 p-2 bg-medical-600 text-white rounded-lg hover:bg-medical-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>

        {/* Output Area */}
        {response && (
          <div className="bg-medical-50 rounded-xl p-5 border border-medical-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-3 text-medical-800 font-semibold text-sm uppercase tracking-wide">
              <Sparkles className="w-4 h-4" />
              Ответ ИИ
            </div>
            <div className="prose prose-sm prose-slate max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
