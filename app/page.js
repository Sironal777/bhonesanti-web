// bhonesanti-web/app/page.js
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('MM');
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const sections = [
    { id: '01', title: 'ဘုန်းသန္တိ၏ စာအုပ်များ', type: 'LIBRARY', content: 'ပါဠိ၊ သက္ကတ၊ ရှမ်း ဘာသာစကားဆိုင်ရာ အဆင့်မြင့်သင်ထောက်ကူ စာအုပ်များ၊ Sīvali သုတေသနဆိုင်ရာ လက်ရာများကို ဖတ်ရှုလေ့လာနိုင်ပါသည်။' },
    { id: '02', title: 'ဘုန်းသန္တိအကြောင်း', type: 'PROFILE', content: 'Library and Information Management နယ်ပယ်ကို လေ့လာနေပြီး၊ Happy Libraries စနစ်များကို Python နှင့် Local AI နည်းပညာများပေါင်းစပ်ကာ တည်ဆောက်နေသူဖြစ်ပါသည်။' },
    { id: '03', title: 'စာအုပ်ဒေါင်းလုဒ်လင့်များ', type: 'DOWNLOAD', content: 'Searchable PDF များနှင့် သုတေသနပြုစုထားသော စာအုပ်ဖိုင်များကို တိုက်ရိုက်ဒေါင်းလုဒ် ရယူနိုင်ပါသည်။ (စီးပွားရေးအရ တဆင့်ပြန်လည်ရောင်းချခြင်း လုံးဝ မပြုလုပ်ရ။)' },
    { id: '04', title: 'အောင်စာရင်းများ', type: 'RESULTS', content: 'ဘာသာရေးနှင့် သာသနာဆိုင်ရာ စာမေးပွဲ အောင်စာရင်းများကို အလွယ်တကူ ရှာဖွေကြည့်ရှုနိုင်မည့် ဒစ်ဂျစ်တယ် မှတ်တမ်းစနစ်။' },
    { id: '05', title: 'သမိုင်းမှတ်တမ်းများ', type: 'ARCHIVE', content: 'မြန်မာနိုင်ငံ၏ သာသနာရေးဆိုင်ရာ ပညာရေးသမိုင်းကြောင်းများ၊ မှတ်တမ်းဟောင်းများနှင့် ခေတ်မီ ဒစ်ဂျစ်တယ်စနစ်ဖြင့် ထိန်းသိမ်းထားသော ရှားပါးစာတမ်းများကို လေ့လာနိုင်ရန် စုစည်းတင်ပြထားပါသည်။' }
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-10 md:py-0">
      <div className="premium-aurora-bg"></div>

      {/* Control Panel */}
      <div className="absolute top-4 right-4 md:top-6 md:right-12 z-50 flex items-center space-x-3 md:space-x-4 bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-1.5 md:p-2 rounded-full shadow-sm font-note-text">
        <div className="flex gap-1 md:gap-2 text-xs md:text-sm">
          <button onClick={() => setLang('MM')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'MM' ? 'bg-blue-600 text-white' : 'hover:bg-gray-500/20 text-[var(--text-main)]'}`}>MM</button>
          <button onClick={() => setLang('EN')} className={`px-3 py-1.5 rounded-full transition-all ${lang === 'EN' ? 'bg-blue-600 text-white' : 'hover:bg-gray-500/20 text-[var(--text-main)]'}`}>EN</button>
        </div>
        <div className="w-px h-4 bg-[var(--glass-border)]"></div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="px-3 py-1.5 rounded-full text-xs md:text-sm transition-all hover:bg-gray-500/20 text-[var(--text-main)]">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      {/* Mobile တွင် flex-col ဖြင့် အပေါ်အောက်၊ Desktop တွင် flex-row ဖြင့် ဘယ်ညာ ထားမည် */}
      <main className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-10 p-4 md:p-10 mt-12 md:mt-0">
        
        {/* Left Side: 3D Hover Menu (Mobile တွင် ဘေးတိုက် Scroll ဆွဲနိုင်သည်) */}
        <div className="w-full md:w-[40%] flex flex-col justify-start md:justify-center">
          <div className="text-left mb-6 md:mb-8">
            <h1 className="font-main-title gold-text-anim text-5xl md:text-6xl tracking-tight pb-2">
              Bhone Santi
            </h1>
            {/* စာကြီးကို ဖြုတ်လိုက်ပါပြီ */}
          </div>

          {/* ဖုန်းတွင် Menu များကို အလျားလိုက် စီထားမည် */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-3 pb-4 md:pb-0 hide-scrollbar">
            {sections.map((sec) => (
              <div key={sec.id} className="menu-wrapper">
                <button 
                  onClick={() => setActiveSection(sec)}
                  className={`sleek-menu-btn font-sub-title text-base md:text-xl whitespace-nowrap md:whitespace-normal ${activeSection?.id === sec.id ? 'active-btn' : ''}`}
                >
                  {sec.title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Harmonious Glass Widget */}
        <div className="w-full md:w-[60%] flex items-center justify-center relative mt-6 md:mt-0">
          {activeSection ? (
            <div className="widget-container">
              
              {/* နောက်ကွယ်မှ သဟဇာတဖြစ်သော မျောလွင့် Shapes များ */}
              <div className="floating-shape shape-circle"></div>
              <div className="floating-shape shape-square"></div>
              <div className="floating-shape shape-blob"></div>

              {/* Main Glass Panel */}
              <div className="glass-widget">
                
                {/* Top Bar */}
                <div className="widget-top-bar font-note-text">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/30 flex items-center justify-center border border-white/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 22h20L12 2z"/></svg>
                    </div>
                    <span className="font-bold text-sm opacity-80 tracking-widest">{activeSection.type}</span>
                  </div>
                  <div className="flex gap-2 opacity-60">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/></svg>
                  </div>
                </div>

                {/* Content Area */}
                <div className="py-4">
                  <h2 className="font-sub-title text-3xl md:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {activeSection.title}
                  </h2>
                  <p className="font-long-read text-base md:text-lg opacity-90 leading-relaxed">
                    {activeSection.content}
                  </p>
                </div>

                {/* Bottom Bar (Nav & Action) */}
                <div className="widget-bottom-bar mt-auto">
                  <div className="widget-nav">
                    <div className="nav-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg></div>
                    <div className="nav-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></div>
                    <div className="nav-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div>
                  </div>
                  <div className="widget-action-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <div className="text-center opacity-40 p-10 font-note-text border border-dashed border-gray-500/30 rounded-3xl w-full max-w-sm mx-auto">
              <p className="text-lg md:text-xl">
                အကြောင်းအရာများကို ဖတ်ရှုရန် ခေါင်းစဉ်များကို နှိပ်ပါ။
              </p>
            </div>
          )}
        </div>

      </main>

      {/* Hide Scrollbar for mobile menu */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
