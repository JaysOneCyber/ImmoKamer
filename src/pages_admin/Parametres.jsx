import React from 'react';
import { Link } from 'react-router-dom';

const Parametres = () => {
  return (
    <>

      <main className="flex-1 p-8">
        <div className="max-w-5xl">

          <header className="mb-10">
            <h2 className="text-3xl font-black tracking-tight">Paramètres</h2>
            <p className="text-slate-400 mt-1">Gérez votre compte et vos préférences</p>
          </header>

          <div className="border-b border-white/5 mb-10 overflow-x-auto">
            <div className="flex gap-8 min-w-max">
              <a className="pb-4 text-primary font-bold text-sm active-nav-indicator" href="#">Profil</a>
              <a className="pb-4 text-slate-400 hover:text-slate-200 transition-colors font-medium text-sm" href="#">Immeubles</a>
              <a className="pb-4 text-slate-400 hover:text-slate-200 transition-colors font-medium text-sm" href="#">Paiements</a>
              <a className="pb-4 text-slate-400 hover:text-slate-200 transition-colors font-medium text-sm" href="#">Notifications</a>
              <a className="pb-4 text-slate-400 hover:text-slate-200 transition-colors font-medium text-sm" href="#">Sécurité</a>
              <a className="pb-4 text-slate-400 hover:text-slate-200 transition-colors font-medium text-sm" href="#">Abonnement</a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-1">
              <div className="bg-card-dark rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-white/5">
                <div className="relative group mb-6">
                  <div className="h-32 w-32 rounded-full bg-primary flex items-center justify-center text-white text-4xl font-black shadow-xl ring-4 ring-primary/20">
                    JT
                  </div>
                  <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    <span className="material-icons text-white text-3xl">photo_camera</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Jean-Pierre Talla</h3>
                <p className="text-slate-400 text-sm mb-6">Douala, Cameroun</p>
                <button className="w-full py-2.5 px-4 bg-input-dark hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 border border-white/5">
                  <span className="material-icons text-sm">upload</span>
                  Changer la photo
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card-dark rounded-2xl p-8 shadow-lg border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Nom complet</label>
                    <input className="w-full bg-card-dark border border-white/40 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-4 py-3 text-slate-100 placeholder:text-slate-500 transition-all outline-none" type="text" value="Jean-Pierre Talla" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Téléphone</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">+237</span>
                      <input className="w-full bg-card-dark border border-white/40 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl pl-14 pr-4 py-3 text-slate-100 placeholder:text-slate-500 transition-all outline-none" type="text" value="6xx xxx xxx" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                    <input className="w-full bg-card-dark border border-white/40 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-4 py-3 text-slate-100 placeholder:text-slate-500 transition-all outline-none" placeholder="jp.talla@example.com" type="email" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Ville</label>
                    <select className="w-full bg-card-dark border border-white/40 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-4 py-3 text-slate-100 transition-all outline-none appearance-none">
                      <option selected="" value="Douala">Douala</option>
                      <option value="Yaoundé">Yaoundé</option>
                      <option value="Garoua">Garoua</option>
                      <option value="Bafoussam">Bafoussam</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Adresse professionnelle</label>
                    <textarea className="w-full bg-card-dark border border-white/40 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-4 py-3 text-slate-100 placeholder:text-slate-500 transition-all outline-none resize-none" rows="3"></textarea>
                  </div>
                </div>

                <div className="mt-10 flex justify-end">
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold text-base shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                    <span className="material-icons">save</span>
                    Enregistrer les modifications
                  </button>
                </div>
              </div>

              <div className="mt-6 bg-accent/10 border border-accent/20 rounded-2xl p-4 flex gap-4 items-start">
                <span className="material-icons text-accent">info</span>
                <div>
                  <p className="text-sm font-semibold text-accent mb-1">Dernière connexion</p>
                  <p className="text-xs text-slate-400 leading-relaxed">Votre profil a été mis à jour pour la dernière fois il y a 2 jours. Assurez-vous que vos informations de contact sont toujours à jour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Parametres;
