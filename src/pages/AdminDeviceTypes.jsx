import { useState } from "react";
import {Plus} from "lucide-react";
import AdminPageHeader from "../components/Admin/AdminPageHeader";
import DeviceTypesTable from "../components/Admin/DeviceTypesTable";
import DeviceTypeForm from "../components/Admin/DeviceTypeForm";
import deviceTypes from "../data/deviceTypes.js";


function AdminDeviceTypes() {
    const [items, setItems] = useState(deviceTypes);
    const [editing, setEditing] = useState(null);

    function handleAdd() {
        setEditing({ id: "",name:"", text:""});
    }

    function handleEdit(item) {
        setEditing(item);
    }

    function handleDelete(item){
        if (!window.confirm(`Удалить «${item.name}»?`)) return;
        setItems(items.filter((i) => i.id !== item.id));
    }

    function handleSave(data) {
        if (editing.id === "") {
            const newItem = {id: `type-${Date.now()}`, ...data };
            setItems([...items, newItem]);
        } else {
            setItems(items.map((i) => (i.id === editing.id ? {...i, ...data } :i)));
        }
        setEditing(null);
    }

    return(
        <section>
            <AdminPageHeader label="Справочник" title="Виды техники">
                <button type="button" onClick={handleAdd} className="flex items-center gap-2 rounded-lg bg-emerald-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800">
                    <Plus className="h-4 w-4" /> Добавить вид
                </button>
            </AdminPageHeader>

            {editing && (
                <DeviceTypeForm 
                key={editing.id || "new"}
                initial={editing}
                onSave={handleSave}
                onCancel={() => setEditing(null)} />
            )}

            <p className=" mb-4 text-sm text-gray-500"> Всего: {items.length}</p>
            <DeviceTypesTable items={items}  onEdit={handleEdit} onDelete={handleDelete} />
        </section>
    );
}

export default AdminDeviceTypes;