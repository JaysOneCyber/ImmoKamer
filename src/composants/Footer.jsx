import { Link } from 'react-router-dom'

/* ===== Footer ===== */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand">
              <div className="logo-icon">iK</div>
              <p>immo<span>Kamer</span></p>
            </Link>
            <p className="footer-description">
              Solution de gestion immobilière n°1 au Cameroun.
              Conçue par des bailleurs, pour des bailleurs.
            </p>
            <div className="footer-social">
               <a href="#" aria-label="Communauté">
                <span className="material-icons" style={{ fontSize: '18px' }}>leaderboard</span>
              </a>
              <a href="#" aria-label="Partager">
                <span className="material-icons" style={{ fontSize: '18px' }}>share</span>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Produit</h4>
            <Link to="/fonctionnalites">Fonctionnalités</Link>
            <Link to="/tarifs">Tarifs</Link>
            <Link to="/a-propos">À propos</Link>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <Link to="/contact">Contact</Link>
            <Link to="/demo">Démo gratuite</Link>
            <Link to="/temoignages">Témoignages</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 immoKamer. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <a href="#">Confidentialité</a>
            <a href="#">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
