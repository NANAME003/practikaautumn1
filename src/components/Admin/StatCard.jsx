function StatCard({icon: Icon, label, value, hint, color = "bg-emerald-50 text-emerald-900"})
{
    return (
        <div className=" rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">{label}</p>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
                    <Icon className="h-5 w-5" />
                </div>
            </div>
            <p className="mt-3 text-3xl font-semibold text-gray-900">{value}</p>
            <p className="mt-1 text-xs text-gray-500">{hint}</p>
        </div>
    );
}

export default StatCard;