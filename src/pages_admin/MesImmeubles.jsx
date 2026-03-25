import React from 'react';
import { Link } from 'react-router-dom';

const MesImmeubles = () => {
    return (
        <>
            <main className="flex-1 p-8">

                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tight">Mes Immeubles</h2>
                        <p className="text-slate-400 mt-1">Vue d'ensemble de tous vos immeubles et leurs
                            chambres</p>
                    </div>
                    <button
                        className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/20 flex items-center gap-2 transition-all">
                        <span className="material-icons text-lg">add_circle</span>
                        Ajouter un immeuble
                    </button>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div
                        className="bg-dark bg-slate-custom p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span
                                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg material-icons text-slate-500">apartment</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Total immeubles</p>
                        <h3 className="text-3xl font-bold mt-1">2</h3>
                    </div>
                    <div
                        className="bg-dark bg-slate-custom p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span
                                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg material-icons text-slate-500">meeting_room</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Total chambres</p>
                        <h3 className="text-3xl font-bold mt-1">22</h3>
                    </div>
                    <div
                        className="bg-dark bg-slate-custom p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span
                                className="p-2 bg-emerald/10 text-emerald rounded-lg material-icons">person_check</span>
                            <span
                                className="px-2 py-1 bg-emerald/20 text-emerald text-[10px] font-bold rounded uppercase">Occupé</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Chambres occupées</p>
                        <h3 className="text-3xl font-bold mt-1">18</h3>
                    </div>
                    <div
                        className="bg-dark bg-slate-custom p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span
                                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg material-icons">key</span>
                            <span
                                className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[10px] font-bold rounded uppercase">Libre</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Chambres libres</p>
                        <h3 className="text-3xl font-bold mt-1">4</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div
                        className="bg-white dark:bg-slate-custom rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl flex flex-col h-full">
                        <div className="h-48 bg-cover bg-center relative" data-alt="Modern apartment building in a residential area">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-xl font-bold text-white">Résidence Mballa</h3>
                                <p className="text-white/80 text-sm flex items-center gap-1">
                                    <span className="material-icons text-xs">location_on</span> Bonamoussadi, Douala
                                </p>
                            </div>
                            <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                                <span
                                    className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase border border-white/30">3
                                    Niveaux</span>
                                <span
                                    className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase border border-white/30">12
                                    Chambres</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex" style={{background : "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQClfrfeirVluepS9QNH4j8T4KsvjRgEv6oDQhzkwPL7rUIQRSw-V65LpbE1r4VaZFhxg8siYvpMETyjsDS02FxsAixv7aOWyQ52vF5UU6bEM1UOpW_3aOlQzg9-GgbUhl5t3F-DgNGDlLR5IaC7yWrcj8Xg6Cb3S2njMkBNxUCFUUxx_J_A-Po8koms0lmBmfP_7C7rX7xml5KSEMmXNOXA-6UKMU-Sup2wWBNMeA41oaSZAhQNdlkAtDxtbmyH0U5B59JhLQZ5Y')"}}>
                                    <div className="bg-emerald h-full" style={{width: '83%'}}></div>
                                    <div className="bg-slate-300 dark:bg-slate-600 h-full" style={{ width: '17%' }}></div>
                                </div>
                                <span className="text-xs font-bold whitespace-nowrap">10 Occupées • 2 Libres</span>
                            </div>
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plan d'occupation
                                </h4>
                                <div className="grid grid-cols-4 gap-2">

                                    <div className="room-box bg-ocre text-white" title="Ch.1A - En attente">1A</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.1B - Payé">1B</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.1C - Payé">1C</div>
                                    <div className="room-box bg-slate-400 dark:bg-slate-600 text-white" title="Ch.1D - Libre">1D
                                    </div>

                                    <div className="room-box bg-emerald text-white" title="Ch.2A - Payé">2A</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.2B - Payé">2B</div>
                                    <div className="room-box bg-crimson text-white" title="Ch.2C - En retard">2C</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.2D - Payé">2D</div>

                                    <div className="room-box bg-emerald text-white" title="Ch.3A - Payé">3A</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.3B - Payé">3B</div>
                                    <div className="room-box bg-crimson text-white" title="Ch.3C - En retard">3C</div>
                                    <div className="room-box bg-slate-400 dark:bg-slate-600 text-white" title="Ch.3D - Libre">3D
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Attendu</p>
                                    <p className="text-sm font-bold">780k <span className="text-[10px]">FCFA</span></p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-emerald font-bold uppercase">Encaissé</p>
                                    <p className="text-sm font-bold text-emerald">560k <span className="text-[10px]">FCFA</span></p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-ocre font-bold uppercase">Reste</p>
                                    <p className="text-sm font-bold text-ocre">220k <span className="text-[10px]">FCFA</span></p>
                                </div>
                            </div>
                            <button
                                className="mt-6 w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-terracotta/10 hover:text-terracotta text-sm font-bold rounded-lg transition-colors border border-transparent hover:border-terracotta/20">
                                Voir les détails de l'immeuble
                            </button>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-slate-custom rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl flex flex-col h-full">
                        <div className="h-48 bg-cover bg-center relative"
                            data-alt="Luxurious smaller apartment building in a green area"
                            style={{background : "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzM4tIt6gesMrP1S4MlpABzTr1Ny-brbKIHRsiKMtCJ2dzuyn0oM0ESecVI01-uBalVMZ9FSW2rTqnTBxC_yd4Xiu3-fZsohen90NF58RBfzOgT9wnO_yW79Ypx8yNe84B_rnHXKQrYMZvfDvcqCUVByhFL8Yq3pTw9fV-zSPzMtOhetKVfk9Jw0RFYgiQfo0ZwgYUMegr7AK0vKuTC4VYVKm8aJThkabi_wVRI2FOF0RTrzlwWfAZ9k93wvI9zxfm8MUDu4PtJQw')"}}>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-xl font-bold text-white">Immeuble Talla</h3>
                                <p className="text-white/80 text-sm flex items-center gap-1">
                                    <span className="material-icons text-xs">location_on</span> Makepe, Douala
                                </p>
                            </div>
                            <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                                <span
                                    className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase border border-white/30">2
                                    Niveaux</span>
                                <span
                                    className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase border border-white/30">10
                                    Chambres</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                                    <div className="bg-emerald h-full" style={{width: "80%"}}></div>
                                    <div className="bg-slate-300 dark:bg-slate-600 h-full" style={{ width: '20%' }}></div>
                                </div>
                                <span className="text-xs font-bold whitespace-nowrap">8 Occupées • 2 Libres</span>
                            </div>
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Plan d'occupation
                                </h4>
                                <div className="grid grid-cols-5 gap-2">

                                    <div className="room-box bg-emerald text-white" title="Ch.101 - Payé">101</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.102 - Payé">102</div>
                                    <div className="room-box bg-ocre text-white" title="Ch.103 - En attente">103</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.104 - Payé">104</div>
                                    <div className="room-box bg-slate-400 dark:bg-slate-600 text-white" title="Ch.105 - Libre">105
                                    </div>

                                    <div className="room-box bg-emerald text-white" title="Ch.201 - Payé">201</div>
                                    <div className="room-box bg-crimson text-white" title="Ch.202 - En retard">202</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.203 - Payé">203</div>
                                    <div className="room-box bg-emerald text-white" title="Ch.204 - Payé">204</div>
                                    <div className="room-box bg-slate-400 dark:bg-slate-600 text-white" title="Ch.205 - Libre">205
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Attendu</p>
                                    <p className="text-sm font-bold">650k <span className="text-[10px]">FCFA</span></p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-emerald font-bold uppercase">Encaissé</p>
                                    <p className="text-sm font-bold text-emerald">480k <span className="text-[10px]">FCFA</span></p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-ocre font-bold uppercase">Reste</p>
                                    <p className="text-sm font-bold text-ocre">170k <span className="text-[10px]">FCFA</span></p>
                                </div>
                            </div>
                            <button
                                className="mt-6 w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-terracotta/10 hover:text-terracotta text-sm font-bold rounded-lg transition-colors border border-transparent hover:border-terracotta/20">
                                Voir les détails de l'immeuble
                            </button>
                        </div>
                    </div> 
                
                </div>

                <div
                    className="mt-8 flex flex-wrap items-center gap-6 p-4 bg-dark bg-slate-custom/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">Légende :</span>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-emerald"></div>
                        <span className="text-xs font-medium">Payé</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-ocre"></div>
                        <span className="text-xs font-medium">En attente</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-crimson"></div>
                        <span className="text-xs font-medium">En retard</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-slate-400 dark:bg-slate-600"></div>
                        <span className="text-xs font-medium">Libre</span>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MesImmeubles;
