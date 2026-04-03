import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './composants/ScollTop.jsx'
import DashboardProprietaire from './pages_admin/DashboardProprietaire.jsx'
import MesImmeubles from './pages_admin/MesImmeubles.jsx'
import Locataires from './pages_admin/Locataires.jsx'
import DetailChambre from './pages_admin/DetailChambre.jsx'
import Paiements from './pages_admin/Paiements.jsx'
import Contrats from './pages_admin/Contrats.jsx'
import Rappels from './pages_admin/Rappels.jsx'
import Parametres from './pages_admin/Parametres.jsx'
import Aside_admin from './composants/Aside_admin.jsx'

function DashP() {
  return (
    <>
      <ScrollToTop />
      <div className='flex'>
        <Aside_admin />
        <Routes>
          <Route path="/admin" element={<DashboardProprietaire />} />
          <Route path="/admin/immeubles" element={<MesImmeubles />} />
          <Route path="/admin/locataires" element={<Locataires />} />
          <Route path="/admin/locataires/:id" element={<DetailChambre />} />
          <Route path="/admin/paiements" element={<Paiements />} />
          <Route path="/admin/contrats" element={<Contrats />} />
          <Route path="/admin/rappels" element={<Rappels />} />
          <Route path="/admin/parametres" element={<Parametres />} />
        </Routes>
      </div>
    </>
  )
}

export default DashP
