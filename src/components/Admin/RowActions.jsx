import { Pencil,Trash2 } from "lucide-react";

function RowActions({name,onEdit,onDelete}) {
    return (
        <div className="flex justify-end gap-1">
            <button type="button" onClick={onEdit} aria-label={`Изменить «${name}»`} className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-stone-100 hover:text-gray-900">
                <Pencil className="h-4 w-4" />
            </button>
            <button type="button" onClick={onDelete} aria-label={`Удалить «${name}»`} className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600">
                <Trash2 className="h-4 w-4" />
            </button>
        </div>
    );
}

export default RowActions;