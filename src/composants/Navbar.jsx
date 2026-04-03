/* ===== Navbar Component ===== */
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="logo-icon">iK</div>
          <p>immo<span>Kamer</span></p>
        </Link>
        <div className="navbar-links">
          {/* <NavLink to="/" end>Accueil</NavLink> */}
          <NavLink to="/fonctionnalites">Fonctionnalités</NavLink>
          <NavLink to="/tarifs">Tarifs</NavLink>
          <NavLink to="/temoignages">Témoignages</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* <NavLink to="/dashboard">Dashboard</NavLink> */}
        </div>
        <div className="navbar-actions">
          <Link to="/login" className="btn btn-ghost">S'identifier</Link>
          <Link to="/demo" className="btn btn-primary">Démo gratuite</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
