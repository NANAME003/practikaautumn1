import DeviceIcon from "../DeviceTypes/DeviceIcon.jsx";
import RowActions from "./RowActions.jsx";

function DeviceTypesTable ({items, onEdit, onDelete}) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b border-gray-200 bg-stone-50 text-xs uppercase tracking-wider text-gray-500">
                    <tr>
                        <th scope="col" className="px-5 py-3 font-medium">Вид техники</th>
                        <th scope="col" className="px-5 py-3 font-medium">ID</th>
                        <th scope="col" className="px-5 py-3 font-medium">Описание</th>
                        <th scope="col" className="px-5 py-3 text-right font-medium">Действия</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {items.map((item) => (
                        <tr key={item.id} className="hover:bg-stone-50">
                            <td className="px-5 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-900">
                                        <DeviceIcon type={item.id} className="h-5 w-5" />
                                    </div>
                                    <span className="font-medium text-gray-900">{item.name}</span>
                                </div>
                            </td>
                            <td className="px-5 py-3 font-mono text-xs text-gray-500">{item.id}</td>
                            <td className="px-5 py-3 text-gray-500">{item.text}</td>
                            <td className="px-5 py-3">
                                <RowActions 
                                name={item.name} 
                                onEdit={() =>onEdit(item)} 
                                onDelete={() => onDelete(item)} /> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default DeviceTypesTable;