import { Routes, Route } from 'react-router-dom'
import Navbar from './composants/Navbar.jsx'
import Footer from './composants/Footer.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Fonctionnalites from './pages/Fonctionnalites.jsx'
import Tarifs from './pages/Tarifs.jsx'
import Temoignages from './pages/Temoignages.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Demo from './pages/Demo.jsx'
import APropos from './pages/APropos.jsx'
import Inscription from './pages/Inscription.jsx'
import DashP from './DashProprio.jsx'
import ScrollToTop from './composants/ScollTop.jsx'

/* ===== Public Routes Layout ===== */
function PublicRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fonctionnalites" element={<Fonctionnalites />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Footer />
    </>
  )
}

/* ===== Main App ===== */
// function App() {
//   return (
//     <>
//       <Aside_admin />
//       <Routes>
//         <Route path="/admin/*" element={<DashP />} />
//         <Route path="*" element={<PublicRoutes />} />
//       </Routes>
//     </>
//   )
// }

export default PublicRoutes
