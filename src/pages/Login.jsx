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
                        <img height={30} width={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVR4nO2ZbUwbZQDHL45M5vygycRkL0YFlWw9oHdFYSsr69uItBksIYwOwiC8KKwq4EAY8TYYsoG8CIOFCduCzmiTQbveNSC4q7p9chlkEo0fTIxrC2uPFzcXoC885sggdYP2bj1ajP0n/y9N7+nvd9fnuadXCAommGB8DsBEIdMVaB5VjBDWTPTOuFIwNy4TuCx7Y4FFGAss+wQLEwp09q4KNdsK+QNUKT8XYFAIFOj8VQ7HUQXIDUsS6jTHxwI2tcgFTlsecmO6KjrG/+DVgjeoPPS2JUHACnpFEWEssB1BRmeOo+F+gZ/6EGk2SwQLvoI/JiIWuGY+QE6vGThoittky0F+4Rrc/EhtOcgIwNI2cgo/0wk/b1UhE2sNb37YaTW/lTN4cFEUak1Hrf6CpwoQEuIyVD7ys9/g8zmGny5B2lhNRDnqpPKRm1Ml/OqpkzGiexi65X5ZVJjtGCyhSmMwKhcZpZfPVc68kVP4mVo03CITuJiCT5UgXUwmnxlDn7Ed5V9yF6G4hqczqUZ+YgJvPYyY7tfxXmQ7Pr3uWzOQ8TWBB9/v2jE/DM9PlfGBebfHJe8W0EAboPUWBwmfdhhhQPfvc9FgXPL4HdeaiZrWJTzQpG2wG3mmJQG6c7ooYFWhbt95gZMqid4GrcfYjbx4d/jlXoPBvbqYxb3LpBrphtZr7Ea4akWBh31wIXoCqJOehtZr7CR8xZOAwwi3sRnvhXwj4KrJVT1/eP1Ah5E35lGAjEoKlMBbpd/Mev1AOwlPehKYJXdGBErgtWLCxURg3pMAIHc+GyiBbYXD4H8hMOlJYO6HqNcDJRBRRCz8xyexhtEk7vOyjLYHSuDt4z0mBgK8ytXg717jg1pc9qBJk7YJ4jiNvWWbee/pnJ4E3q1v0DMQgONWgh8ZfhNk6RRA0Z8CWgziC1wLqM/Ud3u7AjXtFSqvAwEAPWU38u4sgduNMOgfEIIU7YFFeLqHdQpnx0DCDq7g61sqXo4s1rs8wUcexZ0YiTF7mucwwvU0/AwZDWpw+TK4eyuuyi0kKfL58SBGYiHJlT0Wb2c/p7b1OuNBAQlv/21YYM/TJa8Iv9QTuGzUFwmMxELSsY4xb/BbC78DNZ99hLIavA6XjnqCX74Serml+9vdW9nCdw3teSm/sfZ3JqtP2sedY2zHh3SDCa9kahUuJhKZOoWzjUjswS5mh3obt3dQtrkFl3yu0ipcqX2p4OCpVo/w4UWGBexTjNXNczkdhLhZyUDAXaROLx05axBjXxEJ4iuD8WGXSdGWHsMeYbshseYELr9Jv8f9GGVfKshqxkBYAbmiQMGpxk7Il9QTkhGmAr40u+t9sP2doX/Bp1Sf/xXyNRpN2sZjuv3jfpHozQWRav0i/L7yL6gi7CyrjeOqIUnRc5V6ucUfEoe+VoGMmlYT1omFcQLvJhF6EpfdZjMnnqS1hHTEYFjD39xdhr0Nh7RKRqsTm2Zola5zRGID5I/06kQRdbj01kG37cWTNrX/wOJZvzwkfBXydy4NCtEzuPTHHG2yg/WE1Skcn+DS61/iMv//yfdoNADacB4XH2nCxfpKXPZngTZ5NkurcNFXiN4EpmuVC/Rr5Vf3mxoICdFlSMymj4GCCSYYyNf8A50RcaYC8geEAAAAAElFTkSuQmCC" alt="google-logo" />
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
