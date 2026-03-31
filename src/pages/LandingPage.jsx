import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ===== Hero Section ===== */
function Hero() {
    return (
        <section className="hero" id="accueil">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Immobilier Camerounais
                    </div>
                    <h1 className="hero-title">
                        Gérez votre patrimoine<br />
                        <span className="gradient-text">avec élégance</span>
                    </h1>
                    <p className="hero-description">
                        La solution immobilière premium conçue pour les propriétaires exigeants.
                        Suivez vos loyers, maintenances et contrats en un clin d'œil depuis le web.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/inscription" className="btn btn-primary">Démarrer Gratuitement</Link>
                        <Link to="/a-propos" className="btn btn-outline">En savoir plus</Link>
                    </div>
                    <div className="hero-social">
                        <div className="avatars">
                            <div className="avatar" style={{ background: 'var(--accent-primary)' }}></div>
                            <div className="avatar" style={{ background: 'var(--accent-secondary)' }}></div>
                            <div className="avatar" style={{ background: 'var(--bg-elevated)' }}></div>
                        </div>
                        <span>+165 bailleurs à Douala & Yaoundé</span>
                    </div>
                </div>
                <div className="hero-visual">
                    <DashboardPreview />
                </div>
            </div>
        </section>
    )
}

/* ===== Dashboard Preview Card ===== */
function DashboardPreview() {
    const rooms = [
        { status: 'occupied', label: 'C01' },
        { status: 'occupied', label: 'C02' },
        { status: 'occupied', label: 'C03' },
        { status: 'late', label: 'C04' },
        { status: 'occupied', label: 'C05' },
        { status: 'occupied', label: 'C06' },
        { status: 'vacant', label: 'C07' },
        { status: 'occupied', label: 'C08' },
        { status: 'occupied', label: 'C09' },
        { status: 'occupied', label: 'C10' },
    ]

    return (
        <div className="dashboard-preview">
            <div className="dashboard-header">
                <div className="dashboard-dot red"></div>
                <div className="dashboard-dot yellow"></div>
                <div className="dashboard-dot green"></div>
                <span className="dashboard-label">Dashboard Actif</span>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-rooms">
                    {rooms.map((room, i) => (
                        <div key={i} className={`room-cell ${room.status}`}>
                            {room.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className="dashboard-footer">
                <div className="dashboard-stat">
                    <span className="dashboard-stat-label">Résidence</span>
                    <span className="dashboard-stat-value">Résidence "La Falaise" - Bastos</span>
                </div>
                <div className="occupation-badge">92%</div>
            </div>
        </div>
    )
}

/* ===== Features Section ===== */
function Features() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.15 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>,
            title: "Gestion d'immeuble",
            description: "Centralisez toutes vos informations immobilières. Gérez plusieurs sites et gardez un historique complet des baux."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4820A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-icon lucide-chart-column"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>,
            title: 'Suivi par appartement',
            description: "Visualisez graphiquement l'état de chaque unité. Identifiez immédiatement les retards de paiement et les chambres vacantes."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4820A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>,
            title: 'Mobile Money',
            description: "Intégrez Orange Money et MTN MoMo. Recevez vos loyers directement et envoyez des reçus digitaux automatiques."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>,
            title: 'Dashbord premium',
            description: "Visualisez la rentabilité de votre parc immobilier avec des graphiques clairs."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4820A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt-text-icon lucide-receipt-text"><path d="M13 16H8"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/></svg>,
            title: 'Gestion des contrats',
            description: "Digitalisez vos baux et documents légaux. Soyez alerté des fins de contrats."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4820A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-ring-icon lucide-bell-ring"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M22 8c0-2.3-.8-4.3-2-6"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/></svg>,
            title: 'Rappels automatiques',
            description: "Notifications SMS et emails aux locataires avant les échéances pour éviter les retards."
        }
    ]

    return (
        <section className="features" id="fonctionnalites" ref={sectionRef}>
            <div className="container">
                <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
                    <div className="section-tag">
                        <span className="material-icons" style={{ fontSize: '14px' }}>auto_awesome</span>
                        Optimisez votre gestion
                    </div>
                    <h2 className="section-title">
                        Tout ce dont un bailleur<br />
                        <span className="gradient-text">moderne a besoin</span>
                    </h2>
                    <p className="section-subtitle">
                        Finis les cahiers perdus et les oublis de loyers. Digitalisez votre patrimoine avec des outils adaptés au marché local.
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`feature-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                animationDelay: `${0.2 + i * 0.15}s`
                            }}
                        >
                            <div className={`feature-icon ${feature.iconClass}`}>
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* ===== CTA Section ===== */
function CTASection() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="cta-section" ref={sectionRef}>
            <div className="container">
                <div className={`cta-card ${isVisible ? 'animate-scale-in' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
                    <h2>Prêt à moderniser<br />votre gestion ?</h2>
                    <p>
                        Rejoignez des centaines de bailleurs qui font confiance à immoKamer
                        pour sécuriser leurs revenus.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/inscription" className="btn-white">Créer mon compte</Link>
                        <Link to="/contact" className="btn-outline-white">Parler à un conseiller</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ===== Landing Page ===== */
function LandingPage() {
    return (
        <>
            <Hero />
            <Features />
            <CTASection />
        </>
    )
}

export default LandingPage
