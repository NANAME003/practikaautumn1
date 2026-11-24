function ColumnChart({ items }) {
    const max = Math.max(...items.map((item) => item.value), 1);

    return (
        <div className="flex h-52 gap-2">
            {items.map((item) => (
                <div key={item.label} className="flex flex-1 flex-col items-center">
                    <span className="mb-1 text-xs font-medium text-gray-700">{item.value}</span>
                    <div className="flex w-full flex-1 items-end justify-center border-b border-gray-300">
                        <div className="w-full max-w-10 rounded-t-md bg-emerald-700" style={{height: `${(item.value / max) * 100}%`}} />
                    </div>
                    <span className="mt-2 text-xs text-gray-500">{item.label}</span>
                </div>
            ))}
        </div>
    );
}


export default ColumnChart;