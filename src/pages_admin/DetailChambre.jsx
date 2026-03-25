import React from 'react';
import { Link } from 'react-router-dom';

const DetailChambre = () => {
  return (
    <>
      <main className="flex flex-1 justify-center py-6 px-4 md:px-0">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

          <nav className="flex flex-wrap gap-2 px-4 py-2 text-sm mb-4">
            <a className="text-primary font-medium hover:underline" href="#">Immeubles</a>
            <span className="text-slate-400">/</span>
            <a className="text-primary font-medium hover:underline" href="#">Résidence du Lac</a>
            <span className="text-slate-400">/</span>
            <span className="text-white font-bold">Chambre 204</span>
          </nav>

          <div className="bg-card-dark rounded-2xl p-6 shadow-sm border border-primary/5 @container mb-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex gap-6 items-center">
                <div className="bg-primary/10 rounded-2xl min-h-24 w-24 flex items-center justify-center overflow-hidden border border-primary/20">
                  <img className="w-full h-full object-cover" data-alt="Modern furnished room interior view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxkaCUlU83KJ0-60B0fJzBfe7WFIS6E6sTax5QhRx2u-5G2fm5YY9TjE7uBIUC5piCj4G1hF7S977LAmaFjajGH53kIvoF54A0b6SHqL7FyueKctZJjfD5ytoR3a6gVTnnVz4BfSBfS_mbMrutUxjtehnnf7W0wyy27J7OsmadXID0ne5nDBwQ0ZLrShfGO1JPOGxk9Hiri8594C8xZerci6wXC5rqhe40AJs_IVPKqe1Sh97DBY8yB1f5TQ22B8ACD72zgpKD8jo" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-2xl font-extrabold tracking-tight">Chambre 204 - 2ème étage</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="material-icons text-primary text-sm">person</span>
                    <p className="text-slate-400 text-base">Locataire : <span className="font-semibold">M. Etoa Jean</span></p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="size-2 rounded-full bg-accent animate-pulse"></div>
                    <p className="text-slate-500 text-sm">Contrat actif • Entrée le 12 Janv 2023</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                <button className="flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-primary text-white text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20 flex-1 md:flex-none">
                  <span className="material-icons">send</span>
                  <span>Envoyer un rappel</span>
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-accent text-white text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/20 flex-1 md:flex-none">
                  <span className="material-icons">payments</span>
                  <span>Enregistrer paiement</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-0 mb-8">
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-card-dark border border-primary/10 shadow-sm">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Loyer Mensuel</p>
              <div className="flex items-baseline gap-1">
                <p className="text-white text-2xl font-extrabold tracking-tight">75,000</p>
                <p className="text-slate-500 text-sm font-bold">FCFA</p>
              </div>
              <div className="flex items-center gap-1 text-accent text-sm font-bold">
                <span className="material-icons text-sm">trending_flat</span>
                <span>Stable</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-card-dark border border-primary/10 shadow-sm">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Solde Actuel</p>
              <div className="flex items-baseline gap-1">
                <p className="text-white text-2xl font-extrabold tracking-tight">0</p>
                <p className="text-slate-500 text-sm font-bold">FCFA</p>
              </div>
              <div className="flex items-center gap-1 text-accent text-sm font-bold">
                <span className="material-icons text-sm">check_circle</span>
                <span>À jour</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-primary/5 border border-primary/20 shadow-sm">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Statut du Mois</p>
              <div className="flex items-center gap-3">
                <p className="text-primary text-2xl font-extrabold tracking-tight">Payé</p>
                <div className="bg-primary/20 p-1 rounded-full">
                  <span className="material-icons text-primary">verified</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs font-medium">Reçu le 02 Octobre 2023</p>
            </div>
          </div>

          <div className="bg-card-dark rounded-2xl shadow-sm border border-primary/5 overflow-hidden">
            <div className="px-6 py-5 border-b border-primary/10 flex justify-between items-center">
              <h2 className="text-white text-xl font-bold flex items-center gap-2">
                <span className="material-icons text-primary">history</span>
                Historique des Paiements
              </h2>
              <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                Voir tout <span className="material-icons text-xs">arrow_forward</span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary/5 text-slate-500 text-xs font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Mois / Date</th>
                    <th className="px-6 py-4">Montant</th>
                    <th className="px-6 py-4">Méthode</th>
                    <th className="px-6 py-4">Statut</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5">

                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-white font-bold">Octobre 2023</span>
                        <span className="text-slate-400 text-xs italic">02 Oct, 10:45</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white font-bold">75,000 FCFA</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded-xl bg-orange-100 flex items-center justify-center overflow-hidden border border-orange-200">
                          <div className="w-full h-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-[8px] font-black text-white">ORANGE</div>
                        </div>
                        <span className="text-slate-400 text-sm">Orange Money</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        Complété
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons">receipt_long</span>
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-white font-bold">Septembre 2023</span>
                        <span className="text-slate-400 text-xs italic">05 Sept, 09:15</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white font-bold">75,000 FCFA</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded-xl bg-yellow-100 flex items-center justify-center overflow-hidden border border-yellow-200">
                          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-[8px] font-black text-blue-900">MTN</div>
                        </div>
                        <span className="text-slate-400 text-sm">MTN MoMo</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        Complété
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons">receipt_long</span>
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-white font-bold">Août 2023</span>
                        <span className="text-slate-400 text-xs italic">01 Août, 14:30</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white font-bold">75,000 FCFA</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                          <span className="material-icons text-sm">payments</span>
                        </div>
                        <span className="text-slate-400 text-sm">Espèces</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                        Complété
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons">receipt_long</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-icons text-primary">info</span>
                Détails du Contrat
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span className="text-slate-500">Date de début</span>
                  <span className="text-white font-medium">12 Janvier 2023</span>
                </li>
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span className="text-slate-500">Caution versée</span>
                  <span className="text-white font-medium">150,000 FCFA</span>
                </li>
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span className="text-slate-500">Type de contrat</span>
                  <span className="text-white font-medium">Bail d'habitation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 text-white overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-bold mb-2">Assistance immoKamer</h3>
                <p className="text-slate-300 text-xs mb-4">Besoin d'aide pour la gestion de ce locataire ?</p>
                <button className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-all">
                  Contacter le support
                </button>
              </div>

              <div className="absolute -right-4 -bottom-4 size-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute right-4 top-4 size-8 bg-primary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailChambre;
