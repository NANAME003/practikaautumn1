// Панель фильтров каталога услуг.
// options — список видов техники [{id, name}], selected — id выбранного вида ("" = все).
function FilterPanel({ options, selected, onSelectedChange, maxPrice, onMaxPriceChange, onReset, priceLimit }) {
    return (
        <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5">
            <h2 className="text-lg font-semibold">Фильтрация</h2>
            <h3 className="mt-5 text-sm font-medium text-gray-700">Вид техники</h3>
            <div className="mt-2 flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="deviceType" checked={selected === ""} onChange={() => onSelectedChange("")} /> Все
                </label>
                {options.map((option) => (
                    <label key={option.id} className="flex items-center gap-2 text-sm">
                        <input
                            type="radio"
                            name="deviceType"
                            checked={selected === option.id}
                            onChange={() => onSelectedChange(option.id)}
                        />
                        {option.name}
                    </label>
                ))}
            </div>
            <h3 className="mt-5 text-sm font-medium text-gray-700">
                Цена до: {maxPrice.toLocaleString("ru-RU")} ₽
            </h3>
            <input
                type="range"
                min="0"
                max={priceLimit}
                step="500"
                value={maxPrice}
                onChange={(e) => onMaxPriceChange(Number(e.target.value))}
                className="mt-2 w-full"
            />

            <button type="button" onClick={onReset} className="mt-5 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Сбросить
            </button>
        </aside>
    );
}

export default FilterPanel;
