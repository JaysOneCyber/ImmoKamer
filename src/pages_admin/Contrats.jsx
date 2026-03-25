import React from 'react';
import { Link } from 'react-router-dom';

const Contrats = () => {
    return (
        <>

            <main className="flex-1 overflow-y-auto scrollbar-hide bg-background-dark p-8">

                <header className="flex flex-wrap items-center justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight">Contrats de bail</h2>
                        <p className="text-slate-400 mt-1">Gestion et suivi de tous vos contrats digitaux</p>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
                        <span className="material-icons">add</span>
                        Nouveau contrat
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-card-dark border border-white/5 rounded-2xl p-6 shadow-xl">
                        <p className="text-sm font-medium text-slate-400 mb-2">Contrats actifs</p>
                        <div className="flex items-end justify-between">
                            <p className="text-4xl font-black text-white">18</p>
                            <div className="flex items-center text-emerald-500 text-sm font-bold bg-emerald-500/10 px-2 py-1 rounded-xl">
                                <span className="material-icons text-sm mr-1">trending_up</span>
                                +4%
                            </div>
                        </div>
                    </div>
                    <div className="bg-card-dark border border-white/5 rounded-2xl p-6 shadow-xl">
                        <p className="text-sm font-medium text-slate-400 mb-2">Expirent dans 30 jours</p>
                        <div className="flex items-end justify-between">
                            <p className="text-4xl font-black text-accent">2</p>
                            <div className="flex items-center text-accent text-sm font-bold bg-accent/10 px-2 py-1 rounded-xl">
                                <span className="material-icons text-sm mr-1">alarm</span>
                                Urgent
                            </div>
                        </div>
                    </div>
                    <div className="bg-card-dark border border-white/5 rounded-2xl p-6 shadow-xl">
                        <p className="text-sm font-medium text-slate-400 mb-2">Chambres sans contrat</p>
                        <div className="flex items-end justify-between">
                            <p className="text-4xl font-black text-rose-500">1</p>
                            <div className="flex items-center text-rose-500 text-sm font-bold bg-rose-500/10 px-2 py-1 rounded-xl">
                                <span className="material-icons text-sm mr-1">warning</span>
                                Attention
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex-1 min-w-[300px]">
                        <div className="relative">
                            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
                            <input className="w-full bg-card-dark border-white/5 rounded-2xl pl-12 pr-4 py-3 text-white focus:ring-primary focus:border-primary" placeholder="Rechercher un locataire ou une chambre..." type="text" />
                        </div>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <button className="bg-primary border border-white/5 text-slate-300 px-5 py-2 rounded-2xl text-sm font-semibold flex items-center gap-2 hover:border-slate-600">
                            <span className="material-icons text-lg">filter_list</span>
                            Tous les immeubles
                        </button>
                        <button className="bg-card-dark border border-white/5 text-slate-300 px-5 py-2 rounded-2xl text-sm font-semibold whitespace-nowrap hover:border-slate-600">Actif</button>
                        <button className="bg-card-dark border border-white/5 text-slate-300 px-5 py-2 rounded-2xl text-sm font-semibold whitespace-nowrap hover:border-slate-600">Expire bientôt</button>
                        <button className="bg-card-dark border border-white/5 text-slate-300 px-5 py-2 rounded-2xl text-sm font-semibold whitespace-nowrap hover:border-slate-600">Expiré</button>
                        <button className="bg-card-dark border border-white/5 text-slate-300 px-5 py-2 rounded-2xl text-sm font-semibold whitespace-nowrap hover:border-slate-600">Résilié</button>
                    </div>
                </div>

                <div className="bg-card-dark border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5/50 border-b border-white/5">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Chambre / Résidence</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Locataire</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Période</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Loyer</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Statut</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">

                                <tr className="hover:bg-white/5/30 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">Ch. 3B</div>
                                        <div className="text-xs text-slate-500 font-medium">Résidence Mballa</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <img alt="BN" className="w-8 h-8 rounded-full border border-white/5" data-alt="Avatar for Benoît Nkomo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6QVZlduYxvnWlFR6QKghoXhUwSJ-ofsLeGeyKOGOfvFNBk55S-76DnWyk_-4ws0IL5KdY0DTeiEVhKn9wLv_B58NalinXkuDWANELGY3cX9vVKl5F2xyxeH9YHT8CEh-KcF4-sZvWEhgIkjxyo5NXkywwcGHRF3FFePLHuRSaq7Wj978VDNuXezps6hMICkfMI4xpruQKj4HHudBydo-vlOkpMCBCnHtP_D2wg6y_-0L_r7Uyur0F4MotayTGaU6lP9tULnRnIQ" />
                                            <span className="font-medium">Benoît Nkomo</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-medium">01/01/2025 - 31/12/2025</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">75 000 FCFA</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold">Actif</span>
                                    </td>
                                    <td className="px-6 py-5 text-right space-x-2">
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Voir"><span className="material-icons">visibility</span></button>
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Télécharger"><span className="material-icons">download</span></button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-white/5/30 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">Ch. 1A</div>
                                        <div className="text-xs text-slate-500 font-medium">Résidence Mballa</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <img alt="AF" className="w-8 h-8 rounded-full border border-white/5" data-alt="Avatar for Aminata Fofana" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRRMurIMwCwoSgUjCrglGSLMm5hplarj5Vo6KU7ptuQWzrnnr0dI6Pc1LrRn_0n3-r234Jr24StR4005xv6Zc7tX_VooOYmTdQmZs0o0-iDZRBtPtsN3NBTEwduFV_NWy16S0ELfoXDkp52dFj8lOZuHnccgypGSCGomlaYixFG70Er0a5Tyy_M_PPKKS-2nMtZb44jrf0-Q9vJJ3dwpwfDui3mism0fTe0Vg7zGaOiiaPeHgiuKeICWvByS19KcFCJLvVDcNPquo" />
                                            <span className="font-medium">Aminata Fofana</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-medium">01/08/2024 - 31/07/2025</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">55 000 FCFA</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold inline-flex items-center gap-1">
                                            <span className="material-icons text-[14px]">schedule</span>
                                            Expire bientôt
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right space-x-2">
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Voir"><span className="material-icons">visibility</span></button>
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Télécharger"><span className="material-icons">download</span></button>
                                        <button className="px-3 py-1 bg-accent text-white rounded-xl text-xs font-bold hover:bg-accent/80 transition-all" title="Renouveler">Renouveler</button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-white/5/30 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">Ch. 2C</div>
                                        <div className="text-xs text-slate-500 font-medium">Immeuble Talla</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <img alt="PE" className="w-8 h-8 rounded-full border border-white/5" data-alt="Avatar for Paul Essomba" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHJkXTKSEX4K1k_tubMBTXw0BvjnmL45S3tYS87SR9kgr8Ge1kxFYRBKE_dYcKmyBW7cf7tyw2PGeCNyfZdQM3GAER4kdPDGX1nmMAgf1kUDSJFd1Nk3_lrVWPpZHwKEZL3rM_P73KtVh44p9POYAUFN2wRAZ9v23aw5shpMDLseqbO8TSqkTG-wgNpvK2fJg_qfiAvxbsPmmOvlGj4K6swdQOB_VCVS8ROBj1EFfu4eG70WZpSXXkgxskthKDs65tgfR5wuFU1kY" />
                                            <span className="font-medium">Paul Essomba</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-medium">15/03/2025 - 14/03/2026</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">60 000 FCFA</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold">Actif</span>
                                    </td>
                                    <td className="px-6 py-5 text-right space-x-2">
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Voir"><span className="material-icons">visibility</span></button>
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Télécharger"><span className="material-icons">download</span></button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-white/5/30 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">Ch. 4D</div>
                                        <div className="text-xs text-slate-500 font-medium">Résidence Mballa</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <img alt="MB" className="w-8 h-8 rounded-full border border-white/5" data-alt="Avatar for Marie Beti" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt1Y_UWm_nMmNL93bkkGYLvueD1q3A5VXOQN-JBvq0uJow57nHSZYc8SZACVK4SU91CV5l-ZJGSuq4JRcGhs1eaWiEHMo0rhbx2nVt6aD94-YhO-PRLQ8KUU1H0uvpq3R9VYBMd7PVAL83pW67k2DQoCf4426sMx4MXzUZEfr-wzRp6mu_od7ira9GMUdSVVPgKAdJ0aC6T_iOHiA94adsEbPXENTDaeVlokz1UKbSnucTvdXYa6GeQ01dIRPWpjoEtB8qC6rCoOs" />
                                            <span className="font-medium">Marie Beti</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-medium">01/09/2024 - 31/08/2025</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">85 000 FCFA</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold inline-flex items-center gap-1">
                                            <span className="material-icons text-[14px]">schedule</span>
                                            Expire bientôt
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right space-x-2">
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Voir"><span className="material-icons">visibility</span></button>
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Télécharger"><span className="material-icons">download</span></button>
                                        <button className="px-3 py-1 bg-accent text-white rounded-xl text-xs font-bold hover:bg-accent/80 transition-all" title="Renouveler">Renouveler</button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-white/5/30 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">Ch. 5A</div>
                                        <div className="text-xs text-slate-500 font-medium">Immeuble Talla</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <img alt="CM" className="w-8 h-8 rounded-full border border-white/5" data-alt="Avatar for Christelle Mbe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfMsdddUS2Y53kWzOExP0k7C6Jt5NISzBRG-t2XgcM_9kBcWp6SL5nyySV2FHm6xHDlz-w-eyI1cgmxieqcCWEQ-snNH1ki1Qwxa1C8m8o0DoyQIxfir1XsCm_fCLOO6o8GSt2V6_TBpjZV3XXid5-xQms1snVspEpzDPW7_o9Gh2kWImYEDm5G_hMQzMaG0sxp7FpnA66blhJtBm5uD0WAr7bxBxuGr4S9KATsvCKjN34O3ni5g7Q6wJJwSK0TRu59rAbjlM2IJI" />
                                            <span className="font-medium">Christelle Mbe</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-medium">01/02/2025 - 31/01/2026</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-white">70 000 FCFA</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold">Actif</span>
                                    </td>
                                    <td className="px-6 py-5 text-right space-x-2">
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Voir"><span className="material-icons">visibility</span></button>
                                        <button className="p-2 text-slate-400 hover:text-white transition-colors" title="Télécharger"><span className="material-icons">download</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="p-6 bg-white/5/20 border-t border-white/5 flex items-center justify-between">
                        <p className="text-xs text-slate-500 font-medium">Affichage de 1 à 5 sur 18 contrats</p>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-slate-500 hover:text-white disabled:opacity-30" disabled=""><span className="material-icons">chevron_left</span></button>
                            <button className="w-8 h-8 rounded-xl bg-primary text-white text-xs font-bold">1</button>
                            <button className="w-8 h-8 rounded-xl text-slate-400 hover:bg-white/5 text-xs font-bold">2</button>
                            <button className="w-8 h-8 rounded-xl text-slate-400 hover:bg-white/5 text-xs font-bold">3</button>
                            <button className="p-2 text-slate-400 hover:text-white"><span className="material-icons">chevron_right</span></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contrats;
