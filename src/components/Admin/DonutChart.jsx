function DonutChart({items}) {
    const total= items.reduce((sum, item) => sum + item.value, 0);

    if (total === 0) {
        return <p className="text-sm text-gray-500">Данных пока нет</p>;

    }

    let start = 0;
    const parts = items.map((item) => {
        const end = start + (item.value / total) * 100;
        const part = `${item.color} ${start}% ${end}%`;
        start=end;
        return part;
    });

    return (
        <div className=" flex flex-wrap items-center gap-6">
            <div className="relative h-40 w-40 shrink-0 rounded-full" 
            style={{background: `conic-gradient(${parts.join(", ")})`}} >
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-white">
                    <span className="text-2xl font-semibold text-gray-900">{total}</span>
                    <span className="text-xs text-gray-500">всего</span>
                </div>
            </div>
            <ul className="flex-1 space-y-2">
                {items.map((item) => (
                    <li key={item.label} className="flex items-center justify-between gap-4 text-sm">
                        <span className="flex items-center gap-2 text-gray-700">
                            <span className="h-3 w-3 rounded-full" style={{backgroundColor: item.color}} />
                            {item.label}
                        </span>
                        <span className="font-medium text-gray-900">
                            {item.value}{" "}
                            <span className="font-normal text-gray-500">
                                ({Math.round((item.value / total) * 100 )}%)
                            </span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DonutChart;