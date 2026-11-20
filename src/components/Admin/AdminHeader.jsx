import {Link,useLocation} from "react-router";
import {ArrowLeft} from "lucide-react";
import Brand from "../Header/Brands.jsx";
import adminMenu from "../../data/adminMenu.js";

function AdminHeader () {
    const {pathname} = useLocation();
    const current = adminMenu.find((item) => item.path === pathname);

    return (
        <header className=" flex h-16 items-center justify-between border-b border-gray-200 px-6">
            <div className="flex items-center gap-3">
                <a className="flex items-center gap-2.5" href="/admin"> 
                <Brand name="ТехноСервис" />
                <span className="rounded-md bg-stone-100 px-2 py-0.5 text-sm text-gray-500">Админ</span>
                </a>
            </div>
            

            <div className="flex items-center gap-4">
                <span className="hidden text-sm text-gray-500 sm:inline">{current? current.label : ""}</span>
                <Link to="/" className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-stone-50">
                <ArrowLeft className="h-4 w-4" /> На главную
                </Link>
            </div>
        </header>
    );
}

export default AdminHeader;