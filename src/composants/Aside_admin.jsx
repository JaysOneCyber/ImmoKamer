import { NavLink } from 'react-router-dom';

function Aside_admin() {
    const navItemClass = "flex items-center gap-3 px-4 py-3 rounded-xl transition-all ";
    const activeClass = navItemClass + "bg-primary/20 text-white font-medium border border-primary/20 [&_.material-icons]:text-primary";
    const inactiveClass = navItemClass + "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent";

    return (
        <div style={{position:'relative'}} className='w-72 h-auto'>
            <aside style={{position:'fixed'}} className="w-72 flex flex-col border-r border-white/5 bg-card-dark shrink-0">
                <div className="p-6 flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                        <span className="material-icons text-2xl">domain</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-white">immo<span className="text-primary">Kamer</span></h1>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-1">
                    <NavLink to="/admin" end className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <span className="material-icons">dashboard</span>
                        <span>Tableau de bord</span>
                    </NavLink>
                    <NavLink to="/admin/immeubles" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <span className="material-icons">apartment</span>
                        <span>Mes immeubles</span>
                    </NavLink>
                    <NavLink to="/admin/locataires" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <span className="material-icons">group</span>
                        <span>Locataires</span>
                    </NavLink>
                    <NavLink to="/admin/paiements" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <span className="material-icons">payments</span>
                        <span>Paiements</span>
                    </NavLink>
                    <NavLink to="/admin/contrats" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <span className="material-icons">description</span>
                        <span>Contrats</span>
                    </NavLink>
                    <NavLink to="/admin/rappels" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <span className="material-icons">notifications_active</span>
                        <span>Rappels</span>
                        <span className="ml-auto bg-danger text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">3</span>
                    </NavLink>
                    <div className="pt-4 mt-4 border-t border-white/5">
                        <NavLink to="/admin/parametres" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                            <span className="material-icons">settings</span>
                            <span>Paramètres</span>
                        </NavLink>
                    </div>
                </nav>
                <div className="p-4">
                    <div className="p-4 rounded-2xl bg-white/5 flex flex-col gap-4 border border-white/5">
                        <div className="flex items-center gap-3">
                            <div
                                className="size-10 rounded-full bg-cover bg-center border-2 border-primary/30"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmk11MLTg4OSE_FESWONOOYORm7kxA5UOJj4FGEqaznfsiGSHK5pYjdKyIZyWatpE5zU1e5HNxfWQRGg8uIkXG8zWl2uOGpm6uZFexk8DroeGNFnHWcqu3uckiHvHTv5-hn9_QbW9GGg4DDd-nVaB1h6jKFSXHNcuIuJc9sE42C-8gbzlK7rk0A3QsyvicA3Qn4SKbd8RBINC197Ibmta470Q8_mNtmYBZsIU50bHFDX7SpkiUE80HPlXAfyzy2eq9zpgznEkyg_w')" }}
                            ></div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold leading-none text-white">Jean-Pierre Talla</span>
                                <span className="text-xs text-slate-400 mt-1">Propriétaire</span>
                            </div>
                        </div>
                        <button className="w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-slate-400 hover:text-danger transition-colors">
                            <span className="material-icons text-lg">logout</span>
                            <span>Déconnexion</span>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    )
}


export default Aside_admin
