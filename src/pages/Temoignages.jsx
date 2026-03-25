import { Link } from 'react-router-dom'

function Temoignages() {
    const testimonials = [
        {
            name: 'Jean-Pierre Nkoulou',
            role: 'Propriétaire à Douala',
            location: 'Akwa, Douala',
            rating: 5,
            text: "Avant immoKamer, je gérais mes 3 immeubles avec des cahiers. J'oubliais régulièrement des paiements et je perdais de l'argent. Depuis que j'utilise la plateforme, tout est automatisé. Je suis alerté dès qu'un locataire est en retard.",
            buildings: 3,
            rooms: 42,
            color: 'var(--accent-primary)'
        },
        {
            name: 'Marie-Claire Fotso',
            role: 'Investisseuse immobilière',
            location: 'Bastos, Yaoundé',
            rating: 5,
            text: "Le dashboard premium est incroyable. Je vois en temps réel la rentabilité de chaque immeuble. La gestion des contrats m'a aussi fait gagner un temps fou — plus besoin d'aller chez le notaire pour chaque renouvellement.",
            buildings: 5,
            rooms: 78,
            color: 'var(--accent-secondary)'
        },
        {
            name: 'Samuel Mbarga',
            role: 'Bailleur à Yaoundé',
            location: 'Mvan, Yaoundé',
            rating: 4,
            text: "La fonctionnalité de suivi chambre par chambre est exactement ce dont j'avais besoin. Mes locataires peuvent aussi déclarer des pannes directement, et je suis le dépannage en temps réel. Simple et efficace.",
            buildings: 2,
            rooms: 24,
            color: '#5b40a0'
        },
        {
            name: 'Françoise Tchinda',
            role: 'Gérante d\'agence',
            location: 'Bonapriso, Douala',
            rating: 5,
            text: "Nous gérons 12 immeubles pour nos clients. immoKamer nous permet de centraliser toute la gestion. Les rapports financiers sont clairs et nos clients adorent recevoir leurs bilans mensuels automatiquement.",
            buildings: 12,
            rooms: 156,
            color: 'var(--accent-light)'
        },
        {
            name: 'Paul Essomba',
            role: 'Propriétaire à Kribi',
            location: 'Centre-ville, Kribi',
            rating: 5,
            text: "Même depuis l'étranger, je garde le contrôle total sur mes biens à Kribi. Les alertes Mobile Money me permettent de savoir instantanément quand un loyer est payé. C'est révolutionnaire.",
            buildings: 1,
            rooms: 15,
            color: 'var(--accent-primary)'
        },
        {
            name: 'Béatrice Onana',
            role: 'Propriétaire à Douala',
            location: 'Bali, Douala',
            rating: 4,
            text: "L'historique des paiements et les statistiques m'aident à prendre de meilleures décisions. J'ai pu identifier les appartements les moins rentables et ajuster mes prix. Mon revenu a augmenté de 20% en 6 mois.",
            buildings: 2,
            rooms: 30,
            color: 'var(--accent-secondary)'
        }
    ]

    return (
        <div className="page-content">
            <section className="page-hero">
                <div className="container">
                    <div className="section-tag">
                        <span className="material-icons" style={{ fontSize: '14px' }}>format_quote</span>
                        Témoignages
                    </div>
                    <h1 className="page-title">
                        Ils nous font<br />
                        <span className="gradient-text">confiance</span>
                    </h1>
                    <p className="page-subtitle">
                        Découvrez les retours de bailleurs qui utilisent immoKamer au quotidien pour gérer leur patrimoine.
                    </p>
                </div>
            </section>

            <section className="testimonials-section">
                <div className="container">
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="testimonial-stars">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <span key={j} className="material-icons" style={{ fontSize: '18px', color: j < t.rating ? '#febc2e' : 'var(--text-muted)' }}>
                                            star
                                        </span>
                                    ))}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar" style={{ background: t.color }}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4>{t.name}</h4>
                                        <span>{t.role}</span>
                                        <span className="testimonial-location">
                                            <span className="material-icons" style={{ fontSize: '14px' }}>location_on</span>
                                            {t.location}
                                        </span>
                                    </div>
                                </div>
                                <div className="testimonial-stats">
                                    <div className="testimonial-stat">
                                        <strong>{t.buildings}</strong>
                                        <span>immeubles</span>
                                    </div>
                                    <div className="testimonial-stat">
                                        <strong>{t.rooms}</strong>
                                        <span>appartements</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-cta">
                <div className="container">
                    <div className="cta-card">
                        <h2>Rejoignez-les !</h2>
                        <p>Créez votre compte et découvrez pourquoi +165 bailleurs nous font confiance.</p>
                        <div className="cta-buttons">
                            <Link to="/inscription" className="btn-white">Créer mon compte</Link>
                            <Link to="/demo" className="btn-outline-white">Démo gratuite</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Temoignages
