// bhonesanti-web/app/page.js
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('MM');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      {/* အော်တိုရွေ့လျားနေသော ဒစ်ဂျစ်တယ်လှိုင်းနောက်ခံစနစ် */}
      <div className="digital-wave-bg"></div>

      <main className="relative z-10 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto space-y-10">
        
        {/* ကွန်ထရိုးပန်နယ် (ဖန်သားစတိုင်စစ်စစ်) */}
        <div className="ios-glass-card p-4 rounded-3xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 shadow-lg sticky top-6 z-50">
          <div className="flex flex-wrap gap-2 font-note-text text-sm">
            <button onClick={() => setLang('MM')} className={`px-4 py-2 rounded-full transition-all ${lang === 'MM' ? 'bg-blue-500/20 shadow-inner' : 'hover:bg-gray-500/10'}`}>မြန်မာ</button>
            <button onClick={() => setLang('EN')} className={`px-4 py-2 rounded-full transition-all ${lang === 'EN' ? 'bg-blue-500/20 shadow-inner' : 'hover:bg-gray-500/10'}`}>English</button>
            <button onClick={() => setLang('CN')} className={`px-4 py-2 rounded-full transition-all ${lang === 'CN' ? 'bg-blue-500/20 shadow-inner' : 'hover:bg-gray-500/10'}`}>中文</button>
          </div>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="ios-glass-card font-note-text px-5 py-2 rounded-full text-xs">
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>

        {/* ဟေဒါကဏ္ဍ (လှပသော ရွှေရောင်စာလုံးကြီး - အပြတ်အသားမရှိတော့ပါ) */}
        <div className="text-center py-10">
          <h1 className="font-main-title text-5xl md:text-7xl">
            Bhone Santi - ဘုန်းသန္တိ
          </h1>
          <p className="font-note-text text-lg mt-2 opacity-80 max-w-xl mx-auto">
            {lang === 'MM' ? 'သာသနာဆိုင်ရာနှင့် နည်းပညာ သုတေသန ဗဟိုဌာန' : 'Religious & Technological Research Hub'}
          </p>
        </div>

        {/* စာမျက်နှာအော်တိုဗျူး ကတ်ပြားများကဏ္ဍ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pb-10">
          
          <div className="ios-glass-card p-8 rounded-3xl">
            <h2 className="font-sub-title text-2xl font-bold mb-4">၁။ ဘုန်းသန္တိ၏ စာအုပ်များ</h2>
            <p className="font-long-read text-base leading-relaxed">
              ပါဠိ၊ သက္ကတ၊ ရှမ်း ဘာသာစကားဆိုင်ရာ အဆင့်မြင့်သင်ထောက်ကူ စာအုပ်များ၊ Sīvali သုတေသနဆိုင်ရာ လက်ရာများကို ဖတ်ရှုလေ့လာနိုင်ပါသည်။
            </p>
          </div>

          <div className="ios-glass-card p-8 rounded-3xl">
            <h2 className="font-sub-title text-2xl font-bold mb-4">၂။ ဘုန်းသန္တိအကြောင်း</h2>
            <p className="font-long-read text-base leading-relaxed">
              Library and Information Management နယ်ပယ်ကို လေ့လာနေပြီး၊ Happy Libraries စနစ်များကို Python နှင့် Local AI နည်းပညာများပေါင်းစပ်ကာ တည်ဆောက်နေသူဖြစ်ပါသည်။
            </p>
          </div>

          <div className="ios-glass-card p-8 rounded-3xl md:col-span-2">
            <h2 className="font-sub-title text-2xl font-bold mb-4">၃။ စာအုပ်ဒေါင်းလုဒ်လင့်များ</h2>
            <p className="font-long-read text-base leading-relaxed">
              Searchable PDF များနှင့် သုတေသနပြုစုထားသော စာအုပ်ဖိုင်များကို တိုက်ရိုက်ဒေါင်းလုဒ် ရယူနိုင်ပါသည်။
            </p>
          </div>

          <div className="ios-glass-card p-8 rounded-3xl">
            <h2 className="font-sub-title text-2xl font-bold mb-4">၄။ အောင်စာရင်းများ</h2>
            <p className="font-long-read text-base leading-relaxed">
              ဘာသာရေးနှင့် သာသနာဆိုင်ရာ စာမေးပွဲ အောင်စာရင်းများကို အလွယ်တကူ ရှာဖွေကြည့်ရှုနိုင်မည့် ဒစ်ဂျစ်တယ် မှတ်တမ်းစနစ်။
            </p>
          </div>

          <div className="ios-glass-card p-8 rounded-3xl md:col-span-2">
            <h2 className="font-sub-title text-2xl font-bold mb-4">၅။ သာသနာဆိုင်ရာ ပညာရေးစသော သမိုင်းမှတ်တမ်းများ</h2>
            <p className="font-long-read text-base leading-relaxed">
              မြန်မာနိုင်ငံ၏ သာသနာရေးဆိုင်ရာ ပညာရေးသမိုင်းကြောင်းများ၊ မှတ်တမ်းဟောင်းများနှင့် ခေတ်မီ ဒစ်ဂျစ်တယ်စနစ်ဖြင့် ထိန်းသိမ်းထားသော ရှားပါးစာတမ်းများကို လေ့လာနိုင်ရန် စုစည်းတင်ပြထားပါသည်။
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}