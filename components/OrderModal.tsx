'use client';

import { useState } from 'react';
import { X, ShoppingBag, Truck } from 'lucide-react';

type OrderOption = { name: string; fee: string; time: string; url: string; color: string };

const pickupOptions: OrderOption[] = [
  { name: 'DoorDash',                   fee: 'No fee',  time: '~21 min', url: 'https://www.doordash.com/store/sabor-restaurant-college-point-674715/?utm_campaign=gpa&pickup=true&rwg_token=AFd1xnEf7vo2VBR9LwVmld9H02bxN-uI-8mgOmves0tGEIZyym9AkmAjAiVNotOqMH4sMHclnvyt5yR5Dby8i0MkCYYQfAUyow%3D%3D', color: '#FF3008' },
  { name: 'Online Ordering (DoorDash)', fee: 'No fee',  time: '~18 min', url: 'https://order.online/store/-674715/?pickup=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnFFlLdjnxAir_hWkf-zjDefrGglt2LTHdDNoD3a0zNs8dhhV0BaRh3pneu41Ic5f1-GioZDGHsiSQaKrhugwzBA9fKxcw%3D%3D', color: '#FF3008' },
  { name: 'Seamless',                   fee: 'No fee',  time: '~20 min', url: 'https://www.seamless.com/menu/sabor-restaurant-and-bakery-1520-college-point-blvd-college-point/6792192?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnFnzqqxseGUDpAsxo2OIMDq7fmK4eDyUrW5YU8TkemSwh8ikuYpz8iw24mr6ITfGqDyMfDKGzplAhItsSe_jeeGbepi9g%3D%3D', color: '#E8212A' },
  { name: 'Grubhub',                    fee: 'No fee',  time: '~20 min', url: 'https://www.grubhub.com/restaurant/sabor-restaurant-and-bakery-1520-college-point-blvd-college-point/6792192?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AFd1xnFtk6FaJiXLYS4f9HlmNqS1E-KYQqrD2kTY6rM6tLxYTcm7Se0ZV7et_9M8zDgXFWqbp8uXqo8zPU332tcpZjD9wBF79g%3D%3D', color: '#F63440' },
  { name: 'Uber Eats',                  fee: 'No fee',  time: '~7–22 min', url: 'https://www.ubereats.com/store/sabor-restaurant-%26-bakery/HciYEGuxSLiRfUWlSjoC3g?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnHxsEIbHVVn7Vo0hknaAPKT_Tin9yv7a_q3f3X57_dCiGJVp1kv70AkJ2bR50hi8kR1YmXDPcu4jVMVpuKT-_Xf39Tdqw%3D%3D', color: '#06C167' },
  { name: 'Postmates',                  fee: 'No fee',  time: '~7–22 min', url: 'https://www.postmates.com/store/sabor-restaurant-%26-bakery/HciYEGuxSLiRfUWlSjoC3g?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnEoejqF3JZShL_PoVoAuu0CsAh6-fPZ-Fe6eDUZk4Rpyp6Rk_Yq6WtbBYI0oerT1s2J68DgXwhawiroN1452zaparXTqw%3D%3D', color: '#000000' },
  { name: 'ActiveMenus',                fee: '',        time: '~20 min', url: 'https://order.com/glue/express/8237?pickup=true&utm_source=google&rwg_token=AFd1xnEKd4uQwh4cF6iaVH1x_wTNIuzq2e-GoWGoq8vvGvevH6_LCc62mFIWRNZtOLROZmjfNekt-RTF8ORnhEn1TFx_f1cZNg%3D%3D', color: '#1A56DB' },
  { name: 'Clover Online Ordering',     fee: '',        time: '~20 min', url: 'https://www.clover.com/online-ordering/PTJCN28DAYB21?slug=false&utm_source=owg', color: '#1DA462' },
  { name: 'Allset',                     fee: '',        time: '~20–24 min', url: 'https://allsetnow.com/restaurant/sabor-restaurant-and-bakery-3827/?refer=google-map', color: '#6B21A8' },
];

const deliveryOptions: OrderOption[] = [
  { name: 'Seamless',                   fee: 'Service fee 5–15% · From $0.50', time: '~25 min',    url: 'https://www.seamless.com/menu/sabor-restaurant-and-bakery-1520-college-point-blvd-college-point/6792192?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AFd1xnF426mjAU1O3yFw8D_RAofvzsII8i7g-TfPBsgY4P0ZkP2nhmloX87EV3_mggGy2Z41meRLGCXVYKwoM9jeE0ifAzimew%3D%3D', color: '#E8212A' },
  { name: 'DoorDash',                   fee: 'Service fee 15% · Delivery fee may apply', time: '~48 min', url: 'https://www.doordash.com/store/sabor-restaurant-college-point-674715/?utm_campaign=gpa&rwg_token=AFd1xnHAWxDstIZBmZUlyGLq2BZBS3gqZM9mPgki30fNCUNsavHyksYlfTX7s9bYfJU7ldiXXqYxRI2qZyUC8osRRwki4JuAAQ%3D%3D', color: '#FF3008' },
  { name: 'Online Ordering (DoorDash)', fee: 'Service fee 10% · Delivery fee $2.99', time: '~39 min', url: 'https://order.online/store/-674715/?delivery=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnGNn8l5NzIFEQokzXaCvHHCh3S5TDzGhPIlDG3B6yYaG0tyvYhwP8VzfYVqjOu-5i6ozIu6ZuW4SJ7OTxA6-zopjGZKWA%3D%3D', color: '#FF3008' },
  { name: 'Grubhub',                    fee: 'Service fee 5–15% · From $0.50', time: '~25 min',    url: 'https://www.grubhub.com/restaurant/sabor-restaurant-and-bakery-1520-college-point-blvd-college-point/6792192?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AFd1xnGZLlieWr88Qg-_GroAS_17ODr3cX3JUzI9X8GmJiAo3koJEzGdpLCKyPEI4pSsyqLuFsg4Dk6AuCHGr4HvWQ9_Vgc7yQ%3D%3D', color: '#F63440' },
  { name: 'Uber Eats',                  fee: 'Service fee 5–15% · From $0.50', time: '~25–40 min', url: 'https://www.ubereats.com/store/sabor-restaurant-%26-bakery/HciYEGuxSLiRfUWlSjoC3g?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnHZWs57HtnA4RogO2KA5fkT2bEUBhERtiwF0VpAPPIdDMpn6BAG2RwoA4gWJr4aCrxe-GkVYSEgmcVMe6AvtOE80qroQg%3D%3D', color: '#06C167' },
  { name: 'Postmates',                  fee: 'Service fee 5–15% · From $0.50', time: '~25–40 min', url: 'https://www.postmates.com/store/sabor-restaurant-%26-bakery/HciYEGuxSLiRfUWlSjoC3g?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnGaEB35evvYhfmSg-pZpjHLT_IVT5Nx4rCWszoH834K0tQiojSOe0ycN6ZUisEnuoVCp-0Y6V1d1wgFPj4bA2xGZOyqqg%3D%3D', color: '#000000' },
  { name: 'ActiveMenus',                fee: 'Fees may apply', time: '~30–45 min',                 url: 'https://order.com/glue/express/8237?delivery=true&utm_source=google&rwg_token=AFd1xnFPN9Y_DlL3IG55nAIhO2FcKjS22Ck7quuSfcDAPt-Erbcgx4Gt1e2h4dFdacuZ8foxUmzOb95wdPmUMqsDA5j-ZowI0g%3D%3D', color: '#1A56DB' },
];

export default function OrderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<'pickup' | 'delivery'>('pickup');

  if (!isOpen) return null;

  const options = mode === 'pickup' ? pickupOptions : deliveryOptions;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative bg-zinc-900 border border-zinc-700 rounded-3xl w-full max-w-md max-h-[85vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-zinc-800 flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <h2 className="text-xl font-black text-white mb-1">Order Now</h2>
          <p className="text-gray-400 text-sm">College Point · 15-20 College Point Blvd</p>

          {/* Pickup / Delivery toggle */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setMode('pickup')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                mode === 'pickup'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-zinc-800 text-gray-400 hover:text-white'
              }`}
            >
              <ShoppingBag size={15} /> Pickup
            </button>
            <button
              onClick={() => setMode('delivery')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                mode === 'delivery'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-zinc-800 text-gray-400 hover:text-white'
              }`}
            >
              <Truck size={15} /> Delivery
            </button>
          </div>
        </div>

        {/* Options list */}
        <div className="overflow-y-auto flex-1 px-4 py-3 space-y-2">
          {options.map((opt) => (
            <a
              key={opt.name}
              href={opt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/40 hover:border-amber-500/50 transition-all group"
            >
              {/* Color dot */}
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-xs font-black" style={{ background: opt.color }}>
                {opt.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight">{opt.name}</p>
                <p className="text-gray-400 text-xs mt-0.5 truncate">{opt.fee || 'See site for fees'}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-amber-400 text-xs font-bold">{opt.time}</p>
                <p className="text-gray-500 text-xs group-hover:text-amber-400 transition mt-0.5">Order →</p>
              </div>
            </a>
          ))}
        </div>

        <div className="px-6 py-3 border-t border-zinc-800 flex-shrink-0 text-center">
          <p className="text-gray-600 text-xs">Pickup & delivery available · College Point only</p>
        </div>
      </div>
    </div>
  );
}
