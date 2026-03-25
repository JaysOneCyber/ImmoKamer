import React from 'react';
import { Link } from 'react-router-dom';

const Paiements = () => {
  return (
    <>
      <main className="flex-1 overflow-y-auto p-8">

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">Paiements</h2>
            <p className="text-slate-400 mt-1">Suivi de tous les loyers encaissés et en attente</p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/20 flex items-center gap-2 transition-all">
            <span className="material-icons">add</span>
            Enregistrer un paiement
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-card-dark p-6 rounded-2xl border border-white/5 ">
            <div className="flex justify-between items-center mb-4">
              <p className="text-slate-400 font-medium">Total encaissé</p>
              <span className="material-icons text-success">account_balance_wallet</span>
            </div>
            <div>
              <p className="text-2xl font-black text-success">485 000 FCFA</p>
              <p className="text-xs text-slate-500 mt-1">Juillet 2025</p>
            </div>
          </div>
          <div className="bg-card-dark p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-center mb-4">
              <p className="text-slate-400 font-medium">En attente</p>
              <span className="material-icons text-accent">schedule</span>
            </div>
            <div>
              <p className="text-2xl font-black text-accent">120 000 FCFA</p>
              <p className="text-xs text-slate-500 mt-1">Échéances proches</p>
            </div>
          </div>
          <div className="bg-card-dark p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-center mb-4">
              <p className="text-slate-400 font-medium">En retard</p>
              <span className="material-icons text-red-500">warning</span>
            </div>
            <div>
              <p className="text-2xl font-black text-red-500">60 000 FCFA</p>
              <p className="text-xs text-slate-500 mt-1">3 locataires concernés</p>
            </div>
          </div>
          <div className="bg-card-dark p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-center mb-4">
              <p className="text-slate-400 font-medium">Taux de recouvrement</p>
              <span className="material-icons text-primary">analytics</span>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-white">80%</span>
                <span className="text-slate-500">Objectif: 95%</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full">
                <div className="bg-primary h-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-card-dark p-6 rounded-2xl border border-white/5 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">

            <div className="relative w-full lg:w-96">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
              <input className="w-full bg-background-dark border-white/5 text-white rounded-xl pl-10 focus:ring-primary focus:border-primary" placeholder="Recherche par nom ou chambre..." type="text" />
            </div>

            <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
              <select className="bg-background-dark border-white/5 text-slate-300 rounded-xl focus:ring-primary focus:border-primary pr-10">
                <option>Tous les immeubles</option>
                <option>Résidence Mballa</option>
                <option>Immeuble Talla</option>
              </select>
              <select className="bg-background-dark border-white/5 text-slate-300 rounded-xl focus:ring-primary focus:border-primary pr-10">
                <option>Juillet 2025</option>
                <option>Juin 2025</option>
              </select>
            </div>

            <div className="flex bg-background-dark p-1 rounded-xl border border-white/5 ml-auto">
              <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-primary text-white">Tous</button>
              <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">Payé</button>
              <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">En attente</button>
              <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-400 hover:text-white">En retard</button>
            </div>
          </div>
        </div>

        <div className="bg-card-dark rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5/50 border-b border-white/5">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Chambre</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Locataire</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Immeuble</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Loyer</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Payé</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Mode / Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Statut</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">

                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-bold text-white">3B</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white">BN</div>
                      <span className="text-sm font-medium">Benoît Nkomo</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">Résidence Mballa</td>
                  <td className="px-6 py-4 text-sm font-semibold">75 000 FCFA</td>
                  <td className="px-6 py-4 text-sm font-bold text-success">75 000 FCFA</td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-400">MTN MoMo</div>
                    <div className="text-[10px] text-slate-500 italic">02/07/2025</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold bg-success/20 text-success border border-success/30">PAYÉ</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-primary/20 text-primary rounded-xl transition-all" title="Télécharger reçu">
                      <span className="material-icons">receipt_long</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-bold text-white">1A</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white">AF</div>
                      <span className="text-sm font-medium">Aminata Fofana</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">Résidence Mballa</td>
                  <td className="px-6 py-4 text-sm font-semibold">55 000 FCFA</td>
                  <td className="px-6 py-4 text-sm font-bold text-success">55 000 FCFA</td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-400">Orange Money</div>
                    <div className="text-[10px] text-slate-500 italic">01/07/2025</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold bg-success/20 text-success border border-success/30">PAYÉ</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-primary/20 text-primary rounded-xl transition-all" title="Télécharger reçu">
                      <span className="material-icons">receipt_long</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-bold text-white">2C</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white">PE</div>
                      <span className="text-sm font-medium">Paul Essomba</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">Immeuble Talla</td>
                  <td className="px-6 py-4 text-sm font-semibold">60 000 FCFA</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-500">0 FCFA</td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-500">—</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold bg-red-500/20 text-red-500 border border-red-500/30">EN RETARD</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-accent/20 text-accent rounded-xl transition-all" title="Envoyer rappel">
                      <span className="material-icons">mail</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-bold text-white">4D</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white">MB</div>
                      <span className="text-sm font-medium">Marie Beti</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">Résidence Mballa</td>
                  <td className="px-6 py-4 text-sm font-semibold">85 000 FCFA</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-500">0 FCFA</td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-500">—</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold bg-accent/20 text-accent border border-accent/30">EN ATTENTE</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-accent/20 text-accent rounded-xl transition-all" title="Envoyer rappel">
                      <span className="material-icons">mail</span>
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-bold text-white">5A</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white">CM</div>
                      <span className="text-sm font-medium">Christelle Mbe</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">Immeuble Talla</td>
                  <td className="px-6 py-4 text-sm font-semibold">70 000 FCFA</td>
                  <td className="px-6 py-4 text-sm font-bold text-success">70 000 FCFA</td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-400">MTN MoMo</div>
                    <div className="text-[10px] text-slate-500 italic">03/07/2025</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold bg-success/20 text-success border border-success/30">PAYÉ</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-primary/20 text-primary rounded-xl transition-all" title="Télécharger reçu">
                      <span className="material-icons">receipt_long</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-white/5/30 flex items-center justify-between">
            <p className="text-xs text-slate-500">Affichage de 5 paiements sur 42 au total</p>
            <div className="flex gap-2">
              <button className="p-2 rounded-xl bg-background-dark border border-white/5 text-slate-400 hover:text-white"><span className="material-icons text-sm">chevron_left</span></button>
              <button className="p-2 rounded-xl bg-background-dark border border-white/5 text-slate-400 hover:text-white"><span className="material-icons text-sm">chevron_right</span></button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Paiements;
