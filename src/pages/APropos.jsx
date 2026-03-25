import { Link } from 'react-router-dom'

function APropos() {
    const values = [
        {
            icon: '🌍',
            title: 'Adapté au marché local',
            description: "immoKamer est pensé pour les réalités du marché immobilier camerounais : Mobile Money, gestion chambre par chambre, loyers en FCFA."
        },
        {
            icon: '🔒',
            title: 'Sécurité maximale',
            description: "Vos données sont chiffrées et sauvegardées quotidiennement. Conformité aux standards de sécurité internationaux."
        },
        {
            icon: '⚡',
            title: 'Simple et rapide',
            description: "Interface intuitive qui fonctionne même avec une connexion lente. Accessible depuis n'importe quel appareil."
        },
        {
            icon: '🤝',
            title: 'Support humain',
            description: "Une équipe basée au Cameroun, disponible pour vous accompagner dans votre langue et votre fuseau horaire."
        }
    ]

    const stats = [
        { value: '+165', label: 'Bailleurs actifs' },
        { value: '817+', label: 'Appartements gérées' },
        { value: '98%', label: 'Satisfaction client' },
        { value: '24h', label: 'Temps de réponse support' }
    ]

    return (
        <div className="page-content">
            <section className="page-hero">
                <div className="container">
                    <div className="section-tag">
                        <span className="material-icons" style={{ fontSize: '14px' }}>info</span>
                        À propos
                    </div>
                    <h1 className="page-title">
                        La première solution immobilière<br />
                        <span className="gradient-text">pensée pour l'Afrique centrale</span>
                    </h1>
                    <p className="page-subtitle">
                        immoKamer est née d'un constat simple : les bailleurs camerounais méritent des outils modernes pour gérer leur patrimoine.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="about-mission">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-content">
                            <h2>Notre <span className="gradient-text">mission</span></h2>
                            <p>
                                Au Cameroun, la gestion immobilière repose encore largement sur des cahiers, des appels téléphoniques
                                et des allers-retours chez le notaire. Les retards de paiement sont fréquents, les contrats se perdent,
                                et les bailleurs n'ont aucune visibilité sur la rentabilité de leur patrimoine.
                            </p>
                            <p>
                                <strong>immoKamer</strong> change la donne. Notre plateforme digitale permet aux propriétaires de gérer
                                leurs immeubles chambre par chambre, de suivre les paiements en temps réel via Mobile Money, et d'avoir
                                une vision claire de leurs revenus et charges.
                            </p>
                            <p>
                                Nous croyons que chaque bailleur, qu'il possède 5 appartements ou 200, mérite des outils professionnels
                                pour sécuriser et optimiser ses revenus locatifs.
                            </p>
                        </div>
                        <div className="mission-visual">
                            <div className="stats-grid">
                                {stats.map((stat, i) => (
                                    <div key={i} className="stat-card">
                                        <div className="stat-value gradient-text">{stat.value}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-values">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
                        Nos <span className="gradient-text">valeurs</span>
                    </h2>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div key={i} className="feature-card">
                                <div className={`feature-icon icon-orange`}>
                                    {v.icon}
                                </div>
                                <h3>{v.title}</h3>
                                <p>{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-cta">
                <div className="container">
                    <div className="cta-card">
                        <h2>Envie d'en savoir plus ?</h2>
                        <p>Discutons de vos besoins et voyons comment immoKamer peut vous aider.</p>
                        <div className="cta-buttons">
                            <Link to="/demo" className="btn-white">Demander une démo</Link>
                            <Link to="/contact" className="btn-outline-white">Nous contacter</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default APropos
