import React from 'react';
import { Link } from 'react-router-dom';

const MesImmeubles = () => {
    return (
        <>
            <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 space-y-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-100 tracking-tight">Résidence Mballa</h1>
                        <p className="text-slate-400 mt-1 flex items-center gap-2">
                            <span className="material-icons text-primary text-sm">location_on</span>
                            Yaoundé, Cameroun — Tableau de Bord Financier
                        </p>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 transition-transform active:scale-95">
                        <span className="material-icons">add_home</span>
                        Ajouter une unité
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-card-dark border border-white/5 p-6 rounded-2xl">
                        <p className="text-slate-400 text-sm font-medium">Revenu Total (Mois)</p>
                        <p className="text-primary text-2xl font-black mt-2">12.500.000 FCFA</p>
                        <div className="flex items-center gap-1 mt-2 text-green-500 text-sm font-bold">
                            <span className="material-icons text-sm">trending_up</span>
                            <span>+12.4%</span>
                        </div>
                    </div>
                    <div className="bg-card-dark border border-white/5 p-6 rounded-2xl">
                        <p className="text-slate-400 text-sm font-medium">En Attente</p>
                        <p className="text-slate-100 text-2xl font-black mt-2">2.300.000 FCFA</p>
                        <div className="flex items-center gap-1 mt-2 text-orange-400 text-sm font-bold">
                            <span className="material-icons text-sm">schedule</span>
                            <span>Échéance J+3</span>
                        </div>
                    </div>
                    <div className="bg-card-dark border border-white/5 p-6 rounded-2xl">
                        <p className="text-slate-400 text-sm font-medium">Retards de Paiement</p>
                        <p className="text-red-500 text-2xl font-black mt-2">850.000 FCFA</p>
                        <div className="flex items-center gap-1 mt-2 text-red-400 text-sm font-bold">
                            <span className="material-icons text-sm">warning</span>
                            <span>-8% vs Mois Préc.</span>
                        </div>
                    </div>
                    <div className="bg-card-dark border border-white/5 p-6 rounded-2xl">
                        <p className="text-slate-400 text-sm font-medium">Taux d'Occupation</p>
                        <p className="text-slate-100 text-2xl font-black mt-2">94%</p>
                        <div className="flex items-center gap-1 mt-2 text-primary text-sm font-bold">
                            <span className="material-icons text-sm">check_circle</span>
                            <span>17/18 Unités</span>
                        </div>
                    </div>
                </div>

                <section className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                            <span className="material-icons text-primary">grid_view</span>
                            Statut des Unités (Live)
                        </h2>
                        <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div> Payé</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div> Dû</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> Retard</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

                        <div className="bg-card-dark border-2 neon-green p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">A101</span>
                                <span className="material-icons text-green-500 text-sm">verified</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">M. Eto'o</p>
                                <p className="text-sm font-bold text-primary">250.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-green p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">A102</span>
                                <span className="material-icons text-green-500 text-sm">verified</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">Mme Ngono</p>
                                <p className="text-sm font-bold text-primary">250.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-red p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">B201</span>
                                <span className="material-icons text-red-500 text-sm">error</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">M. Abega</p>
                                <p className="text-sm font-bold text-primary">300.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-orange p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">B202</span>
                                <span className="material-icons text-orange-500 text-sm">pending</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">Mme Atangana</p>
                                <p className="text-sm font-bold text-primary">300.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-green p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">C301</span>
                                <span className="material-icons text-green-500 text-sm">verified</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">Dr. Mbarga</p>
                                <p className="text-sm font-bold text-primary">450.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 border-white/5 opacity-50 p-4 rounded-2xl flex flex-col justify-between h-32">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">C302</span>
                                <span className="material-icons text-slate-500 text-sm">block</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">VACANT</p>
                                <p className="text-sm font-bold text-slate-500">—</p>
                            </div>
                        </div>

                        <div className="bg-card-dark border-2 neon-green p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">D401</span>
                                <span className="material-icons text-green-500 text-sm">verified</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">Mme Fouda</p>
                                <p className="text-sm font-bold text-primary">200.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-green p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">D402</span>
                                <span className="material-icons text-green-500 text-sm">verified</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">M. Bella</p>
                                <p className="text-sm font-bold text-primary">200.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-green p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">E501</span>
                                <span className="material-icons text-green-500 text-sm">verified</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">Famille Owona</p>
                                <p className="text-sm font-bold text-primary">600.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-red p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">E502</span>
                                <span className="material-icons text-red-500 text-sm">error</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">M. Kamga</p>
                                <p className="text-sm font-bold text-primary">600.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-green p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">F601</span>
                                <span className="material-icons text-green-500 text-sm">verified</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">Mlle Simo</p>
                                <p className="text-sm font-bold text-primary">350.000 FCFA</p>
                            </div>
                        </div>
                        <div className="bg-card-dark border-2 neon-orange p-4 rounded-2xl flex flex-col justify-between h-32 transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <span className="text-lg font-black text-slate-100">F602</span>
                                <span className="material-icons text-orange-500 text-sm">pending</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 truncate">M. Tagne</p>
                                <p className="text-sm font-bold text-primary">350.000 FCFA</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <section className="bg-card-dark border border-white/5 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                                <span className="material-icons text-primary">engineering</span>
                                Alertes Maintenance
                            </h3>
                            <button className="text-primary text-sm font-bold">Voir tout</button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 rounded-xl bg-background-dark/30 border-l-4 border-primary">
                                <div className="bg-primary/20 p-2 rounded text-primary">
                                    <span className="material-icons">plumbing</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-100">Fuite d'eau - Unité B201</p>
                                    <p className="text-xs text-slate-400">Signalé il y a 2 heures par M. Abega</p>
                                </div>
                                <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded">Urgent</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 rounded-xl bg-background-dark/30 border-l-4 border-slate-600">
                                <div className="bg-slate-700/20 p-2 rounded text-slate-400">
                                    <span className="material-icons">bolt</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-100">Entretien Groupe Électrogène</p>
                                    <p className="text-xs text-slate-400">Planifié pour le 25 Octobre</p>
                                </div>
                                <span className="text-xs font-bold px-2 py-1 bg-slate-700 text-slate-300 rounded">Planifié</span>
                            </div>
                        </div>
                    </section>

                    <section className="bg-card-dark border border-white/5 rounded-2xl p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                                <span className="material-icons text-primary">map</span>
                                Localisation
                            </h3>
                        </div>
                        <div className="flex-1 bg-background-dark rounded-xl overflow-hidden relative border border-white/5 min-h-[200px]">
                            <div className="absolute inset-0 bg-cover bg-center grayscale opacity-50" data-alt="Carte de Yaoundé Mballa" data-location="Yaounde" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxv8rWEl1hQy1FTX7OIBoA9S0katYr7Emc_b2AmVYVjv_F8ykfRGVipbk4Rk2ry4Uv97njGS7wuZY1uSfovV2wvHk4Ds2WskdvDFtYGsc_dzgcURqAGtQ_Kfm98TZ36yURakrCguyESdZ8Xqufk93cbmMiBVittNU3GSiDea_iPrK33hoyejFDHM3LpInQreWCN2xjeuKwWOm7hvhgaGLex35jzdfT2asgdHrVCndDonALhiIC3NXlOIljqqxySP5D7zAq0xZ7u88')" }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-primary text-background-dark p-2 rounded-full shadow-lg pulse">
                                    <span className="material-icons">apartment</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 bg-card-dark border border-primary text-primary font-bold py-2 rounded-xl text-sm hover:bg-primary/10 transition-colors">
                                Contacter Gestionnaire
                            </button>
                            <button className="flex-1 bg-card-dark border border-primary text-primary font-bold py-2 rounded-xl text-sm hover:bg-primary/10 transition-colors">
                                Extraire Rapport PDF
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default MesImmeubles;
