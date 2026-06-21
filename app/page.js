// bhonesanti-web/app/page.js
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('dark'); // Ticket စတိုင်သည် Dark တွင် ပိုမိုက်သဖြင့် Dark ကို default ထားသည်
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
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* ရှင်းလင်းပြတ်သားသော Aurora Glow */}
      <div className="premium-aurora-bg"></div>

      {/* Control Panel */}
      <div className="absolute top-6 right-6 md:right-12 z-50 flex items-center space-x-4 bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] p-2 rounded-full shadow-sm">
        <div className="flex gap-2 text-sm">
          <button onClick={() => setLang('MM')} className={`px-4 py-1.5 rounded-full font-bold transition-all ${lang === 'MM' ? 'bg-blue-600 text-white' : 'hover:bg-gray-500/20'}`}>MM</button>
          <button onClick={() => setLang('EN')} className={`px-4 py-1.5 rounded-full font-bold transition-all ${lang === 'EN' ? 'bg-blue-600 text-white' : 'hover:bg-gray-500/20'}`}>EN</button>
        </div>
        <div className="w-px h-5 bg-[var(--glass-border)]"></div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="px-4 py-1.5 rounded-full text-sm font-bold transition-all hover:bg-gray-500/20">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <main className="relative z-10 w-full max-w-6xl h-[85vh] flex flex-col md:flex-row gap-10 p-6 md:p-10">
        
        {/* Left Side: Sleek Menu */}
        <div className="w-full md:w-[35%] h-full flex flex-col justify-center space-y-8">
          <div className="text-left mb-4">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-2">
              Bhone Santi
            </h1>
            <p className="text-lg mt-2 opacity-70">
              {lang === 'MM' ? 'သာသနာဆိုင်ရာနှင့် နည်းပညာ သုတေသန ဗဟိုဌာန' : 'Religious & Technological Research Hub'}
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            {sections.map((sec) => (
              <button 
                key={sec.id}
                onClick={() => setActiveSection(sec)}
                className={`sleek-menu-btn ${activeSection?.id === sec.id ? 'active-btn' : ''}`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Uiverse 3D Ticket */}
        <div className="w-full md:w-[65%] h-full flex items-center justify-center relative">
          {activeSection ? (
            <div className="ticket-wrapper">
              <div className="ticket">
                
                {/* Ticket Main Content */}
                <div className="t-main">
                  <div className="t-content">
                    <div className="t-header">
                      <div className="t-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l7.5 13.5h-15L12 6.5z"/></svg>
                        B.SANTI
                      </div>
                      <div className="t-type">{activeSection.type}</div>
                    </div>
                    
                    <h2 className="t-title">{activeSection.title}</h2>
                    <p className="t-subtitle">{activeSection.content}</p>
                  </div>
                </div>

                {/* Perforation Line */}
                <div className="t-perforation">
                  <div className="t-perf-line"></div>
                </div>

                {/* Ticket Stub (Bottom Part) */}
                <div className="t-stub">
                  <div className="t-barcode-container">
                    <div className="t-barcode"></div>
                    <div className="t-barcode-id">UID-BS-{activeSection.id}-2026</div>
                  </div>
                  <div className="t-admit">
                    <div className="t-admit-text">ACCESS CODE</div>
                    <div className="t-admit-num">{activeSection.id}</div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <div className="text-center opacity-40 p-10">
              <p className="text-xl">
                အကြောင်းအရာများကို ဖတ်ရှုရန် ဘယ်ဘက်မှ ခေါင်းစဉ်များကို နှိပ်ပါ။
              </p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
