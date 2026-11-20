import { useEffect, useState } from "react";
import {Plus} from "lucide-react";
import AdminPageHeader from "../components/Admin/AdminPageHeader";
import DeviceTypesTable from "../components/Admin/DeviceTypesTable";
import DeviceTypeForm from "../components/Admin/DeviceTypeForm";

const API_URL = "http://localhost:3001/deviceTypes";

function AdminDeviceTypes() {
    const [items, setItems] = useState([]);
    const [editing, setEditing] = useState(null);
    const [error,setError] = useState("");

    useEffect(() => {
        fetch(API_URL)
        .then((res) => {
            if (!res.ok) throw new Error("Ошибка загрузки");
            return res.json();
        })
        .then((data) => setItems(data))
        .catch(() => setError("Не удалось загрузить виды техники."));
    },[]);

    function handleAdd() {
        setEditing({ id: "",name:"", text:""});
    }

    function handleEdit(item) {
        setEditing(item);
    }

    async function handleDelete(item){
        if (!window.confirm(`Удалить «${item.name}»?`)) return;
        try {
            const res= await fetch(`${API_URL}/${item.id}`, {method: "DELETE"});
            if (!res.ok) throw new Error();
        setItems(items.filter((i) => i.id !== item.id));
        } catch {
            setError("Не удалось удалить запись");
        }
    }

    async function handleSave(data) {
        const isNew = editing.id === "";
        try {
            const res = await fetch(isNew ? API_URL : `${API_URL}/${editing.id}`,{
                method : isNew ? "POST" : "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            const saved = await res.json();
            setItems(isNew 
                ? [...items, saved]
                : items.map((i) => (i.id === saved.id ? saved : i )));
            setEditing(null);
        } catch {
            setError("Не удалось сохранить запись");
        }
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
            {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
            <p className=" mb-4 text-sm text-gray-500"> Всего: {items.length}</p>
            <DeviceTypesTable items={items}  onEdit={handleEdit} onDelete={handleDelete} />
        </section>
    );
}

export default AdminDeviceTypes;