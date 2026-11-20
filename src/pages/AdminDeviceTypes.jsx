import { useState } from "react";
import {Plus} from "lucide-react";
import AdminPageHeader from "../components/Admin/AdminPageHeader";
import DeviceTypesTable from "../components/Admin/DeviceTypesTable";
import deviceTypes from "../data/deviceTypes.js";

function AdminDeviceTypes() {
    const [items] = useState(deviceTypes);

    return(
        <section>
            <AdminPageHeader label="Справочник" title="Виды техники">
                <button type="button" className="flex items-center gap-2 rounded-lg bg-emerald-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800">
                    <Plus className="h-4 w-4" /> Добавить вид
                </button>
            </AdminPageHeader>

            <p className=" mb-4 text-sm text-gray-500"> Всего: {items.length}</p>
            <DeviceTypesTable items={items} />
        </section>
    );
}

export default AdminDeviceTypes;