import React from 'react';
import { 
  Brain, 
  Cpu, 
  Lightbulb, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  MapPin,
  Clock,
  Sparkles,
  Zap,
  Monitor,
  Video
} from 'lucide-react';
import { AgendaItem } from './types';
import { AiSimulator } from './components/AiSimulator';

const AGENDA: AgendaItem[] = [
  {
    time: "16:00 - 16:15",
    title: "ИИ — Новое Электричество",
    description: "Теория без воды. Как нейросети «читают» смыслы, почему это касается каждого организатора здравоохранения и как не отстать от прогресса.",
    icon: 'brain'
  },
  {
    time: "16:15 - 16:30",
    title: "Искусство Промпт-инжиниринга",
    description: "Алгоритм идеального запроса. Как делегировать ИИ рутину: от написания писем до анализа сложной документации.",
    icon: 'wand'
  },
  {
    time: "16:30 - 16:50",
    title: "Практические Кейсы",
    description: "Живая демонстрация решения задач: анализ приказов, создание протоколов совещаний, генерация Excel-формул и защита данных.",
    icon: 'chart'
  },
  {
    time: "16:50 - 17:00",
    title: "Вопросы и Ответы",
    description: "Открытый микрофон. Обсудим, как внедрить инструменты в работу вашего отдела уже завтра.",
    icon: 'rocket'
  }
];

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-medical-200">
      
      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 neural-bg opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-medical-200 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent-200 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-50 border border-medical-100 text-medical-700 text-sm font-semibold mb-6 animate-in slide-in-from-top-4 fade-in duration-700">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-medical-500"></span>
              </span>
              Вы приглашены | Семинар для сотрудников
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight animate-in slide-in-from-left-4 fade-in duration-700 delay-100">
              Искусственный Интеллект: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-accent-500">
                От Теории к Практике
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 animate-in slide-in-from-left-4 fade-in duration-700 delay-200">
              Как сэкономить часы работы, автоматизировать рутину и стать организатором здравоохранения будущего. <br className="hidden md:block" />
              <span className="font-semibold text-medical-700">Для всех специалистов и организаторов здравоохранения.</span>
            </p>

            {/* Event Details Card */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-medical-50 rounded-lg text-medical-600">
                   <Calendar className="w-6 h-6" />
                </div>
                <div className="text-left">
                   <p className="text-xs text-slate-500 font-semibold uppercase">Дата</p>
                   <p className="text-slate-900 font-bold">5 Февраля 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="p-2 bg-accent-50 rounded-lg text-accent-600">
                   <Monitor className="w-6 h-6" />
                </div>
                <div className="text-left">
                   <p className="text-xs text-slate-500 font-semibold uppercase">Место</p>
                   <p className="text-slate-900 font-bold">Онлайн (ВКС)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 relative z-0 animate-float hidden lg:block">
            {/* Abstract representation of "I, Robot" or Modern Tech */}
            <div className="relative w-full aspect-square max-w-sm mx-auto">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#0ea5e9', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#14b8a6', stopOpacity:1}} />
                  </linearGradient>
                </defs>
                <path fill="url(#grad1)" d="M45.7,-76.3C58.9,-69.3,69.1,-58.3,77.3,-46.3C85.5,-34.3,91.7,-21.3,90.3,-8.9C88.9,3.5,79.9,15.3,71.4,26.5C62.9,37.7,54.9,48.3,44.9,57.4C34.9,66.5,22.9,74.1,10.2,75.9C-2.5,77.7,-15.9,73.7,-28.4,67.6C-40.9,61.5,-52.5,53.3,-62.3,42.8C-72.1,32.3,-80.1,19.5,-80.7,6.3C-81.3,-6.9,-74.5,-20.5,-65.4,-32C-56.3,-43.5,-44.9,-52.9,-33.1,-60.8C-21.3,-68.7,-9.1,-75.1,4.1,-82.2L45.7,-76.3Z" transform="translate(100 100)" opacity="0.8" />
                <path fill="#ffffff" d="M38.1,-63.3C49.1,-56.3,57.8,-46.3,64.8,-35.3C71.8,-24.3,77.1,-12.3,75.8,-1.3C74.5,9.7,66.6,19.7,58.6,28.7C50.6,37.7,42.5,45.7,33.5,51.7C24.5,57.7,14.5,61.7,3.5,62.7C-7.5,63.7,-19.5,61.7,-30.5,56.7C-41.5,51.7,-51.5,43.7,-59.5,33.7C-67.5,23.7,-73.5,11.7,-72.2,1.3C-70.9,-9.1,-62.3,-17.9,-54.3,-27.9C-46.3,-37.9,-38.9,-49.1,-29.9,-57.1C-20.9,-65.1,-10.3,-69.9,0.7,-71.1L38.1,-63.3Z" transform="translate(100 100)" opacity="0.3" className="animate-pulse-slow"/>
              </svg>
              {/* Floating Cards */}
              <div className="absolute top-1/4 -left-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2 animate-float" style={{animationDelay: '1s'}}>
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="text-xs font-bold text-slate-700">Удивление</span>
              </div>
              <div className="absolute bottom-1/4 -right-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2 animate-float" style={{animationDelay: '2s'}}>
                <Zap className="w-5 h-5 text-teal-500" />
                <span className="text-xs font-bold text-slate-700">Скорость</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SIMULATOR SECTION (WOW FACTOR) --- */}
      <section className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Что это дает на практике?
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Попробуйте этот интерактивный симулятор. В здравоохранении цена ошибки высока, а времени всегда не хватает.
                <br/><br/>
                Даже базовое внедрение нейросетей (уровень 20-30%) позволяет разгрузить <strong>специалистов</strong> от "текучки", чтобы они могли заниматься действительно важными задачами.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span>Рост скорости обработки документов в 10 раз</span>
                </li>
                 <li className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span>Снижение риска механических ошибок</span>
                </li>
              </ul>
            </div>
            
            {/* The Interactive Component */}
            <div>
              <AiSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY ATTEND (HOOK) --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Почему это важно?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">
              «ИИ не заменит профессионала. Но профессионал, использующий ИИ, заменит того, кто его игнорирует».
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Новое «Электричество»</h3>
              <p className="text-slate-600">
                ИИ становится такой же базовой инфраструктурой, как интернет. Мы переходим от поиска информации к генерации готовых решений.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 text-teal-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">IQ Моделей</h3>
              <p className="text-slate-600">
                За год IQ топовых моделей вырос с 70 до 160+. Это как мгновенный скачок от уровня школьника до профессора.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Автоматизация</h3>
              <p className="text-slate-600">
                Протоколы, отчеты, приказы — всё это ИИ делает за секунды. Ваша задача — управлять процессом, а не писать тексты руками.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- AGENDA --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Программа Семинара</h2>
            <p className="mt-4 text-slate-600">Максимум пользы за 60 минут</p>
          </div>

          <div className="space-y-6">
            {AGENDA.map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 hover:border-medical-300 transition-colors group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-medical-50 group-hover:text-medical-600 transition-colors border border-slate-200">
                     {item.icon === 'brain' && <Brain className="w-8 h-8" />}
                     {item.icon === 'wand' && <Zap className="w-8 h-8" />}
                     {item.icon === 'chart' && <TrendingUp className="w-8 h-8" />}
                     {item.icon === 'rocket' && <CheckCircle2 className="w-8 h-8" />}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <span className="text-sm font-medium text-medical-600 bg-white border border-medical-100 px-3 py-1 rounded-full w-fit mt-2 md:mt-0 shadow-sm">{item.time}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPEAKER --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-medical-100 rounded-3xl p-8 md:p-12 shadow-lg text-center">
            
            <div className="w-20 h-20 bg-medical-50 rounded-full flex items-center justify-center mx-auto mb-6 text-medical-600">
               <Users className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Спикер</div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Гостищев Роман Витальевич</h3>
            <p className="text-medical-700 font-medium mb-6 text-lg">
              Руководитель Челюстно-лицевого госпиталя ГКБ №1 им. Н.И. Пирогова
            </p>
            <p className="text-slate-600 max-w-2xl mx-auto italic leading-relaxed">
              «В здравоохранении нет времени на лирику. Мы рассмотрим конкретные инструменты. Я покажу, как использовать нейросети для задач любого масштаба: от мгновенного анализа документов и подготовки отчетов до создания презентаций и глубокой аналитики данных.»
            </p>
          </div>
        </div>
      </section>

      {/* --- INFO FOOTER --- */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Video className="w-12 h-12 mx-auto mb-6 text-medical-400 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">До встречи на семинаре!</h2>
          <p className="text-slate-300 mb-10 text-lg">
            Вы уже в списках участников. Просто подключитесь по ссылке.
          </p>
          
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-medical-500 transition-colors cursor-pointer group">
             <div className="text-medical-400 font-bold text-xl">5 февраля 2026, 16:00</div>
             <a 
               href="https://bbb3.corp.rosmedex.ru/rooms/8kt-479-idu-vr1" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-white text-lg font-semibold group-hover:text-medical-300 transition-colors underline decoration-dotted underline-offset-4"
             >
               Перейти к трансляции (ВКС)
             </a>
             <div className="text-slate-400 text-sm">bbb3.corp.rosmedex.ru</div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 py-12 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-slate-400" />
            <span>ГБУЗ ГКБ №1 им. Н.И. Пирогова</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <p>Этот сайт полностью спроектирован и написан Искусственным Интеллектом</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;