import {useState} from "react";

function DeviceTypeForm ({ initial, onSave, onCancel}) {
    const [name,setName] = useState(initial.name);
    const [text,setText] = useState(initial.text);
    const [error,setError] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === "") {
            setError("Введите название");
            return;
        }

        onSave({name: name.trim(), text: text.trim() });
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6 rounded-2xl border border-gray-200 bg-white p-5">
            <h2 className="text-lg font-semibold">
                {initial.id ? "Редактирование" : "Новый вид техники"}
            </h2>

            <label className="mt-4 block text-sm font-medium text-gray-700">
                Название
                <input value={name} onChange={(e) => {setName(e.target.value); setError("");
                }}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400" />
            </label>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            <label className="mt-4 block text-sm font-medium text-gray-700">
                Описание
                <textarea value={text} onChange={(e) => setText(e.target.value)} rows="2"
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400" />
            </label>

            <div className="mt-4 flex gap-2">
                <button type="submit" className="rounded-lg bg-emerald-900 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"> 
                Сохранить
                </button>
                <button type="button" onClick={onCancel} className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-stone-50">
                Отмена
                </button>
            </div>
        </form> 
    );
}


export default DeviceTypeForm;