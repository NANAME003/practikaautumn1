import ProductCard from "../Categories/ProductCard.jsx";

function ProductGrid ({items,onReset}) {
    if (items.length === 0) {
        return (
        <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
        <p className="text-gray-500"> Ничего не найдено</p>
        <button type="button" onClick={onReset} className="mt-4 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        >
            Сбросить фильтры
        </button>
        </div>
        )
    }

    
    return(
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {items.map((item) => (
                <ProductCard key={item.id} {...item} />
            ))}
        </div>
    )
}

export default ProductGrid;