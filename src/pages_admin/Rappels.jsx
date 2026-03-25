import React from 'react';
import { Link } from 'react-router-dom';

const Rappels = () => {
  return (
    <>

      <main className="flex-1 p-8 pb-12">

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Rappels &amp; Notifications</h2>
            <p className="text-slate-400 mt-1">Automatisez vos relances de loyer par SMS et WhatsApp au Cameroun.</p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span className="material-icons">send</span>
            Envoyer rappels groupés
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card-dark p-6 rounded-2xl border border-white/5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 text-sm font-medium">Rappels envoyés</span>
              <span className="material-icons text-slate-500">campaign</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">14</span>
              <span className="text-xs text-slate-500">ce mois</span>
            </div>
          </div>
          <div className="bg-card-dark p-6 rounded-2xl border border-white/5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 text-sm font-medium">Paiements reçus</span>
              <span className="material-icons text-success">check_circle</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-success">9</span>
              <span className="text-xs text-slate-500">après rappel</span>
            </div>
          </div>
          <div className="bg-card-dark p-6 rounded-2xl border border-white/5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 text-sm font-medium">Sans réponse</span>
              <span className="material-icons text-red-500">error</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-red-500">3</span>
              <span className="text-xs text-slate-500">relances urgentes</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

          <section className="lg:col-span-1 bg-card-dark rounded-2xl border border-white/5 overflow-hidden h-fit">
            <div className="p-5 border-b border-white/5 flex items-center justify-between">
              <h3 className="font-bold flex items-center gap-2">
                <span className="material-icons text-accent">auto_mode</span>
                Rappels automatiques
              </h3>
            </div>
            <div className="p-5 space-y-6">
              <div className="flex items-center justify-between group">
                <div>
                  <p className="text-sm font-bold">Règle J-3 (Pré-rappel)</p>
                  <a className="text-xs text-primary hover:underline" href="#">Modifier le message</a>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input checked="" className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between group">
                <div>
                  <p className="text-sm font-bold">Règle J+1 (Relance douce)</p>
                  <a className="text-xs text-primary hover:underline" href="#">Modifier le message</a>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input checked="" className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between group">
                <div>
                  <p className="text-sm font-bold">Règle J+7 (Relance ferme)</p>
                  <a className="text-xs text-primary hover:underline" href="#">Modifier le message</a>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input checked="" className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </section>

          <section className="lg:col-span-2 bg-card-dark rounded-2xl border border-white/5 overflow-hidden">
            <div className="p-5 border-b border-white/5 flex items-center justify-between">
              <h3 className="font-bold flex items-center gap-2">
                <span className="material-icons text-primary">person_alert</span>
                Envoyer un rappel manuel
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-semibold mb-3 text-slate-300">Sélectionner les locataires en retard</p>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 bg-white/5/50 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
                      <input checked="" className="rounded border-white/5 text-primary focus:ring-primary bg-background-dark" type="checkbox" />
                      <div className="flex-1">
                        <p className="text-sm font-bold">Paul Essomba</p>
                        <p className="text-xs text-slate-400">Bastos, Studio A2 • 150 000 FCFA</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-white/5/50 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
                      <input className="rounded border-white/5 text-primary focus:ring-primary bg-background-dark" type="checkbox" />
                      <div className="flex-1">
                        <p className="text-sm font-bold">Marie Beti</p>
                        <p className="text-xs text-slate-400">Bonapriso, Appt 4 • 275 000 FCFA</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-white/5/50 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
                      <input className="rounded border-white/5 text-primary focus:ring-primary bg-background-dark" type="checkbox" />
                      <div className="flex-1">
                        <p className="text-sm font-bold">Serge Kamga</p>
                        <p className="text-xs text-slate-400">Akwa, Bureau 12 • 400 000 FCFA</p>
                      </div>
                    </label>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-3 text-slate-300">Canal de communication</p>
                    <div className="flex gap-4">
                      <button className="flex-1 flex flex-col items-center gap-2 p-3 rounded-2xl border-2 border-primary bg-primary/10 transition-all">
                        <span className="material-icons text-primary">sms</span>
                        <span className="text-xs font-bold">SMS Orange/MTN</span>
                      </button>
                      <button className="flex-1 flex flex-col items-center gap-2 p-3 rounded-2xl border-2 border-white/5 hover:border-success/50 transition-all">
                        <span className="material-icons text-success">chat</span>
                        <span className="text-xs font-bold">WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold mb-3 text-slate-300">Aperçu du message (Éditable)</p>
                  <div className="flex-1 bg-background-dark rounded-2xl p-4 font-mono text-sm border border-white/5 text-slate-300 min-h-[180px] focus-within:border-primary/50">
                    <p className="outline-none" contenteditable="true">Bonjour [Nom], nous n'avons pas encore reçu votre loyer de 150 000 FCFA pour ce mois. Merci de régulariser par Orange Money ou MTN Mobile Money dès que possible. Cordialement, immoKamer.</p>
                  </div>
                  <button className="mt-6 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-2xl shadow-lg transition-transform active:scale-95">
                    Envoyer maintenant
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-card-dark rounded-2xl border border-white/5 overflow-hidden shadow-sm">
          <div className="p-5 border-b border-white/5">
            <h3 className="font-bold flex items-center gap-2">
              <span className="material-icons text-slate-400">history</span>
              Historique récent
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white/5/30 text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Locataire</th>
                  <th className="px-6 py-4 font-semibold">Chambre</th>
                  <th className="px-6 py-4 font-semibold">Canal</th>
                  <th className="px-6 py-4 font-semibold">Message</th>
                  <th className="px-6 py-4 font-semibold text-right">Résultat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-white/5/20 transition-colors">
                  <td className="px-6 py-4 text-sm">12 Mai, 09:45</td>
                  <td className="px-6 py-4 text-sm font-bold">Aminata Fofana</td>
                  <td className="px-6 py-4 text-xs">MESSA - Appt B3</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <span className="material-icons text-xs">sms</span> SMS
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400 max-w-[200px] truncate italic">"Rappel de loyer..."</td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-success text-xs font-bold flex items-center justify-end gap-1">
                      <span className="material-icons text-xs">done_all</span> Délivré
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5/20 transition-colors">
                  <td className="px-6 py-4 text-sm">11 Mai, 14:20</td>
                  <td className="px-6 py-4 text-sm font-bold">Paul Essomba</td>
                  <td className="px-6 py-4 text-xs">BASTOS - Studio A2</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-success/10 text-success text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <span className="material-icons text-xs">chat</span> WHATSAPP
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400 max-w-[200px] truncate italic">"Bonjour Paul, votre loyer..."</td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-slate-400 text-xs font-bold flex items-center justify-end gap-1">
                      <span className="material-icons text-xs">done</span> Lu
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5/20 transition-colors">
                  <td className="px-6 py-4 text-sm">11 Mai, 08:15</td>
                  <td className="px-6 py-4 text-sm font-bold">Marie Beti</td>
                  <td className="px-6 py-4 text-xs">BONAPRISO - Appt 4</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <span className="material-icons text-xs">sms</span> SMS
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400 max-w-[200px] truncate italic">"Dernier rappel avant..."</td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-red-500 text-xs font-bold flex items-center justify-end gap-1">
                      <span className="material-icons text-xs">error</span> Échec envoi
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default Rappels;
