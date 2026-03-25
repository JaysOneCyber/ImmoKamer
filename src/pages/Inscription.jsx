import { useState } from 'react'
import { Link } from 'react-router-dom'

function Inscription() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        accountType: 'proprietaire',
        acceptTerms: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert('Les mots de passe ne correspondent pas.')
            return
        }
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="auth-page">
                <div className="auth-container">
                    <div className="auth-card">
                        <div className="form-success">
                            <span className="material-icons" style={{ fontSize: '64px', color: 'var(--accent-secondary)' }}>celebration</span>
                            <h3>Bienvenue sur immoKamer !</h3>
                            <p>Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.</p>
                            <Link to="/login" className="btn btn-primary">Se connecter</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card auth-card-wide">
                    <div className="auth-header">
                        <Link to="/" className="navbar-brand" style={{ justifyContent: 'center', marginBottom: '24px' }}>
                            <div className="logo-icon">iK</div>
                            <p>immo<span>Kamer</span></p>
                        </Link>
                        <h1>Créer un compte</h1>
                        <p>Rejoignez +500 bailleurs qui gèrent leur patrimoine avec immoKamer</p>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="reg-firstName">Prénom *</label>
                                <input type="text" id="reg-firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Djomo" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reg-lastName">Nom *</label>
                                <input type="text" id="reg-lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Jayson" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="reg-email">Email *</label>
                                <input type="email" id="reg-email" name="email" value={formData.email} onChange={handleChange} placeholder="nom@exemple.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reg-phone">Téléphone *</label>
                                <input type="tel" id="reg-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+237 6XX XXX XXX" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="reg-type">Type de compte</label>
                            <select id="reg-type" name="accountType" value={formData.accountType} onChange={handleChange}>
                                <option value="proprietaire">Propriétaire / Bailleur</option>
                                <option value="agence">Agence immobilière</option>
                                <option value="gestionnaire">Gestionnaire de biens</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="reg-password">Mot de passe *</label>
                                <div className="input-icon">
                                    <span className="material-icons">lock</span>
                                    <input type={showPassword ? 'text' : 'password'} id="reg-password" name="password" value={formData.password} onChange={handleChange} placeholder="Min. 8 caractères" required minLength={8} />
                                    <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                        <span className="material-icons">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="reg-confirm">Confirmer *</label>
                                <div className="input-icon">
                                    <span className="material-icons">lock</span>
                                    <input type="password" id="reg-confirm" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Répéter le mot de passe" required minLength={8} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <input type="checkbox" id="reg-terms" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required style={{ width: 'auto' }} />
                            <label htmlFor="reg-terms" style={{ marginBottom: 0, cursor: 'pointer' }}>
                                J'accepte les <a href="#" style={{ color: 'var(--accent-secondary)' }}>conditions générales</a> et la <a href="#" style={{ color: 'var(--accent-secondary)' }}>politique de confidentialité</a>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                            Créer mon compte
                        </button>
                    </form>

                    <p className="auth-footer-text">
                        Déjà un compte ? <Link to="/login">Se connecter</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Inscription
