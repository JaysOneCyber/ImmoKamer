import { Link } from 'react-router-dom'

function Fonctionnalites() {
    const features = [
        {
            icon: '🏠',
            iconClass: 'icon-orange',
            title: 'Suivi détaillé des loyers',
            description: "Visualisez l'état de chaque unité locative en temps réel. Chaque appartement dispose de sa propre fiche : statut d'occupation, locataire actuel, historique des paiements et état de maintenance.",
            details: [
                'Vue graphique colorée (occupée, vacante, en retard)',
                'Fiche locataire détaillée par chambre',
                'Historique complet des occupants',
                'Taux d\'occupation en temps réel'
            ]
        },
        {
            icon: '🔧',
            iconClass: 'icon-amber',
            title: 'Gestion des charges & dépannages',
            description: "Les locataires déclarent directement leurs demandes de dépannage. Suivez chaque intervention du signalement à la résolution, avec coûts et prestataires.",
            details: [
                'Déclaration de pannes par les locataires',
                'Assignation aux techniciens',
                'Suivi du statut en temps réel',
                'Historique et coûts des interventions'
            ]
        },
        {
            icon: '🔔',
            iconClass: 'icon-teal',
            title: 'Alertes de paiement',
            description: "Recevez des notifications automatiques pour chaque échéance. Envoyez des rappels SMS et email aux locataires avant et après la date limite.",
            details: [
                'Rappels automatiques avant échéance',
                'Notifications de retard de paiement',
                'Alertes SMS via Orange / MTN',
                'Paramétrage personnalisable des délais'
            ]
        },
        {
            icon: '📊',
            iconClass: 'icon-orange',
            title: 'Historique & Statistiques',
            description: "Accédez à l'historique complet de tous les paiements et dettes. Graphiques interactifs pour analyser la performance de votre patrimoine.",
            details: [
                'Historique complet des transactions',
                'Graphe d\'évolution des revenus',
                'Suivi des impayés et dettes',
                'Export Excel et PDF'
            ]
        },
        {
            icon: '📈',
            iconClass: 'icon-amber',
            title: 'Dashboard Premium',
            description: "Tableau de bord centralisé avec tous les KPIs essentiels. Revenus, taux d'occupation, maintenance en cours — tout en un coup d'œil.",
            details: [
                'Revenus mensuels et annuels',
                'Taux d\'occupation global',
                'Charges et dépenses',
                'Comparaison multi-immeubles'
            ]
        },
        {
            icon: '📝',
            iconClass: 'icon-teal',
            title: 'Gestion des contrats',
            description: "Créez, signez et suivez tous vos baux numériquement. Recevez des alertes avant l'expiration des contrats pour anticiper les renouvellements.",
            details: [
                'Création de baux numériques',
                'Signature électronique intégrée',
                'Alertes de fin de contrat',
                'Archivage sécurisé des documents'
            ]
        }
    ]

    return (
        <div className="page-content">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-tag">
                        <span className="material-icons" style={{ fontSize: '14px' }}>auto_awesome</span>
                        Fonctionnalités
                    </div>
                    <h1 className="page-title">
                        Des outils puissants pour<br />
                        <span className="gradient-text">une gestion moderne</span>
                    </h1>
                    <p className="page-subtitle">
                        Découvrez toutes les fonctionnalités conçues pour simplifier la gestion de votre patrimoine immobilier au Cameroun.
                    </p>
                </div>
            </section>

            {/* Detailed Features */}
            <section className="features-detailed">
                <div className="container">
                    {features.map((feature, i) => (
                        <div key={i} className={`feature-detail-row ${i % 2 === 1 ? 'reverse' : ''}`}>
                            <div className="feature-detail-content">
                                <div className={`feature-icon ${feature.iconClass}`}>
                                    {feature.icon}
                                </div>
                                <h2>{feature.title}</h2>
                                <p>{feature.description}</p>
                                <ul className="feature-list">
                                    {feature.details.map((detail, j) => (
                                        <li key={j}>
                                            <span className="material-icons" style={{ fontSize: '18px', color: 'var(--accent-secondary)' }}>check_circle</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="feature-detail-visual">
                                <div className="feature-mockup">
                                    <div className="mockup-header">
                                        <div className="dashboard-dot red"></div>
                                        <div className="dashboard-dot yellow"></div>
                                        <div className="dashboard-dot green"></div>
                                    </div>
                                    <div className="mockup-body">
                                        <div className={`feature-icon ${feature.iconClass}`} style={{ width: '64px', height: '64px', fontSize: '2rem', margin: '0 auto 16px' }}>
                                            {feature.icon}
                                        </div>
                                        <h4 style={{ textAlign: 'center', marginBottom: '8px' }}>{feature.title}</h4>
                                        <div className="mockup-bars">
                                            <div className="mockup-bar" style={{ width: '80%' }}></div>
                                            <div className="mockup-bar" style={{ width: '60%' }}></div>
                                            <div className="mockup-bar" style={{ width: '90%' }}></div>
                                            <div className="mockup-bar" style={{ width: '45%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="page-cta">
                <div className="container">
                    <div className="cta-card">
                        <h2>Convaincu ?</h2>
                        <p>Essayez immoKamer gratuitement et découvrez la différence.</p>
                        <div className="cta-buttons">
                            <Link to="/inscription" className="btn-white">Démarrer Gratuitement</Link>
                            <Link to="/tarifs" className="btn-outline-white">Voir les tarifs</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fonctionnalites
