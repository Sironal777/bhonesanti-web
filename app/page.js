// bhonesanti-web/app/page.js
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('MM');
  const [activeSection, setActiveSection] = useState(null); // အလယ်တွင်ပေါ်မည့် အချက်အလက်ကို ထိန်းချုပ်ရန်

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // ကဏ္ဍခေါင်းစဉ်များနှင့် အချက်အလက်များ (Data Array)
  const sections = [
    {
      id: 1,
      title: '၁။ ဘုန်းသန္တိ၏ စာအုပ်များ',
      content: 'ပါဠိ၊ သက္ကတ၊ ရှမ်း ဘာသာစကားဆိုင်ရာ အဆင့်မြင့်သင်ထောက်ကူ စာအုပ်များ၊ Sīvali သုတေသနဆိုင်ရာ လက်ရာများကို ဖတ်ရှုလေ့လာနိုင်ပါသည်။'
    },
    {
      id: 2,
      title: '၂။ ဘုန်းသန္တိအကြောင်း',
      content: 'Library and Information Management နယ်ပယ်ကို လေ့လာနေပြီး၊ Happy Libraries စနစ်များကို Python နှင့် Local AI နည်းပညာများပေါင်းစပ်ကာ တည်ဆောက်နေသူဖြစ်ပါသည်။'
    },
    {
      id: 3,
      title: '၃။ စာအုပ်ဒေါင်းလုဒ်လင့်များ',
      content: 'Searchable PDF များနှင့် သုတေသနပြုစုထားသော စာအုပ်ဖိုင်များကို တိုက်ရိုက်ဒေါင်းလုဒ် ရယူနိုင်ပါသည်။ (စီးပွားရေးအရ တဆင့်ပြန်လည်ရောင်းချခြင်း လုံးဝ မပြုလုပ်ရ။)'
    },
    {
      id: 4,
      title: '၄။ အောင်စာရင်းများ',
      content: 'ဘာသာရေးနှင့် သာသနာဆိုင်ရာ စာမေးပွဲ အောင်စာရင်းများကို အလွယ်တကူ ရှာဖွေကြည့်ရှုနိုင်မည့် ဒစ်ဂျစ်တယ် မှတ်တမ်းစနစ်။'
    },
    {
      id: 5,
      title: '၅။ သမိုင်းမှတ်တမ်းများ',
      content: 'မြန်မာနိုင်ငံ၏ သာသနာရေးဆိုင်ရာ ပညာရေးသမိုင်းကြောင်းများ၊ မှတ်တမ်းဟောင်းများနှင့် ခေတ်မီ ဒစ်ဂျစ်တယ်စနစ်ဖြင့် ထိန်းသိမ်းထားသော ရှားပါးစာတမ်းများကို လေ့လာနိုင်ရန် စုစည်းတင်ပြထားပါသည်။'
    }
  ];

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* နှေးကွေးစွာ ရွေ့လျားနေသော နောက်ခံ ဒစ်ဂျစ်တယ်လှိုင်းများ */}
      <div className="digital-wave-bg"></div>

      {/* အပေါ်ညာဘက်ထောင့်မှ Control Panel */}
      <div className="absolute top-6 right-6 md:right-12 z-50 flex items-center space-x-4 ios-glass-card p-3 rounded-full shadow-lg">
        <div className="flex gap-2 font-note-text text-sm">
          <button onClick={() => setLang('MM')} className={`px-4 py-1.5 rounded-full transition-all duration-500 ${lang === 'MM' ? 'bg-blue-500/20' : 'hover:bg-gray-500/10'}`}>MM</button>
          <button onClick={() => setLang('EN')} className={`px-4 py-1.5 rounded-full transition-all duration-500 ${lang === 'EN' ? 'bg-blue-500/20' : 'hover:bg-gray-500/10'}`}>EN</button>
        </div>
        <div className="w-px h-6 bg-[var(--glass-border)]"></div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="font-note-text px-4 py-1.5 rounded-full text-sm transition-all duration-500 hover:bg-gray-500/10">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      {/* Main Responsive Container (မြင်ကွင်းကို ဘောင်ခတ်ထားခြင်း) */}
      <main className="relative z-10 w-full max-w-6xl h-[85vh] flex flex-col md:flex-row gap-8 p-6 md:p-10">
        
        {/* ဘယ်ဘက်ခြမ်း (Left Sidebar - ခေါင်းစဉ်များ) */}
        <div className="w-full md:w-1/3 h-full flex flex-col justify-center space-y-10">
          <div className="text-left">
            <h1 className="font-main-title text-5xl lg:text-6xl tracking-tight">
              Bhone Santi
            </h1>
            <p className="font-note-text text-lg mt-2 opacity-80">
              {lang === 'MM' ? 'သာသနာဆိုင်ရာနှင့် နည်းပညာ သုတေသန ဗဟိုဌာန' : 'Religious & Technological Research Hub'}
            </p>
          </div>

          <div className="flex flex-col space-y-5">
            {sections.map((sec) => (
              <h2 
                key={sec.id}
                onClick={() => setActiveSection(sec)}
                className={`font-sub-title text-xl lg:text-2xl title-button ${activeSection?.id === sec.id ? 'opacity-100 translate-x-3' : 'opacity-60'}`}
              >
                {sec.title}
              </h2>
            ))}
          </div>
        </div>

        {/* ညာဘက်/အလယ်ဗဟို (Center Focus - အချက်အလက်ပြသရန်) */}
        <div className="w-full md:w-2/3 h-full flex items-center justify-center relative">
          {activeSection ? (
            // ခေါင်းစဉ်နှိပ်လိုက်ပါက ပေါ်လာမည့် ဖန်သားပြင်ကတ်ပြား (Smooth Animation)
            <div key={activeSection.id} className="ios-glass-card p-10 md:p-12 rounded-[2.5rem] w-full max-w-2xl content-reveal text-center relative overflow-hidden">
              {/* နောက်ခံ အရောင်လဲ့လဲ့လေးများ ထည့်သွင်းထားခြင်း */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
              
              <h3 className="font-sub-title text-3xl font-bold mb-6 relative z-10">{activeSection.title}</h3>
              <p className="font-long-read text-lg leading-loose relative z-10 opacity-90">
                {activeSection.content}
              </p>
            </div>
          ) : (
            // ဘာမှမနှိပ်ရသေးခင် မြင်ရမည့်စာသား
            <div className="text-center opacity-50 content-reveal">
              <p className="font-note-text text-xl">
                အကြောင်းအရာများကို ဖတ်ရှုရန် ဘယ်ဘက်မှ ခေါင်းစဉ်များကို နှိပ်ပါ။
              </p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
