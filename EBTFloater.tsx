'use client';

export default function EBTFloater() {
  return (
    <div
      className="fixed bottom-6 left-6 z-[999] pointer-events-none select-none"
      style={{ animation: 'ebtBounce 3.5s ease-in-out infinite' }}
    >
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2.5 rounded-2xl shadow-2xl shadow-amber-500/50 flex items-center gap-2 font-bold text-sm border border-amber-400/40">
        <span className="text-base">💳</span>
        <span>EBT Accepted</span>
      </div>
    </div>
  );
}
