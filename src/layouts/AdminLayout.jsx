import {Outlet} from "react-router";
import AdminHeader from "../components/Admin/AdminHeader.jsx";
import AdminSidebar from "../components/Admin/AdminSidebar.jsx";

function AdminLayout() {
    return(
        <div className="flex min-h-screen flex-col bg-white text-gray-900">
            <AdminHeader />
            <div className="flex flex-1">
                <AdminSidebar />
                <main className="flex-1 bg-stone-100 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;