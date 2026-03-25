import React from 'react';
import { Link } from 'react-router-dom';

const Locataires = () => {
  return (
    <>
      <main className="flex-1 p-8">
        
        <header className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight" >Locataires</h2>
            <p className="text-slate-400 mt-1" >Gérez tous les occupants de vos immeubles à Douala et Yaoundé</p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all transform hover:scale-105 active:scale-95" >
            <span className="material-icons" >add</span>
            Ajouter un locataire
          </button>
        </header>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-400 text-sm font-medium" >Total locataires actifs</p>
              <span className="material-icons text-success" >how_to_reg</span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-white" >18</h3>
              <span className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded-full" >+3.5%</span>
            </div>
          </div>
          <div className="bg-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-400 text-sm font-medium" >Nouveaux ce mois</p>
              <span className="material-icons text-blue-400" >person_add</span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-white" >2</h3>
              <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full" >+100%</span>
            </div>
          </div>
          <div className="bg-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-400 text-sm font-medium" >Départs prévus</p>
              <span className="material-icons text-accent" >person_remove</span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-white" >1</h3>
              <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full" >-50%</span>
            </div>
          </div>
          <div className="bg-card-dark p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-400 text-sm font-medium" >Chambres libres</p>
              <span className="material-icons text-accent" >bed</span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-white" >4</h3>
              <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full" >Stable</span>
            </div>
          </div>
        </section>
        
        <section className="bg-card-dark p-4 rounded-2xl mb-8 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[300px]">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" >search</span>
            <input className="w-full bg-background-dark/50 border-white/5 rounded-2xl pl-12 pr-4 py-3 text-sm focus:ring-primary focus:border-primary text-white placeholder:text-slate-600" placeholder="Rechercher par nom, téléphone ou chambre..." type="text" />
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-background-dark/50 border-white/30 rounded-2xl px-4 py-3 text-sm text-slate-300 focus:ring-primary">
              <option>Tous les immeubles</option>
              <option>Residence Mballa</option>
              <option>Immeuble Talla</option>
            </select>
            <select className="bg-background-dark/50 border-white/30 rounded-2xl px-4 py-3 text-sm text-slate-300 focus:ring-primary">
              <option>Tout statut</option>
              <option>Actif</option>
              <option>En retard</option>
              <option>Départ prévu</option>
            </select>
            <select className="bg-background-dark/50 border-white/30 rounded-2xl px-4 py-3 text-sm text-slate-300 focus:ring-primary">
              <option>Étage</option>
              <option>RDC</option>
              <option>1er étage</option>
              <option>2ème étage</option>
            </select>
          </div>
        </section>
        
        <section className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          
          <div className="bg-card-dark p-6 rounded-2xl border-2 border-white/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-success/20 text-success text-[10px] uppercase font-bold rounded-full border border-success/30 tracking-wider" >Payé</span>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary font-bold text-xl border border-white/5" >BN</div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-success transition-colors" >Benoît Nkomo</h4>
                <p className="text-accent text-sm font-medium" >Residence Mballa • Ch.3B</p>
                <div className="flex items-center gap-1 mt-1 text-slate-500 text-xs" >
                  <span className="material-icons text-[14px]" >calendar_today</span>
                  Depuis le 01/01/2025
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/5/50 py-4">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Téléphone</p>
                <p className="text-slate-300 text-sm font-medium" >677 123 456</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Loyer Mensuel</p>
                <p className="text-white text-base font-bold" >75 000 FCFA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/admin/locataires/1" className="flex-1 bg-white/5 hover:bg-slate-700 text-white py-2.5 flex items-center justify-center rounded-2xl text-xs font-bold transition-all" >Voir profil</Link>
              <button className="flex-1 border border-white/5 hover:bg-white/5 text-slate-400 py-2.5 rounded-2xl text-xs font-bold transition-all" >Envoyer rappel</button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-success opacity-60"></div>
          </div>
          
          <div className="bg-card-dark p-6 rounded-2xl border-2 border-white/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-accent/20 text-accent text-[10px] uppercase font-bold rounded-full border border-accent/30 tracking-wider" >En attente</span>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent font-bold text-xl border border-white/5" >AF</div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors" >Aminata Fofana</h4>
                <p className="text-accent text-sm font-medium" >Residence Mballa • Ch.1A</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/5/50 py-4">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Téléphone</p>
                <p className="text-slate-300 text-sm font-medium" >699 234 567</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Loyer Mensuel</p>
                <p className="text-white text-base font-bold" >55 000 FCFA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/admin/locataires/1" className="flex-1 bg-white/5 hover:bg-slate-700 text-white py-2.5 flex items-center justify-center rounded-2xl text-xs font-bold transition-all" >Voir profil</Link>
              <button className="flex-1 border border-white/5 hover:bg-white/5 text-slate-400 py-2.5 rounded-2xl text-xs font-bold transition-all" >Envoyer rappel</button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-accent opacity-60"></div>
          </div>
          
          <div className="bg-card-dark p-6 rounded-2xl border-2 border-white/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-500 text-[10px] uppercase font-bold rounded-full border border-red-500/30 tracking-wider" >En retard</span>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center text-red-500 font-bold text-xl border border-white/30" >PE</div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors" >Paul Essomba</h4>
                <p className="text-accent text-sm font-medium" >Immeuble Talla • Ch.2C</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/5/50 py-4">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Téléphone</p>
                <p className="text-slate-300 text-sm font-medium" >677 345 678</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Loyer Mensuel</p>
                <p className="text-white text-base font-bold" >60 000 FCFA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/admin/locataires/1" className="flex-1 bg-white/5 hover:bg-slate-700 text-white py-2.5 flex items-center justify-center rounded-2xl text-xs font-bold transition-all" >Voir profil</Link>
              <button className="flex-1 border border-white/5 hover:bg-white/5 text-slate-400 py-2.5 rounded-2xl text-xs font-bold transition-all" >Envoyer rappel</button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-red-500 opacity-60"></div>
          </div>
          
          <div className="bg-card-dark p-6 rounded-2xl border-2 border-white/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-500 text-[10px] uppercase font-bold rounded-full border border-red-500/30 tracking-wider" >En retard</span>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 font-bold text-xl border border-white/5" >MB</div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors" >Marie Beti</h4>
                <p className="text-accent text-sm font-medium" >Residence Mballa • Ch.4D</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/5/50 py-4">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Téléphone</p>
                <p className="text-slate-300 text-sm font-medium" >695 882 114</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Loyer Mensuel</p>
                <p className="text-white text-base font-bold" >85 000 FCFA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/admin/locataires/1" className="flex-1 bg-white/5 hover:bg-slate-700 text-white py-2.5 flex items-center justify-center rounded-2xl text-xs font-bold transition-all" >Voir profil</Link>
              <button className="flex-1 border border-white/5 hover:bg-white/5 text-slate-400 py-2.5 rounded-2xl text-xs font-bold transition-all" >Envoyer rappel</button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-red-500 opacity-60"></div>
          </div>
          
          <div className="bg-card-dark p-6 rounded-2xl border-2 border-white/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-success/20 text-success text-[10px] uppercase font-bold rounded-full border border-success/30 tracking-wider" >Payé</span>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 font-bold text-xl border border-white/5" >CM</div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-success transition-colors" >Christelle Mbe</h4>
                <p className="text-accent text-sm font-medium" >Immeuble Talla • Ch.5A</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/5/50 py-4">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Téléphone</p>
                <p className="text-slate-300 text-sm font-medium" >671 445 990</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Loyer Mensuel</p>
                <p className="text-white text-base font-bold" >70 000 FCFA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/admin/locataires/1" className="flex-1 bg-white/5 hover:bg-slate-700 text-white py-2.5 flex items-center justify-center rounded-2xl text-xs font-bold transition-all" >Voir profil</Link>
              <button className="flex-1 border border-white/5 hover:bg-white/5 text-slate-400 py-2.5 rounded-2xl text-xs font-bold transition-all" >Envoyer rappel</button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-success opacity-60"></div>
          </div>
          
          <div className="bg-card-dark p-6 rounded-2xl border-2 border-white/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-red-500/20 text-red-500 text-[10px] uppercase font-bold rounded-full border border-red-500/30 tracking-wider" >En retard</span>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 font-bold text-xl border border-white/5" >SK</div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors" >Serge Kamga</h4>
                <p className="text-accent text-sm font-medium" >Residence Mballa • Ch.6B</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/5/50 py-4">
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Téléphone</p>
                <p className="text-slate-300 text-sm font-medium" >655 112 334</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1" >Loyer Mensuel</p>
                <p className="text-white text-base font-bold" >50 000 FCFA</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/admin/locataires/1" className="flex-1 bg-white/5 hover:bg-slate-700 text-white py-2.5 flex items-center justify-center rounded-2xl text-xs font-bold transition-all" >Voir profil</Link>
              <button className="flex-1 border border-white/5 hover:bg-white/5 text-slate-400 py-2.5 rounded-2xl text-xs font-bold transition-all" >Envoyer rappel</button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-red-500 opacity-60"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Locataires;
