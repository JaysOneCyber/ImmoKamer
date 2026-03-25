import { Link } from 'react-router-dom'

const DashboardProprietaire = () => {
    return (
        <>
            {/* Main Content Area */}
            <main className="flex-1 bg-background-dark p-8">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-9">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Bonjour, Jean-Pierre 👋</h2>
                        <p className="text-slate-400 mt-1">Voici l'état de vos immeubles pour ce mois de Juillet 2025.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Aujourd'hui</p>
                            <p className="text-sm font-medium text-white">07 Juillet 2025</p>
                        </div>
                    </div>
                </header>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="p-6 rounded-2xl bg-card-dark border border-white/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 rounded-lg bg-success/10 text-success">
                                <span className="material-icons">payments</span>
                            </div>
                            <div className="flex items-center gap-1 text-success text-sm font-bold">
                                <span className="material-icons text-sm">trending_up</span>
                                +12%
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Revenus encaissés</p>
                        <p className="text-2xl font-bold mt-1 text-white">485 000 FCFA</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card-dark border border-white/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                <span className="material-icons">pending_actions</span>
                            </div>
                            <span className="text-accent text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 uppercase tracking-tight">Attention</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Reste à recouvrer</p>
                        <p className="text-2xl font-bold mt-1 text-white">120 000 FCFA</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card-dark border border-white/5 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <span className="material-icons">meeting_room</span>
                            </div>
                            <span className="text-slate-500 text-sm font-bold">82%</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium mb-2">Taux d'occupation</p>
                        <p className="text-xl font-bold mb-3 text-white">18/22 chambres</p>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: '82%' }}></div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-card-dark border border-white/5 shadow-sm border-l-4 border-l-danger">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 rounded-lg bg-danger/10 text-danger">
                                <span className="material-icons">error</span>
                            </div>
                            <span className="text-danger text-[10px] font-bold px-2 py-0.5 rounded-full bg-danger/10 border border-danger/20 uppercase tracking-tight">Urgent</span>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Impayés</p>
                        <p className="text-2xl font-bold mt-1 text-danger">3 chambres</p>
                        <p className="text-[11px] text-danger/80 mt-1 font-medium italic">En retard de plus de 5 jours</p>
                    </div>
                </div>

                {/* Main Sections Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="xl:col-span-2 space-y-8">
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-white">Mes Immeubles</h3>
                                <button className="text-primary text-sm font-medium hover:underline">Voir tous les immeubles</button>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-card-dark border border-white/5">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h4 className="font-bold text-base text-white">Résidence Mballa</h4>
                                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                                <span className="material-icons text-xs">location_on</span>
                                                Bonamoussadi, Douala
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-slate-500">3 Niveaux</p>
                                            <p className="text-xs text-slate-400">12 Chambres</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 mb-6">
                                        {/* Simulated rooms */}
                                        {[...Array(12)].map((_, i) => (
                                            <div key={i} className={`aspect-square rounded-md ${i % 5 === 0 ? 'bg-danger/60' : i % 3 === 0 ? 'bg-accent/60' : 'bg-success/60'}`} />
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="size-2 rounded-full bg-success"></div> Payé</div>
                                            <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="size-2 rounded-full bg-danger"></div> Retard</div>
                                        </div>
                                        <a className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                            Voir le détail <span className="material-icons text-sm">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-card-dark border border-white/5">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h4 className="font-bold text-base text-white">Immeuble Talla</h4>
                                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                                <span className="material-icons text-xs">location_on</span>
                                                Makepe, Douala
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-slate-500">2 Niveaux</p>
                                            <p className="text-xs text-slate-400">10 Chambres</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 gap-2 mb-6">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className={`aspect-square rounded-md ${i % 4 === 0 ? 'bg-white/10' : 'bg-primary/50'}`} />
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="size-2 rounded-full bg-primary"></div> Actif</div>
                                            <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="size-2 rounded-full bg-white/20"></div> Libre</div>
                                        </div>
                                        <a className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                            Voir le détail <span className="material-icons text-sm">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-white">Paiements récents</h3>
                                <button className="text-slate-500 text-sm font-medium hover:text-primary transition-colors">Exporter CSV</button>
                            </div>
                            <div className="overflow-x-auto rounded-2xl border border-white/5 bg-card-dark">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-white/5 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                                            <th className="px-6 py-4">Chambre</th>
                                            <th className="px-6 py-4">Locataire</th>
                                            <th className="px-6 py-4">Montant</th>
                                            <th className="px-6 py-4">Mode</th>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4">Statut</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-sm">
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 font-semibold text-white">Ch. 3B</td>
                                            <td className="px-6 py-4 text-slate-300">Benoît Nkomo</td>
                                            <td className="px-6 py-4 font-medium text-white">75 000 FCFA</td>
                                            <td className="px-6 py-4 text-xs text-slate-500">MTN MoMo</td>
                                            <td className="px-6 py-4 text-xs text-slate-500">02/07/2025</td>
                                            <td className="px-6 py-4"><span className="px-2 py-1 bg-success/10 text-success rounded-full text-[10px] font-bold">✅ Payé</span></td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 font-semibold text-white">Ch. 1A</td>
                                            <td className="px-6 py-4 text-slate-300">Aminata Fofana</td>
                                            <td className="px-6 py-4 font-medium text-white">55 000 FCFA</td>
                                            <td className="px-6 py-4 text-xs text-slate-500">Orange Money</td>
                                            <td className="px-6 py-4 text-xs text-slate-500">01/07/2025</td>
                                            <td className="px-6 py-4"><span className="px-2 py-1 bg-success/10 text-success rounded-full text-[10px] font-bold">✅ Payé</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    <div className="xl:col-span-1">
                        <section className="sticky top-24 space-y-6">
                            <h3 className="text-lg font-bold text-white">Actions Urgentes</h3>
                            <div className="space-y-4">
                                <div className="p-5 rounded-2xl bg-card-dark border border-white/5 flex flex-col gap-4 shadow-lg shadow-black/20">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-danger">
                                            <span className="material-icons">report</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-sm text-white">Paiements en retard</h5>
                                            <p className="text-xs text-slate-500 mt-1">3 locataires n'ont pas encore réglé leur loyer ce mois-ci.</p>
                                        </div>
                                    </div>
                                    <button className="w-full bg-danger hover:bg-danger/80 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-danger/20">
                                        Envoyer rappels groupés
                                    </button>
                                </div>

                                <div className="p-5 rounded-2xl bg-card-dark border border-white/5 shadow-lg shadow-black/20">
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="mt-1 text-accent">
                                            <span className="material-icons">edit</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-sm text-white">Expiration de contrat</h5>
                                            <p className="text-xs text-slate-500 mt-1">Le contrat d'Aminata Fofana expire dans 30 jours.</p>
                                        </div>
                                    </div>
                                    <a className="text-xs font-bold text-accent underline underline-offset-4 hover:text-white transition-all" href="#">
                                        Renouveler le contrat
                                    </a>
                                </div>
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/80 to-accent/80 text-white relative overflow-hidden group border border-white/10">
                                    <div className="relative z-10">
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Rapport Annuel</p>
                                        <h4 className="text-lg font-bold mb-4">Optimisez votre fiscalité immobilière</h4>
                                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-bold px-4 py-2 rounded-lg transition-all">
                                            Consulter nos conseils
                                        </button>
                                    </div>
                                    <span className="material-icons absolute -right-4 -bottom-4 text-white/5 text-8xl rotate-12 group-hover:rotate-0 transition-all duration-500">
                                        analytics
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

        </>
    );
};

export default DashboardProprietaire;
