import ServiceCard from "./ServiceCard.jsx";


// Находит название вида техники по его id ("phones" → "Смартфоны и планшеты")
function getDeviceTypeName(deviceTypes, id) {
    const found = deviceTypes.find((type) => type.id === id);
    return found ? found.name : "";
}

function ServiceGrid({ items, onReset, deviceTypes }) {
    if (items.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
                <p className="text-gray-500">Ничего не найдено</p>
                <button type="button" onClick={onReset} className="mt-4 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Сбросить фильтры
                </button>
            </div>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {items.map((item) => (
                <ServiceCard
                    key={item.id}
                    {...item}
                    deviceTypeName={getDeviceTypeName(deviceTypes,item.deviceType)}
                />
            ))}
            
        </div>
        
    );
}

export default ServiceGrid;
