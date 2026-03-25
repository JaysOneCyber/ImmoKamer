import { Link } from 'react-router-dom'

function Tarifs() {
    const plans = [
        {
            name: 'Essentiel',
            price: 'Gratuit',
            period: '',
            description: 'Idéal pour démarrer avec un petit immeuble.',
            features: [
                '1 immeuble',
                'Jusqu\'à 10 appartements',
                'Suivi des paiements',
                'Tableau de bord basique',
                'Alertes email',
                'Support communautaire'
            ],
            notIncluded: [
                'Gestion des contrats',
                'Statistiques avancées',
                'Export PDF/Excel',
                'Support prioritaire'
            ],
            cta: 'Commencer gratuitement',
            ctaClass: 'btn btn-outline',
            popular: false
        },
        {
            name: 'Pro',
            price: '15 000',
            period: 'FCFA / mois',
            description: 'Pour les bailleurs professionnels.',
            features: [
                '5 immeubles',
                'Appartements illimitées',
                'Suivi détaillés des loyers',
                'Tableau de bord avancé',
                'Alertes SMS + Email',
                'Gestion des charges',
                'Gestion des contrats',
                'Historique & Statistiques',
                'Export PDF/Excel',
                'Support prioritaire'
            ],
            notIncluded: [
                'API personnalisée',
                'Support dédié'
            ],
            cta: 'Choisir Pro',
            ctaClass: 'btn btn-primary',
            popular: true
        },
        {
            name: 'Entreprise',
            price: 'Sur devis',
            period: '',
            description: 'Pour les agences et grandes sociétés.',
            features: [
                'Immeubles illimités',
                'Appartements illimitées',
                'Toutes fonctionnalités Pro',
                'API personnalisée',
                'Intégration Mobile Money avancée',
                'Multi-utilisateurs',
                'Rapports personnalisés',
                'Formation dédiée',
                'Support téléphonique 24/7',
                'SLA garanti'
            ],
            notIncluded: [],
            cta: 'Nous contacter',
            ctaClass: 'btn btn-outline',
            popular: false
        }
    ]

    return (
        <div className="page-content">
            <section className="page-hero">
                <div className="container">
                    <div className="section-tag">
                        <span className="material-icons" style={{ fontSize: '14px' }}>payments</span>
                        Tarifs
                    </div>
                    <h1 className="page-title">
                        Des plans adaptés à<br />
                        <span className="gradient-text">votre croissance</span>
                    </h1>
                    <p className="page-subtitle">
                        Commencez gratuitement et évoluez selon vos besoins. Aucun engagement, pas de frais cachés.
                    </p>
                </div>
            </section>

            <section className="pricing-section">
                <div className="container">
                    <div className="pricing-grid">
                        {plans.map((plan, i) => (
                            <div key={i} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                                {plan.popular && <div className="popular-badge">Le plus populaire</div>}
                                <div className="pricing-header">
                                    <h3>{plan.name}</h3>
                                    <p className="pricing-description">{plan.description}</p>
                                    <div className="pricing-amount">
                                        <span className="price">{plan.price}</span>
                                        {plan.period && <span className="period">{plan.period}</span>}
                                    </div>
                                </div>
                                <div className="pricing-features">
                                    {plan.features.map((f, j) => (
                                        <div key={j} className="pricing-feature included">
                                            <span className="material-icons" style={{ fontSize: '18px' }}>check_circle</span>
                                            {f}
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((f, j) => (
                                        <div key={`not-${j}`} className="pricing-feature not-included">
                                            <span className="material-icons" style={{ fontSize: '18px' }}>cancel</span>
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    to={plan.name === 'Entreprise' ? '/contact' : '/inscription'}
                                    className={plan.ctaClass}
                                    style={{ textAlign: 'center', display: 'block' }}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
                        Questions <span className="gradient-text">fréquentes</span>
                    </h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Puis-je changer de plan à tout moment ?</h4>
                            <p>Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. La facturation est ajustée automatiquement.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Comment fonctionne le paiement ?</h4>
                            <p>Nous acceptons Orange Money, MTN MoMo et les virements bancaires. Le paiement est mensuel sans engagement.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Y a-t-il une période d'essai ?</h4>
                            <p>Oui ! Le plan Essentiel est gratuit à vie. Pour le plan Pro, vous bénéficiez de 14 jours d'essai gratuit.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Mes données sont-elles sécurisées ?</h4>
                            <p>Absolument. Toutes les données sont chiffrées et hébergées sur des serveurs sécurisés avec des sauvegardes quotidiennes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tarifs
