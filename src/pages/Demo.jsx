import { useState } from 'react'
import { Link } from 'react-router-dom'

function Demo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        buildings: '',
        rooms: '',
        currentTool: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="page-content">
            <section className="page-hero">
                <div className="container">
                    <div className="section-tag">
                        <span className="material-icons" style={{ fontSize: '14px' }}>play_circle</span>
                        Démo gratuite
                    </div>
                    <h1 className="page-title">
                        Essayez immoKamer<br />
                        <span className="gradient-text">gratuitement</span>
                    </h1>
                    <p className="page-subtitle">
                        Remplissez le formulaire ci-dessous et un conseiller vous contactera pour une démonstration personnalisée.
                    </p>
                </div>
            </section>

            <section className="demo-section">
                <div className="container">
                    <div className="demo-grid">
                        <div className="demo-benefits">
                            <h2>Ce que vous obtiendrez</h2>
                            <div className="benefit-item">
                                <span className="material-icons" style={{ color: 'var(--accent-secondary)' }}>videocam</span>
                                <div>
                                    <h4>Démo personnalisée</h4>
                                    <p>Un expert vous montre la plateforme adaptée à vos besoins spécifiques.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <span className="material-icons" style={{ color: 'var(--accent-secondary)' }}>rocket_launch</span>
                                <div>
                                    <h4>14 jours d'essai Pro</h4>
                                    <p>Accédez à toutes les fonctionnalités premium sans engagement.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <span className="material-icons" style={{ color: 'var(--accent-secondary)' }}>support_agent</span>
                                <div>
                                    <h4>Accompagnement complet</h4>
                                    <p>Notre équipe vous aide à configurer votre premier immeuble.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <span className="material-icons" style={{ color: 'var(--accent-secondary)' }}>cloud_upload</span>
                                <div>
                                    <h4>Migration gratuite</h4>
                                    <p>Nous importons vos données existantes gratuitement.</p>
                                </div>
                            </div>
                        </div>

                        <div className="demo-form-wrapper">
                            {submitted ? (
                                <div className="form-success">
                                    <span className="material-icons" style={{ fontSize: '64px', color: 'var(--accent-secondary)' }}>celebration</span>
                                    <h3>Demande envoyée !</h3>
                                    <p>Un conseiller vous contactera sous 24h pour planifier votre démonstration.</p>
                                    <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h3>Réservez votre démo</h3>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="demo-name">Nom complet *</label>
                                            <input type="text" id="demo-name" name="name" value={formData.name} onChange={handleChange} placeholder="Djomo Jayson" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="demo-email">Email *</label>
                                            <input type="email" id="demo-email" name="email" value={formData.email} onChange={handleChange} placeholder="nom@exemple.com" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="demo-phone">Téléphone *</label>
                                            <input type="tel" id="demo-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+237 6XX XXX XXX" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="demo-company">Société (optionnel)</label>
                                            <input type="text" id="demo-company" name="company" value={formData.company} onChange={handleChange} placeholder="Mon Agence Immobilière" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="demo-buildings">Nombre d'immeubles</label>
                                            <select id="demo-buildings" name="buildings" value={formData.buildings} onChange={handleChange}>
                                                <option value="">Sélectionner</option>
                                                <option value="1">1 immeuble</option>
                                                <option value="2-5">2 à 5</option>
                                                <option value="6-10">6 à 10</option>
                                                <option value="10+">Plus de 10</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="demo-rooms">Nombre d'appartements/chambres</label>
                                            <select id="demo-rooms" name="rooms" value={formData.rooms} onChange={handleChange}>
                                                <option value="">Sélectionner</option>
                                                <option value="1-10">1 à 10</option>
                                                <option value="11-50">11 à 50</option>
                                                <option value="51-100">51 à 100</option>
                                                <option value="100+">Plus de 100</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="demo-tool">Outil actuel de gestion</label>
                                        <select id="demo-tool" name="currentTool" value={formData.currentTool} onChange={handleChange}>
                                            <option value="">Comment gérez-vous actuellement ?</option>
                                            <option value="cahier">Cahier / papier</option>
                                            <option value="excel">Excel / Google Sheets</option>
                                            <option value="autre-logiciel">Un autre logiciel</option>
                                            <option value="rien">Pas de gestion formelle</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                                        <span className="material-icons" style={{ fontSize: '18px' }}>calendar_month</span>
                                        Réserver ma démo
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Demo
