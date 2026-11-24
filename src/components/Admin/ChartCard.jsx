function ChartCard({title, hint,children}) {
    return (
        <div className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-xs text-gray-500">{hint}</p>
            <div className="mt-5">{children}</div>
        </div>
    );
}

export default ChartCard;