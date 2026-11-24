function BarChart({items, suffix=""}) {
    const max=Math.max(...items.map((item) => item.value),1)


    return(
        <ul className="space-y-4">
            {items.map((item) => (
                <li key={item.label}>
                    <div className="mb-1 flex justify-between gap-4 text-sm">
                        <span className="text-gray-700">{item.label}</span>
                        <span className="font-medium text-gray-900">{item.value.toLocaleString("ru-RU")}{suffix}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-stone-100">
                        <div className="h-full rounded-full bg-emerald-700" style={{width: `${(item.value / max) * 100}%`}} />
                    </div>
                </li>
            ))}
        </ul>
    );
}


export default BarChart;