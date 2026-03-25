import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Fonctionnalité de connexion à venir !')
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <Link to="/" className="navbar-brand" style={{ justifyContent: 'center', marginBottom: '24px' }}>
                            <div className="logo-icon">iK</div>
                            <p>immo<span>Kamer</span></p>
                        </Link>
                        <h1>Bienvenue !</h1>
                        <p>Connectez-vous à votre espace bailleur</p>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="login-email">Adresse email</label>
                            <div className="input-icon">
                                <span className="material-icons">email</span>
                                <input type="email" id="login-email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="login-password">
                                Mot de passe
                                <a href="#" className="forgot-link">Mot de passe oublié ?</a>
                            </label>
                            <div className="input-icon">
                                <span className="material-icons">lock</span>
                                <input type={showPassword ? 'text' : 'password'} id="login-password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required />
                                <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                    <span className="material-icons">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                            Se connecter
                        </button>
                    </form>

                    <div className="auth-divider">
                        <span>ou</span>
                    </div>

                    <button className="btn-social">
                        <span className="material-icons">phone_android</span>
                        Connexion via Google
                    </button>

                    <p className="auth-footer-text">
                        Pas encore de compte ? <Link to="/inscription">Créer un compte</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
