import { NavLink } from "react-router";
import adminMenu from "../../data/adminMenu.js";

function AdminSidebar() {
    return (
        <aside className=" hidden w-60 shrink-0 flex-col border-r border-gray-200 p-3 md:flex">
            <nav className="space-y-1">
                {adminMenu.map((item) => {
                    const Icon= item.icon;
                    return(
                        <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/admin"}
                        className={({isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive? "bg-stone-100 font-medium text-gray-900": 
                        "text-gray-500 hover:bg-stone-50 hover:text-gray-900"}`
                        }
                        >
                            <Icon className="h-4 w-4" />
                            {item.label}
                        </NavLink>
                        );
                })}
            </nav>
            <p className=" mt-auto px-3 pb-2 text-xs leading-5 text-emerald-900/70">
            Учебный  проект управление заявками и услугами
            </p>
        </aside>
    );
}


export default AdminSidebar;