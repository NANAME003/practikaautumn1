const STATUSES ={
    new: { label: "Новая", className: "bg-amber-50 text-amber-700" },
    in_progress: { label: "В работе", className: "bg-sky-50 text-sky-700"},
    done: {label: "Выполнена", className:"bg-emerald-50 text-emerald-700"},
};

function RecentRequests({ requests, services, deviceTypes }) {
    if (requests.length === 0) {
        return <p className="text-sm text-gray-500">Заявок пока нет</p>;
    }


    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="text-xs text-gray-500">
                    <tr className=" border-b border-gray-200">
                        <th className="py-2 pr-4 font-medium">№</th>
                        <th className="py-2 pr-4 font-medium">Клиент</th>
                        <th className="py-2 pr-4 font-medium">Техника</th>
                        <th className="py-2 pr-4 font-medium">Услуга</th>
                        <th className="py-2 pr-4 font-medium">Дата</th>
                        <th className="py-2 font-medium">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => {
                        const service = services.find((s) => s.id === request.serviceId);
                        const type = deviceTypes.find((t) => t.id === request.deviceType);
                        const status = STATUSES[request.status] || {
                            label: request.status, className: "bg-gray-100 text-gray-700",
                        };

                        return (
                            <tr key={request.id} className="border-b border-gray-100 last:border-0">
                                <td className="py-3 pr-4 text-gray-500">#{request.id}</td>
                                <td className="py-3 pr-4">
                                    <p className="font-medium text-gray-900">{request.clientName}</p>
                                    <p className="text-xs text-gray-500">{request.phone}</p>
                                </td>
                                <td className="py-3 pr-4 text-gray-700">{type ? type.name : "—"}</td>
                                <td className="py-3 pr-4 text-gray-700">{service ? service.name : "—"}</td>
                                <td className="py-3 pr-4 text-gray-700">{new Date(request.createdAt).toLocaleDateString("ru-RU")}</td>
                                <td className="py-3">
                                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}>
                                        {status.label}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default RecentRequests;