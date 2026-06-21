// bhonesanti-web/app/page.js
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('MM');
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const sections = [
    { id: 1, title: '၁။ ဘုန်းသန္တိ၏ စာအုပ်များ', content: 'ပါဠိ၊ သက္ကတ၊ ရှမ်း ဘာသာစကားဆိုင်ရာ အဆင့်မြင့်သင်ထောက်ကူ စာအုပ်များ၊ Sīvali သုတေသနဆိုင်ရာ လက်ရာများကို ဖတ်ရှုလေ့လာနိုင်ပါသည်။' },
    { id: 2, title: '၂။ ဘုန်းသန္တိအကြောင်း', content: 'Library and Information Management နယ်ပယ်ကို လေ့လာနေပြီး၊ Happy Libraries စနစ်များကို Python နှင့် Local AI နည်းပညာများပေါင်းစပ်ကာ တည်ဆောက်နေသူဖြစ်ပါသည်။' },
    { id: 3, title: '၃။ စာအုပ်ဒေါင်းလုဒ်လင့်များ', content: 'Searchable PDF များနှင့် သုတေသနပြုစုထားသော စာအုပ်ဖိုင်များကို တိုက်ရိုက်ဒေါင်းလုဒ် ရယူနိုင်ပါသည်။ (စီးပွားရေးအရ တဆင့်ပြန်လည်ရောင်းချခြင်း လုံးဝ မပြုလုပ်ရ။)' },
    { id: 4, title: '၄။ အောင်စာရင်းများ', content: 'ဘာသာရေးနှင့် သာသနာဆိုင်ရာ စာမေးပွဲ အောင်စာရင်းများကို အလွယ်တကူ ရှာဖွေကြည့်ရှုနိုင်မည့် ဒစ်ဂျစ်တယ် မှတ်တမ်းစနစ်။' },
    { id: 5, title: '၅။ သမိုင်းမှတ်တမ်းများ', content: 'မြန်မာနိုင်ငံ၏ သာသနာရေးဆိုင်ရာ ပညာရေးသမိုင်းကြောင်းများ၊ မှတ်တမ်းဟောင်းများနှင့် ခေတ်မီ ဒစ်ဂျစ်တယ်စနစ်ဖြင့် ထိန်းသိမ်းထားသော ရှားပါးစာတမ်းများကို လေ့လာနိုင်ရန် စုစည်းတင်ပြထားပါသည်။' }
  ];

  const MagicLeaf = ({ className }) => (
    <svg viewBox="0 0 24 24" className={`magic-icon ${className}`}>
      <path className="fil-leaf" d="M12 2C7.5 2 4 5.5 4 10c0 4.5 3.5 12 8 12s8-7.5 8-12c0-4.5-3.5-8-8-8zm0 18c-3.3 0-6-6-6-10s2.7-6 6-6 6 2.7 6 6-2.7 10-6 10z"/>
    </svg>
  );

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Premium Aurora Glow Background */}
      <div className="premium-aurora-bg"></div>

      {/* Control Panel */}
      <div className="absolute top-6 right-6 md:right-12 z-50 flex items-center space-x-4 bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-2 rounded-full shadow-sm transition-all duration-500">
        <div className="flex gap-2 font-note-text text-sm">
          <button onClick={() => setLang('MM')} className={`px-4 py-1.5 rounded-full transition-all ${lang === 'MM' ? 'bg-blue-500/20 text-[var(--text-long-read)] font-bold' : 'hover:bg-gray-500/10 text-[var(--text-long-read)]'}`}>MM</button>
          <button onClick={() => setLang('EN')} className={`px-4 py-1.5 rounded-full transition-all ${lang === 'EN' ? 'bg-blue-500/20 text-[var(--text-long-read)] font-bold' : 'hover:bg-gray-500/10 text-[var(--text-long-read)]'}`}>EN</button>
        </div>
        <div className="w-px h-5 bg-[var(--glass-border)]"></div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="font-note-text px-4 py-1.5 rounded-full text-sm transition-all hover:bg-gray-500/10 text-[var(--text-long-read)]">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <main className="relative z-10 w-full max-w-6xl h-[85vh] flex flex-col md:flex-row gap-10 p-6 md:p-10">
        
        {/* Left Menu Section */}
        <div className="w-full md:w-[40%] h-full flex flex-col justify-center space-y-8">
          <div className="text-left mb-2">
            <h1 className="font-main-title text-6xl lg:text-7xl">Bhone Santi</h1>
            <p className="font-note-text text-lg mt-3 opacity-80 text-[var(--text-note)]">
              {lang === 'MM' ? 'သာသနာဆိုင်ရာနှင့် နည်းပညာ သုတေသန ဗဟိုဌာန' : 'Religious & Technological Research Hub'}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            {sections.map((sec) => (
              <button 
                key={sec.id}
                onClick={() => setActiveSection(sec)}
                className={`magic-btn font-sub-title text-lg lg:text-xl w-full ${activeSection?.id === sec.id ? 'active-btn translate-x-3' : ''}`}
              >
                <MagicLeaf className="icon-1" />
                <MagicLeaf className="icon-2" />
                <MagicLeaf className="icon-3" />
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Section (Premium Harmonized Card) */}
        <div className="w-full md:w-[60%] h-full flex items-center justify-center relative">
          {activeSection ? (
            <div key={activeSection.id} className="relative w-full max-w-lg min-h-[420px] rounded-[2rem] overflow-hidden content-reveal shadow-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-2xl transition-all duration-500">
              
              {/* Uiverse Premium Rotating Orb */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
                <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-500 to-amber-300 animate-spin" style={{ animationDuration: '15s' }}></div>
              </div>

              {/* Glass Foreground Content */}
              <div className="w-full h-full p-10 flex flex-col relative z-10">
                <h3 className="font-sub-title text-3xl mb-6 text-[var(--text-title-sub)] border-b border-[var(--glass-border)] pb-4">
                  {activeSection.title}
                </h3>
                <p className="font-long-read text-lg leading-loose text-[var(--text-long-read)]">
                  {activeSection.content}
                </p>

                {/* Card Footer */}
                <div className="w-full mt-auto pt-6 flex justify-between items-end border-t border-[var(--glass-border)]">
                  <div className="flex flex-col font-mono text-[var(--text-long-read)]">
                    <span className="text-xl font-bold tracking-wider">Bhone Santi</span>
                    <span className="text-xs opacity-60">Research & Tech</span>
                  </div>
                  
                  <div className="flex flex-col items-end opacity-70 text-[var(--text-long-read)]">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] cursor-pointer transition-all hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="w-4 h-4 text-current">
                        <path d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center opacity-60 content-reveal p-10 rounded-3xl">
              <p className="font-note-text text-xl text-[var(--text-long-read)]">
                အကြောင်းအရာများကို ဖတ်ရှုရန် ဘယ်ဘက်မှ ခေါင်းစဉ်များကို နှိပ်ပါ။
              </p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
