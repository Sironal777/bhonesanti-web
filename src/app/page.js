export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
      <div className="text-center py-10">
        <h1 className="font-main-title text-5xl font-bold tracking-wide">
          Bhone Santi - ဘုန်းသန္တိ
        </h1>
        <p className="font-note-text text-lg mt-3">
          သာသနာဆိုင်ရာနှင့် နည်းပညာ သုတေသန ဗဟိုဌာန
        </p>
      </div>

      <div className="ios-glass-card p-6 rounded-2xl">
        <h2 className="font-sub-title text-2xl font-semibold mb-4">
          ၁။ ဘုန်းသန္တိ၏ စာအုပ်များ
        </h2>
        <p className="font-long-read text-base">
          ဤနေရာတွင် ပါဠိ၊ သက္ကတ၊ ရှမ်း စသည့် ဘာသာစကားဆိုင်ရာ အဆင့်မြင့်သင်ထောက်ကူ စာအုပ်များကို လေ့လာနိုင်ပါသည်။
        </p>
      </div>

      <div className="ios-glass-card p-4 rounded-xl border border-red-400/30">
        <p className="font-alert-warn text-sm font-medium">
          သတိပြုရန် - စာအုပ်များနှင့် သုတေသနမှတ်တမ်းများကို ခွင့်ပြုချက်မရှိဘဲ တဆင့်ပြန်လည်ဖြန့်ဝေခြင်းမပြုရန်။
        </p>
      </div>
    </main>
  );
}