import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
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
                        <span className="material-icons" style={{ fontSize: '14px' }}>mail</span>
                        Contact
                    </div>
                    <h1 className="page-title">
                        Parlons de<br />
                        <span className="gradient-text">votre projet</span>
                    </h1>
                    <p className="page-subtitle">
                        Une question ? Un besoin spécifique ? Notre équipe est là pour vous accompagner.
                    </p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Nos coordonnées</h2>
                            <div className="contact-item">
                                <span className="material-icons">phone</span>
                                <div>
                                    <h4>Téléphone</h4>
                                    <p>+237 695 25 14 41</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="material-icons">email</span>
                                <div>
                                    <h4>Email</h4>
                                    <p>contact@immokamer.cm</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            {submitted ? (
                                <div className="form-success">
                                    <span className="material-icons" style={{ fontSize: '64px', color: 'var(--accent-secondary)' }}>check_circle</span>
                                    <h3>Message envoyé !</h3>
                                    <p>Nous vous répondrons dans les plus brefs délais.</p>
                                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h3>Envoyez-nous un message</h3>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Nom complet</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Djomo Jayson" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="nom@exemple.com" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Téléphone</label>
                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+237 6XX XXX XXX" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Sujet</label>
                                            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                                                <option value="">Choisir un sujet</option>
                                                <option value="info">Demande d'information</option>
                                                <option value="demo">Demande de démo</option>
                                                <option value="support">Support technique</option>
                                                <option value="partenariat">Partenariat</option>
                                                <option value="autre">Autre</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Décrivez votre besoin..." rows="5" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                        <span className="material-icons" style={{ fontSize: '18px' }}>send</span>
                                        Envoyer le message
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

export default Contact
